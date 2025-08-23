import Section from "./Section";

export default function Education({}) {
    return (
        <Section title="education">
            <div className="education">
                <div className="school-name text-lg">the university of texas permian basin &mdash; odessa, tx</div>
                <div className="degree text-neutral-500 items-center">
                    <span>b.s. computer science; minor in mathematics</span>
                    <span className="text-xs mx-3 text-neutral-200">&bull;</span>
                    <span className="text-xs">8/12 &mdash; 12/15</span>
                </div>
                <div className="courses-taken mt-4">
                    <div className="title">courses taken:</div>
                    <div className="courses mt-2 ms-6">
                        <ul className="list-['>'] *:ps-2 grid">
                            <li>introduction to computer science i & ii</li>
                            <li>information systems</li>
                            <li>digital computer organization</li>
                            <li>data structures</li>
                            <li>c programming</li>
                            <li>discrete mathematics</li>
                            <li>programming languages</li>
                            <li>database systems</li>
                            <li>multimedia and web development</li>
                            <li>introduction to game development</li>
                            <li>data communications</li>
                            <li>software engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}