<template>
  <h1>Jeux populaires</h1>
  <div>
    <input type="text" v-model="search" />
  </div>
  <div class="product-container">
    <div class="product-box" v-for="game in searchGame" :key="game.id">
      <h3>{{ game.name }}</h3>
      <img :src="'../../src/image/' + game.image" alt="Game image" style="width: 100%;"> <!--src="{{game.image}}-->
    </div>
  </div>
</template>

<script>
import games from "@/json/games.json";
export default {
  name: "GameList",
  data() {
    return {
      mygames: games,
      search: ""
    }
  },
  computed: {
    searchGame() {
      return this.mygames.filter((p) => {
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  }
};
</script>
