import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import ButtonToStart from './Button';

const Hero = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const images = [
        { id: 1, src: '/img1.png', alt: 'Image 1' },
        { id: 2, src: 'img2.jpg', alt: 'Image 2' },
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
            {/* Horizontal Blur Effect */}
            <div className="absolute inset-0">
                <div className="horizontal-blur-overlay"></div>
            </div>

            <div className="relative w-full h-[90vh] ">
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
                                    <ButtonToStart/>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <a
                                        className="bg-white text-black font-bold py-[13px] px-4 rounded-3xl inline-flex items-center border-2 border-gray-300 text-sm sm:text-base"
                                        href="https://whatsapp.com/channel/0029VaSt7IWLI8YVPYTdSU34"
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
                        <div className="absolute flex justify-center top-52 mt-20">
                            {/* Left Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -100, y: 50, rotate: -15 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute left-1/4 z-10 w-64 transform rounded-3xl bg-white p-2 shadow-xl overflow-hidden"
                            >
                                <div className="rounded-2xl bg-gray-50">
                                    <img src={images[1].src} alt={images[0].alt} className="w-full h-auto rounded-2xl" />
                                </div>
                            </motion.div>

                            {/* Center Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-20 w-72 transform rounded-3xl bg-white p-2 shadow-xl overflow-hidden"
                            >
                                <div className="rounded-2xl bg-gray-50 p-4">
                                    <img src={images[1].src} alt={images[1].alt} className="w-full h-auto rounded-2xl" />
                                </div>
                            </motion.div>

                            {/* Right Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: 100, y: 50, rotate: 15 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: 15 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute right-1/4 z-10 w-64 transform rounded-3xl bg-white p-2 shadow-xl overflow-hidden"
                            >
                                <div className="rounded-2xl bg-gray-50">
                                    <img src={images[1].src} alt={images[2].alt} className="w-full h-auto rounded-2xl" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .horizontal-blur-overlay {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    backdrop-filter: blur(10px);
                    background-color: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </section>
    );
};

export default Hero;
