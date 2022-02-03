import image from '../../../../assets/images/Untitled-1.png'

const handleDragStart = (e) => e.preventDefault()

const items = [
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
  <img
    src={image}
    onDragStart={handleDragStart}
    role="presentation"
    width="279"
  />,
]

export default items
