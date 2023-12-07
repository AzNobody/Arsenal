<script>
import TopBarComponent from "@/components/pages/TopBarComponent.vue";
import games from "@/json/games.json";
import {useCartArrayStore} from "@/stores/cart";

export default {
  name: "GameComponent",
  components: {TopBarComponent},
  data() {
    return {
      game: games[this.$route.params.id - 1],
    }
  },
  methods: {
    addToCartHandler(gameId) {
      const store = useCartArrayStore();
      store.addToCart(gameId);
    }
  }
};
</script>

<template>
  <div id="HomePage">
    <TopBarComponent></TopBarComponent>
    <div class="product-container">
      <div class="product-title">
        <h1>{{ game.name }}</h1>
      </div>
      <div class="product-box">
        <img :src="'../../src/image/' + game.image" alt="Game image">
        <p>{{ game.description }}</p>
        <h3>Score: {{ game.ratings }} / 5</h3>
        <h3>Date de parution: {{ game.release_date }}</h3>
        <h3>Developpeur: {{ game.developer }}</h3>
        <h3>Editeur: {{ game.editor }}</h3>
        <h3>Tags populaires: {{ game.tags }}</h3>
        <h3>Classification ESRB: {{ game.esrb_rating }}</h3>
        <div id="shoppingCart" @click="addToCartHandler(game.id)">
          <h3>{{ game.price }}$ Ajouter au panier</h3>
          <a id="cartButton" class="topBarButton">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="3x" style="color: #f5f5f5;"/>
          </a>
        </div>
        <div class="product-dlcs">
          <h3>DLC disponible(s):</h3>
          <div v-for="dlc in game.dlc">
            <div>
              {{ dlc.name }} / {{ dlc.price }}$ / {{ dlc.release_date}}
            </div>
          </div>
        </div>
      </div>
      <div class="product-details">
        <h3>Disponible sur: {{ game.platforms }}</h3>
        <table>
          <tr>
            <th>Configuration minimale:</th>
            <th></th>
            <th>Configuration recommandée:</th>
            <th></th>
          </tr>
          <tr>
            <td>Système d'exploitation</td>
            <td>{{ game.minimal_config.os }}</td>
            <td>Système d'exploitation</td>
            <td>{{ game.recommended_config.os }}</td>
          </tr>
          <tr>
            <td>Processeur</td>
            <td>{{ game.minimal_config.processor }}</td>
            <td>Processeur</td>
            <td>{{ game.recommended_config.processor }}</td>
          </tr>
          <tr>
            <td>Mémoire Vive</td>
            <td>{{ game.minimal_config.memory }}</td>
            <td>Mémoire Vive</td>
            <td>{{ game.recommended_config.memory }}</td>
          </tr>
          <tr>
            <td>Graphiques</td>
            <td>{{ game.minimal_config.graphics }}</td>
            <td>Graphiques</td>
            <td>{{ game.recommended_config.graphics }}</td>
          </tr>
        </table>
      </div>
      <div class="product-comments">
        <div v-for="comment in game.comments">
          <p>{{ comment.name }}</p>
          <p>{{ comment.datetime }}</p>
          <p>{{ comment.rating }} / 5</p>
          <p>{{ comment.commentary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  margin-top: 50px;
  gap: 20px;
  word-wrap: break-word;
  max-width: 90%;
  margin-left: 5%;
}

.product-title * {
  margin: 10px 0px;
}

.product-box {
  display: flex;
  column-gap: 100px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 650px;
  box-sizing: border-box;
  border-radius: 10px;
}

.product-box img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.product-box p {
  font-size: 20pt;
  width: 40%;
}

h1 {
  font-size: 34pt;
}

#shoppingCart {
  background-color: forestgreen;
  color: whitesmoke;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  border-radius: 25px;
  cursor: pointer;
}

#shoppingCart h3 {
  font-size: 34pt;
}

</style>