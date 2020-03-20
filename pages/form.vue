<template>
  <div>
    <span v-for="(find, index) in color" :key="index" :style="{ backgroundColor: find.value.hex }" class="dot" />
    <div v-for="(find, index) in color" :key="index">
      <input @click="selected = index" v-model="find.value.hex" :key="index">
      <chrome-picker v-if="index == selected" v-model="color[index].value" />
    </div>
    <button @click="addColor">
      add
    </button>
    <button @click="submit">
      submit
    </button>
    <button @click.prevent="onLogout">
      logout
    </button>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'
import axios from 'axios'
export default {
  components: {
    'chrome-picker': Chrome
  },
  data () {
    return {
      color: [],
      result: '',
      selected: 0
    }
  },
  mounted () {
    // eslint-disable-next-line eqeqeq
    if (this.$store.getters.user == null && this.$store.getters.user == undefined) {
      console.log(this.$store.getters.user)
      alert(this.$store.getters.user)
      this.$router.push('/signin')
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      location.reload()
    },
    addColor () {
      this.color.push({ value: '' })
    },
    submit () {
      console.log(this.color.hex)
      axios.post('/api/test/formInput', {
        color: this.color,
        user: this.$store.getters.user.email
      })
        .then((response) => {
          this.result = response.data
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
.dot-container {
  white-space: nowrap;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
</style>
