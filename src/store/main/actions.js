// src/store/main/actions.js

// Will contain  all actions of this module

let actions = {
    /**
     * Example action fetching Pokemons data and saving it on the state, using a mutation
     */
    GET_POKEMONS: (context) => {
        return new Promise((resolve, reject) => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
                .then(response => response.json())
                .then(pokemons => {
                    context.commit("SAVE_POKEMONS", pokemons.results);
                    resolve(pokemons.results);
                }).catch((err) => {
                reject(err);
            });
        });
    },
};

export default actions;
