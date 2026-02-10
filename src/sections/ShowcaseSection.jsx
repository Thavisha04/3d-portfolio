import React, {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    { /*LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Makeup Product Showcase Website"/>
                        </div>
                        <div className="text-content">
                            <h2>Makeup Product Showcase Website</h2>
                            <p className="text-white-50 md:text-xl">Built a product management web application using
                                Next.js, React, Node.js, and Contentful CMS, supporting multi-author content and dynamic
                                product display.</p>
                        </div>
                    </div>
                    { /*RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Gemini Clone"/>
                            </div>
                            <h2>Gemini Clone</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] flex gap-2">
                                <img src="/images/project3-1.png" alt="Movie Flix"/>
                                <img src="/images/project3-2.png" alt="Movie Flix"/>
                            </div>
                            <h2>Movie Flix</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection;