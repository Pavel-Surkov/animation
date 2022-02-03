import React from 'react'
import classes from './Scrollproducts.module.scss'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import items from './Data'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
}

const Scrollproducts = () => (
  <>
    <div className={classes.container}>
      <div className={classes.scrollSection}>
        <h2>Browse product categories by value</h2>
      </div>
    </div>
    <div className={classes.scrollItem}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        animationDuration={3000}
        keyboardNavigation={false}
        disableButtonsControls={true}
        autoPlay={true}
        infinite={true}
        ssrSilentMode={true}
        controlsStrategy="alternate"
      />
    </div>
  </>
)

export default Scrollproducts
