export default function Section({ title, children }) {
    return (
        <div className="section">
            <div className="title">{ title }</div>
            <div className="section-content">
                { children }
            </div>
        </div>
    );
}