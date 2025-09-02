export default function YoutubeEmbedCard({ src = '', title = '', ...props }) {
    const defaultProps = {
        frameborder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        referrerpolicy: '',
        allowfullscreen: true,
    };
    return <div {...props} className={"youtube-card rounded-2xl overflow-hidden shadow-black shadow-2xl " + props.className}>
               <iframe src={src} title={title} { ...defaultProps } className="w-full aspect-video" />
           </div>
}