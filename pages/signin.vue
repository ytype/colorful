<template>
  <div>
    <p>user: {{ user }}</p>
    <p>error: {{ error }}</p>
    <p>loading: {{ loading }}</p>
    <form @submit.prevent="onSignin">
      <input
        id="email"
        v-model="email"
        name="email"
        label="Email"
        type="email"
        required
      >
      <input
        id="password"
        v-model="password"
        name="password"
        label="Password"
        type="password"
        required
      >
      <button :disabled="loading" :loading="loading" type="submit">
        Sign in
      </button>
      <button id="Google" @click.prevent="onSigninGoogle">
        Sign in with Google
      </button>
      <button id="Github" @click.prevent="onSigninGithub">
        Sign in with GitHub
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  beforeUpdate () {
    if (this.user !== null && this.user !== undefined) {
      this.$router.push('/form')
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    },
    onResetPassword () {
      if (this.email === '') {
        return this.$store.dispatch('setError', { message: 'Email can not be blank' })
      }
      this.$store.dispatch('resetPasswordWithEmail', { email: this.email })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scope>
#Google {
    background-position: 16px 50%;
    color: rgb(255, 255, 255);
    cursor: pointer;
    height: 64px;
    text-decoration: none solid rgb(255, 255, 255);
    width: 233.859px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 116.922px 32px;
    transform-origin: 116.93px 32px;
    caret-color: rgb(255, 255, 255);
    background: rgb(221, 75, 57) url("http://vagnervjs.github.io/social-signin-btns/img/google.svg") no-repeat scroll 16px 50% / 32px padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    border-radius: 8px 8px 8px 8px;
    font: normal normal 400 normal 16px / 16px Arial;
    margin: 6px;
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 32px 0px 64px;
    transition: all 0.5s ease 0s;
}/*#BUTTON_1*/

#Google:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 400 normal 16px / 16px Arial;
    outline: rgb(255, 255, 255) none 0px;
}/*#BUTTON_1:after*/

#Google:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 400 normal 16px / 16px Arial;
    outline: rgb(255, 255, 255) none 0px;
}/*#BUTTON_1:before*/

#Github {
    background-position: 16px 50%;
    color: rgb(255, 255, 255);
    cursor: pointer;
    height: 64px;
    text-decoration: none solid rgb(255, 255, 255);
    width: 232.063px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 116.031px 32px;
    transform-origin: 116.031px 32px;
    caret-color: rgb(255, 255, 255);
    background: rgb(42, 42, 42) url("http://vagnervjs.github.io/social-signin-btns/img/github.svg") no-repeat scroll 16px 50% / 32px padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    border-radius: 8px 8px 8px 8px;
    font: normal normal 400 normal 16px / 16px Arial;
    margin: 6px;
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 32px 0px 64px;
    transition: all 0.5s ease 0s;
}/*#BUTTON_1*/

#Github:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 400 normal 16px / 16px Arial;
    outline: rgb(255, 255, 255) none 0px;
}/*#BUTTON_1:after*/

#Github:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 400 normal 16px / 16px Arial;
    outline: rgb(255, 255, 255) none 0px;
}/*#BUTTON_1:before*/

</style>
