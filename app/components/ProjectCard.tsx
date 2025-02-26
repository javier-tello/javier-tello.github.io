import React from 'react'

interface ProjectCardProps {
    imgUrl: string,
    title: string,
    description: string
}

export const ProjectCard = ({ imgUrl, title, description}: ProjectCardProps) => {
    return (
    <div>
        <div
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            </div>
        </div>
        <div className="rounded-b-xl bg-[#84B082] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p>{description}</p>
        </div>
    </div>
    )
}
