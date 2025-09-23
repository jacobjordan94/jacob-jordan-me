import { useContext, useMemo } from "react";
import { GlobalContext } from '../App';

/**
 * @typedef {Object} SeoProps
 * @property {string} title - The page title.
 * @property {string} description - Meta description.
 * @property {string} [pathname='/'] - Used in canonical + OG URL.
 * @property {string} [image] - Social image URL.
 * @property {'website'|'article'} [type='website'] - Open Graph type.
 * @property {string} [creator] - Twitter handle (optional).
 * @property {Object} [schema] - Optional structured data object
 */

/**
 * @param {SeoProps} props
 */
export default function Seo({
  title = 'jacob-jordan.me',
  description = 'my name is jacob jordan and this is my personal website, check it out!',
  pathname = '/',
  image,
  type = 'website',
  creator,
  schema,
}) {
  const url = `https://jacob-jordan.me${pathname}`;
  const { skills } = useContext(GlobalContext);
  const defaultSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jacob A. Jordan",
    url: "https://jacob-jordan.me",
    sameAs: [
      "https://github.com/jacobjordan94",
      "https://www.linkedin.com/in/jacob-jordan-0ab56061/",
      "https://discord.com/users/278942049917468684",
    ],
    jobTitle: "Front-End Web Developer",
    // worksFor: {
    //   "@type": "Organization",
    //   name: "Could be you!"
    // },
    knowsAbout: [...skills],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Portfolio Contact Form",
      url: "https://jacob-jordan.me",
      email: "jacobjordan94@live.com", // If public, optional
      availableLanguage: ["English"]
    },
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "Portfolio Website",
        url: "https://jacob-jordan.me",
        description: "Personal portfolio website built with React, Vite, and Tailwind CSS to showcase projects and experience.",
        programmingLanguage: "JavaScript"
      },
      {
        "@type": "CreativeWork",
        name: "kexp-react",
        url: "https://kexp-react.jacob-jordan.me",
        description: "Fan site for KEXP.FM, a non-commercial radio station based in Seattle, WA. Made using React, Vite, & Tailwind",
        programmingLanguage: "JavaScript"
      },
    ],
  }), [ skills ]);

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, noai" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="jacob-jordan.me" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {creator && <meta name="twitter:creator" content={creator} />}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schema || defaultSchema)}}
      />
    </>
  );
}
