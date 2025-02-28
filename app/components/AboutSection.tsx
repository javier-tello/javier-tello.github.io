"use client"

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>PL/SQL</li>
                <li>React</li>
                <li>Flask</li>
                <li>SpringBoot</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Rutgers University - New Brunswick</li>
            </ul>
        )
    },
    {
        title: "Experiece",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>OpenGov - Software Engineer</li>
                <li>OpenGov - Support Engineer</li>
                <li>OpenGov - Open Data Engineer</li>
                <li>Infosys - Associate Software Developer</li>
                <li>Revature -  Java Developer Bootcamp</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return(
        <section id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/about-image.png" alt="workstation including laptop and monitor" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4"> About Me</h2>
                    <p className="text-base md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;