// src/components/PolicySection.jsx

/**
 * @typedef {Object} PolicySectionProps
 * @property {string} title - The section title
 * @property {React.ReactNode} children - The section content
 */

export default function PolicySection({ title, children }) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <div className="text-neutral-300">{children}</div>
        </section>
    );
}
