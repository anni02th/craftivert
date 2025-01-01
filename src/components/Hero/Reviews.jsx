import React, { useState, useEffect, useRef } from "react";

const reviews = [
    {
        id: 1,
        name: "Dr. Shefali Agarwal",
        role: "Senior Consultant",
        avatar: "/drji.png",
        quote:
            "Thank you for designing our Millet brochure. Your patience and willingness to make necessary changes multiple times to meet our requirements were greatly appreciated. You provided valuable input in placing the content appropriately. We're happy with the design and look forward to working with you again in the future. 👍🏼.",
        rating: 4,
    },
    {
        id: 2,
        name: "Shubham Somani",
        role: "Shop Owner",
        avatar: "/bs.jpg",
        quote:
            "The team demonstrates excellent learning skills and consistently delivers new and unique solutions. They are dedicated to learning and applying new concepts effectively. I appreciate how the team takes on additional responsibilities and goes the extra mile to ensure client satisfaction. Their proactive approach and commitment to innovation truly set them apart.",
        rating: 5,
    },
    {
        id: 3,
        name: "Richard Lee",
        role: "CTO at Tech Innovators Inc.",
        avatar: "/lee.png",
        quote:
            "The granular access controls and detailed user activity tracking have given us unparalleled visibility. This platform has helped us maintain our data security effectively.",
        rating: 3.9,
    },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex ">
            {[...Array(fullStars)].map((_, i) => (
                <svg
                    key={`full-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF7A28"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                >
                    <path d="M12 2l2.39 7.36H22l-6 4.36 2.39 7.28L12 16l-6.39 4.36L8 13.72 2 9.36h7.61z" />
                </svg>
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <svg
                    key={`empty-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#FF7A28"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                >
                    <path d="M12 2l2.39 7.36H22l-6 4.36 2.39 7.28L12 16l-6.39 4.36L8 13.72 2 9.36h7.61z" />
                </svg>
            ))}
        </div>
    );
};

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const intervalTime = 5000;
    const isMobile = window.innerWidth < 768; // Simple check for mobile

    useEffect(() => {
        if (!isMobile || !containerRef.current) return;

        const timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % reviews.length;
            const reviewWidth = containerRef.current.offsetWidth;
            containerRef.current.scrollLeft = nextIndex * reviewWidth;
            setCurrentIndex(nextIndex);
        }, intervalTime);

        return () => clearInterval(timer);
    }, [currentIndex, isMobile]);

    const handleTouchStart = useRef(null);
    const handleTouchEnd = useRef(null);

    const onTouchStart = (e) => {
        handleTouchStart.current = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
        handleTouchEnd.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!isMobile || !handleTouchStart.current || !handleTouchEnd.current || !containerRef.current) return;

        const diffX = handleTouchStart.current - handleTouchEnd.current;
        const reviewWidth = containerRef.current.offsetWidth;

        if (diffX > 50) {
            // Swipe left
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - 1));
            containerRef.current.scrollLeft += reviewWidth;
        } else if (diffX < -50) {
            // Swipe right
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            containerRef.current.scrollLeft -= reviewWidth;
        }
        handleTouchStart.current = null;
        handleTouchEnd.current = null;
    };

    return (
        <section className="p-16 max-md:px-8 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <div className=" mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 ">
                    <p className="inline-block text-md bg-[#a97eff1a] rounded-xl px-2 py-1 text-[#A97EFF]">Happy Customers</p>
                    <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
                        Customer Reviews
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Read what our customers have to say about our services.
                    </p>
                </div>

                {/* Reviews Container */}
                <div
                    ref={containerRef}
                    className={` ${
                        isMobile
                            ? 'flex overflow-x-scroll snap-x scroll-smooth'
                            : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                    }`}
                    onTouchStart={isMobile ? onTouchStart : undefined}
                    onTouchMove={isMobile ? onTouchMove : undefined}
                    onTouchEnd={isMobile ? onTouchEnd : undefined}
                    style={isMobile ? { scrollSnapType: 'x mandatory' } : {}}
                    data-aos="fade-up" data-aos-delay="200"
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className={`bg-white p-6 rounded-xl shadow-md ${
                                isMobile ? 'flex-shrink-0 w-full snap-start' : ''
                            }`}
                            style={isMobile ? { minWidth: '100%' } : {}}
                        >
                            <div className="flex-1">
                                <p className="text-gray-700 font-medium mb-4">
                                    <strong>{review.quote.split(".")[0]}.</strong>
                                </p>
                                {review.quote.split(".").length > 1 && (
                                    <p className="text-gray-600">{review.quote.split(".")[1]}</p>
                                )}
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center mt-4">
                                <StarRating rating={review.rating} />
                                <span className="ml-2 text-gray-700 font-medium">
                                    {review.rating}
                                </span>
                            </div>

                            {/* Reviewer Details */}
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.avatar}
                                        alt={`Avatar of ${review.name}`}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-800">{review.name}</p>
                                        <p className="text-gray-500 text-sm">{review.role}</p>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#FF7A28"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M10 3h4v11h-4V3zm0 14h4v4h-4v-4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;