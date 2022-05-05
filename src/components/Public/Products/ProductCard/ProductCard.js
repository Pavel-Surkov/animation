import { Row, Col, Card } from 'antd'
import classes from './ProductCards.module.scss'
import verifiedTag from '../../../../assets/svg/verified_tag.svg'
import tag from '../../../../assets/svg/tag.svg'
import React from 'react'
import arrow from '../../../../assets/svg/Arrow_Right_Black.svg'
import Carousel, { CarouselItem } from './ProductCarousel/Carosuel'
import { useHistory } from 'react-router-dom'
const ProductCard = (props) => {
  const history = useHistory()
  return (
    <div className={classes.productCard}>
      <Row gutter={40}>
        <Col span={9}>
          {/* <ProductsCarousel data={props.data.images} /> */}
          {/* <img src={props.data.images[0]} width={379} /> */}
          <Carousel>
            {props.data.images.map((item) => (
              <CarouselItem>
                <img width={379} src={item} alt="Uplio" />
              </CarouselItem>
            ))}
          </Carousel>
        </Col>
        <Col span={15}>
          <div className={classes.supplierDescription}>
            <div className={classes.supplierTitle}>
              <img
                className={classes.supplierLogo}
                width={48}
                height={48}
                src={props.data.companyLogo}
                alt="Uplio"
              />
              <h2>{props.data.companyName}</h2>
              <h4>
                <img src={verifiedTag} alt="Uplio" /> Verified Supplier
              </h4>
              {/* <button>
              <img src={tag} alt="Uplio" />
            </button> */}
            </div>
            <h3>
              Categories: <strong>{props.category}</strong>
            </h3>
            <h3>
              Minimum Order: <strong>{props.data.MOQ} units</strong>
            </h3>
            {/* <h3>
            Location: <strong>Canada</strong>
          </h3> */}
            <button
              className={classes.viewMore}
              onClick={() =>
                history.push({ pathname: `/profile/${props.data._id}` })
              }
            >
              VIEW MORE <img src={arrow} alt="uplio" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default ProductCard
