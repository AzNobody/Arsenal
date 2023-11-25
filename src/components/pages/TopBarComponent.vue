<script setup>

</script>

<template>
<div id="TopBar">
  <img id="logo" src="/src/assets/logo.svg" alt="logo placeholder">
  <div>
    <button id="store_button">
      <router-link to="/magasin">Magasin</router-link>
    </button>
    <button id="library_button">
      <router-link to="/bibliotheque">Bibliothèque</router-link>
    </button>
    <button id="profil_button">
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
</style>