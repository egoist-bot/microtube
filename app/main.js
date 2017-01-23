// jshint esversion: 6, asi:true
// eslint-env es6

import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import getRoutes from './routes'

const { Provider } = ReactRedux

const store = configureStore(window.INITIAL_STATE)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.app-loader').classList.remove('app-loader--active')
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={getRoutes(store)} />
    </Provider>,
    document.querySelector('.app')
  )
})
