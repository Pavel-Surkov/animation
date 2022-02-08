import React from 'react'
import classes from './Scrollproducts.module.scss'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import items from './Data'

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 3 },
}

const Scrollproducts = () => (
  <>
    <div className={classes.scrollItem}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        paddingLeft={100}
        paddingRight={100}
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
