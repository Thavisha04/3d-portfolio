import React from "react";
import { badgesCerts } from "../constants";
import CertificationCard from "../components/CertificationCard";

const Certifications = () => {
    return (
        <section id="certifications" className="section-padding">
            <div className="w-full md:px-10 px-5">
                <h2 className="font-semibold md:text-5xl text-3xl text-center">
                    Certifications & Badges
                </h2>

                <div className="mt-16 grid gap-6
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        justify-items-center">
                    {badgesCerts.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
