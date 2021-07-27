import React from 'react'

const PokemonList = ({pokemonList}) => {
    console.log(pokemonList)
    return (
        <div>
            {pokemonList.map((pokemon, index)=>(
            <div key={index} className='list'>
                <img src={pokemon.img} alt={pokemon.name} />
                <div>{pokemon.name}</div>
                <div>{pokemon.types[0].type}</div>
                <div>{pokemon.id}</div>
            </div>))}
        </div> 
    )
}

export default PokemonList
