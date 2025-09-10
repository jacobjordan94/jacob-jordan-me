export default function ResumePDF({ pageSize }) {

    const PDFs = () => [
        {
            size: 'letter',
            src: './jacob-jordan-resume.pdf',
        },
        {
            size: 'business',
            src: './jacob-jordan-business-card.pdf',
        },
    ].map((pdf, i) => 
        <div key={i} data-active={pdf.size === pageSize} className="pdf-container hidden data-[active=true]:contents">
            <iframe  src={pdf.src} className="w-full h-full" />
        </div>
    );

    return (
        <div className="resume-pdf hidden pointer-coarse:contents">
            <PDFs />
        </div>
    );
}