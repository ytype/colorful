<template>
  <div>
    <div class="columns is-multiline">
      <colorCard v-for="(data,idx) in colorObj" v-bind:key="idx" :data="data" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import colorCard from '@/components/colorCard'
import axios from 'axios'
export default {
  components: {
    colorCard
  },
  data () {
    return {
      colorObj: {}
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      // axios.post('http://127.0.0.1:3000/api/test/testv/')
      axios.post('/api/color', {
        params: {
          id: 'all'
        }
      })
        .then((response) => {
          this.colorObj = response.data
          console.log(this.colorObj)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
}
</script>
