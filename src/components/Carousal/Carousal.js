import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousal.css'

const Carousal = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.architecturaldigest.in/photos/600848d1d0435267a8df963c/master/pass/Pune-Secret-Garden-Koregaon-Park-featured-image-1366x768.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Where every flavor tells a story</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://im.whatshot.in/img/2020/Nov/10365-c-1606242424.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We are always here to serve you</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://femina.wwmindia.com/content/2022/may/pune-21652189318.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get the best or nothing at all</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carousal