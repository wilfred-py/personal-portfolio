import gsap from "gsap";

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
            rgba(255, 255, 255, 0.85) 44%,
            transparent,
            transparent 48%,
            transparent,
            rgba(255, 255, 255, 0.85) 56%,
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
                xPercent: -100,
                left: "100%",
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
            y: -50,
            autoAlpha: 0,
            duration: 3,
            ease: "expo.inOut",
        });

    return tl;
};

export const wipeUpAnimation = (wipeUpRef) => {
    const tl = gsap.timeline();

    tl.to(wipeUpRef.current, {
        top: 0,
        height: "100%",
        zIndex: 5,
        scaleY: 1,
        backgroundColor: "black",
        duration: 1.75,
        ease: "power4.out",
    }).to(
        wipeUpRef.current,
        {
            top: 0,
            height: "0%",

            duration: 2.25,
            ease: "power4.out",
        },
        "-=1"
    );
    // .to(
    //     wipeUpRef.current,
    //     {
    //         top: 0,
    //         height: 0,
    //         zIndex: 0,
    //         duration: 0.75,
    //     },
    //     "-=1"
    // );
    // .to(wipeUpRef.current, { opacity: 0 });

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
