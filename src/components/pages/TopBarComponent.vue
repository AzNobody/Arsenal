<script setup>
</script>

<template>
<div id="topBar">
  <router-link to="/">
    <img id="logo" src="/src/assets/arsenal_logo.svg" alt="Arsenal Logo">
  </router-link>
  <div id="topBarButtonGroup">
    <button id="storeButton" class="topBarButton">
      <router-link to="/magasin">Magasin</router-link>
    </button>
    <button id="libraryButton" class="topBarButton">
      <router-link to="/bibliotheque">Bibliothèque</router-link>
    </button>
    <button id="profileButton" class="topBarButton">
      <router-link to="/profil">Profil</router-link>
    </button>
  </div>
  <div id="shoppingCart">
    <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" style="color: #1d1f26;" />
  </div>
</div>
</template>

<style scoped>
#logo {
  padding-left: 20px;
  width: 100px;
  height: 100px;
}

#topBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F2E2C4;
  margin-top: 2%;
}

.topBarButton {
  display: inline-block;
  border: None;
  padding: 5px 10px;
  background-color: #F2E2C4;
  color: #1D1F26;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
  font-size: larger;
  opacity: 1;
  transition: 0.3s;
}

.topBarButton:hover {
  opacity: 0.6
}

#libraryButton {
  margin-left: 70px;
  margin-right: 70px;
}

a, a:link, a:visited, a:focus, a:hover, a:active{
  color: #1D1F26;
  text-decoration: None;
}

#shoppingCart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding-right: 20px;
}
</style>