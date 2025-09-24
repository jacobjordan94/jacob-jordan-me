import { Link } from "react-router";

/**
 * @param {Object} props
 * @param {string} [props.href] - External link URL (renders `<a>`)
 * @param {string} [props.to] - Internal route (renders `<Link>`)
 * @param {string} [props.className] - Optional Tailwind CSS classes
 * @param {React.ReactNode} props.children - Link contents
 * @param {boolean} [props.animate=true] - Whether to animate on hover
 * @param {boolean} [props.decoration=true] - Whether to show underline on hover
 */
export default function AppLink({
  href,
  to,
  className = '',
  children,
  animate = true,
  decoration = true,
  ...rest
}) {
  const isExternal = Boolean(href);
  const Tag = isExternal ? 'a' : Link;

  const baseClass = [
    decoration ? 'hover:border-white border-b-2 border-transparent' : '',
    animate ? 'hover:animate-pulse' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const tagProps = isExternal
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to,
      };

  return (
    <Tag {...tagProps} {...rest} className={baseClass}>
      {children}
    </Tag>
  );
}
