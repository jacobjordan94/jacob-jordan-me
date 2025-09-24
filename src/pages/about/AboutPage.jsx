import SourceCodeHandsIcon from '../../components/icons/SourceCodeHandsIcon';
import AppLink from '../../components/AppLink';
import SiteBadge from '../../components/SiteBadge';
import Seo from '../../components/Seo';

export default function AboutPage() {
    return (
        <>
            <Seo
                title="jacob-jordan.me - about"
                description="Learn about how this website was built, where it's hosted, and explore the open-source code on GitHub."
                pathname="/about"
            />
            <main className="about-page min-h-full w-full flex flex-col text-neutral-300 p-6 text-center gap-20 items-stretch justify-center">
                <header className="content-header w-full flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold tracking-wide mb-2">
                        about this website
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-lg font-[MisterPixel]">
                        built with <strong className="text-white">React</strong> and <strong className="text-white">Tailwind CSS</strong>, hosted via <strong className="text-white">Cloudflare Pages</strong>. launched in <strong className="text-white">august 2025</strong>.
                    </p>
                </header>

                <section
                    aria-labelledby="source-code"
                    className="
                        bg-neutral-700/30  border-neutral-700 p-6 
                        rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-800/30
                        md:w-md self-center transition-all hover:scale-105 origin-bottom
                    "
                >
                    <h2 id="source-code" className="text-2xl font-semibold mb-4 text-white">
                        open source code
                    </h2>

                    <div className="flex justify-center my-6">
                        <SourceCodeHandsIcon className="size-24 opacity-80 hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="text-md text-neutral-400 text-center space-y-2 font-[MisterPixel]">
                        <p>this website is open source.</p>
                        <AppLink
                            decoration={false}
                            className="inline-block underline hover:text-white text-neutral-300 transition-colors"
                            href="https://github.com/jacobjordan94/jacob-jordan-me"
                        >
                            view the source code on github
                        </AppLink>
                    </div>
                </section>
                <section aria-labelledby="made-in-usa" className="text-sm text-neutral-500 flex-grow flex items-end justify-center">
                    <h2 id="made-in-usa-badge" className="sr-only">Site disclaimer</h2>
                    <SiteBadge />
                </section>
            </main>
        </>
    );
}
