import React from 'react'
import NavLink from './NavLink';

interface MenuOverlayProps {
    links: NavbarLink[];
}

interface NavbarLink {
    path: string;
    title: string;
}

const MenuOverlay = ({ links }: MenuOverlayProps ) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) =>
                <li key={index}>
                <NavLink href={link.path} title={link.title} />
                </li>
            )};
        </ul>
    );
}

export default MenuOverlay;