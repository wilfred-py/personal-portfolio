import gsap from "gsap";

export const preloaderAnimation = (preloaderTextRef, preloaderBackgroundRef) => {
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.out",
        },
    });

    const selectSpans = gsap.utils.selector(preloaderTextRef);

    tl.to(preloaderTextRef.current, {
        opacity: 1,
    })
        .to(selectSpans("span"), {
            yPercent: 0,
            delay: 0.2,
        })
        .to(selectSpans("span"), {
            yPercent: -290,
            delay: 0.55,
            ease: "power4.inOut",
        })
        .to(
            preloaderBackgroundRef.current,
            {
                yPercent: -100,
                duration: 1.5,
                ease: "power4.inOut",
            },
            "-=0.48"
        );

    return tl;
};

export const nameIntro = (nameRef) => {
    const tl = gsap.timeline();

    tl.fromTo(
        nameRef.current,
        {
            yPercent: 100,
        },
        {
            opacity: 1,
            yPercent: 0,
            duration: 1.1,
        }
    );

    return tl;
};

export const navIntro = (navRef) => {
    const tl = gsap.timeline();

    tl.fromTo(
        navRef.current,
        {
            yPercent: -80,
        },
        {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
        }
    );
    return tl;
};

export const socialsIntro = (socialsRef) => {
    const tl = gsap.timeline();

    tl.fromTo(
        socialsRef.current,
        {
            xPercent: -30,
        },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1.1,
        }
    );
    return tl;
};

export const backgroundImageAnimation = (backgroundImageRef) => {
    const tl = gsap.timeline();

    tl.to(backgroundImageRef.current, {
        scale: 1,
        duration: 1,
        ease: "expo.inout",
    });

    return tl;
};
