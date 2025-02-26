import React, { MouseEventHandler } from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: MouseEventHandler<HTMLButtonElement>;
    children: string[];
}

export const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
    const buttonClasses = active ? "border-b border-pink-400" : ""
    return (
        <button onClick={selectTab} >
            <p className={`mr-3 font-semibold  hover:text-[#C65B7C] ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton;
