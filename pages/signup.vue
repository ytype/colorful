<template>
  <div>
    <form @submit.prevent="onSignup">
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
      <input
        id="confirmPassword"
        v-model="confirmPassword"
        :rules="[comparePasswords]"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        required
      >
      <button :disabled="loading" :loading="loading" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
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
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    }
  }
}
</script>
