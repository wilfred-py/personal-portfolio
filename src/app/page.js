"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Lenis from "lenis";

export default function Home() {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
        // console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <>
            <main>
                {/* <section>
                    <Hero />
                </section> */}
                <section>
                    <Projects />
                </section>
            </main>
        </>
    );
}
