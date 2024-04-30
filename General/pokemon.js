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

async function requestHability(param){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${param}`);
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
async function habilitats(id){
    try{
        const habilitats = await requestHability(id);
        return habilitats;
    } catch(e){
        throw e;
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
            weight : data.weight,
            habilitats:data.abilities,
            sprites: data.sprites
        }
        console.log(objecte);

        return objecte;
    } catch (e){
        throw e;
    }
}
async function getDescription(info){
    try{
        const data = await request(info);
        return objecte;
    } catch (e){
        throw e;
    }
}

document.addEventListener('DOMContentLoaded', async function (event)  {
    const pokemon = await getInfo('132');
    document.getElementById('name').innerHTML =('Nom:' + pokemon.name);
     document.getElementById('height').innerHTML =('Heigth: ' + pokemon.height);
     document.getElementById('weight').innerHTML =('Weigth: ' +pokemon.weight);
    habilitats = pokemon.habilitats;
    const hab = pokemon.habilitats.map((i) => i);
    document.getElementById('sprite').src = pokemon.sprites.back_default; 

    habilitats.forEach(element => {
        const h4 = document.createElement('h4')
        //document.querySelector('h4').innerHTML =(element.ability.name);
        h4.textContent = element.ability.name;
        const titol = document.querySelector('h4');
        titol.appendChild(h4);

        const description = document.createElement('p');
        //document.querySelector('h4').innerHTML =(element.ability.name);
        //description.textContent = element.ability;
        //const descripcioHTML = document.getElementById('description');
        //description.appendChild(descripcioHTML);
    });
    //console.log(habilitats)


    
})


