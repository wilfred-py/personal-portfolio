"use client";

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import HelloWorld from "@/components/HelloWorld";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setLoaderFinished(true),
            });

            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    return (
        <main>
            {/* {loaderFinished ? <Hero /> : <Loader timeline={timeline} />} */}

            {/* <HelloWorld timeline={timeline} /> */}

            <Loader timeline={timeline} />

            {/* <section className="" id="#intro">
                <Intro />
            </section> */}

            {/* <section className="" id="#projects">
                <Projects />
            </section> */}

            <section className="" id="#contact"></section>
        </main>
    );
}
