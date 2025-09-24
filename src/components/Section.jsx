import { useId } from 'react';
import AppLink from "./AppLink";
import Icon from './Icon';

/**
 * Renders a semantic, accessible `<section>` with a heading.
 * Optionally links the title and supports flexible heading levels.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - The title text to display in the section header.
 * @param {React.ReactNode} props.children - The content inside the section.
 * @param {string} [props.link] - Optional route path to wrap the title in a link.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.headingLevel='h2'] - The HTML heading level tag to use.
 * @returns {JSX.Element}
 */
export default function Section({ title, children, link, headingLevel = 'h2' }) {
    const HeadingTag = headingLevel;
    const headingId = useId();

    return (
        <section
            className="group section lowercase w-full"
            data-link={Boolean(link)}
            role="region"
            aria-labelledby={headingId}
        >
            <header className="title text-2xl flex items-center">
                {link ? (
                    <LinkedHeading id={headingId} tag={HeadingTag} link={link}>
                        {title}
                    </LinkedHeading>
                ) : (
                    <HeadingTag id={headingId} className="text-2xl">
                        {title}
                    </HeadingTag>
                )}
            </header>
            <div className="section-content p-3 @container font-[MisterPixel]">
                {children}
            </div>
        </section>
    );
}

/**
 * Renders a heading element (`h1`–`h6`) with a link and optional icon.
 *
 * @param {Object} props
 * @param {string} props.id - The unique ID used for aria-labelledby.
 * @param {React.ElementType} props.tag - The heading tag to render (e.g., 'h2').
 * @param {string} props.link - The URL or route to link the title to.
 * @param {React.ReactNode} props.children - The text inside the heading.
 * @returns {JSX.Element}
 */
function LinkedHeading({ id, tag: Tag, link, children }) {
    return (
        <Tag id={id} className="text-2xl">
            <AppLink
                decoration={false}
                to={link}
                aria-label={`Go to ${children}`}
            >
                <span className="inner-section-link flex items-center">
                    <Icon.Link size={20} aria-hidden="true" />
                    <span className="ms-2">{children}</span>
                </span>
            </AppLink>
        </Tag>
    );
}
