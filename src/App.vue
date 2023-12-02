<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import GameList from "./components/pages/GameListComponent.vue";
export default {
  name: "App",
  components: {
    GameList: GameList
  },
};
</script>

<style scoped>
#app {
  margin: 0;
  min-height: 100vh;
}
</style>