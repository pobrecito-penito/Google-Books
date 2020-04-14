import React from 'react'

const Pages = ({pages,handleClick}) => {
    let arr = [];
    for(let i = 0; i < pages; i++){
        arr.push(i);
    }

    return(
        <div className="pages">
            {arr.map(el => <button key={el} onClick={() => handleClick(el)}>{el+1}</button>)}
        </div>
    )
}

export default Pages