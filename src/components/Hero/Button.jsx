import React, { useState } from "react";
// import "./buyButton.css";

export default function ButtonToStart() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div>
            <a href="https://wa.me/+919552516526?text=Hello%20Om,%20We%20will%20Like%20to%20Discuss" target="_blank">
                <button
                    className="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Get Started
                    <span className="ml-2">
                        <svg
                            width="19"
                            height="12"
                            viewBox="0 0 19 12"
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
                </button>
            </a>

            <style jsx>{`
        .button {
          display: flex;
          overflow: hidden;
          position: relative;
          justify-content: center;
          align-items: center;    
          width: 10rem;
          padding: 0.5rem 0;
          border-radius: 1.875rem;
          cursor: pointer;
          font-size: 1.1em;
          font-weight: bold;
          border: 2px solid black;
          transition: all 0.5s ease-in-out;
          z-index: 3;
          color: rgb(255, 255, 255);
          box-shadow: inset 0px 0px 4px rgb(0, 0, 0);
          background-color: black;
        }

        .button::before {
          content: "";
          display: inline-block;
          transform: translateY(80%);
          left: 0;
          position: absolute;
          width: 11.25rem;
          height: 11.25rem;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
          z-index: -1;
          transition: transform ease 1s;
        }

        .button:hover::before {
          transform: translateY(0%);
        }

        .button:hover {
          color: black;
          border: 2px solid black;
          box-shadow: 0 0 10px rgb(255, 255, 255); /* Add a white shadow on hover */
          transition: color 0.1s ease;
          transition-delay: 0.2s;
        }

        .ml-2 {
          margin-left: 0.5rem;
        }
      `}</style>
        </div>
    );
}
