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
      tagSearch: "",
      activeTags: [],
      priceFilter: {
        0: "Gratuit",
        1: "Moins de 6$",
        2: "Moins de 12$",
        3: "Moins de 18$",
        4: "Moins de 24$",
        5: "Moins de 30$",
        6: "Moins de 36$",
        7: "Moins de 42$",
        8: "Moins de 48$",
        9: "Moins de 54$",
        10: "Moins de 60$",
        11: "Moins de 66$",
        12: "Moins de 72$",
        13: "N'importe quel prix"
      },
      priceRange: 13,
      showDropdown: false,
    }
  },
  computed: {
    searchGame() {
      let games = this.mygames.filter((p) => {
        return p.name.toLowerCase().indexOf(this.gameSearch.toLowerCase()) !== -1;
      });
      if (this.activeTags !== "")
      {
        this.activeTags.forEach(filterTag => {
          games = games.filter((p) => {
            return p.tags.indexOf(filterTag) !== -1;
          });
        })
      }
      if (this.priceRange !== 13)
      {
        games = games.filter((p) => {
          if (p.price > (this.priceRange * 6))
            return p.name.indexOf(p.name);
          else
            return -1;
        })
      }
      return games;
    },
    searchTags() {
      return this.tags.filter((p) => {
        return p.tag.toLowerCase().indexOf(this.tagSearch.toLowerCase()) !== -1;
      });
    },
    activeTagsList() {
      return this.activeTags;
    }
  }
};
</script>

<template>
  <div class="line-break"></div>
  <h1 id="gameListTitle">Jeux populaires</h1>
  <div class="search-bar">
    <div id="magnifyingGlass">
      <svg id="magnifyingGlassIcon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
        <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
      </svg>
    </div>
    <input id="gameSearchBarInput" type="text" maxlength="60" v-model="gameSearch" placeholder="Rechercher un jeu..."/>
    <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false" class="dropdown">
      <button @click="showDropdown = !showDropdown" class="dropdownbtn">
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="16" viewBox="0 0 384 512">
          <path fill="#c0c0c0"
                d="M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"/>
        </svg>
      </button>
      <div class="dropdown-content" v-if="showDropdown">
        <div class="slidecontainer">
          <input v-model="priceRange" type="range" min="0" max="13" value="13" style="width: 100%">
          <div style="text-align: center">Prix: {{ priceFilter[priceRange] }}</div>
        </div>
        <div>Recherche par tag: </div>
        <div class="search-bar">
          <input id="tagSearchBarInput" type="text" maxlength="20" v-model="tagSearch"/>
        </div>
        <span v-for="tag in activeTagsList" :key="tag">
          <div style="margin: 10px;" v-show="activeTags.indexOf(tag) !== -1"><button @click="activeTags.splice(activeTags.indexOf(tag),1);">-</button> {{ tag }}</div>
        </span>
        <span v-for="tag in searchTags.slice(0,7 + activeTags.length)" :key="tag.tag">
          <div style="margin: 10px;" v-show="activeTags.indexOf(tag.tag) === -1"><button @click="activeTags.push(tag.tag);">+</button> {{ tag.tag }}</div>
        </span>
      </div>
    </div>
  </div>
  <div class="product-container">
    <div class="product-box" v-for="game in searchGame" :key="game.id">
      <router-link :to="'/jeu/' + game.id">
        <h3>{{ game.name }}</h3>
        <p>{{ game.tags }}</p>
        <img :src="'../../src/image/' + game.image" alt="Game image" style="width: 100%;"> <!--src="{{game.image}}-->
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.line-break {
  margin-top: 50px;
  position: absolute;
  left: 40%; /* Adjust the left value to center the line */
  width: 20%; /* Adjust the width value according to your preference */
  height: 3px;
  background-color: #90312c; /* Change the color if needed */
  z-index: 1; /* Ensure the line is below the title */
}

#gameListTitle {
  text-align: center;
  font-size: 34pt;
  text-transform: uppercase;
  margin-top: 120px; /* Adjust the margin-top value according to your preference */
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
  border: 1px solid #b82626;
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

#tagSearchBarInput {
  width: 96%;
  height: 30px;
  font-size: 14pt;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 5px;
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

.dropdownbtn {
  background-color: black;
  width: 100%;
  padding: 14px;
  margin-left: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.3s ease;
}

.dropdownbtn:hover {
  background-color: #555;
}

.dropdown-content {
  position: absolute;
  display: block;
  background-color: #F2E2C4;
  width: 240px;
  right: 3%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;
}

.dropdown-content > div {
  color: black;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;
}

.dropdown-content > div:last-child {
  border-bottom: none;
}

.dropdown-content > div:hover {
  background-color: #ddd;
}
</style>