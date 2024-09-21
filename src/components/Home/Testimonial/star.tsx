import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const Star = ({ stars }: {
    stars: number
}) => {
    const rate = Array.from({ length: 5 }, (ele, index) => {
        const number = index + 0.5;
        return (
            <span key={index} className="flex text-orange-500 text-md justify-center">
                {stars >= index + 1 ? (
                    <FaStar />
                ) : stars >= number ? (
                    <FaRegStarHalfStroke />
                ) : (
                    <FaRegStar />
                )}
            </span>
        );
    });

    return <span className="flex ">{rate}</span>;
};

export default Star;
