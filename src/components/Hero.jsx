import React, { useEffect, useRef } from "react";

const Hero = () => {
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

    const brands = [
        { src: "/brand-1.Cil2Q_O1_INrEd.svg", width: 134, height: 28 },
        { src: "/brand-2.D43_ebrS_2rb8KV.svg", width: 149, height: 36 },
        { src: "/brand-3.Bv4BNxhE_1E4ent.svg", width: 133, height: 26 },
        { src: "/brand-4.G1LDr9RH_ZhYXlk.svg", width: 103, height: 28 },
        { src: "/brand-5.DZnUkPHX_2r6Pps.svg", width: 102, height: 32 },
        { src: "/brand-6.BeV5PX0O_fOJou.svg", width: 99, height: 32 },
    ];

    return (
        <div className="relative z-10 overflow-hidden flex justify-center m-auto">
            <main
                id="main-content"
                className="relative z-10 h-full mx-6 w-full flex flex-wrap justify-center"
            >
                <section className="section-sm pb-0 items-center justify-center flex relative h-dvh z-0 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/grainy.svg"
                            alt="Grainy background"
                            className="w-full h-full object-cover opacity-0"
                            loading="lazy"
                        />
                    </div>
                    <div className="relative">
                        <div className="container relative z-10">
                            <div className="row justify-center">
                                <div className="lg:col-7 md:col-9 text-center">
                                    <h1
                                        data-aos="fade-up-sm"
                                        className="mb-4 text-3xl sm:text-4xl lg:text-5xl"
                                    >
                                        Crafting Brands , Building Legacy
                                    </h1>
                                    <p className="mb-8 text-balance" data-aos="fade-up-sm">
                                        Every idea deserves a future,we shape brands that create
                                        lasting impact.
                                    </p>
                                    <ul className="flex flex-wrap justify-center gap-4">
                                        <li data-aos="fade-up-sm" data-aos-delay="100">
                                            <a
                                                className=" bg-gray-900 text-white font-bold py-2 px-4 rounded-3xl inline-flex items-center"
                                                href="/contact/"
                                                target="_self"
                                                rel="noopener"
                                                aria-label="Get Started"
                                            >
                                                Get Started
                                                <span className="ml-2">
                                                    <span className="inline-block">
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
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="1.5"
                                                            >
                                                                <path d="M9.7 5.749H.75" />
                                                                <path
                                                                    d="m9.7 10.75 7.937-5.001L9.7.748z"
                                                                    clip-rule="evenodd"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li data-aos="fade-up-sm" data-aos-delay="150">
                                            <a
                                                className=" bg-white text-black font-bold py-2 px-4 rounded-3xl inline-flex items-center border-2 border-gray-300"
                                                href="/about/"
                                                target="_self"
                                                rel="noopener"
                                                aria-label="Learn More"
                                            >
                                                Learn More
                                                <span className="ml-2">
                                                    <span className="inline-block">
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
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="1.5"
                                                            >
                                                                <path d="M9.7 5.749H.75" />
                                                                <path
                                                                    d="m9.7 10.75 7.937-5.001L9.7.748z"
                                                                    clip-rule="evenodd"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 mt-8 p-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 w-auto">
                                        <img
                                            src="image1.jpg"
                                            alt="Image 1"
                                            className="object-cover w-full h-auto rounded-lg bg-gray-300 col-span-2 row-span-3"
                                        />
                                        <img
                                            src="image2.jpg"
                                            alt="Image 2"
                                            className="object-cover w-full h-20 rounded-lg bg-gray-300"
                                        />
                                        <img
                                            src="image3.jpg"
                                            alt="Image 3"
                                            className="object-cover w-full h-20 rounded-lg bg-gray-300"
                                        />
                                        <img
                                            src="image4.jpg"
                                            alt="Image 4"
                                            className="object-cover w-full h-20 rounded-lg bg-gray-300"
                                        />
                                        <img
                                            src="image5.jpg"
                                            alt="Image 5"
                                            className="object-cover w-full h-20 rounded-lg bg-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SVG Animation --> */}
                        <div className="opacity-50 hidden w-full md:flex flex-col items-center justify-center space-y-24 pb-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {/* <!-- Add SVG animations here --> */}
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 aos-init aos-animate" data-aos="fade-up-sm">
                                <div class="text-center sm:flex">
                                    <p class="w-full pb-3 text-center text-2xl/snug font-medium tracking-wide sm:whitespace-nowrap sm:pb-0">
                                        Trusted by thousands of companies worldwide
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
                                                src="/_astro/brand-1.Cil2Q_O1_INrEd.svg"
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
                                                src="/_astro/brand-2.D43_ebrS_2rb8KV.svg"
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
                                                src="/_astro/brand-3.Bv4BNxhE_1E4ent.svg"
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
                                                src="/_astro/brand-4.G1LDr9RH_ZhYXlk.svg"
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
                                                src="/_astro/brand-5.DZnUkPHX_2r6Pps.svg"
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
                                                src="/_astro/brand-6.BeV5PX0O_fOJou.svg"
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
                                                src="/_astro/brand-1.Cil2Q_O1_INrEd.svg"
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
                                                src="/_astro/brand-2.D43_ebrS_2rb8KV.svg"
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
                                                src="/_astro/brand-3.Bv4BNxhE_1E4ent.svg"
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
                                                src="/_astro/brand-4.G1LDr9RH_ZhYXlk.svg"
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
                                                src="/_astro/brand-5.DZnUkPHX_2r6Pps.svg"
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
                                                src="/_astro/brand-6.BeV5PX0O_fOJou.svg"
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

                <section className="section pt-0">
                    <div className="container">
                        <div className="section-title">
                            <div
                                className="col-10 xl:col-8 aos-init aos-animate"
                                data-aos="fade-up-sm"
                            >
                                <p>How it Works</p>
                                <h2>What we do</h2>
                                <p>
                                    Securing your digital world: your trusted partner in data
                                    protection with <br /> cutting-edge solutions for
                                    comprehensive data security.
                                </p>
                            </div>
                        </div>
                        <div className="section-cards">
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="0"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className="w-full icon"
                                                    data-icon="homepage/detection"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/detection">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        >
                                                            <path
                                                                stroke-width="2"
                                                                d="M29.334 17.833V12.5c0-6.667-2.667-9.333-9.334-9.333h-8c-6.666 0-9.333 2.666-9.333 9.333v8c0 6.667 2.667 9.333 9.333 9.333h5.334"
                                                            ></path>
                                                            <path
                                                                stroke-width="2"
                                                                d="M29.334 17.833V12.5c0-6.667-2.667-9.333-9.334-9.333h-8c-6.666 0-9.333 2.666-9.333 9.333v8c0 6.667 2.667 9.333 9.333 9.333h5.334"
                                                            ></path>
                                                            <path
                                                                stroke-width="3"
                                                                d="M29.334 17.833V12.5c0-6.667-2.667-9.333-9.334-9.333h-8c-6.666 0-9.333 2.666-9.333 9.333v8c0 6.667 2.667 9.333 9.333 9.333h5.334m3.999-3.426L23.44 28.5 28 23.167M9.333 14.5v4m6.667-4v4m6.667-4v4"
                                                            ></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/detection"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className=" icon"
                                                    data-icon="homepage/detection"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/detection"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Web/App Design</h5>
                                    <p className="mt-[10px]">
                                        Our system continuously monitors your network and data
                                        environments to detect any suspicious activities promptly.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="100"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className="w-full icon"
                                                    data-icon="homepage/flow"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/flow">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="3"
                                                        >
                                                            <path d="M13.334 27.167a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0m10.666 0a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0m-21.333 0a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0M13.334 5.833a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0M16 8.5v16"></path>
                                                            <path d="M26.667 24.5v-5.333q0-4-4-4H9.334q-4 0-4 4V24.5"></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/flow"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className=" icon"
                                                    data-icon="homepage/flow"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/flow"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Graphics Design</h5>
                                    <p className="mt-[10px]">
                                        We ensure that all sensitive data is encrypted both in
                                        transit and at rest, using industry-standard encryption
                                        protocols.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="200"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className="w-full icon"
                                                    data-icon="homepage/update"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/update">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-miterlimit="10"
                                                            stroke-width="3"
                                                        >
                                                            <path d="M25.52 26.5a13.3 13.3 0 0 0 3.814-9.333c0-7.36-5.974-13.334-13.334-13.334S2.667 9.807 2.667 17.167c0 3.626 1.44 6.906 3.787 9.32"></path>
                                                            <path d="M16 29.167a4.507 4.507 0 1 0 0-9.014 4.507 4.507 0 0 0 0 9.014M20.333 16.5h1c1.093 0 2-.893 2-2 0-1.093-.907-2-2-2s-2 .893-2 2v1c0 .547.453 1 1 1"></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/update"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="0.97em"
                                                    height="1em"
                                                    viewBox="0 0 32 33"
                                                    className=" icon"
                                                    data-icon="homepage/update"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/update"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Branding</h5>
                                    <p className="mt-[10px]">
                                        In the event of a security incident, our automated response
                                        system promptly initiates protective measures.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="300"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className="w-full icon"
                                                    data-icon="homepage/efficiency"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/efficiency">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="3"
                                                        >
                                                            <path d="M13.987 2.973 7.334 5.48C5.8 6.053 4.547 7.867 4.547 9.493V19.4c0 1.573 1.04 3.64 2.307 4.587l5.733 4.28c1.88 1.413 4.973 1.413 6.853 0l5.733-4.28c1.267-.947 2.307-3.014 2.307-4.587V9.493c0-1.64-1.253-3.453-2.786-4.026L18.04 2.973c-1.133-.413-2.946-.413-4.053 0"></path>
                                                            <path d="m12.066 15.827 2.147 2.146 5.733-5.733"></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/efficiency"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className=" icon"
                                                    data-icon="homepage/efficiency"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/efficiency"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Product Design</h5>
                                    <p className="mt-[10px]">
                                        In the event of a security incident, our automated response
                                        system promptly initiates protective measures.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="400"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className="w-full icon"
                                                    data-icon="homepage/security"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/security">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="3"
                                                        >
                                                            <path
                                                                stroke-miterlimit="10"
                                                                d="M26.387 19.907A10.1 10.1 0 0 1 16.253 22.4l-6.28 6.267c-.453.466-1.346.746-1.986.653l-2.907-.4c-.96-.133-1.853-1.04-2-2l-.4-2.907c-.093-.64.213-1.533.653-1.986L9.6 15.76c-1.067-3.467-.24-7.4 2.507-10.133 3.933-3.934 10.32-3.934 14.266 0 3.947 3.933 3.947 10.346.014 14.28m-17.2 3.413 3.066 3.067"
                                                            ></path>
                                                            <path d="M19.333 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/security"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className=" icon"
                                                    data-icon="homepage/security"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/security"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Marketing Campaign</h5>
                                    <p className="mt-[10px]">
                                        Our system continuously monitors your network and data
                                        environments to detect any suspicious activities promptly.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                            <div
                                className="card-container group aos-init aos-animate"
                                data-aos="fade-up-sm"
                                data-aos-delay="500"
                            >
                                <div className="card relative min-h-full overflow-hidden">
                                    <div className="icon-container flex h-16 w-16 overflow-hidden items-center justify-center">
                                        <div className="h-16 w-16 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center">
                                            <div className="min-w-14 flex justify-center items-center min-h-16">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className="w-full icon"
                                                    data-icon="homepage/flexi"
                                                >
                                                    {" "}
                                                    <symbol id="ai:local:homepage/flexi">
                                                        <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="3"
                                                        >
                                                            <path d="M15.654 23.667h7.893c-.12.106-.24.2-.36.306l-5.693 4.267c-1.88 1.4-4.947 1.4-6.84 0l-5.707-4.267c-1.253-.933-2.28-3-2.28-4.56v-9.88c0-1.626 1.24-3.426 2.76-4l6.64-2.493c1.093-.413 2.907-.413 4 0l6.627 2.493c1.266.48 2.346 1.814 2.68 3.174H15.64c-.293 0-.56.013-.813.013-2.467.147-3.107 1.04-3.107 3.853v7.24c.014 3.067.8 3.854 3.934 3.854"></path>
                                                            <path
                                                                stroke-miterlimit="10"
                                                                d="M11.733 14.96h17.6"
                                                            ></path>
                                                            <path d="M29.333 12.56v7.4c-.026 2.96-.84 3.693-3.92 3.693h-9.76c-3.133 0-3.92-.786-3.92-3.866v-7.24c0-2.8.64-3.694 3.107-3.854.253 0 .52-.013.813-.013h9.76c3.134.013 3.92.787 3.92 3.88"></path>
                                                            <path
                                                                stroke-miterlimit="10"
                                                                d="M15.094 20.347h1.773m2.8 0h4.36"
                                                            ></path>
                                                        </g>
                                                    </symbol>
                                                    <use xlink:href="#ai:local:homepage/flexi"></use>{" "}
                                                </svg>
                                            </div>
                                            <div
                                                className="min-w-14 flex justify-center items-center min-h-16"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 32 32"
                                                    className=" icon"
                                                    data-icon="homepage/flexi"
                                                >
                                                    {" "}
                                                    <use xlink:href="#ai:local:homepage/flexi"></use>{" "}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Custom Designs</h5>
                                    <p className="mt-[10px]">
                                        We ensure that all sensitive data is encrypted both in
                                        transit and at rest, using industry-standard encryption
                                        protocols.
                                    </p>
                                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-primary opacity-0 blur-[80px] transition-opacity duration-300 bg-primary/15 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="m-auto ">
                    <div className="container mx-auto">
                        <div className="mb-14 section-title">
                            <div className="col-span-10 xl:col-span-8" data-aos="fade-up-sm">
                                <p className="text-lg font-semibold">Key Features</p>
                                <h1 className="text-5xl ">Clientele</h1>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                            <div
                                className="bg-[#D3F5FF] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4"
                                data-aos="fade-up-sm"
                                data-aos-delay="0"
                            >
                                <img
                                    src="/_astro/feature-1.OhF5VW4a_Z8eGa.webp"
                                    alt="feature"
                                    loading="lazy"
                                    decoding="async"
                                    className="rounded-[14px] mx-auto mb-4 bg-white w-full object-cover object-top"
                                    width="375"
                                    height="273"
                                />
                                <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                                    Visitor History
                                </p>
                                <h4 className="py-4">
                                    <a
                                        className="hover:underline decoration-blue-600 decoration-2"
                                        href="/features/feature-1"
                                    >
                                        Regularly evaluates potential security risks
                                    </a>
                                </h4>
                                <p className="mt-[10px] mb-16 line-clamp-3">
                                    Securing your digital world: your trusted partner in data
                                    protection with cutting-edge solutions for comprehensive data
                                    security. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nemo vel ad consectetur ut aperiam...
                                </p>
                            </div>
                            <div
                                className="bg-[#DDD6FF] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4"
                                data-aos="fade-up-sm"
                                data-aos-delay="100"
                            >
                                <img
                                    src="/_astro/feature-2.wWn_eZH5_Z1LhdiD.webp"
                                    alt="feature"
                                    loading="lazy"
                                    decoding="async"
                                    className="rounded-[14px] mx-auto mb-4 bg-white w-full object-cover object-top"
                                    width="375"
                                    height="273"
                                />
                                <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                                    Visitor History
                                </p>
                                <h4 className="py-4">
                                    <a
                                        className="hover:underline decoration-blue-600 decoration-2"
                                        href="/features/feature-2"
                                    >
                                        Regularly evaluates potential security risks
                                    </a>
                                </h4>
                                <p className="mt-[10px] mb-16 line-clamp-3">
                                    Securing your digital world: your trusted partner in data
                                    protection with cutting-edge solutions for comprehensive data
                                    security. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nemo vel ad consectetur ut aperiam...
                                </p>
                            </div>
                            <div
                                className="bg-[#FAEFE8] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4"
                                data-aos="fade-up-sm"
                                data-aos-delay="200"
                            >
                                <img
                                    src="/_astro/feature-3.BKcI60zm_2d4v1R.webp"
                                    alt="feature"
                                    loading="lazy"
                                    decoding="async"
                                    className="rounded-[14px] mx-auto mb-4 bg-white w-full object-cover object-top"
                                    width="375"
                                    height="273"
                                />
                                <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                                    Banners Clicks
                                </p>
                                <h4 className="py-4">
                                    <a
                                        className=" hover:underline decoration-blue-600 decoration-2"
                                        href="/features/feature-3"
                                    >
                                        Regularly evaluates potential security risks
                                    </a>
                                </h4>
                                <p className="mt-[10px] mb-16 line-clamp-3">
                                    Securing your digital world: your trusted partner in data
                                    protection with cutting-edge solutions for comprehensive data
                                    security. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nemo vel ad consectetur ut aperiam...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="m-auto flex flex-col justify-center items-center p-4">
                    <div className="section-title mb-8">
                        <div
                            className="col-10 xl:col-span-8 aos-init aos-animate"
                            data-aos="fade-up-sm"
                        >
                            <p className="text-md">Contact us</p>
                            <h2 >Let's Talk</h2>
                            
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 items-ceter">
                        <div className="flex flex-col items-center text-center p-4">
                            <img
                                src="user1.png"
                                alt="user image"
                                className="bg-gray-300 rounded-full h-40 w-40 mb-4"
                            />
                            <p>1. Write us about your idea</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img
                                src="user2.png"
                                alt="user image"
                                className="bg-gray-300 rounded-full h-40 w-40 mb-4"
                            />
                            <p>
                                2. We will contact you with plans <br />  and will schedule 1-on-1
                                appointments
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img
                                src="user3.png"
                                alt="user image"
                                className="bg-gray-300 rounded-full h-40 w-40 mb-4"
                            />
                            <p>3. We start crafting your idea into reality</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Hero;
