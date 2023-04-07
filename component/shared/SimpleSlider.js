import React, {Fragment} from 'react'
import Hero from './Hero'
import slider1 from '../../public/img/slider-1.png'
import slider2 from '../../public/img/slider-2.png'
import display from '../../public/img/display-image.png'
import Slider from "react-slick";

function SimpleSlider() {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000
    };
    return (
        <Fragment>
            <Slider {...settings}>

                <Hero slider={slider1} dress={display}/>
                <Hero slider={slider2} dress={display}/>

            </Slider>
        </Fragment>
    )
}

export default SimpleSlider