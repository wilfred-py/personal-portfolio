import { useRef } from "react";
import styles from "./Hero.module.scss";
import { wipeUpAnimation } from "../Loader/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const wipeUpRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.add(wipeUpAnimation(wipeUpRef));
    }, []);
    return (
        <>
            <div>
                <div className={styles.hero__wipeUp} ref={wipeUpRef}></div>

                <div className={styles.hero__name}>
                    <h1>Wilfred Chen</h1>
                    <h2>Portfolio</h2>
                </div>
            </div>
        </>
    );
}
