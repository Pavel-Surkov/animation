import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'antd'
import classes from './Profile.module.scss'

import axios from 'axios'
import account from '../../../../assets/svg/Account.svg'
import bank from '../../../../assets/svg/Bank.svg'
import chart from '../../../../assets/svg/Chart.svg'
import { useParams } from 'react-router-dom'

const Profile = () => {
  let { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [supplierData, setSupplierData] = useState([])
  const [pageinate, setPaginate] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    setSearch(id)
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/suppliers?category=${id}`)
      .then((res) => {
        console.log(res)
        setLoading(false)
        setSupplierData(res.data.data)
        setPaginate(res.data.data.length)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.actionSection}>
              <Button
                type="primary"
                size="large"
                className={classes.actionButton}
              >
                <img src={account} alt="Uplio" />
                Account details
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={bank} alt="Uplio" />
                Banking information
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={chart} alt="Uplio" />
                Company Profile
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}></div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Profile
