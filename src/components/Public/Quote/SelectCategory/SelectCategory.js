import React, { useEffect, useState } from 'react';

import { Space, Row, Col } from 'antd';

import classes from './SelectCategory.module.scss';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import ProgressBar from '../ProgressBar/ProgressBar';
import InputWithDropDown from '../../../../constant/public/InputWithDropDown/InputWithDropDown';
import InputElement from '../../../../constant/public/Input/InputElement';

const SelectQuantity = (props) => {
  const [dropdown, setDropdown] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [disable, setDisable] = useState(true);

  const data = [
    { id: 1, label: 'Apparel' },
    { id: 2, label: 'Cosmetics' },
    { id: 3, label: 'Jewelry' },
    { id: 4, label: 'Home Décor' },
    { id: 5, label: 'Textile' },
    { id: 6, label: 'Others' },
  ];

  useEffect(() => {
    if (dropdown !== '') {
      if (dropdown === 'Others') {
        if (otherCategory !== '') {
          setDisable(false);
          props.setCategory(otherCategory);
        }
      } else {
        setDisable(false);
        props.setCategory(dropdown);
      }
    }
  }, [dropdown, otherCategory]);

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'20%'} />

            <div className={classes.selectField}>
              <h2>Select a category that fits your request</h2>
              <div style={{ marginBottom: '32px' }}>
                <InputWithDropDown
                  dropdown={data}
                  placeholder="- Select a category -"
                  width={'100%'}
                  setDropdown={setDropdown}
                />
              </div>
              {dropdown === 'Others' ? (
                <InputElement
                  value={otherCategory}
                  onChange={setOtherCategory}
                  placeholder="Enter the name of your category"
                  width={'100%'}
                />
              ) : null}
            </div>
            <Row
              gutter={
                ({ xs: 0, sm: 0, md: 0, lg: 0 },
                { xs: 24, sm: 24, md: 24, lg: 24 })
              }
            >
              <Col lg={12} md={12} sm={0} xs={0}></Col>
              <Col lg={12} md={12} sm={0} xs={0}>
                <div className={classes.actionButtonSection}>
                  <button
                    className={classes.actionButton}
                    onClick={() => props.setQuoteView('getStarted')}
                  >
                    PREVIOUS
                  </button>
                  <ButtonWithRightArrow
                    disabled={disable}
                    content="NEXT"
                    function={() => props.setQuoteView('projectDescription')}
                  />
                </div>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <div className={classes.actionButtonSection}>
                  <Space direction="vertical" size={48}>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('projectDescription')}
                    />
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('getStarted')}
                    >
                      PREVIOUS
                    </button>
                  </Space>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectQuantity;
