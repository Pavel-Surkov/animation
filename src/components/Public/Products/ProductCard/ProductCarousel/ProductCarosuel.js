import React, { useState, useEffect } from 'react'
import './ProductCarosuel.scss'
const items = [
  {
    icon: 'face',
    copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: 'pets',
    copy: '02. Sed do eiusmod tempor incididunt ut labore.',
  },
]

const Card = (props) => {
  return (
    <li className="card">
      <img src={props.image} />
    </li>
  )
}

const ProductCarosuel = (props) => {
  const [moveClass, setMoveClass] = useState('')
  const [carouselItems, setCarouselItems] = useState(items)

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length)
  }, [carouselItems])

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems])
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems])
    }
    setMoveClass('')
  }

  const shiftPrev = (copy) => {
    let lastcard = copy.pop()
    copy.splice(0, 0, lastcard)
    setCarouselItems(copy)
  }

  const shiftNext = (copy) => {
    let firstcard = copy.shift()
    copy.splice(copy.length, 0, firstcard)
    setCarouselItems(copy)
  }

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {props.data.map((t, index) => (
          <Card key={index} image={t} />
        ))}
      </ul>
    </div>
  )
}

export default ProductCarosuel
