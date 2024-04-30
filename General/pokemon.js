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

async function getInfo(info){
    try{
        const data = await request(info);
        console.log(data);
        const objecte = data.map((i) =>({
            id: i.
        }))
    } catch (e){
        throw error;
    }
}

getInfo('ditto');