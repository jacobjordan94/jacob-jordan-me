export default function YoutubeEmbedCard({ src = '', title = '', ...props }) {
    const defaultProps = {
        frameBorder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        referrerPolicy: 'strict-origin-when-cross-origin',
        allowFullScreen: true,
    };
    return <div {...props} className={"youtube-card rounded-2xl overflow-hidden shadow-black shadow-md " + props.className}>
               <iframe src={src} title={title} { ...defaultProps } className="w-full aspect-video" />
           </div>
}