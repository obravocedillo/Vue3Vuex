<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>

  <div class="pokemons-container">
      <ul>
          <li v-for="pokemon in pokemons" :key="pokemon.name">
              {{pokemon.name}}
          </li>
      </ul>
  </div>
</template>

<script>
// Import functions needed from vue
import { computed, onMounted } from "vue";
// Import composition API function to access store
import { useStore } from "vuex";

export default {
    // Component name
    name: "HelloWorld",

    // Composition API setup
    setup() {
        // Composition API function to access store
        const store = useStore();

        // Get message from store as computed property to trigger rendering on property changes
        let message = computed(() => store.getters["MESSAGE"]);

        /**
         * Get pokemons from store as computed property to trigger rendering on property changes
         * be carefull when having objects arrays inside of objects, computed properties won't trigger
         * rendering if one of the properties of an object of the array changes only if the whole array is
         * changed
         */
        let pokemons = computed(() => store.getters["POKEMONS"]);

        /**
         * @desc dispatch action to get pokemons from API
         */
        const getPokemons = async () => {
            // Dispatch GET_POKEMONS action without payload
           await store.dispatch("GET_POKEMONS", {});
        };

        /**
         * Run functionality on component mount
         */
        onMounted(() => {
            // Get pokemons
            getPokemons().then(() => {})
        });

        return {
            message,
            pokemons,
        };
    },
};
</script>

<style scoped>
</style>
