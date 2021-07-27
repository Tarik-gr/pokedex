import React from 'react'

const TotalWeight = ({pokemonList}) => {

    let total = pokemonList.reduce((a,b)=>a.weight+b.weight)
    return (
        <div className="totalweight">
            <h2>Le poids total des pokémons est : {total}</h2>
        </div>
    )
}

export default TotalWeight
