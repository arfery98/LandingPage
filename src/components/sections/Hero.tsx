import { Container } from "../shared/Container"

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
                </div>
            </Container>
        </section>
    )
}
