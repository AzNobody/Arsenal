<script>
import games from "@/json/games.json";
import {useCartArrayStore} from "@/stores/cart";

export default {
  name: "CartList",
  computed: {
    getCartHandler() {
      const cartIdList = useCartArrayStore().getCart;
      const cartGameList = [];

      for (let i = 0; i < games.length; i++) {
        for (let j = 0; j < cartIdList.length; j++) {
          if (games[i].id === cartIdList[j]) {
            cartGameList.push(games[i]);
          }
        }
      }

      return cartGameList;
    },
  },
  methods: {
    removeFromCartHandler(gameId) {
      useCartArrayStore().removeFromCart(gameId);
    },
  },
};
</script>

<template>
  <div id="cart-items">
    <h1>Votre Panier</h1>
    <div id="cart-box" v-for="game in getCartHandler" :key="game.id">
      <router-link :to="'/jeu/' + game.id">
        <img :src="'../../src/image/' + game.image" alt="Game image">
      </router-link>
      <h3 id="gamePrice">{{ game.price }}$</h3>
      <div class="product-overlay">
        <h1>{{ game.name }}</h1>
        <h2 style="height: 27%; overflow-y: hidden">{{ game.description }}</h2>
        <h4>Tags: {{game.tags }}</h4>
        <div class="item-removal">
          <a id="cartButton" @click="removeFromCartHandler(game.id)" class="topBarButton">
            <font-awesome-icon icon="fa-solid fa-x" size="3x" style="color: #f5f5f5;"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cart-items {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 90%;
  margin-left: 5%;
}

#cartButton {
  cursor: pointer;
}
</style>