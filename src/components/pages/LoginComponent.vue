<script>
import profiles from "@/json/profiles.json";
import router from "@/router";
import {useCartArrayStore} from "@/stores/cart";

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
        const store = useCartArrayStore();
        store.cart = [];
        router.push("/magasin");
      }
    },
  }
};
</script>

<template>
  <div class="login-container">
    <div class="form">
      <img src="@/assets/arsenal_logo.svg" alt="" style="padding: 10px; left: 37%;">
      <h2>Login</h2>
      <div class="input-group">
        <input v-model="username" type="text" name="username" id="username" required>
        <label for="username">Username</label>
      </div>
      <button class="submit-btn" @click="checkLogin">Login</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 80px 40px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.7);
}

.form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  pointer-events: none;
  transform: skewX(-33.5deg);
  transform-origin: bottom left;
}

.form img {
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
}

.form h2 {
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-align: center;
  color: #991710;
}

.form .input-group {
  position: relative;
}

.form .input-group input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  outline: none;
  background: transparent;
}

.form .input-group label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  transition: 0.2s ease-out;
}

.form .input-group input:focus + label,
.form .input-group input:valid + label {
  transform: translateY(-18px);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
}

.submit-btn {
  display: block;
  margin-left: auto;
  padding: 10px 20px;
  margin-top: 40px;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #991710;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.submit-btn:hover {
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.7);
  scale: 1.05;
}
</style>