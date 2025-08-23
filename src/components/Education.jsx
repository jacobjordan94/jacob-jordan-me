import { useContext } from "react";
import Section from "./Section";
import { GlobalContext } from "../App";

export default function Education({}) {
    const { education: { name, city, degree, dates, courses } } = useContext(GlobalContext);
    const Courses = () => courses.map((course, i) => <li key={i}>{ course }</li>);
    return (
        <Section title="education">
            <div className="education">
                <div className="school-name text-lg">{ name } <span className="text-sm">&bull;</span> { city }</div>
                <div className="degree text-neutral-500 items-center">
                    <span>{ degree }</span>
                    <span className="text-xs mx-3">&bull;</span>
                    <span className="text-sm">{ dates[0] } &mdash; { dates[1] }</span>
                </div>
                <div className="courses-taken mt-4">
                    <div className="title">courses taken:</div>
                    <div className="courses mt-2 ps-2.5 text-neutral-500">
                        <CourseContainer courses={courses} />
                    </div>
                </div>
            </div>
        </Section>
    );
}

function CourseContainer({ courses }) {
    const Courses = () => 
        courses.map((course, i) => <Course key={i}>{ course }</Course>)
    return (
        <div className="course-container flex flex-col flex-wrap @md:flex-row @md:*:flex-1/2">
            <Courses />
        </div>
    );
}

function Course({ children }) {
    return (
        <div className="course flex gap-2">
            <div className="before text-xs inline-flex items-start mt-1">{ '>' }</div>
            <div className="course-name flex-grow pe-4">{ children }</div>
        </div>
    );
}