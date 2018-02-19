import { h } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'preact-redux'

// import { unsubscribe } from '../../actions/youtube'
import { getThumbnails } from 'lib/helpers'

import Img from 'components/Img'

const SubscriptionCard = ({ channelId, title, thumbnails, itemCount }) => {
  return (
    <div className="card shadow--2dp">
      <Link
        className="card__content"
        href={'/channel/' + channelId}
        aria-label={`Open channel ${title}`}
      >
        <div class="card__thumb">
          <Img src={getThumbnails(thumbnails, 'high')} alt={title} background />
          <span class="card__thumb-badge">{`${itemCount} video${
            itemCount !== 1 ? 's' : ''
          }`}</span>
        </div>

        <div className="card__text">
          <h2 className="card__text-title">{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default SubscriptionCard
