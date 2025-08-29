import { useEffect, useState } from 'react';
import StarIcon from '../../components/icons/StarIcon';
import SourceCodeHandsIcon from '../../components/icons/SourceCodeHandsIcon';
import AppLink from '../../components/AppLink';

export default function AboutPage({}) {
    return (
        <div className="about-page h-full flex flex-col items-center justify-around text-neutral-500">
            <div className="text-neutral-500 text-xl gap-4">
                <div className='indent-4'>
                    hello, this website was made using react and tailwind. it was created in q3 of 2025. <br />
                    thank you for visiting it.
                </div>
                {/* <div className='mt-8'>
                    <div className='text-center'>this website is open source!</div>
                    <div className="flex my-4 justify-center">
                        <SourceCodeHandsIcon className='size-24' />
                    </div>
                    <div className="text-center">the source code is available to view on <AppLink className='border-b-2 text-neutral-400' href="https://github.com/jacobjordan94/jacob-jordan-me">github</AppLink>.</div>
                </div> */}
            </div>
            <div className="source-code">
                                    <div className='text-center'>this website is open source!</div>
                    <div className="flex my-4 justify-center">
                        <SourceCodeHandsIcon className='size-24' />
                    </div>
                    <div className="text-center">the source code is available to view on <AppLink decoration={false} className='border-b-2 text-neutral-400' href="https://github.com/jacobjordan94/jacob-jordan-me">github</AppLink>.</div>
            </div>
            <div className="ai-is-bad pe-4">
                <div className="inline-flex scale-[0.75]">
                    <Badge />
                </div>
            </div>
        </div>
    );
}

const Badge = () => 
    <div className="badge text-neutral-300 relative size-36 *:absolute *:top-0 *:bottom-0 *:left-0 *:right-0">
        <div>
            <TextRing className="w-full h-full text-2xl top-[-55px]" deg={8} text={'made in u.s.a.'} start={-50} />
        </div>
        <div className="flex items-center justify-center">
            <div className="icon-wrap size-28 mb-4">
                <StarIcon className='w-full h-full text-neutral-400' />
            </div>
        </div>
        <div>
            <TextRing className="w-full h-full text-2xl bottom-[-60px]" spokeLength='h-5/6' deg={8} text={'no a.i. or llms used'} start={-76} upsideDown={true} />
        </div>
        <div className="bullets flex items-center justify-between">
            <span className='ms-[-36px] mb-[32px]'>&bull;</span>
            <span className='me-[-40px] mb-[30px]'>&bull;</span>
        </div>
    </div>

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
