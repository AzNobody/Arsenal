<script>
import profiles from "@/json/profiles.json";
import router from "@/router";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      profiles: profiles,
    }
  },
  methods: {
    checkLogin() {
      localStorage.clear();
      let profile = this.profiles.filter((p) => {
        return p.username.indexOf(this.username) !== -1;
      });
      console.log(profile);
      if (profile.length === 1) {
        localStorage.setItem("Profile", profile[0].username);
        localStorage.setItem("ProfileId", this.profiles.indexOf(profile[0]));
        router.push("/magasin");
      }
    },
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <div class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" name="username">
      </div>
      <!-- <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div> -->
      <div class="form-group">
        <button @click="checkLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.login-container h2 {
  text-align: center;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 92%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>