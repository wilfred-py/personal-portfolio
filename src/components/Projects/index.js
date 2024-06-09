import gsap, { ScrollTrigger } from "gsap/all";
import styles from "./Projects.module.scss";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import transitionBlockImage from "@/public/images/transitionBlock.jpg";
import suburbiqSearch from "@/public/images/suburbiqSearch.png";
import suburbiqDashboard from "@/public/images/suburbiqDashboard.png";
import searchGif from "@/public/images/suburbiqSearch.gif";

export default function Projects() {
    // useGSAP(() => {
    //     console.log(styles);

    //     gsap.registerPlugin(ScrollTrigger);
    //     const projectTimeline = gsap.timeline();

    //     projectTimeline.to(`.${styles.projects__title}`, {
    //         y: 100,
    //         scrollTrigger: {
    //             trigger: `.${styles.projects__title}`,
    //             start: "top bottom",
    //             end: "center center",
    //             markers: true,
    //             scrub: 3,
    //         },
    //     });
    // }, []);

    return (
        <>
            <div className={styles.backgroundTransitionBlock}>
                <Image
                    src={transitionBlockImage}
                    alt="Placeholder Image"
                    className={styles.backgroundTransitionBlock__image}
                    priority={true}
                />
            </div>
            <div className={styles.projects}>
                <div className={styles.projects__title}>
                    <h1>PROJECTS</h1>
                </div>
                <div className={styles.projects__number}>1</div>
                <div className={styles.projects__suburbiq}>
                    <h2>Suburb IQ</h2>
                    <p>A web app visualising demographic trends across Australian suburbs</p>
                    <p>Current users: 6</p>
                    <p>
                        Technologies used:
                        <ul>
                            <li>NextJS</li>
                            <li>HTML</li>
                            <li>Tailwind CSS</li>
                            <li>Typescript</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </p>
                    <div className={styles.projects__screenshots}>
                        <Image
                            src={suburbiqDashboard}
                            alt="Suburb IQ Dashboard Page"
                            priority={true}
                            className={styles.projects__screenshots}
                        />
                        <Image src={searchGif} alt="Suburb IQ Search GIF" priority={true} className={styles.projects__screenshots} />

                        <Image src={suburbiqSearch} alt="Suburb IQ Search Page" priority={true} className={styles.projects__screenshots} />
                    </div>
                </div>
            </div>
        </>
    );
}
