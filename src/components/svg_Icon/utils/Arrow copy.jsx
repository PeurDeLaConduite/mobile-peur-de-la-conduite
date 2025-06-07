import React from "react";

const BackButton = ({ className, ariaLabel, onClick }) => {
    return (
        <button
            className={`fa-Arrow ${className}`}
            aria-label={ariaLabel}
            onClick={onClick}
            tabIndex={0}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
            >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
            </svg>
        </button>
    );
};

export default React.memo(BackButton);
