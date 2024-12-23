import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Hero = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const images = [
        { id: 1, src: 'https://dummyimage.com/300x300/fff/f00&text=Image+1', alt: 'Image 1' },
        { id: 2, src: 'https://dummyimage.com/300x300/fff/0f0&text=Image+2', alt: 'Image 2' },
        { id: 3, src: 'https://dummyimage.com/300x300/fff/00f&text=Image+3', alt: 'Image 3' },
        { id: 4, src: 'https://dummyimage.com/300x300/fff/f80&text=Image+4', alt: 'Image 4' },
        { id: 5, src: 'https://dummyimage.com/300x300/fff/80f&text=Image+5', alt: 'Image 5' },
    ];

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease',
            once: true,
        });
    }, []);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const imageVariants = {
        initial: { scale: 1, zIndex: 0, opacity: 1 },
        selected: { scale: 1.2, zIndex: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
        unselected: { scale: 0.9, opacity: 0.5, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    return (
        <section className="section-sm pb-0 items-center justify-center flex relative z-0 overflow-hidden">
            <div className="relative w-full">
                <div className="container mx-auto px-4 ">
                    <div className="row justify-center">
                        <div className="lg:col-7 md:col-9 text-center ">
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="600"
                                className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
                            >
                                Crafting Brands, Building Legacy
                            </h1>
                            <p
                                className="mb-8 text-base sm:text-lg lg:text-xl"
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay="100"
                            >
                                Every idea deserves a future, we shape brands that create
                                lasting impact.
                            </p>
                            <ul className="flex flex-wrap justify-center gap-4">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <a
                                        className="bg-gray-900 text-white font-bold py-2 px-4 rounded-3xl inline-flex items-center text-sm sm:text-base"
                                        href="/contact/"
                                        target="_self"
                                        rel="noopener noreferrer"
                                        aria-label="Get Started"
                                    >
                                        Get Started
                                        <span className="ml-2">
                                            <svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                data-icon="arrowRight"
                                                className="fill-current"
                                            >
                                                <g
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                >
                                                    <path d="M9.7 5.749H.75" />
                                                    <path
                                                        d="m9.7 10.75 7.937-5.001L9.7.748z"
                                                        clipRule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <a
                                        className="bg-white text-black font-bold py-2 px-4 rounded-3xl inline-flex items-center border-2 border-gray-300 text-sm sm:text-base"
                                        href="/about/"
                                        target="_self"
                                        rel="noopener noreferrer"
                                        aria-label="Learn More"
                                    >
                                        Learn More
                                        <span className="ml-2">
                                            <svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                data-icon="arrowRight"
                                                className="fill-current"
                                            >
                                                <g
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                >
                                                    <path d="M9.7 5.749H.75" />
                                                    <path
                                                        d="m9.7 10.75 7.937-5.001L9.7.748z"
                                                        clipRule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-8 p-4 flex justify-center">
                            <motion.div
                                className="flex flex-wrap justify-center gap-4"
                                style={{
                                    scrollbarWidth: 'thin',
                                    msOverflowStyle: 'none',
                                }}
                            >
                                {images.map((image, index) => (
                                    <motion.div
                                        key={image.id}
                                        className="flex-shrink-0 p-2"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                        }}
                                        variants={imageVariants}
                                        animate={
                                            selectedImageIndex === index
                                                ? 'selected'
                                                : selectedImageIndex !== null && index !== selectedImageIndex
                                                    ? 'unselected'
                                                    : 'initial'
                                        }
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    >
                                        <motion.img
                                            src={image.src}
                                            alt={image.alt}
                                            className="object-cover w-full h-full rounded-lg bg-gray-300 cursor-pointer"
                                            onClick={() => handleImageClick(index)}
                                            loading="lazy"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
