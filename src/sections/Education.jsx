import React from 'react'
import {education} from "../constants/index.js";
import EducationCard from "../components/EducationCard.jsx";

const Education = () => {
    return (
        <section id="education" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <div className="font-semibold md:text-5xl text-3xl text-center">
                    Education
                </div>
                <div className="flex flex-col items-center gap-8 mt-16">
                    {education.map(
                        ({imgPath, program, credential, institution, date, cgpa, courses}, index) => (
                            <EducationCard key={index} card={{credential}}>
                                <div className="flex items-start gap-6">

                                    {/* Logo (smaller) */}
                                    <img
                                        src={imgPath}
                                        alt="Institution logo"
                                        className="w-14 h-14 object-contain"
                                    />

                                    {/* Text content */}
                                    <div className="flex-1">
                                        <p className="font-bold text-xl">{institution}</p>
                                        <p className="text-white-50 mb-2">{program}</p>
                                        <p className="text-white-50 mb-2">{date}</p>

                                        {/* CGPA */}
                                        <p className="text-sm mb-3">
                                            <span className="font-semibold">CGPA:</span> {cgpa}
                                        </p>

                                        {/* Courses */}
                                        <p className="font-semibold mb-2">Key Courses Completed:</p>

                                        <ul
                                            className="grid grid-cols-1 sm:grid-cols-2
                                             gap-x-6 gap-y-2
                                             list-disc list-inside
                                             text-white-50 text-sm"
                                        >
                                            {courses.map((course, i) => (
                                                <li key={i} className="leading-snug">
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>


                                    </div>

                                </div>
                            </EducationCard>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
export default Education
