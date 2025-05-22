interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
    return (
        <a href={href} className="duration-300 hover:text-primary font-medium py-3">{text}</a>
    )
}
