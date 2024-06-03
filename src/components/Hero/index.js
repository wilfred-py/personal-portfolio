import { useRef } from "react";
import styles from "./Hero.module.scss";
import { nameIntro, navIntro, socialsIntro, preloaderAnimation, backgroundImageAnimation } from "./animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import dolomitesImage from "@/public/images/dolomites-background.jpg";

export default function Hero() {
    const preloaderTextRef = useRef(null);
    const navRef = useRef(null);
    const nameRef = useRef(null);
    const socialsRef = useRef(null);
    const preloaderRef = useRef(null);
    const preloaderBackgroundRef = useRef(null);
    const backgroundImageRef = useRef(null);

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
            .add(backgroundImageAnimation(backgroundImageRef), "-=1.6")
            .add(nameIntro(nameRef), "-=0.72")
            .add(socialsIntro(socialsRef))
            .add(navIntro(navRef), "<");
    }, []);

    return (
        <>
            <div className={styles.hero}>
                <Image
                    src={dolomitesImage}
                    alt="Picture of mountain ranges in Dolomites, Italy"
                    className={styles.hero__backgroundImage}
                    priority={true}
                    ref={backgroundImageRef}
                />

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
                                <FontAwesomeIcon icon={faGithub} bounce size="xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/wilfredchen1/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} bounce size="xl" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faFilePdf} bounce size="xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
