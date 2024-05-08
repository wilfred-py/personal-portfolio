import { useRef } from "react";
import styles from "./Preloader.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Preloader() {
    const wordsRef = useRef(null);

    useGSAP(() => {
        const words = "print('Hello World')";
        const wordsLength = words.length;

        const tl = gsap.timeline();

        const characters = words.split("");

        characters.forEach((char, index) => {
            tl.to(wordsRef.current, {
                textContent: words.substring(0, index + 1),
                duration: 0.1,
                ease: "power1.inOut",
                onComplete: () => {
                    if (index === wordsLength - 1) {
                        tl.to(wordsRef.current, {
                            textContent: "",
                            duration: 1,
                            delay: 1,
                        });
                    }
                },
            });
        });
    }, []);

    return (
        <div className={styles.preloader}>
            <span ref={wordsRef}></span>
        </div>
    );
}
