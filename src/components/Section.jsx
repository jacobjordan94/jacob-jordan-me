export default function Section({ title, children }) {
    return (
        <div className="section workbench-font lowercase p-2">
            <div className="title text-2xl">{ title }</div>
            <div className="section-content p-3">
                { children }
            </div>
        </div>
    );
}
