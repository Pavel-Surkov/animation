import React from 'react'
import { Carousel } from 'antd'
import classes from './Carousel.module.scss'
import images from './Data'

const Carouselsection = () => (
  <>
    <Carousel
      autoplay={true}
      dots={false}
      draggable={true}
      speed={1000}
      adaptiveHeight={true}
      className={classes.imageSection}
    >
      {images.map((item) => (
        <div>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  </>
)

export default Carouselsection
