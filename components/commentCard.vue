<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left" />
        <div class="media-content">
          <p class="title is-5 ns-title">
            {{ data.content }}
          </p>
          <p class="subtitle is-6 ns-title">
            {{ data.user }}
            {{ data.date }}
          </p>
        </div>
        <button v-if="data.user === $store.getters.user.email" @click="rmComment(idx)" class="button">
          댓글 삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['data'],
  data () {
    return {

    }
  },
  methods: {
    rmComment (idx) {
      axios.delete('http://127.0.0.1:3000/api/comment/' + this.$route.params.id + '/' + this.data._id)
        .then((response) => {
          this.data = response.data
        })
        .catch((error) => {
          console.log(error.response)
        })
      location.reload()
    }
  }

}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
.ns-title {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
