import './App.css';
import React ,{useState, useEffect} from 'react'
import pokemonData from './components/data'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import SortBtn from './components/SortBtn'
import TotalWeight from './components/TotalWeight'

function App() {

  const initialPokemonList = pokemonData // imported data 
  const [pokemonList, setPokemonList] = useState(initialPokemonList) // pokemon List state
  const [start, setStart] = useState(false)



  // sort by Id function 
  const sortByID = ()=>{
    let arrayToSort = [...pokemonList]
    let arraySorted = arrayToSort.sort((a,b)=>a.id-b.id)
    setPokemonList(arraySorted)
  } 

  // sort by name function 
  const sortByName = ()=>{
    let arrayToSort = [...pokemonList]
    console.log(arrayToSort)
    arrayToSort.sort((a,b)=>{
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB){return -1}
      if (nameA > nameB){return 1}
      return 0
    })
    setPokemonList(arrayToSort)
  } 

  // sort by type function 
  const sortByType = ()=>{
    let arrayToSort = [...pokemonList]
    arrayToSort.sort((a,b)=>{
      let typeofA = a.types[0].type.name
      let typeofB = b.types[0].type.name
      if (typeofA < typeofB){return -1}
      if (typeofA > typeofB){return 1}
      return 0
    })
    setPokemonList(arrayToSort)
  } 

  // handle search function 
  const handleSearch = (e,value)=>{
    e.preventDefault();
    let arrayData = [...initialPokemonList]
    let result = arrayData.filter(pokemon =>{
      let types = ''
      pokemon.types.forEach(type=>types+=`${type.type.name} `)
      return (pokemon.name.includes(value) || types.includes(value))
    })
    setPokemonList(result)
  }

  const startTheGame =()=>{
    setStart(prev=>!prev)
  }

  return (
    <div className="App-container">
      <div className={`overlay visible ${start && 'invisible'}`} onClick={startTheGame}>CLICK TO START</div>
      <h1>Pokédex</h1>
      <SortBtn sortByID={sortByID} sortByName={sortByName} sortByType={sortByType}/>
      <SearchBar handleSearch={handleSearch}/>
      <PokemonList pokemonList={pokemonList}/>
      <TotalWeight pokemonList={initialPokemonList}/>
    </div>
  );
}

export default App;
