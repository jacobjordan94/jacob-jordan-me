export default function ResumePDF({ pageSize }) {

    const renderPDF = () => {
        switch(pageSize) {
            case 'letter':
            case 'a4':       return <iframe src="./jacob-jordan-resume.pdf" />;
            case 'business': return <iframe src="./jacob-jordan-business-card.pdf" />;
        }
    }

    return (
        <div className="resume-pdf hidden pointer-coarse:contents *:w-full *:h-full">
            { renderPDF() }
        </div>
    );
}