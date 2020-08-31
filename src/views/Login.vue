<template>
  <div>
    <h2>Login</h2> 
    <form novalidate @submit.prevent="login">
            <md-field>
                <label for="email">Email</label>
                <md-input name="email" id="email" type="email" v-model="username"/>
            </md-field>
            <md-field>
                <label for="password">Passwort</label>
                <md-input name="password" id="password" type="password" v-model="password"/>
            </md-field>
                <md-button type="submit">Login</md-button>
    </form>
    

  </div>
</template>

<script>
import {auth} from './../firebase/auth'
export default {
    data: () => ({
        username,
        password
    }),
    methods: {
      async login(){
        await auth.signInWithEmailAndPassword(this.username, this.password)
        .then(user => { }, 
        err => {
            alert(err.message)
        })
        this.$router.push(this.$route.query.redirect || '/ausbildungsnachweise')
      }
  }


}
</script>

<style>

</style>