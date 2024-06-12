"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import housingDetailsPage from "@/public/images/suburbiqHousing.png";
import Link from "next/link";

export default function suburbiqHousingCard() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-slate-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto sm:h-full rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    Suburb IQ
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 mb-6 dark:text-neutral-300">
                    A web app visualising demographic trends across Australian suburbs.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10" as={Link} href="/projects/suburbiq">
                    <Image
                        src={housingDetailsPage}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        priority={true}
                    ></Image>
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://www.suburbiq.com"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white underline"
                    >
                        https://www.suburbiq.com
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={"/projects/suburbiq"}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                    >
                        Read more...
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
