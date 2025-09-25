import { useId, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/**
 * Responsive, accessible YouTube embed card using shadcn Card.
 *
 * @component
 * @param {Object} props
 * @param {string} props.src - YouTube embed URL
 * @param {string} props.title - Descriptive video title (used for accessibility)
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Other props for container
 */
export default function YoutubeEmbedCard({ src = '', title = '', ...props }) {
    const captionId = useId();
    const containerRef = useRef(null);

    const iframeProps = {
        frameBorder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        referrerPolicy: 'strict-origin-when-cross-origin',
        allowFullScreen: true,
        loading: 'lazy',
        title,
        'aria-labelledby': captionId
    };

    const handleIframeLoad = () => {
        if (containerRef.current) {
            containerRef.current.dataset.loaded = 'true';
        }
    };

    return (
        <Card
            {...props}
            ref={containerRef}
            data-loaded="false"
            className={cn(
                `group/ytc aspect-video overflow-hidden rounded-2xl 
                bg-neutral-500 shadow-md shadow-black transition-all 
                animate-pulse data-[loaded=true]:animate-none`,
                props.className
            )}
        >
            <iframe
                onLoad={handleIframeLoad}
                src={src}
                {...iframeProps}
                className="size-full transition-opacity duration-1000 opacity-0 group-data-[loaded=true]/ytc:opacity-100"
            />
            <figcaption id={captionId} className="sr-only">
                {title}
            </figcaption>
        </Card>
    );
}
