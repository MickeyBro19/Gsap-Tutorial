import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const container = useRef();

    useGSAP(() => {
        //Cursor animation
        const cursor=document.querySelector("#cursor");

        window.addEventListener("mousemove", e => {
            gsap.to(cursor, {
                x:e.clientX,
                y:e.clientY,
                duration: 0.5,
                ease:"back.out"
            })
        })

        // Hero animation
        const intro = gsap.timeline();
        intro
            .from("#nav", { y: -60, opacity: 0, duration: 1, ease: "power3.out" })
            .from("#nav li", { opacity: 0, y: -10, stagger: 0.2 })
            .from("#heroTitle", {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power3.out",
            })
            .from("#heroSubtitle", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power2.out",
            });

        // Playground animations (fixed)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#playGround",
                start: "top 65%",
                toggleActions: "play none none none",
            },
        });

        tl.from("#box1", {
            scale: 0.6,
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "back.out(1.7)",
        })
            .from("#staggerText h1", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
            })
            .from("#box2", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power2.out",
            });

        // Pin text scroll
        const text = document.querySelector("#pinText h1");
        const textWidth = text.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = textWidth - windowWidth;

        gsap.to(text, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: "#pinText",
                start: "top top",
                end: `+=${scrollDistance + 400}`,
                scrub: 1,
                pin: true,
            },
        });

        // Guitar strings — keep simple bounce
        const svg = document.querySelector("#guitar-svg");
        const strings = document.querySelectorAll(".guitar-string");
        const baseYs = [60, 110, 160, 210, 260, 310];
        let currentTween;

        svg.addEventListener("mousemove", (e) => {
            const mouseY = e.offsetY;
            const path = document.querySelector("#string-center");
            const newPath = `M 100 200 Q 950 ${mouseY} 1800 200`;

            if (currentTween) currentTween.kill();
            gsap.to(path, {
                duration: 0.2,
                attr: { d: newPath },
                ease: "power2.out",
            });
        });

        svg.addEventListener("mouseleave", () => {
            const path = document.querySelector("#string-center");
            if (currentTween) currentTween.kill();
            currentTween = gsap.to(path, {
                duration: 1.2,
                attr: { d: `M 100 200 Q 950 200 1800 200` },
                ease: "elastic.out(1.2, 0.25)",
            });
        });
    }, { scope: container });

    return (
        <div
            ref={container}
            className="font-sans bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden"
        >
            <div
                id="cursor"
                className="h-5 w-5 bg-white rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference z-[9999] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            ></div>


            {/* NAV */}
            <nav
                id="nav"
                className="fixed top-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-10 py-4 flex justify-between items-center z-50 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
                <h1 className="text-2xl font-bold text-slate-100">GSAP Tutorial</h1>
                <ul className="flex gap-8 text-gray-300 font-medium">
                    {["Home", "Playground", "Projects", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="hover:text-cyan-300 cursor-pointer transition-colors"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* HERO */}
            <section className="h-screen flex flex-col justify-center items-center relative text-center">
                <div className="absolute w-[60%] h-[60%] bg-cyan-400/10 blur-[120px] rounded-full"></div>
                <h1
                    id="heroTitle"
                    className="text-[10vh] font-extrabold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Smooth, Clean, Elegant
                </h1>
                <p id="heroSubtitle" className="text-xl text-gray-300 mt-4">
                    A modern web experience powered by GSAP
                </p>
            </section>

            {/* PLAYGROUND */}
            <section
                id="playGround"
                className="h-screen flex flex-col items-center justify-center gap-10 text-center bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
            >
                <div className="absolute w-[70%] h-[70%] bg-white/5 blur-[100px]"></div>
                <h1 className="text-5xl font-semibold mb-4 text-slate-100">
                    Playground
                </h1>
                <div
                    id="box1"
                    className="w-32 h-32 bg-cyan-400/80 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                ></div>
                <div id="staggerText" className="text-2xl font-light">
                    <h1>Crafted Animations</h1>
                    <h1>Subtle Movements</h1>
                    <h1>Seamless Flow</h1>
                </div>
                <div
                    id="box2"
                    className="w-32 h-32 bg-purple-400/80 rounded-full shadow-[0_0_30px_rgba(192,132,252,0.3)]"
                ></div>
            </section>

            {/* PIN TEXT */}
            <section
                id="pinText"
                className="h-screen bg-slate-900 overflow-hidden flex items-center justify-start"
            >
                <h1 className="inline-block text-[35vh] font-bold whitespace-nowrap text-slate-100 opacity-90">
                    Scroll to Experience
                </h1>
            </section>

            {/* GUITAR STRING SECTION */}
            <section className="h-screen bg-slate-800 flex flex-col items-center justify-center relative">
                <h1 className="text-4xl font-semibold text-cyan-300 mb-10">
                    Interactive Motion
                </h1>
                <svg
                    id="guitar-svg"
                    width="100%"
                    height="300"
                    viewBox="0 0 1900 400"
                    className="overflow-visible"
                >
                    <path
                        id="string-center"
                        d="M 100 200 Q 950 200 1800 200"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                </svg>
                <p className="text-gray-400 mt-4 text-sm italic">
                    Move your mouse to make it ripple 🎶
                </p>
            </section>



            {/* CONTACT */}
            <section className="h-screen flex flex-col items-center justify-center bg-slate-900 relative">
                <div className="absolute w-[60%] h-[60%] bg-cyan-400/10 blur-[100px] rounded-full"></div>

            </section>
        </div>
    );
}
