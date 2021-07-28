import React from 'react'

const TotalWeight = ({pokemonList}) => {
    // console.log(pokemonList)

    let total = pokemonList.reduce((a,b)=> parseInt(a+b.weight),0)
    return (
        <div className="totalweight">
            <h2>Le poids total de tous les pokémons est : {total}</h2>
        </div>
    )
}

export default TotalWeight
