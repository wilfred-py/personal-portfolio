import { useRef } from "react";
import styles from "./HelloWorld.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { eraseTypingAnimation, typingAnimation } from "@/components/HelloWorld/animations";

export default function HelloWorld({ timeline }) {
    const wordsRef = useRef(null);

    useGSAP(() => {
        const words = "print(`Hello World`)";

        timeline && timeline.add(typingAnimation(wordsRef, words)).add(eraseTypingAnimation(wordsRef, words), ">=1");
    }, [timeline]);

    return (
        <div className={styles.preloader}>
            <span ref={wordsRef}></span>
        </div>
    );
}
