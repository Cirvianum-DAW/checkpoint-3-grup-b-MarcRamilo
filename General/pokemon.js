// Afegeix aquí el codi de JS per a la pàgina pokemon.html
//Fetch per agafar les dades
async function request(paramatra) { 
try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${paramatra}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// request('ditto');
const pokemonsSelected = [];

async function getInfo(info){
    try{
        const data = await request(info);
        // console.log(data);
        const objecte = {
            id: data.id,
            name: data.name,
            height: data.height,
            habilitats:data.abilities,
            sprites: data.sprites
        }
       // console.log(objecte);

        return objecte;
    } catch (e){
        throw e;
    }
}
document.addEventListener('DOMContentLoaded', async function (event)  {
    const pokemon = await getInfo('132');
    const name = document.getElementById('name');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
    


    console.log(id)
    div.appendChild(id)
})


getInfo('131');