import { useEffect, useState } from "react";

export default function List({ items, cols = 2, className = '' }) {
    const [ itemsChunked, setItemsChunked ] = useState();
    useEffect(() => {
        if(items) {
            setItemsChunked(chunkArray(items, Math.ceil(items.length / cols)))
        }
    }, [ items ]);
    return ( itemsChunked &&
        <div className={`list flex flex-col gap-2 @3xl:flex-row @3xl:gap-4` + className}>
        {
            itemsChunked.map((chunk, i) => 
                <div className="chunk flex flex-col gap-2" key={i + '-chunk'}>
                {
                    chunk.map((item, j) => 
                        <ListItem item={item} key={j + '-list-item'} />
                    )
                }
                </div>
            )
        }
        </div>
    );
}

function ListItem({item, className = ''}) {
    return <div className={"l-item flex " + className}>
               <div className="marker me-2 inline-flex text-xs items-start pt-1">{ '>' }</div>
               <div className="item-text lowercase ">{ item }</div>
           </div>
}

function chunkArray(arr, chunkSize) {
    let r = [];
    for(let i = 0, len = arr.length; i < len; i+= chunkSize) {
        r.push(arr.slice(i, i + chunkSize));
    }
    return r;
}