<template>
  <div>
    <h1>Add color</h1>
    <p>color</p>
    <div v-for="(find, index) in color" :key="index">
      <input v-model="find.value" :key="index">
    </div>
    <button @click="addColor">
      add
    </button>
    <button @click="submit">
      submit
    </button>
    {{ result }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      color: [],
      result: ''
    }
  },
  computed: {
  },
  methods: {
    addColor () {
      this.color.push({ value: '' })
    },
    submit () {
      // eslint-disable-next-line no-console
      console.log(this.color)
      axios.post('/api/color', {
        color: this.color
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

</style>
