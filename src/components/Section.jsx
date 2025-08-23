export default function Section({ title, children }) {
    return (
        <div className="section workbench-font lowercase">
            <div className="title text-2xl">{ title }</div>
            <div className="section-content p-3">
                { children }
            </div>
        </div>
    );
}
