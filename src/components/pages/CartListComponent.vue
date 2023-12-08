<script>
import games from "@/json/games.json";
import { useCartArrayStore } from "@/stores/cart";

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
  <h1 class="main-title">Votre Panier</h1>
  <div class="line-break"></div>
  <div class="cart-items">
    <div class="cart-box" v-for="game in getCartHandler" :key="game.id">
      <router-link :to="'/jeu/' + game.id">
        <img :src="'../../src/image/' + game.image" class="game-image" alt="Game image">
      </router-link>
      <h1 class="game-title">{{ game.name }}</h1>
      <h3 class="game-price">{{ game.price }}$</h3>
      <div class="item-removal">
        <a class="cart-btn" @click="removeFromCartHandler(game.id)">
          <font-awesome-icon icon="fa-solid fa-x" size="3x" style="color: #000000;" />
        </a>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button class="pay-button">Payer</button>
  </div>
</template>

<style scoped>
.main-title {
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
}

.line-break {
  margin-top: 10px;
  position: absolute;
  left: 40%;
  width: 20%;
  height: 3px;
  background-color: #90312c;
  z-index: 1;
}

.cart-items {
  display: flex;
  width: 1000px;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 60px auto;
}

.cart-box {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 10px;
  padding: 5px 5px 0 5px;
  border-radius: 10px;
  overflow: hidden;
}

.cart-box a {
  width: 200px;
  margin-right: 20px;
}

.game-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.game-title {
  font-size: 28px;
  margin: 0 20px 0 0;
}

.game-price {
  text-align: right;
  flex: 1;
  margin-right: 40px;
}

.item-removal {
  cursor: pointer;
  text-align: right;
  right: 0;
}

.button-container {
  text-align: center;
  margin-bottom: 50px;
}

.pay-button {
  margin: 0 auto;
  display: inline-block;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  background-color: #1dbb1d;
  transition: all 0.2s ease-in-out;
}

.pay-button:hover {
  background-color: #288211;
  scale: 1.1;
}
</style>