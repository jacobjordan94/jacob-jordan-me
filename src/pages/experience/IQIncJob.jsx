import YoutubeEmbedCard from "../../components/YoutubeEmbedCard";
import YoutubeEmbedContainer from "../../components/YoutubeEmbedContainer";
import Job from "./Job";

export default function IQIncJob({ job }) {
    return (
        <Job job={job}>
            <YoutubeEmbedContainer>
                <YoutubeEmbedCard src="https://www.youtube.com/embed/ZaaYOwyecPA" title="RxWell by UPMC" />
                <YoutubeEmbedCard src="https://youtube.com/embed/vNDjXeQ2vCU" title="New Phone App Helps Teens With Anxiety, Stress, and Depression" />
            </YoutubeEmbedContainer>
        </Job>
    );
}
