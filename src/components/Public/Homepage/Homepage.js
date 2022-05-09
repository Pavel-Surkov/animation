import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Space, Row, Col } from 'antd';
import Navigation from './../../../constant/public/Navigation/Navigation';
import HomeMain from './HomeMain/HomeMain';
import TrendingCategories from './TrendingCategories/TrendingCategories';
import WhyUplio from './WhyUplio/WhyUplio';
import Faq from './Faq/Faq';
import ContactUs from './ContactUs/ContactUs';
import HowItWorks from './HowItWorks/HowItWorks';
// import InputElement from '../../../constant/public/Input/InputElement';
import Footer from '../../../constant/public/Footer/Footer';

import classes from './Homepage.module.scss';
import arrowRight from '../../../assets/svg/Arrow_Right.svg';
import arrowDown from '../../../assets/svg/Arrow_Down.svg';
import arrowPoint from '../../../assets/svg/Arrow_Pointer.svg';

import apparel from '../../../assets/png/apparel.png';
import cosmetics from '../../../assets/png/cosmetic.png';
import jwellery from '../../../assets/png/jwellery.png';
import furniture from '../../../assets/png/furniture.png';
import textile from '../../../assets/png/textile.png';
import chair from '../../../assets/png/chair.png';
import cream from '../../../assets/png/cream.png';
import contact from '../../../assets/png/contact.png';

import image_1 from '../../../assets/png/50Text.png';
import image_2 from '../../../assets/svg/TIME.svg';

import ButtonWithRightArrow from '../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import Testimonials from './Testimonials /Testimonials';
import BackToTop from '../../common/BackToTop/BackToTop';

const Homepage = () => {
  const history = useHistory();

  return (
    <>
      <Navigation />
      <main className="main home">
        <HomeMain />
        <TrendingCategories />
        <HowItWorks />
        <WhyUplio />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};
export default Homepage;
