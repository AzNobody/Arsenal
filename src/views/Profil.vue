<script setup>
import TopBarComponent from "@/components/pages/TopBarComponent.vue";
</script>

<template>
  <TopBarComponent></TopBarComponent>
  <div id="profileSection">
    <img id="profilePicture" src="@/assets/ankle_gone.jpeg" alt="Ancalagon the Black (Giant Dragon) over a forest">
    <div id="profileSubSection">
      <h2>Ankle-gone46</h2>
      <p id="profileDescription">Never let elves on shiny flying boats ruin your day!
        Join me on my discord
        <a href="https://www.youtube.com/watch?v=iik25wqIuFo&t=7s&ab_channel=Rickroll%2Cbutwithadifferentlink">here</a></p>
      <div id="addFriendSection">
        <button id="addFriend">+ Ajouter Ami</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#profilePicture{
  width: 200px;
  height: 200px;
}

#profileSection{
  max-width: fit-content;
  display: flex;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  border: solid thick #1d1f26;
}

#profileSubSection{
  background-color: #F2E2C4;
  padding-left: 50px;
  padding-right: 50px;
  max-height: 200px;
  max-width: 300px;
}

#profileDescription{
  max-width: 300px;
}

#addFriendSection{
  display: flex;
  justify-content: center;
}

#addFriend{
  margin-left: 25px;
  background-color: green;
  color: #F2E2C4;
}
</style>