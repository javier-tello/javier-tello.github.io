import Link from 'next/link'

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text text-[#F7F7F7] sm:text-xl rounded md:p-0 hover:text-[#C65B7C]">
            {title}
        </Link>
    );
};

export default NavLink;