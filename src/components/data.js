
let pokemonData = []
const importList = async(i) =>{
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(res => pokemonData.push(res))  
  }
  for (let i = 1; i < 21; i++) {
    importList(i);
  }
export default pokemonData;
