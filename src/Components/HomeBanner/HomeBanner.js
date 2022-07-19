import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/HomeBanner.css';

export default function HomeBanner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: false,
        arrows: false,
    };

    const customSlider = React.createRef();

    const goToNext = () => {
        customSlider.current.slickNext();
    };

    const goToPrevious = () => {
        customSlider.current.slickPrev();
    };

    return (
        <div className='home-banner'>
            <div className='home-banner-container'>
                <Slider
                    className='home-banner-slider'
                    ref={customSlider}
                    {...settings}
                >
                    <div className='slider-item'>
                        <div className='banner-image-container'>
                            <img
                                className='banner-image'
                                src='../img/banner1.jpg'
                            />
                        </div>
                        <div className='banner-content-container'>
                            <div className='banner-slogan'>
                                <span className='slogan-text-heading'>
                                    Master the Skills to Drive your Career
                                </span>
                                <span className='slogan-text-body'>
                                    Skills for your present (and your future). Get started with us.
                                </span>
                            </div>
                            <button className='see-more-btn'>Know more</button>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className='banner-image-container'>
                            <img
                                className='banner-image'
                                src='../img/banner2.jpg'
                            />
                        </div>
                        <div className='banner-content-container'>
                            <div className='banner-slogan'>
                                <span className='slogan-text-heading'>
                                    Studious is the best choice for everyone
                                </span>
                                <span className='slogan-text-body'>
                                    Studious Business is trusted by 10.5K+ companies around the world. Find out what we can do for yours.
                                </span>
                            </div>
                            <button className='see-more-btn'>Know more</button>
                        </div>
                    </div>
                </Slider>
                <div className='slider-direct-btn'>
                    <button
                        className='left-btn'
                        onClick={() => { goToPrevious() }}
                    >
                        <FontAwesomeIcon className='cart-icon' icon={faCircleChevronLeft} />
                    </button>
                    <button
                        className='right-btn'
                        onClick={() => { goToNext() }}
                    >
                        <FontAwesomeIcon className='cart-icon' icon={faCircleChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
