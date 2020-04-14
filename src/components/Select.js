import React from 'react'

const Select = ( {options, id, set} ) => {

    return(
        <select id={id} onChange={(e) => set(e.target.value)}>
            {options.map(element => <option key={element} value={element}>{element}</option>)}
        </select>
    )
        
}

export default Select