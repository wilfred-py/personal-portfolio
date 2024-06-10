import gsap, { ScrollTrigger } from "gsap/all";
import styles from "./Projects.module.scss";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import transitionBlockImage from "@/public/images/transitionBlock.jpg";
import suburbiqSearch from "@/public/images/suburbiqSearch.png";
import suburbiqDashboard from "@/public/images/suburbiqDashboard.png";
import searchGif from "@/public/images/suburbiqSearch.gif";
import suburbiqHousing from "@/public/images/suburbiqHousing.png";
import SuburbIQCard from "./SuburbIQCard";
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
                <div className={styles.projects__number}>1</div>

                <div className={styles.projects__suburbiq}>
                    <div className={styles.projects__suburbiq__title}>
                        <h2>Suburb IQ</h2>
                        <p>
                            {" "}
                            <a href="https://www.suburbiq.com" target="_blank">
                                https://www.suburbiq.com
                            </a>
                        </p>
                    </div>
                    <div className={styles.projects__suburbiq__description}>
                        <p>A web app visualising demographic trends across Australian suburbs.</p>
                        Technologies used:
                        <ul>
                            <li>NextJS</li>
                            <li>Typescript</li>
                            <li>Tailwind CSS</li>
                            <li>Python</li>
                            <li>Supabase</li>
                            <li>Vercel</li>
                        </ul>
                    </div>

                    <div className="">
                        <SuburbIQCard />
                    </div>

                    <div className={styles.projects__screenshots}>
                        {/* <Image src={searchGif} alt="Suburb IQ Search GIF" priority={true} className={styles.projects__screenshots} /> */}

                        {/* <a href="https://www.suburbiq.com" target="_blank">
                            <Image
                                src={suburbiqDashboard}
                                alt="Suburb IQ Dashboard Page"
                                priority={true}
                                className={styles.projects__screenshots__dashboard}
                            />
                        </a>

                        <a href="https://www.suburbiq.com" target="_blank">
                            <Image
                                src={searchGif}
                                alt="Suburb IQ Search Page"
                                priority={true}
                                className={styles.projects__screenshots__search}
                            />
                        </a> */}
                    </div>
                    <div>
                        <Link href={"/projects/suburbiq"} className={styles.projects__suburbiq__actionButtons}>
                            READ MORE
                        </Link>

                        <Link href={"https://www.suburbiq.com"} className={styles.projects__suburbiq__actionButtons} target="_blank">
                            VISIT{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
