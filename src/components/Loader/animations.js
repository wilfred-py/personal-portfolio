import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const introAnimation = (wordGroupsRef, overlayRef, wordsRef) => {
    const tl = gsap.timeline();

    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 5,
        ease: "power3.inOut",
    })
        .fromTo(
            overlayRef.current,
            {
                background: `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.85),
                rgba(255, 255, 255, 0.85) 45%,
                transparent,
                transparent 48%,
                transparent,
                rgba(255, 255, 255, 0.85) 50%,
                rgba(255, 255, 255, 0.85)`,
            },
            {
                background: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.85),
            rgba(255, 255, 255, 0.85) 45%,
            transparent,
            transparent 48%,
            transparent,
            rgba(255, 255, 255, 0.85) 55%,
            rgba(255, 255, 255, 0.85)`,
                duration: 1,
                ease: "power4.in",
            },
            "-=2"
        )
        .to(
            wordsRef.current,
            {
                height: `45rem`,
            },
            "<"
        );

    return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, { scaleX: 1, duration: 5, ease: "power3.inOut" })
        .to(
            progressNumberRef.current,
            {
                x: "100vw",
                duration: 5,
                ease: "power3.inOut",
            },
            "<"
        )
        .to(
            progressNumberRef.current,
            {
                textContent: "100",
                duration: 5,
                roundProps: "textContent",
            },
            "<"
        )
        .to(progressNumberRef.current, {
            y: 24,
            autoAlpha: 0,
            duration: 3,
            ease: "expo.inOut",
        });

    return tl;
};

export const collapseWords = (loaderRef) => {
    const tl = gsap.timeline();

    tl.to(loaderRef.current, {
        "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        duration: 3,
        ease: "expo.inOut",
    });

    return tl;
};
