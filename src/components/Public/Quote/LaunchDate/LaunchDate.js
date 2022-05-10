import React, { useState } from 'react';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import moment from 'moment';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Space, Row, Col, DatePicker } from 'antd';
import classes from './LaunchDate.module.scss';

const LaunchDate = (props) => {
  const [disable, setDisable] = useState(true);
  const dateFormat = 'MM/DD/YYYY';
  const handleDateStartDate = (date, dateString) => {
    setDisable(false);
    props.setLaunchDate(dateString);
  };

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'50%'} />
            <div className={classes.mainSection}>
              <h3>When do you want to launch your product line?</h3>
              <DatePicker
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = moment().format('YYYY-MM-DD');
                  return current && current < moment(customDate, 'YYYY-MM-DD');
                }}
                onChange={handleDateStartDate}
                className={classes.datePicker}
              />
            </div>
            <Row>
              <Col lg={12} md={12} sm={0} xs={0}></Col>
              <Col lg={12} md={12} sm={0} xs={0}>
                <div className={classes.actionButtonSection}>
                  <button
                    className={classes.actionButton}
                    onClick={() => props.setQuoteView('selectQuantity')}
                  >
                    PREVIOUS
                  </button>
                  <ButtonWithRightArrow
                    disabled={disable}
                    content="NEXT"
                    function={() => props.setQuoteView('uploadDocument')}
                  />
                </div>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <div className={classes.actionButtonSection}>
                  <ButtonWithRightArrow
                    disabled={disable}
                    content="NEXT"
                    function={() => props.setQuoteView('uploadDocument')}
                  />
                  <button
                    className={classes.actionButton}
                    onClick={() => props.setQuoteView('selectQuantity')}
                  >
                    PREVIOUS
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default LaunchDate;
