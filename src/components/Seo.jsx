/**
 * @typedef {Object} SeoProps
 * @property {string} title - The page title.
 * @property {string} description - Meta description.
 * @property {string} [pathname='/'] - Used in canonical + OG URL.
 * @property {string} [image] - Social image URL.
 * @property {'website'|'article'} [type='website'] - Open Graph type.
 * @property {string} [creator] - Twitter handle (optional).
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
}) {
  const url = `https://jacob-jordan.me${pathname}`;

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

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
    </>
  );
}
