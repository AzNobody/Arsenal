<script setup>
import LoginComponent from "@/components/pages/LoginComponent.vue";
</script>

<template>
  <body>
    <LoginComponent />
  </body>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url(../assets/login/wallpaper.jpg) no-repeat center center fixed;
    background-size: cover;
}
</style>