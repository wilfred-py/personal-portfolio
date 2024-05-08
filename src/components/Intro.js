"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";

export default function Intro() {
    // Smooth Scroll
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
        // console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume none",
        markers: true,
    });

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".parent-container",
            start: "top center",
            end: "bottom center",
            id: "test-scrollTrigger",
            onUpdate: (self) => console.log("update", self.progress.toFixed(3)),
        });
    }, []);

    return (
        <>
            <div className="w-full parent-container">
                <div className="h-screen w-full bg-autumnGrey">
                    <div className="container-1 justify-center place-items-center">
                        <h1 className="text-5xl font-bold">Hey, I'm Wilfred.</h1>
                        <h2 className="">Web developer</h2>
                    </div>
                    <div className="container-2 justify-center place-items-center">
                        <h2 className="">Designer</h2>
                    </div>
                    <div className="container-3 justify-center place-items-center">
                        <h2 className="">Cyclist</h2>
                    </div>
                </div>
                <div className="h-screen bg-orange-600">
                    <div className="container-4 ">
                        <h1 className="text-5xl ">Container 2</h1>
                        <h2 className="">Web developer</h2>
                    </div>
                </div>
                <div className="h-screen bg-green-400">
                    <div className="container-5 ">
                        <h1 className="text-5xl ">Container 3</h1>
                        <h2 className="">Web developer</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
