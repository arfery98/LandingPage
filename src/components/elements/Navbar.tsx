import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

const navItem = [
    { href: "#", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#about-us", text: "About Us" },
    { href: "#features", text: "Features" },
]

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();

    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <Container>
                <nav className='flex justify-between gap-6 w-full relative'>
                    <div className="min-w-max inline relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256"><g fill="none"><g clip-path="url(#skillIconsHtmxDark0)"><path fill="#242938" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60" /><path fill="#3d72d7" d="M102.25 180.12L137.58 75.6a1.75 1.75 0 0 1 1.84-1.18l14.65 1.5a1.75 1.75 0 0 1 1.49 2.29l-34.5 103.08a1.75 1.75 0 0 1-1.66 1.2l-15.5-.06a1.74 1.74 0 0 1-.796-.196a1.75 1.75 0 0 1-.854-2.114" /><path fill="#f5f5f5" d="M58.74 131.41q-1.76.69.02 1.33q18.17 6.57 35.04 12.33a1.36 1.36 0 0 1 .91 1.25a180 180 0 0 1-.41 15.92a5.5 5.5 0 0 1-.34 1.55q-.36.93-1.28.55l-57.17-23.73a.68.68 0 0 1-.41-.66l.74-15.53a1.01 1.01 0 0 1 .61-.88l55.9-23.96a1.06 1.06 0 0 1 .886.017a1.1 1.1 0 0 1 .584.683q.45 1.53.56 3q.55 7.5.3 14.95a.74.74 0 0 1-.48.66a3139 3139 0 0 1-33.74 12.24q-.43.15-.87.17q-.64.03-.85.11m139.7-.17l-35.69-12.46a.35.35 0 0 1-.24-.33q-.15-7.4.06-15.07a9.9 9.9 0 0 1 .56-3.13q.19-.5.7-.36q1.7.47 3.18 1.08q27.17 11.18 54.29 22.47q.58.24.58.87l.03 15.71a.97.97 0 0 1-.59.89l-56.91 23.5a1.04 1.04 0 0 1-1.276-.399a1 1 0 0 1-.154-.451q-.89-8.95-.45-17.58a.89.89 0 0 1 .6-.79q18.49-6.23 35.33-12.68q1.73-.66-.02-1.27" /></g><defs><clipPath id="skillIconsHtmxDark0"><path fill="#fff" d="M0 0h256v256H0z" /></clipPath></defs></g></svg>
                            <div className="inline-flex text-lg font-semibold text-heading-1">EdgeAI</div>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                        <ul className="border-t border-box lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navItem.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} />
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                            <BtnLink text="Get Started" href="#cta" className="" />
                        </div>
                    </div>

                    <div className="min-w-max flex items-center gap-x-3">
                        <button
                            onClick={toggleTheme}
                            className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
                        >
                            {theme === "dark" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};
