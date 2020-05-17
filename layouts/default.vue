<template>
  <div>
    <navbar title="colorful" />
    <nuxt />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import * as firebase from 'firebase'

export default {
  components: {
    navbar
  },
  created () {
    try {
      firebase.initializeApp({
        apiKey: process.env.VUE_APP_apiKey,
        authDomain: process.env.VUE_APP_authDomain,
        databaseURL: process.env.VUE_APP_databaseURL,
        projectId: process.env.VUE_APP_projectId,
        storageBucket: process.env.VUE_APP_storageBucket,
        messagingSenderId: process.env.VUE_APP_messagingSenderId,
        appId: process.env.VUE_APP_appId,
        measurementId: process.env.VUE_APP_measurementId
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
