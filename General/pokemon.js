// Afegeix aquí el codi de JS per a la pàgina pokemon.html
//Fetch per agafar les dades
async function request(paramatra) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${paramatra}`
    );
    if (!response.ok) {
      const errorText = document.getElementById("error");
      errorText.textContent = "Pokemon no trobat";
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errorText = document.getElementById("error");
    errorText.textContent = "Pokemon no trobat";
    throw error;
  }
}

async function requestHability(param) {
  try {
    const response = await fetch(param);
    if (!response.ok) {
      const errorText = document.getElementById("error");
      errorText.textContent = "Pokemon no trobat";
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
async function habilitatsTransform(id) {
  try {
    const habilitats = await requestHability(id);
    return habilitats.effect_entries[1];
  } catch (e) {
    const errorText = document.getElementById("error");
    errorText.textContent = "Pokemon no trobat";
    throw e;
  }
}
// request('ditto');
const pokemonsSelected = [];

async function getInfo(info) {
  try {
    const data = await request(info);
    // console.log(data);
    const objecte = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      habilitats: data.abilities,
      sprites: data.sprites,
    };
    console.log(objecte);

    return objecte;
  } catch (e) {
    const errorText = document.getElementById("error");
    errorText.textContent = "Pokemon no trobat";
    throw e;
  }
}
async function getDescription(info) {
  try {
    const data = await request(info);
    return objecte;
  } catch (e) {
    const errorText = document.getElementById("error");
    errorText.textContent = "Pokemon no trobat";
    throw e;
  }
}

document
  .getElementById("searchPokemon")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const id = document.getElementById("pokemonId");
    const pokemonId = id.value;
    const pokemon = await getInfo(pokemonId);
    if (pokemon.name == undefined) {
      const errorText = document.getElementById("error");
      errorText.style.backgroundColor = "red";
      errorText.textContent = "Pokemon no trobat";
      document.getElementById("name").innerHTML = "";
      document.getElementById("height").innerHTML =  "";
      document.getElementById("weight").innerHTML =  "";
      document.getElementById("sprite").src = "";
      document.getElementById("description").innerHTML = "";

    }
    document.getElementById("name").innerHTML = "Nom:" + pokemon.name;
    document.getElementById("height").innerHTML = "Heigth: " + pokemon.height;
    document.getElementById("weight").innerHTML = "Weigth: " + pokemon.weight;
    habilitats = pokemon.habilitats;
    const habURL = pokemon.habilitats.map((i) => i.ability.url);
    const errorText = document.getElementById("error");
    errorText.textContent = "Pokemon trobat";
    errorText.style.backgroundColor = "green";
    const description = await habilitatsTransform(habURL[0]);
    console.log(description);
    document.getElementById("sprite").src = pokemon.sprites.front_default;

    habilitats.forEach((element) => {
      const h4 = document.createElement("h4");
      //document.querySelector('h4').innerHTML =(element.ability.name);
      h4.textContent = element.ability.name;
      const titol = document.querySelector("h4");
      titol.appendChild(h4);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description.effect;
      const descriptionHTML = document.getElementById("description");
      descriptionHTML.appendChild(descriptionElement);
    });
  });
