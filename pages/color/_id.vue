<template>
  <div>
    {{ id }}
    {{ data.like }}
    <button v-if="likeBtnShow" @click="addLike">
      좋아요
    </button>
    <button v-else @click="delLike">
      안 좋아요
    </button>
    {{ likeBtnShow }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: this.$route.params.id,
      data: {},
      likeBtnShow: true
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.post('http://127.0.0.1:3000/api/color', {
        params: {
          id: this.id
        }
      })
        .then((response) => {
          this.data = response.data
          if (Object.values(this.data.like).includes(this.$store.getters.user.email)) {
            this.likeBtnShow = false
          } else {
            this.likeBtnShow = true
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    addLike () {
      axios.post('http://127.0.0.1:3000/api/like', {
        params: {
          id: this.id,
          email: this.$store.getters.user.email
        }
      })
        .then((response) => {
          this.data = response.data
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    delLike () {
      axios.post('http://127.0.0.1:3000/api/unlike', {
        params: {
          id: this.id,
          email: this.$store.getters.user.email
        }
      })
        .then((response) => {
          this.data = response.data
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
}
</script>
