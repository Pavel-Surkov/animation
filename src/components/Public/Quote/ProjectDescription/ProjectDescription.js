import React, { useEffect, useState } from 'react';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';

import { Row, Col, Space } from 'antd';
import ProgressBar from '../ProgressBar/ProgressBar';
import classes from './ProjectDescription.module.scss';
import TextInput from '../../../../constant/public/TextInput/TextInput';
const ProjectDescription = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value !== '') {
      setDisabled(false);
      props.setProjectDescription(value);
    }
  }, [value]);

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'30%'} />
            <div className={classes.mainSection}>
              <h3>
                Tell us about your project for a more accurate cost estimate.
              </h3>
              <p>
                The details will help suppliers understand your project to
                provide the right recommendations, prices and service.
              </p>
              <TextInput
                value={value}
                onChange={setValue}
                rows={5}
                width={'100%'}
                placeholder="As an example, I am launching an active wear line and looking for sustainable fabric."
              />
            </div>
            <Row>
              <Col lg={12} md={12} xs={0} sm={0}></Col>
              <Col lg={12} md={12} xs={0} sm={0}>
                <div className={classes.actionButtonSection}>
                  <button
                    className={classes.actionButton}
                    onClick={() => props.setQuoteView('selectCategory')}
                  >
                    PREVIOUS
                  </button>
                  <ButtonWithRightArrow
                    disabled={disabled}
                    content="NEXT"
                    function={() => props.setQuoteView('selectQuantity')}
                  />
                </div>
              </Col>
              {/* <Col lg={12} md={12} xs={24} sm={24}>
                <div className={classes.actionButtonSection}>
                  <Space direction="vertical" size={48}>
                    <ButtonWithRightArrow
                      disabled={disabled}
                      content="NEXT"
                      function={() => props.setQuoteView('selectQuantity')}
                    />
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('selectCategory')}
                    >
                      PREVIOUS
                    </button>
                  </Space>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDescription;
