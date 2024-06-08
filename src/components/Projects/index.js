import gsap, { ScrollTrigger } from "gsap/all";
import styles from "./Projects.module.scss";
import { useGSAP } from "@gsap/react";

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
            <div className={styles.projects}>
                <div className={styles.projects__main}>
                    <h1 className={styles.projects__title}>Projects</h1>
                    <div>
                        <h2>Suburb IQ</h2>
                        <h3>
                            A data visualisation and analytics tool that helps users understand demographic trends in Australian suburbs.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}
