import { Button } from "../shared/Button"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/paragraph"
import { Numbers } from "./Numbers"

export const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-36">
            {""}
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute lg:w-1/2 w-full inset-y-0 lg:right-0">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">

                    </span>
                    <span className="absolute right-4 bottom-12 w-24 h-24  rounded-3xl bg-primary blur-xl opacity-80">
                        {""}
                    </span>
                </div>

                <div className="relative flex flex-col lg:gap-8 items-center text-center lg:text-left lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    {""}
                    <h1 className="text-heading-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"> Empower Your Business{""}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">With AI</span>
                    </h1>
                    <Paragraph className="mt-8">
                        Our AI SaaS platform seamlessly integrates with your existing work to deliver real-time insights, intelligence automation, and data-driven decision making. Experience a future where your business runs smarter, faster, and more efficiently.
                    </Paragraph>

                    <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col w-full gap-5">
                            <form action="#" className="py-1 pl-6 w-full pr-1 gap-3 flex items-center text-heading-3 text-sm shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                                <span className="min-w-max pr-2 border-r border-box-border">
                                    {""}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 9v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-1.11.6-2.08 1.5-2.6l8-4.62l8 4.62c.9.52 1.5 1.49 1.5 2.6M3.72 7.47l7.78 5.03l7.78-5.03l-7.78-4.54zm7.78 6.24L3.13 8.28C3.05 8.5 3 8.75 3 9v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9c0-.25-.05-.5-.13-.72z" /></svg>
                                </span>
                                <input type="email" placeholder="johndoe@gmail.com" className="w-full py-3 bg-transparent outline-none" />
                                <Button className="min-w-max text-white">
                                    <span className="relative z-[5]">Get Started</span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 lg:w-1/2 lh:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </Container>
            <Numbers/>
        </section>
    )
}
