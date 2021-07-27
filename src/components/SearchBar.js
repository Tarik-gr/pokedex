import React , {useState} from 'react'


const SearchBar = ({handleSearch}) => {
    const [searchInfo, setSearchInfo] = useState('')
    const handleChange = (e)=>{
        setSearchInfo(e.target.value)
    }

    return (
        <div>
            <form onSubmit={()=>handleSearch(searchInfo)}>
                <label for="searchInput"></label>
                <input type="text" value={searchInfo} onChange={handleChange} id='searchInput'/>
                <button type="submit">Chercher</button>
            </form>
        </div>
    )
}

export default SearchBar
