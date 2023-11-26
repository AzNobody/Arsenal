<template>
  <h1>Jeux populaires</h1>

  <div class="product-container">
    <div class="product-box" v-for="game in mygames" :key="game.id">
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
      mygames: games
    }
  }
};
</script>
