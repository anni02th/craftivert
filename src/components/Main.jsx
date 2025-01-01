import React, { useEffect, useRef } from "react";
import CustomerReviews from "./Hero/Reviews";
import Form from "./Hero/Form";
import HiW from "./Hero/HiW";
import Client from "./Hero/Client";
import Hero from "./Hero/hero";
import 'aos/dist/aos.css';
const Main = () => {
    const marqueeRef = useRef(null);
    const marquee2Ref = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const marquee2 = marquee2Ref.current;

        let speed = 2; // Adjust for speed
        let lastScrollPos = 0;
        let reqId;

        const animate = () => {
            const scrollPos = window.pageXOffset;
            const direction = scrollPos > lastScrollPos ? -1 : 1;
            lastScrollPos = scrollPos;

            marquee.style.transform = `translateX(${direction * speed}px)`;
            marquee2.style.transform = `translateX(${direction * speed}px)`;

            if (
                direction * marquee.getBoundingClientRect().right <
                direction * marquee.parentElement.getBoundingClientRect().left
            ) {
                marquee.style.transform = `translateX(0)`;
            }

            if (
                direction * marquee2.getBoundingClientRect().right <
                direction * marquee2.parentElement.getBoundingClientRect().left
            ) {
                marquee2.style.transform = `translateX(0)`;
            }

            reqId = requestAnimationFrame(animate);
        };
        const startAnimation = () => {
            reqId = requestAnimationFrame(animate);
        };
        const handleResize = () => {
            cancelAnimationFrame(reqId);
            startAnimation();
        };
        startAnimation();
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(reqId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative z-10 overflow-hidden flex justify-center m-auto">
            <main
                id="main-content"
                className="relative z-10 h-full mx-6 w-full flex flex-wrap justify-center"
            >
                <Hero/>

                <section class="section" data-aos="fade-up"> 
                    <div class="container">
                        <div class="row">
                            <div class="col-12 aos-init aos-animate" data-aos="fade-up-sm">
                                <div class="text-center sm:flex">
                                    <p class="w-full pb-3 text-center text-2xl/snug font-medium tracking-wide sm:whitespace-nowrap sm:pb-0">
                                        Trusted by companies of all sizes
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-12 pt-14 aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="200"
                            >
                                <div class="relative flex gap-x-10 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-body before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:right-0 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-body after:content-[''] md:gap-x-20 before:md:w-40 after:md:w-40">
                                    <div class="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-100 md:gap-x-20">
                                        <div class="h-10">
                                            <img
                                                src="/brand-1.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="134"
                                                height="28"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-2.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="149"
                                                height="36"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-3.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="133"
                                                height="26"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-4.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="103"
                                                height="28"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-5.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="102"
                                                height="32"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-6.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="99"
                                                height="32"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-100 md:gap-x-20"
                                        aria-hidden="true"
                                    >
                                        <div class="h-10">
                                            <img
                                                src="/brand-1.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="134"
                                                height="28"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-2.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="149"
                                                height="36"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-3.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="133"
                                                height="26"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-4.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="103"
                                                height="28"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-5.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="102"
                                                height="32"
                                            />
                                        </div>
                                        <div class="h-10">
                                            <img
                                                src="/brand-6.jpg"
                                                alt="brand logo"
                                                loading="lazy"
                                                decoding="async"
                                                class="h-full object-contain grayscale-0"
                                                width="99"
                                                height="32"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=""></div>
                    </div>
                </section>

                <HiW />

                <Client/>

                <CustomerReviews/>
                <Form/>
            </main>
        </div>
    );
};

export default Main;
