export default function UnderConstructionBanner({ className, ...props }) {
    const stripe = 'bg-[repeating-linear-gradient(-45deg,#000,#000_10px,#ffd900_10px,#ffd900_20px)] ';
    return (
        <div {...props} className={"under-construction-banner py-[3px] font-[MisterPixel] border-y-4 border-black text-center text-black " + stripe + className} >
            <div className="bg-[#ffd900] border-black border-y-4 text-xs">under construction</div>
        </div>
    );
}
