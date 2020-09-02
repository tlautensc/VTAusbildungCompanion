<template>
  <div>
    <h2>Registrieren</h2>
    <form novalidate @submit.prevent="register">
      <md-field>
        <label for="email">Email</label>
        <md-input name="email" id="email" type="email" v-model="email" />
      </md-field>
      <md-field>
        <label for="password">Passwort</label>
        <md-input name="password" id="password" type="password" v-model="password" />
      </md-field>
      <md-field>
        <label for="firstname">Vorname</label>
        <md-input name="firstname" id="firstname" v-model="firstname" />
      </md-field>
      <md-field>
        <label for="email">Nachname</label>
        <md-input name="email" id="email" type="email" v-model="lastname" />
      </md-field>
      <md-field>
        <label for="Jahr">Ausbildungsjahr</label>
        <md-select name="Jahr" id="Jahr" v-model="year">
            <md-option value="1">1</md-option>
            <md-option value="2">2</md-option>
            <md-option value="3">3</md-option>
        </md-select>
      </md-field>
      <md-button type="submit">Registrieren</md-button>
    </form>
  </div>
</template>

<script>
import { auth } from "./../firebase/auth";
import { db } from "./../firebase/db";
export default {
  name: "Register",
  data: () => ({
    firstname,
    lastname,
    email,
    password,
    year,
  }),
  methods: {
    async register() {
      await auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            const batch = db.batch();
            const newuser = db.collection('Users').doc(this.email);
            const query = newuser.collection('KWs');
            batch.set(newuser, {
              firstname: this.firstname,
              lastname: this.lastname,
              year: this.year
            });
            var i;
            for (i = 1;i<54;i++){
              batch.set(query.doc(i.toString()), {
                Abteilung: "",
                Dienst: {
                  Mo: "",
                  Di: "",
                  Mi: "",
                  Do: "",
                  Fr: "",
                  Sa: "",
                  So: "",
                },
              });
            };
            batch.commit();
            this.$router.push("/login");
          },
          (err) => {
            alert(err.message);
          }
        );
    },
  },
};
</script>

<style>
</style>