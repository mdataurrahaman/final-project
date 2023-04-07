import React, { Fragment } from 'react'
import Branditem from './shared/Branditem';
import floral from '../public/img/2.png'

function BrandSlider() {

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 300,
    autoplaySpeed:500,
};
  return (
    <Fragment>
      <Branditem src={floral} replace='flral' />
      <Branditem src={floral} replace='flral' />
      <Branditem src={floral} replace='flral' />
      <Branditem src={floral} replace='flral' />
      <Branditem src={floral} replace='flral' />
    </Fragment>
  )
}

export default BrandSlider