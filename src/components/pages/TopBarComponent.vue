<script setup>
import {ref} from "vue";
</script>

<template>
<div id="topBar">
  <img id="logo" src="/src/assets/logo.svg" alt="logo placeholder">
  <div id="topBarButtonGroup">
    <button ref="storeButton" class="topBarButton">
      <router-link to="/magasin">Magasin</router-link>
    </button>
    <button ref="libraryButton" class="topBarButton">
      <router-link to="/bibliotheque">Bibliothèque</router-link>
    </button>
    <button ref="profileButton" class="topBarButton">
      <router-link to="/profil">Profil</router-link>
    </button>
  </div>
  <div>
    <p>Logo Panier</p>
  </div>
</div>
</template>

<style scoped>
#logo {
  width: 100px;
  height: 100px;
}

#topBar {
  display: flex;
  justify-content: space-between;
  background-color: #F2E2C4;
  margin-top: 2%;
}

#topBarButtonGroup {
  padding-top: 20px;
}

.topBarButton {
  display: inline-block;
  border: None;
  padding: 5px 10px;
  background-color: #F2E2C4;
  color: #1D1F26;
  cursor: pointer;
  white-space: nowrap;
}

a, a:link, a:visited, a:focus, a:hover, a:active{
  color: #1D1F26;
  text-decoration: None;
}

a:active {
  border-bottom: #1D1F26;
}
</style>