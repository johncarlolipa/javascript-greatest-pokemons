const pokemons = require("./data");

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons() {
  return pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
}

console.log(getAllFirePokemons()); //

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon() {
  let shortestName = pokemons[0];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name.length < shortestName.length) {
      shortestName = pokemons[i].name;
    }
  }

  return shortestName;
}

console.log(shortestPokemon());

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage() {
  const candyPokemons = pokemons.filter(
    (pokemon) => pokemon.candy_count !== undefined
  );

  const sum = candyPokemons.reduce(
    (sum, pokemon) => sum + pokemon.candy_count,
    0
  );
  const average = sum / candyPokemons.length;

  return Math.round(average);
}

console.log(candyAverage());

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arr) {
  const groundType = pokemons.filter((pokemon) =>
    pokemon.type.includes("Ground")
  );
  const imageGround = groundType.slice(0, 10).map((pokemon) => pokemon.image);
  return imageGround;
}

console.log(getGroundPokeImg(pokemons));

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
