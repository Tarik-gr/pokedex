import React, {useState} from 'react'
import Description from './Description'

const PokemonList = ({pokemonList}) => {
    const [display, setDisplay] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]) // state of all the description display x 20

    // handle display of each description based on the id pokemon
    const handleDisplay = (id)=>{
        let newDisplay= [...display]
        newDisplay[id-1]= !display[id-1]
        setDisplay(newDisplay)
    }

    return (
        <div> 
            {pokemonList.map((pokemon, index)=>(
            <div onClick={()=>handleDisplay(pokemon.id)} key={index} className='listItemContainer'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className ='listInfo'>
                    <div>Nom : {pokemon.name}</div>
                    <ul>Type : {pokemon.types.map(type=><li>{type.type.name}</li>)}</ul>
                </div>
                <div className="pokemon-id">ID : {pokemon.id}</div>
                <Description display={display[pokemon.id-1]} pokemon={pokemon}/>
            </div>))}
        </div> 
    )
}

export default PokemonList
