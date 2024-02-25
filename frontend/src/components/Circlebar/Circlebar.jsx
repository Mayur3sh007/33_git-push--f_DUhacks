import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaStar } from 'react-icons/fa';

function CircularProgressBar({ rating }) {
    const totalPercent = (rating / 5) * 100;
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const animateProgress = () => {
            let increment = 1;
            if (percentage + increment > totalPercent) {
                increment = totalPercent - percentage;
            }
            if (increment > 0) {
                setTimeout(() => {
                    setPercentage(percentage + increment);
                }, 50);
            }
        };

        if (percentage < totalPercent) {
            animateProgress();
        }

    }, [percentage, totalPercent]);

    const customStyles = {
        path: {
            stroke: `#4ADE80`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        trail: {
            stroke: '#1F2937',
        },
        text: {
            fill: '#4ADE80',
            fontSize: '16px',
        },
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ width: '150px', marginLeft: 'auto', marginRight: 'auto' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${rating.toFixed(1)}/5`}
                    styles={customStyles} />
            </div>
            <p className='text-green-400'>Average Rating</p>
        </div>
    );
}

export default CircularProgressBar;
