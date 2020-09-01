<template>
  <div>
    <h2>Registrieren</h2>
    <form novalidate @submit.prevent="register">
      <md-field>
        <label for="email">Email</label>
        <md-input name="email" id="email" type="email" v-model="username" />
      </md-field>
      <md-field>
        <label for="password">Passwort</label>
        <md-input name="password" id="password" type="password" v-model="password" />
      </md-field>
      <md-button type="submit">Registrieren</md-button>
    </form>
  </div>
</template>

<script>
import { auth } from "./../firebase/auth";
export default {
  name: "Register",
  data: () => ({
    username,
    password,
  }),
  methods: {
    async register() {
      await auth
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => {},
          (err) => {
            alert(err.message);
          }
        );
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>