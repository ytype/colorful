<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/">
            {{ title }}
          </a>
          <div
            @click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
            class="navbar-burger burger"
            data-target="navMenu"
          />
        </div>
        <div id="navMenu" :class="{ 'is-active': showNav }" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="color">
              main
            </a>
            <a class="navbar-item" href="form">
              form
            </a>
            <a v-if="user" class="navbar-item" href="signin">
              Login
            </a>
            <a v-else @click.prevent="onLogout" class="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      showNav: false
    }
  },
  computed: {
    user () {
      // eslint-disable-next-line eqeqeq
      return this.$store.getters.user == undefined || this.$store.getters.user == null
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      location.reload()
    }
  }
}
</script>

<style scope>
  .navbar-item.brand-text {
    font-weight: 300;
  }
  .navbar-item,
  .navbar-link {
    font-size: 14px;
  }
</style>
