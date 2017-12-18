import { h } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'preact-router'

import { queuePlaylist } from '../../actions/youtube'
import getThumbnails from '../../lib/getThumbnails'

import Img from '../Img'

const PlaylistCard = ({ auth, id, title, thumbnails, itemCount, dispatch }) => (
  <div class='card shadow--2dp'>
    <Link
      class='card__content' href={'/playlist/' + id}
      onClick={() => dispatch({ type: 'PLAYLIST_OPEN', data: title })}
      aria-label={title}
    >
      <div class='card__thumb'>
        <Img src={getThumbnails(thumbnails, 'high')} background/>
        <span class="card__thumb-badge">{`${itemCount} video${itemCount !== 1 ? 's' : ''}`}</span>
      </div>


      <div class='card__text'>
        <h2 class='card__text-title'>{title}</h2>
      </div>
    </Link>

    <div class="card__buttons">
      <button
        class='card__button icon-button'
        type='button'
        name='Queue playlist'
        onClick={() => dispatch(queuePlaylist({
          playlistId: id
        }))}
      >
        <span class='icon'>
          <svg><use xlinkHref='#icon-playlist-add'></use></svg>
        </span>
      </button>

      <button
        class='card__button icon-button'
        type='button'
        aria-label='Queue and play playlist'
        onClick={() => dispatch(queuePlaylist({
          playlistId: id,
          play: true
        }))}
      >
        <span class='icon'>
          <svg><use xlinkHref='#icon-playlist-play'></use></svg>
        </span>
      </button>
    </div>
  </div>
)

export default connect()(PlaylistCard)
