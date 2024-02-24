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
    // const [totalStars, setTotalStars] = useState(5);

    const [formData, setFormData] = useState({
        comment: "",
        totalStars: 5,
    });

    const handleChange = (e) => {
        setFormData({ comment: formData.comment, totalStars: parseInt(Boolean(e.target.value, 10) ? e.target.value : 5) });
        // setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="text-white p-6">
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="w-full"
            >
                <p className="text-xl">Rate this product</p>
                {[...Array(formData.totalStars)].map((star, index) => {
                    const currentRating = index + 1;

                    return (
                        <label key={index}>
                            <input
                                key={star}
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => setRating(currentRating)}
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
                <div className="mb-4">
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Leave a comment..."
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                        required
                    />
                </div>
            </form>
        </div>
    );
}
