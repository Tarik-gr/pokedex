import React from 'react'

const SortBtn = ({sortByID, sortByName, sortByType}) => {
    return (
        <div className='sort-btn'>
            <button onClick={sortByID}>sort by id</button>
            <button onClick={sortByName}>sort by name</button>
            <button onClick={sortByType}>sort by type</button>
        </div>
    )
}

export default SortBtn
