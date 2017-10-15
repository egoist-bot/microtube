import url from 'url'
import qs from 'querystring'

async function oauth2(config) {
  const params = {
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: config.scope,
    display: 'popup',
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent'
  }
  const url = config.authorizationUrl + '?' + qs.stringify(params)
  return { url, config }
}

async function openPopup({ url, config }) {
  const width = config.width || 500
  const height = config.height || 500
  const options = {
    width: width,
    height: height,
    top: window.screenY + ((window.outerHeight - height) / 2.5),
    left: window.screenX + ((window.outerWidth - width) / 2)
  }
  const popup = window.open(url, '_blank', qs.stringify(options, ','))

  if (url === 'about:blank') {
    popup.document.body.innerHTML = 'Loading...'
  }

  return { popup, config }
}

async function getRequestToken({ popup, config }) {
  const response = fetch(config.url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ redirectUri: config.redirectUri })
  })

  const json = await response.json()

  return { popup, config, requestToken: json }
}

function pollPopup({ popup, config, requestToken }) {
  return new Promise((resolve, reject) => {
    const redirectUri = url.parse(config.redirectUri)
    const redirectUriPath = redirectUri.host + redirectUri.pathname

    if (requestToken) {
      popup.location = config.authorizationUrl + '?' + qs.stringify(requestToken)
    }

    const polling = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(polling)
      }
      try {
        const popupUrlPath = popup.location.host + popup.location.pathname
        if (popupUrlPath === redirectUriPath) {
          if (popup.location.search || popup.location.hash) {
            const query = qs.parse(popup.location.search.substring(1).replace(/\/$/, ''))
            const hash = qs.parse(popup.location.hash.substring(1).replace(/[\/$]/, ''))
            const params = {...query, ...hash }

            if (params.error) {
              reject(new Error(params.error))
            } else {
              resolve({ oauthData: params, config, popup, interval: polling })
            }
          } else {
            reject(new Error('OAuth redirect has occurred but no query or hash parameters were found.'))
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in Internet Explorer.
      }
    }, 500)
  })
}

async function exchangeCodeForToken({ oauthData, config, popup, interval }) {
  const response = await fetch(config.url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin', // By default, fetch won't send any cookies to the server
    body: JSON.stringify({ ...oauthData, ...config })
  })

  const json = await response.json()

  if (response.ok) {
      const { token, refresh, user } = json
      return { token, refresh, user, popup, interval }
  } else {
    closePopup({ popup, interval })
    throw new Error(json.message)
  }
}

export async function refreshAccessToken(refreshToken) {
  const response = await fetch(window.location.origin + '/auth/refresh', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin', // By default, fetch won't send any cookies to the server
    body: JSON.stringify({ refresh_token: refreshToken })
  })

  const { token } =  await response.json()

  return token
}

function makeSignIn(dispatch) {
  return async ({ token, refresh, user, popup, interval }) => {
    const refreshWatcher = setInterval(async () => {
      const token = await refreshAccessToken(refresh)

      if (token) {
          dispatch({ type: 'OAUTH_REFRESH', data: { token } })
      }
    }, 3540000)

    dispatch({ type: 'OAUTH_SUCCESS', data: { token, refresh, user, refreshWatcher } })

    return { popup, interval }
  }
}

function closePopup({ popup, interval }) {
  clearInterval(interval)
  popup.close()
}

// Sign in with Google
export function logIn() {
  const google = {
    url: window.location.origin + '/auth',
    clientId: '440745412600-snpeajuh0l9tqfrt356mec6j3mdn8eoo.apps.googleusercontent.com',
    redirectUri: window.location.origin + '/auth/callback',
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
    scope: 'openid profile email https://www.googleapis.com/auth/youtube',
    width: 440,
    height: 540
  }

  return (dispatch) => {
    oauth2(google)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(makeSignIn(dispatch))
      .then(closePopup)
  }
}
