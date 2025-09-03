export default function YoutubeEmbedContainer({ ...props }) {
    return (
        <div {...props} className={"youtube-embed-container flex flex-col gap-8 @xl:grid @xl:grid-flow-col " + props.className}>
            { props.children }
        </div>
    );
}