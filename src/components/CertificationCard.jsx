import React from "react";

const CertificationCard = ({ cert }) => {
    return (
        <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-border rounded-xl p-5
             flex flex-col items-center text-center
             w-full max-w-[260px] h-[260px]
             hover:scale-[1.02] transition-transform"
        >
            {/* Badge Image */}
            <img
                src={cert.imgPath}
                alt={cert.name}
                className="w-16 h-16 object-contain mb-3"
            />

            {/* Title */}
            <p className="font-semibold text-sm leading-snug line-clamp-3">
                {cert.name}
            </p>

            {/* Org */}
            <p className="text-white-50 text-xs mt-1">
                {cert.organization}
            </p>

            {/* Date */}
            <p className="text-white-50 text-xs mt-1">
                {cert.date}
            </p>
        </a>
    );
};

export default CertificationCard;
