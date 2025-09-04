import { useEffect, useState } from 'react';
import SourceCodeHandsIcon from '../../components/icons/SourceCodeHandsIcon';
import AppLink from '../../components/AppLink';
import SiteBadge from '../../components/SiteBadge';

export default function AboutPage({}) {
    return (
        <div className="about-page h-full flex flex-col items-center justify-between text-center text-neutral-300">
            <title>jacob-jordan.me - about</title>
            <div className="text-welcome text-xl gap-4 mt-4">
                hello, this website was made using react and tailwind. it was created in q3 of 2025. <br />
                thank you for visiting it.
            </div>
            <div className="responsive-message">
                <div className="desktop pointer-coarse:hidden">looks like you're on a desktop! check out this website on mobile, as well</div>
                <div className="mobile pointer-fine:hidden">you seem to be on a mobile device! be sure to check out the desktop version of this website too</div>
            </div>
            <div className="source-code">
                    <div className='text-center'>i'm open source!</div>
                    <div className="flex my-4 justify-center">
                        <SourceCodeHandsIcon className='size-24' />
                    </div>
                    <div className="text-center">the source code is available to view on <AppLink decoration={false} className='border-b-2 text-neutral-400' href="https://github.com/jacobjordan94/jacob-jordan-me">github</AppLink>.</div>
            </div>
            <div className="ai-is-bad mb-4 text-sm">
                <SiteBadge />
            </div>
        </div>
    );
}

const TextRing = ({ text, className, deg = 6, start = -45, upsideDown, spokeLength = 'h-full' }) => {
    const [ splitText, setSplitText ] = useState();
    useEffect(() => {
        if(text) {
            setSplitText(text.split(''));
        }
    }, [ text ])
    return ( splitText &&
        <div className={`relative text-center ${upsideDown ? 'scale-[1_-1] ' : ''}` + className}>
        {
            splitText.map((text, i) => <span key={i} className={`spoke absolute ${spokeLength}`} style={{ transform: `rotate(${start + (deg * i)}deg)`, transformOrigin: 'bottom center' }}>
                <span className={ upsideDown ? 'inline-block scale-[1_-1]' : '' }>
                    {text}
                </span>
            </span>)
        }
        </div>
    );
}
