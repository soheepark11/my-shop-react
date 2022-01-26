import React from "react";
import { Carousel } from 'react-bootstrap';
import background1 from './background1.png';
import background2 from './background2.png';
import background3 from './background3.png';


function Slide(){
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background1}
                alt="First slide"
                />

                <Carousel.Caption>
                <h3>ADICOLOR ESSENTIALS TREFOIL CARGO PANTS</h3>
                <p>Effortlessly simple? You bet. The reinvented silhouette is streamlined for a sleek, modern look.</p>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>ADICOLOR CLASSICS REGULAR TEE</h3>
                <p>The 3-Stripes carry a lot of history. Games won. Stages played. Runways strutted.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Supports the Better Cotton Initiative</h3>
                <p>Soft cotton makes every moment of the day feel good.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
};

export default Slide;