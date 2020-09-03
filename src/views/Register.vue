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
    firstname: "",
    lastname: "",
    email: "",
    password:"",
    year: 1,
  }),
  methods: {
    async register() {
      await auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            const newuser = db.collection('Users').doc(this.email);
            const query = newuser.collection('KWs');

            const date1 = new Date(Date.now());
            if (date1.getMonth()<8){
              date1.setFullYear(date1.getFullYear() - 1);
            }
            if(this.year == 2){
              date1.setFullYear(date1.getFullYear() - 1);
            }
            if(this.year == 3){
              date1.setFullYear(date1.getFullYear() - 2);
            }
            date1.setDate(1);
            date1.setMonth(8);
            date1.setHours(0);
            date1.setMinutes(0);
            const ende = new Date(date1);
            ende.setFullYear(ende.getFullYear() + 3);
            ende.setDate(ende.getDate() - 1)
            ende.setHours(23);
            ende.setMinutes(59);

            console.log(ende)

            newuser.set({
              firstname: this.firstname,
              lastname: this.lastname,
              year: this.year
            });
            while (date1.getTime() < ende.getTime()){
              var y = date1.getWeekYear().toString()
              var d = date1.getWeek().toString()
              if (d.length < 2){
                d = 0 + d;
              }
              var i = y + d;
              query.doc(i.toString()).set({
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
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Mo').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Di').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Mi').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Do').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Fr').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('Sa').set({Jobs: [{Job: "", Dauer: 0}]});
              query.doc(i.toString()).collection('Ausbildungsnachweis').doc('So').set({Jobs: [{Job: "", Dauer: 0}]});
              date1.setDate(date1.getDate() + 7); //Update Zählvariable
            };
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