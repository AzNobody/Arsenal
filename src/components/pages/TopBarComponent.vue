<script setup>
</script>

<template>
  <div id="topBar">
    <router-link to="/">
      <img id="logo" src="/src/assets/arsenal_logo.svg" alt="Arsenal Logo">
    </router-link>
    <div id="topBarButtonGroup">
      <router-link to="/magasin">
        <button id="storeButton" class="topBarButton">Magasin</button>
      </router-link>
      <router-link to="/bibliotheque">
        <button id="libraryButton" class="topBarButton">Bibliothèque</button>
      </router-link>
      <router-link to="/profil">
        <button id="profileButton" class="topBarButton">Profil</button>
      </router-link>
    </div>
    <div id="shoppingCart">
      <router-link to="/panier">
        <a id="cartButton" class="topBarButton"><font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" style="color: #1d1f26;" /></a>
      </router-link>
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
  position: relative;
  border: none;
  padding: 10px 15px;
  background-color: #F2E2C4;
  color: #1D1F26;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
  font-size: larger;
  overflow: hidden;
  transition: background-color 0.3s;
  border-radius: 30px;
}

.topBarButton:hover {
  background-color: #D9C7A9;
}

#libraryButton {
  margin-left: 70px;
  margin-right: 70px;
}

a,
a:link,
a:visited,
a:focus,
a:hover,
a:active {
  color: #1D1F26;
  text-decoration: none;
}

#shoppingCart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding-right: 20px;
}
</style>
