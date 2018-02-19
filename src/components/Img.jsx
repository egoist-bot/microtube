import { h, Component } from 'preact'

class Img extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  loadImage = (src) => new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => resolve(img)
    img.onerror = (error) => reject(console.error('Error: ', error))

    img.src = src
  })

  componentDidMount = async () => {
    try {
        await this.loadImage(this.props.src)
        this.setState({ isLoading: false })
    } catch (e) {
        console.error(e)
    }
  }

  render({ src, alt = 'image', background }, { isLoading }) {
    return (
      <figure class={['image', isLoading ? 'loading' : ''].join(' ')}>
        {background ? (
          <div class='image-background' style={{ backgroundImage: `url(${src})`}}></div>
        ) : (
          <img src={src} alt={alt}></img>
        )}

        <span class='image-loader'>
          <svg class='rotating'><use xlinkHref='#icon-loading'></use></svg>
        </span>
      </figure>
    )
  }
}

export default Img