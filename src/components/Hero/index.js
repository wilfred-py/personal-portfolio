import { useRef } from "react";
import styles from "./Hero.module.scss";
import { nameIntro, navIntro, socialsIntro, wipeUpIntro, preloaderAnimation } from "./animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const preloaderTextRef = useRef(null);
    const navRef = useRef(null);
    const nameRef = useRef(null);
    const socialsRef = useRef(null);
    const preloaderRef = useRef(null);
    const preloaderBackgroundRef = useRef(null);

    useGSAP(() => {
        const heroTimeline = gsap.timeline();

        const setInitialStates = () => {
            const selectSpans = gsap.utils.selector(preloaderTextRef);

            gsap.set(selectSpans("span"), {
                yPercent: 200,
            });
        };

        setInitialStates();

        heroTimeline
            .add(setInitialStates())
            .add(preloaderAnimation(preloaderTextRef, preloaderBackgroundRef))
            .add(nameIntro(nameRef), "-=1")
            .add(navIntro(navRef), "-=0.5")
            .add(socialsIntro(socialsRef), "<");
    }, []);

    return (
        <>
            <div className={styles.hero}>
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

                <div className={styles.preloader} ref={preloaderRef}>
                    <p className={styles.preloader__text} ref={preloaderTextRef}>
                        <span className={styles.preloader__mainText}>Wilfred Chen</span>
                        <span className={styles.preloader__subText}>Portfolio 2024</span>
                    </p>

                    <div className={styles.preloader__background} ref={preloaderBackgroundRef}></div>
                </div>

                <div className={styles.hero__name} ref={nameRef}>
                    <h1>Wilfred Chen</h1>
                    <h2>Web Developer</h2>
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
