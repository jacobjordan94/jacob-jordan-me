import YoutubeEmbedCard from "../../components/YoutubeEmbedCard";
import YoutubeEmbedContainer from "../../components/YoutubeEmbedContainer";
import Job from "./Job";

export default function UPMCJob({ job }) {
    return  (
        <Job job={job}>
            <YoutubeEmbedContainer>
                <YoutubeEmbedCard src="https://www.youtube.com/embed/hapeY6k6jC8" title="New App Aims To Address Rise Of Mental Health Issues In Teens"/>
                <YoutubeEmbedCard src="https://www.youtube.com/embed/tQ-r6KKAuj4" title="Free phone app could help teens with depression and anxiety" />
                <YoutubeEmbedCard src="https://youtube.com/embed/5Pu7xv6NcMo" title="What is RxWell?" />
            </YoutubeEmbedContainer>
        </Job>
    );
}
