import React from 'react'
import {Carousel} from 'react-bootstrap'
import Img1 from '/home/alexandr1266/Desktop/online store/online_store/src/images/main1_1.webp'
import Img2 from '/home/alexandr1266/Desktop/online store/online_store/src/images/main1_2.webp'
import Img3 from '/home/alexandr1266/Desktop/online store/online_store/src/images/main1_3.jpg'
import'../styles/HeroSlider.css'


const HeroSlider = () => {
    return (
        <>
            <Carousel id='slider'>
                
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default HeroSlider
