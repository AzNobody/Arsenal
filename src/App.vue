<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <GameList />
</template>

<script>
import GameList from "./views/GameList.vue";
export default {
  name: "App",
  components: {
    GameList: GameList
  },
};
</script>

<style scoped>
</style>