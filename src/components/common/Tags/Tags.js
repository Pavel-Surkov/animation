import React from 'react'
import classes from './Tags.module.scss'
import chart from '../../../assets/svg/Chart.svg'
import check from '../../../assets/svg/Check.svg'
import dollar from '../../../assets/svg/Dollar.svg'
const Tags = (value) => {
  const handleTagsRender = (key) => {
    if (key.prop === 'approved') {
      return (
        <div className={classes.approvedTag}>
          <p>
            <img src={check} alt="uplio" /> Approved
          </p>
        </div>
      )
    } else if (key.prop === 'hot seller') {
      return (
        <div className={classes.hotSellerTags}>
          <p>
            <img src={dollar} alt="Uplio" />
            Hot Seller
          </p>
        </div>
      )
    } else if (key.prop === 'top rated') {
      return (
        <div className={classes.topRatedTag}>
          <p>
            <img src={chart} alt="uplio" />
            Top Rated
          </p>
        </div>
      )
    }
  }
  return <>{handleTagsRender(value)}</>
}
export default Tags
