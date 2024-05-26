import { useRef } from "react";
import styles from "./Hero.module.scss";
import { nameIntro, wipeUpIntro } from "./animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const wipeUpRef = useRef(null);
    const navRef = useRef(null);
    const nameRef = useRef(null);
    const socialsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.add(nameIntro(nameRef)).add(wipeUpIntro(wipeUpRef), "<");
    }, []);
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__wipeUp} ref={wipeUpRef}></div>

                <div className={styles.hero__nav} ref={navRef}>
                    <ul>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.hero__name} ref={nameRef}>
                    <h1>Wilfred Chen</h1>
                    <h2>Portfolio</h2>
                </div>

                <div className={styles.hero__socials} ref={socialsRef}>
                    <ul>
                        <li>
                            <a href="">GitHub</a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                        <li>
                            <a href="">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
