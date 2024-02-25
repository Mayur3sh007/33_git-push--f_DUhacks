import "./styles.css";
import React, { useState } from "react";

/*
to use, wrap this component in a div like this
<div className="h-60 w-full border-2">
    <InputStarRating />
</div>
*/

export default function StarRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);

    // console.log(rating);

    return (
        <div className="text-white py-6">

            <p className="text-xl">Rate this product</p>
            {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            key={star}
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                        // onClick={() => setTotalStars(currentRating)}
                        />
                        <span
                            className="star"
                            style={{
                                color:
                                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        >
                            &#9733;
                        </span>
                    </label>
                );
            })}
            {/* <div className="mb-4">
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Leave a comment..."
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                        required
                    />
                </div> */}

        </div>
    );
}
