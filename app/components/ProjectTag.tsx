import React, { MouseEventHandler } from 'react'

interface ProjectTagProps {
    name: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean
}

const ProjectTag = ({ name, onClick, isSelected}: ProjectTagProps) => {
    const buttonStyles = isSelected ? "text-white border-pink-400" : "border-slate-600 hover:border-white";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={onClick}>
        {name}
    </button>
  )
}

export default ProjectTag;
