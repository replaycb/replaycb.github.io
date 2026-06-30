import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import judge2 from "../assets/2_t.png";
import judge4 from "../assets/4_t.png";
import judge5 from "../assets/5_t.png";
import judge6 from "../assets/6_t.png";
import judge7 from "../assets/7_t.png";
import judge8 from "../assets/8_t.png";

import JudgeCategory from "../components/JudgeCategory";

gsap.registerPlugin(ScrollTrigger);

// Add more categories here as judges are confirmed.
// Each category holds a pair of judges: { name, image, twitter?, youtube? }.
const categories = [
    {
        name: "Vocal Judges",
        members: [
            {
                name: "GIN",
                image: judge4,
                twitter: "https://x.com/graperamune",
                youtube: "https://www.youtube.com/@GINOZA",
            },
            {
                name: "Un3h",
                image: judge7,
                twitter: "https://x.com/un3hcorn",
                youtube: "https://www.youtube.com/@un3hcorn",
            },
        ],
    },
    {
        name: "Mix Judges",
        members: [
            {
                name: "Niu Arx",
                image: judge5,
                twitter: "https://x.com/niu_arx",
                youtube: "https://www.youtube.com/@niu_arx",
            },
            {
                name: "KT",
                image: judge2,
                twitter: "https://x.com/katieheehee",
                youtube: "https://www.youtube.com/@katieheehee",
            },
        ],
    },
    {
        name: "Art Judges",
        members: [
            {
                name: "Ena",
                image: judge8,
                twitter: "https://x.com/_EnaMeii",
            },
            {
                name: "Kyu",
                image: judge6,
                twitter: "https://x.com/Okyurita",
            },
        ],
    },
];

export default function Staff() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Judges
                </h1>
            </div>

            <div className="flex flex-col gap-16">
                {categories.map((category, i) => (
                    <div
                        key={category.name}
                        ref={(el) => (sectionsRef.current[i] = el)}
                    >
                        <JudgeCategory category={category} />
                    </div>
                ))}
            </div>
        </main>
    );
}
