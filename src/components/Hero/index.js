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
                            <a href="https://github.com/wilfred-py" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/wilfredchen1/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                                    <path d="M13 11l1.5 6l1.5 -6" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
