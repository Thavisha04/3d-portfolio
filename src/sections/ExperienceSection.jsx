import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import {expCards} from '../constants/index.js'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.expText').forEach((el) => {
            gsap.from(el, {
                x: 60,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                },
            })
        })

        gsap.utils.toArray('.timeline-segment').forEach((line) => {
            gsap.from(line, {
                scaleY: 0,
                transformOrigin: 'top',
                ease: 'none',
                scrollTrigger: {
                    trigger: line,
                    start: 'top 85%',
                    end: 'bottom 70%',
                    scrub: true,
                },
            })
        })
    }, [])

    return (
        <section
            id="experience"
            className="w-full md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="relative w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Professional Work Experience"
                    sub="My Career Overview"
                />

                <div className="mt-28 relative">
                    <div className="space-y-24">
                        {expCards.map((card, index) => (
                            <div key={index} className="relative flex">

                                <div className="relative hidden md:flex flex-col items-center w-16">
                                    <div className="timeline-segment w-[2px] h-full bg-black/80"/>

                                    <div className="absolute top-6 w-3 h-3 rounded-full bg-black"/>
                                </div>

                                <div className="expText relative flex flex-col md:flex-row gap-6 md:gap-14 w-full">

                                    <div className="md:block absolute left-[-3.5rem] top-8 w-14 h-[2px] bg-black/80"/>

                                    <div className="shrink-0">
                                        <img
                                            src={card.logoPath}
                                            alt={`${card.title} logo`}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>

                                    <div>
                                        <h1 className="font-semibold text-2xl md:text-3xl">
                                            {card.title}
                                        </h1>

                                        <p className="my-3 text-white-50">
                                            {card.date}
                                        </p>

                                        <p className="text-[#839cb5] italic">
                                            Responsibilities
                                        </p>

                                        <ul className="list-disc ms-5 mt-4 flex flex-col gap-4 text-white-50">
                                            {card.responsibilities.map((item, i) => (
                                                <li key={i} className="text-base md:text-lg">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
