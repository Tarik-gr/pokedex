import React , {useState} from 'react'


const SearchBar = ({handleSearch}) => {
    const [searchInfo, setSearchInfo] = useState('') // search input state 
    // handle change on input 
    const handleChange = (e)=>{
        setSearchInfo(e.target.value)
    }

    return (
        <div>
            <form className="search-form" onChange={(e)=>handleSearch(e,searchInfo)}>
                <label htmlFor="searchInput"></label>
                <input type="text" value={searchInfo} onChange={handleChange} id='searchInput'/>
                <button type="submit">Chercher</button>
            </form>
        </div>
    )
}

export default SearchBar