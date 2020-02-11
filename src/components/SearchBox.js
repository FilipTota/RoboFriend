import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className="tc pa3 bg-lightest-blue ba b--green" 
            type="text" 
            placeholder="Search for robot"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox