import gsap, { ScrollTrigger } from "gsap/all";
import styles from "./Projects.module.scss";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import transitionBlockImage from "@/public/images/transitionBlock.jpg";
import SuburbIQHousingCard from "./suburbiqHousingCard";

import Link from "next/link";

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

                {/* <div className={styles.projects__number}>1</div> */}

                <div className={styles.projects__suburbiq}>
                    <div className={styles.projects__suburbiq__3DCard}>
                        <SuburbIQHousingCard />
                    </div>

                    <div className={styles.projects__suburbiq__description}>
                        <h2>SUBURB IQ</h2>
                        <p>A web app visualising demographic trends across Australian suburbs.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
