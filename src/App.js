import React , {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import SortBtn from './components/SortBtn'
import SearchBar from './components/SearchBar'
import TotalWeight from './components/TotalWeight';

function App() {

  const [pokemonList, setPokemonList] = useState([])

  // const request = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'

  const getPokemons = ()=>{
    let pokemonTable = []
  for (let i = 1; i < 21; i++) {

    const request = `https://pokeapi.co/api/v2/pokemon/${i}/`
    const getData = async ()=>{
      const response = await fetch(request)
      const data = await response.json();
      pokemonTable.push({
        name:data.name,
        types:data.types,
        id:data.id,
        height:data.height,
        weight:data.weight,
        img:data.sprites.front_default,
        abilities:data.abilities,
      });
    }
    getData();
  }
  setPokemonList(pokemonTable)
}
  
    
    useEffect(() => {
      getPokemons();
    }, [])


    const sortByID = ()=>{
      let arrayToSort = [...pokemonList]
      let arraySorted = arrayToSort.sort((a,b)=>a.id-b.id)
      setPokemonList(arraySorted)
    } 
    const sortByName = ()=>{
      let arrayToSort = [...pokemonList]
      let arraySorted = arrayToSort.sort((a,b)=>a.name-b.name)
      setPokemonList(arraySorted)
    } 
    const sortByType = ()=>{
      let arrayToSort = [...pokemonList]
      let arraySorted = arrayToSort.sort((a,b)=>a.type-b.type)
      setPokemonList(arraySorted)
    } 

    const handleSearch = (value)=>{
      let arrayData = [...PokemonList]

      let result = arrayData.filter(pokemon =>pokemon.name.includes(value))
      setPokemonList(result)
    }

  return (
    <div className="App">
      <h1>La liste des pokemons</h1>
      <PokemonList pokemonList={pokemonList}/>
      <SortBtn sortByID={sortByID} sortByName={sortByName} sortByType={sortByType}/>
      <SearchBar handleSearch={handleSearch}/>
      <TotalWeight pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
