<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  components: {

  },
  created () {
    try {
      firebase.initializeApp({
        apiKey: 'AIzaSyAe0XvH7MIsFbJdZE7T4sTukSla_ODxUVA',
        authDomain: 'vue-auth-a4964.firebaseapp.com',
        databaseURL: 'https://vue-auth-a4964.firebaseio.com',
        projectId: 'vue-auth-a4964',
        storageBucket: 'vue-auth-a4964.appspot.com',
        messagingSenderId: '750312755273',
        appId: '1:750312755273:web:c3b494b6bbdf618ce0af98',
        measurementId: 'G-T5G9H0M1MD'
      })
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
        }
      })
      // eslint-disable-next-line no-console
      console.log('init firebase')
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase initialization error raised', err.stack)
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
