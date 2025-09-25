import { useContext } from 'react';
import Seo from '../../components/Seo';
import PolicySection from './PolicySection';
import { GlobalContext } from '../../App';

export default function ContentPolicy() {
    const { contact: { email, phone } } = useContext(GlobalContext);
    return (
        <>
            <Seo
                title="jacob-jordan.me - content usage policy"
                description="Read the official content usage policy for jacob-jordan.me."
                pathname="/content-policy"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Content Usage Policy",
                    url: "https://jacob-jordan.me/content-policy",
                    datePublished: "2025-09-22",
                    dateModified: "2025-09-22",
                    description: "Official content usage policy for Jacob Jordan’s website.",
                    inLanguage: "en"
                }}
            />

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
                <h1 className="text-3xl font-bold mb-2">Content Usage Policy</h1>
                <p className="text-sm text-neutral-300 mb-8">Effective Date: September 22, 2025</p>

                <p className="mb-6">
                    This website and all of its content are the intellectual property of <strong>Jacob A. Jordan</strong>, unless otherwise stated.
                </p>

                <PolicySection title="✓ Permitted Uses">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Browsing, linking to, or referencing this site for personal or educational use.</li>
                        <li>Reusing code samples and projects with proper attribution.</li>
                        <li>Sharing content with a link back to the original source.</li>
                    </ul>
                </PolicySection>

                <PolicySection title="✗ Prohibited Uses">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Using content in training datasets for <strong>AI or LLMs</strong> without written permission.</li>
                        <li>Scraping or automated data collection for AI model ingestion.</li>
                        <li>Commercial reuse of any content without prior authorization.</li>
                    </ul>
                </PolicySection>

                <PolicySection title="⭘ LLM & AI Policy">
                    <p className="mb-4">
                        This site uses <Code>llms.txt</Code> and <Code>robots.txt</Code> to signal that all content is <strong>not authorized for AI training</strong>.
                    </p>
                    <p>
                        If you are developing or operating an AI system and wish to use any content from this site, you must obtain explicit written permission.
                    </p>
                </PolicySection>

                <PolicySection title="ⓘ Contact">
                    <p>
                        <strong>Jacob A. Jordan</strong><br />
                    </p>
                    <p>
                        ✉{' '}
                        <a
                            href={email.href}
                            className="hover:underline text-neutral-400"
                        >
                            { email.text }
                        </a>
                    </p>
                    <p >
                        ☎{' '}
                        <a
                            href={phone.href}
                            className="hover:underline text-neutral-400"
                        >
                            { phone.text }
                        </a>
                    </p>
                </PolicySection>

                <footer className="mt-12 text-sm text-neutral-500 text-center">
                    <p>© { new Date().getFullYear() } Jacob A. Jordan. All rights reserved.</p>
                    <p>Last updated: September 22, 2025</p>
                </footer>
            </main>
        </>
    );
}

const Code = ({ children }) => <code className="bg-neutral-700 text-white text-sm px-1 py-0.5 rounded border border-neutral-200 ">{ children }</code>