import React, { useRef } from 'react';

const EducationCard = ({ card, children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseX, mouseY) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="card card-border timeline-card
             rounded-xl p-10 mb-5
             w-full max-w-3xl mx-auto"
        >
            <div className="glow" />
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
            {children}
        </div>
    );
};

export default EducationCard;

