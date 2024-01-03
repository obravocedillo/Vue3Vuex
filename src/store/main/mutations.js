// src/store/main/mutations.js

// Will contain all the mutations or functions that will alter the state of this module

let mutations = {
    /**
     * Sets pokemon state variable to the array received on payload results
     */
    SAVE_POKEMONS: (state, payload) => {
        state.pokemons = payload;
    },
};

export default mutations;
