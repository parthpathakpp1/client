import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../../assets/hero-image.png';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="" style={{ marginTop: '205px', overflow: 'hidden' }}>
            {/* Adjusted the margin top to move the Hero section below the Navbar */}
            <Slider {...settings}>
                <div className="slider-item">
                    <img
                        className="w-image"
                        src={bannerImage} // Replace this with your image URL
                        alt="slide1"
                    />
                </div>
                <div className="slider-item">
                    <img
                        className="w-image"
                        src={bannerImage} // Replace this with your image URL
                        alt="slide2"
                    />
                </div>
                <div className="slider-item">
                    <img
                        className="w-image"
                        src={bannerImage} // Replace this with your image URL
                        alt="slide3"
                    />
                </div>
                <div className="slider-item">
                    <img
                        className="w-image"
                        src={bannerImage} // Replace this with your image URL
                        alt="slide4"
                    />
                </div>
            </Slider>
            <div className="absolute bottom-0 left-0 top-1/3  md:top-full p-4">
                <button className="bg-red-700 text-white px-1 py-1 md:px-4 md:py-4 rounded-lg font-semibold text-sm md:text-2xl">
                    Book AT BEST PRICES
                </button>
            </div>
            <style>
                {`
                    .slider-item {
                        padding: 0 0px; /* Adjust the padding to further reduce space on both sides */
                    }

                    .w-image {
                        width: calc(100% - 10px); /* Calculate the width with further reduced padding */
                        margin: 0 auto; /* Center the image */
                    }

                    .slick-dots {
                        position: absolute;
                        bottom: 20px;
                        list-style: none;
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                    }

                    .slick-dots li {
                        display: inline-block;
                        margin: 0 5px;
                    }

                    .slick-dots li button {
                        font-size: 0; /* Hide the numbers */
                        line-height: 0;
                        color: transparent;
                    }

                    .slick-dots li button:before {
                        content: "•"; /* Add a dot using a pseudo-element */
                        font-size: 14px; /* Adjust the dot size as needed */
                        color: #fff; /* Dot color */
                    }

                    .slick-dots li.slick-active button:before {
                        color: #fff; /* Active dot color */
                    }
                `}
            </style>
        </div>
    );
};

export default Hero;
