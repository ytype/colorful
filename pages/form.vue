<template>
  <div>
    <h1>Add color</h1>
    <p>color</p>
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
    {{ result }}
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
  computed: {
  },
  methods: {
    addColor () {
      this.color.push({ value: '' })
    },
    submit () {
      console.log(this.color.hex)
      axios.post('/api/test/formInput', {
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
