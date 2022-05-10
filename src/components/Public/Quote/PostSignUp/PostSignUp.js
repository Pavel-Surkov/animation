import React from 'react';
import { Row, Col, Space } from 'antd';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import ProgressBar from '../ProgressBar/ProgressBar';
import classes from './PostSignUp.module.scss';

import image from '../../../../assets/images/g12.png';
import { Link } from 'react-router-dom';

const PostSignUp = (props) => {
  const handleSubmit = () => {
    props.handleSubmit();
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
            <ProgressBar width={'80%'} />
            <div className={classes.leftSection}>
              <Row gutter={[{ lg: 64, md: 64, sm: 64, xs: 64 }, 0]}>
                <Col lg={13} md={13} sm={24} xs={24} align="right">
                  <img className={classes.img} src={image} alt="Uplio" />
                </Col>
                <Col lg={11} md={11} sm={24} xs={24}>
                  <div className={classes.mainSection}>
                    <h2>
                      Your dream <br />
                      is about to get real! <br />
                      Let’s send your request
                    </h2>
                    <p>
                      To help you compare options, we will send your request to
                      multiple suppliers that offer what you need. We won’t
                      share your contact details or budget.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.submitSection}>
              <Row>
                <Col lg={12} md={12} sm={24} xs={24}></Col>
                <Col lg={12} md={12} sm={0} xs={0}>
                  <div className={classes.actionButtonSection}>
                    <button onClick={() => props.setQuoteView('preSignUp')}>
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="Submit"
                      function={() => handleSubmit()}
                    />
                    <p>
                      By submitting this form, you acknowledge that you have
                      read and agree to our{' '}
                      <Link className={classes.links} to="terms-conditions">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link className={classes.links} to="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </Col>
                <Col lg={0} md={0} sm={24} xs={24}>
                  <div className={classes.actionButtonSection}>
                    <ButtonWithRightArrow
                      content="Submit"
                      function={() => handleSubmit()}
                    />
                    <button onClick={() => props.setQuoteView('preSignUp')}>
                      PREVIOUS
                    </button>
                    <p>
                      By submitting this form, you acknowledge that you have
                      read and agree to our{' '}
                      <Link className={classes.links} to="terms-conditions">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link className={classes.links} to="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostSignUp;
