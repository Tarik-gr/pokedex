// export const pokemonData = [
//     {
//         name:'bulbasaur',
//         types:[{name:'grass'},{name:'poison'}],
//         id:1,
//         height:7,
//         weight:69,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//         abilities:[{ability:'overgrow'}, {ability:'chlorophyll'}],
//       },    {
//         name:'ivysaur',
//         types:[{name:'grass'},{name:'poison'}],
//         id:2,
//         height:10,
//         weight:130,
//         img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
//         abilities:[{ability:'overgrow'}, {ability:'chlorophyll'}],
//       },    {
//         name:'venusaur',
//         types:[{name:'grass'},{name:'poison'}],
//         id:3,
//         height:20,
//         weight:1000,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//         abilities:[{ability:'overgrow'}, {ability:'chlorophyll'}],
//       },    {
//         name:'charmander',
//         types:[{name:'fire'}],
//         id:4,
//         height:6,
//         weight:85,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//         abilities:[{ability:'blaze'}, {ability:'solar-power'}],
//       },    {
//         name:'charmeleon',
//         types:[{name:'fire'}],
//         id:5,
//         height:11,
//         weight:190,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
//         abilities:[{ability:'blaze'}, {ability:'solar-power'}],
//       },{
//         name:'charizard',
//         types:[{name:'fire'}, {name: 'flying'}],
//         id:6,
//         height:17,
//         weight:905,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
//         abilities:[{ability:'solar-power'}],
//       },{
//         name:'squirtle',
//         types:[{name:'water'}],
//         id:7,
//         height:5,
//         weight:90,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//         abilities:[{ability:'torrent'}, {ability:'rain-dish'}],
//       },{
//         name:'wartortle',
//         types:[{name:'water'}],
//         id:8,
//         height:10,
//         weight:225,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
//         abilities:[{ability:'torrent'}, {ability:'rain-dish'}],
//       },{
//         name:'blastoise',
//         types:[{name:'water'}],
//         id:9,
//         height:16,
//         weight:855,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//         abilities:[{ability:'torrent'}, {ability:'rain-dish'}],
//       },{
//         name:'caterpie',
//         types:[{name:'bug'}],
//         id:10,
//         height:3,
//         weight:29,
//         img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
//         abilities:[{ability:'shield-dust'}, {ability:'run-away'}],
//       }
// ]


let pokemonData = []
const importList = async(i) =>{
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(res => pokemonData.push(res))  
  }
  for (let i = 1; i < 21; i++) {
    importList(i);
  }
export default pokemonData;
