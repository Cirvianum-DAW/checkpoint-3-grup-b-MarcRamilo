import { products } from './validacions.js';


// Aquest index només serveix per provar algunes funcions si vols fer ús de la consola
// per provar les funcions que has creat.

async function main() {
  try {
    const req = await products();
    console.log('req', products);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
