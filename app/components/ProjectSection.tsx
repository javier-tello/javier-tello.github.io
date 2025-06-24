"use client"

import React, {useState} from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: "School Scheduler",
        description: "A Python script that will generate a High School @ Prospect Park's teacher schedule and upload to Google Sheets based on given constraints.",
        image: "/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/javier-tello/international-highschool-scheduler",
        previewUrl: "https://docs.google.com/spreadsheets/d/1puIQcatxCYgS_w1O6U2ggK6XAiudIOWZSrj1gtzTczY/edit?usp=sharing",
    },
//     {
//         id: 2,
//         title: "Potography Portfolio Website",
//         description: "Project 2 description",
//         image: "/projects/2.png",
//         tag: ["All", "Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id: 3,
//         title: "E-commerce Application",
//         description: "Project 3 description",
//         image: "/projects/3.png",
//         tag: ["All", "Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id: 4,
//         title: "Food Ordering Application",
//         description: "Project 4 description",
//         image: "/projects/4.png",
//         tag: ["All", "Mobile"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id: 5,
//         title: "React Firebase Template",
//         description: "Authentication and CRUD operations",
//         image: "/projects/5.png",
//         tag: ["All", "Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id: 6,
//         title: "Full-stack Roadmap",
//         description: "Project 5 description",
//         image: "/projects/6.png",
//         tag: ["All", "Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
            name="All"
            onClick={() => handleTagChange("All")}
            isSelected={tag === "All"}
        />
        <ProjectTag
            onClick={() => handleTagChange("Web")}
            name="Web"
            isSelected={tag === "Web"}
        />
        <ProjectTag
            onClick={() => handleTagChange("Mobile")}
            name="Mobile"
            isSelected={tag === "Mobile"}
        />
    </div>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl} />
        ))}
        </div>
    </section>
    )
}

export default ProjectSection;
