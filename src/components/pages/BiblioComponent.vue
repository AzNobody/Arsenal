<script>
import games from "@/json/games.json";
import tags from "@/json/tags.json";

export default {
  name: "GameList",
  data() {
    return {
      mygames: games,
      tags: tags,
      gameSearch: "",
      minGamesToShow: 3,
      maxGamesToShow: 6,
      selectedGame: null,
    }
  },
  computed: {
    searchGame() {
      let games = this.mygames.filter((p) => {
        return p.name.toLowerCase().indexOf(this.gameSearch.toLowerCase()) !== -1;
      });
      if (this.activeTags !== "") {
        this.activeTags.forEach(filterTag => {
          games = games.filter((p) => {
            return p.tags.indexOf(filterTag) !== -1;
          });
        })
      }
      if (this.priceRange !== 13) {
        games = games.filter((p) => {
          if (p.price > (this.priceRange * 6))
            return p.name.indexOf(p.name);
          else
            return -1;
        })
      }
      return games;
    },
    shuffledGames() {
      let gamesCopy = [...this.mygames];

      for (let i = gamesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gamesCopy[i], gamesCopy[j]] = [gamesCopy[j], gamesCopy[i]];
      }

      return gamesCopy.slice(0, Math.floor(Math.random() * (this.maxGamesToShow - this.minGamesToShow + 1)) + this.minGamesToShow);
    },
  },
  methods: {
    selectGame(game) {
      console.log('Game selected:', game);
      this.selectedGame = game;
      this.$nextTick(() => {
        this.$refs.gameDetailsModal.style.display = "block";
      });
    },
    closeGameDetails() {
      this.$refs.gameDetailsModal.style.display = "none";
      this.selectedGame = null;
    },
  },
};
</script>

<template>
  <div>
    <div class="line-break"></div>
    <h1 id="BiblioTitle">Ma Bibliothèque</h1>
    <div class="search-bar">
      <div id="magnifyingGlass">
        <svg id="magnifyingGlassIcon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
          <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      </div>
      <input id="gameSearchBarInput" type="text" maxlength="60" v-model="gameSearch"
             placeholder="Rechercher un jeu..."/>
    </div>
    <div class="product-container">
      <div class="product-box" v-for="game in shuffledGames" @click="selectGame(game)" :key="game.id">
        <h3>{{ game.name }}</h3>
        <p>{{ game.tags }}</p>
        <img :src="'../../src/image/' + game.image" alt="Game image" style="width: 100%;">
      </div>
    </div>
    <div v-if="selectedGame" class="game-details modal-content" ref="gameDetailsModal">
      <div class="game-details-content">
        <span class="close" @click="closeGameDetails">&times;</span>
        <h2 style="text-align: center;">{{ selectedGame.name }}</h2>
        <p><strong>Heures jouées:</strong> {{ selectedGame.hoursPlayed }}</p>
        <p><strong>Succès déverrouillés:</strong> {{ selectedGame.achievements }}</p>
        <p><strong>Dernière utilisation:</strong> {{ selectedGame.lastPlayed }}</p>
        <img :src="'../../src/image/' + selectedGame.image" alt="Game image" style="width: 100%; border-radius: 5px;">
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.line-break {
  margin-top: 80px;
  position: absolute;
  left: 40%;
  width: 20%;
  height: 3px;
  background-color: #90312c;
  z-index: 1;
}

#BiblioTitle {
  text-align: center;
  font-size: 34pt;
  text-transform: uppercase;
  margin: 120px 0 80px 0;
  position: relative;
}

.product-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 90%;
  margin-left: 5%;
}

.product-box {
  width: calc(25% - 15px);
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease, transform 0.3s ease;
}

.product-box:hover {
  box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.product-box img {
  width: 100%;
  height: 100%;
}

.product-box p {
  display: none;
}

.product-box h3 {
  display: none;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
}

#gameSearchBarInput {
  display: flex;
  width: 70%;
  height: 25px;
  font-size: 15pt;
  background-color: #F2E2C4;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

#gameSearchBarInput:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

#magnifyingGlass {
  position: absolute;
  right: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
}

.game-details {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #222;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  max-width: 400px;
  width: 100%;
  z-index: 2;
}

.game-details-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F2E2C4;
}

.game-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.game-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.game-details p {
  font-size: 16px;
  margin-bottom: 5px;
}

.product-box:hover + .game-details {
  display: block;
}

.modal-content {
  background-color: #222;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>