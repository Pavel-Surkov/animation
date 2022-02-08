import image from '../../../assets/images/banner_profile_1.png'

const handleDragStart = (e) => e.preventDefault()

const items = [
  <img src={image} onDragStart={handleDragStart} role="presentation" />,
]

export default items
