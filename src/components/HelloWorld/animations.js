import gsap from "gsap";

export const typingAnimation = (typingRef, words) => {
    const tl = gsap.timeline();
    const characters = words.split("");

    characters.forEach((char, index) => {
        tl.to(typingRef.current, {
            textContent: words.substring(0, index + 1),
            duration: 0.1,
        });
    });
    return tl;
};

export const eraseTypingAnimation = (typingRef, words) => {
    const tl = gsap.timeline();
    const wordsLength = words.length;
    for (let i = wordsLength - 1; i >= 0; i--) {
        tl.to(typingRef.current, {
            textContent: words.substring(0, i),
            duration: 0.1,
        });
    }
    return tl;
};
