<script>
import TopBarComponent from "@/components/pages/TopBarComponent.vue";
import profiles from "@/json/profiles.json";

export default {
  name: "LoginComponent",
  components: {TopBarComponent},
  data() {
    return {
      username: "",
      profile: profiles[localStorage.getItem("ProfileId")] ?? profiles[0],
    }
  },
};
</script>

<template>
  <TopBarComponent></TopBarComponent>
  <div id="profileSection">
    <img id="profilePicture" src="@/assets/ankle_gone.jpeg" alt="Ancalagon the Black (Giant Dragon) over a forest">
    <div id="profileSubSection">
      <h2>{{ profile.username }}</h2>
      <p id="profileDescription"> {{ profile.description }}</p>
      <div id="addFriendSection">
        <button id="addFriend">+ Ajouter un ami</button>
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