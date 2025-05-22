import { Container } from "../shared/Container";
import logo from "../../assets/react.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

const navItem = [
    { href: "#", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#about-us", text: "About Us" },
    { href: "#features", text: "Features" },
]



export const Navbar = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <Container>
                <nav className='flex justify-between gap-6 w-full relative'>
                    {/* logo */}
                    <div className="min-w-max inline relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
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
                        <button className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"/></svg>
                        </button>

                    </div>
                </nav>
            </Container>
        </header>
    );
};
