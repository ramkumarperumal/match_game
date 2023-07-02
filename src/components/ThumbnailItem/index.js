import './index.css'

const ThumbnailItem = props => {
  const {imageItem, validateClickedImg} = props
  const {id, thumbnailUrl} = imageItem

  const clickThumbnailBtn = () => {
    validateClickedImg(id)
  }

  return (
    <li className="thumbnail-item-con">
      <button
        onClick={clickThumbnailBtn}
        type="button"
        className="thumbnail-btn"
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
