<template>
  <div>
    <section class="hero hero-main">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title corlorful">
            {{ data.title }}
          </h1>
        </div>
      </div>
    </section>
    <div class="spans">
      <span v-for="(color, index) in data.color" :key="index" :style="{ backgroundColor: color }" class="dot" />
    </div>
    <div class="comment-form">
      <h2 class="comment-text">
        댓글
      </h2>
      <input v-model="content" class="input form-input comment-input">
      <button @click="addComment" class="button is-rounded comment-input">
        댓글 등록
      </button>
      <button v-if="likeBtnShow" @click="addLike" class="button is-rounded comment-input">
        좋아요
      </button>
      <button v-else @click="delLike" class="button is-rounded comment-input">
        안 좋아요
      </button>
      <div v-for="(comment,idx) in data.comments" v-bind:key="idx">
        <commentCard :data="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import commentCard from '@/components/commentCard'
import axios from 'axios'
export default {
  components: {
    commentCard
  },
  data () {
    return {
      id: this.$route.params.id,
      data: {},
      content: '',
      likeBtnShow: true
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    addComment () {
      if (this.content === '') {
        alert('공백은 입력할 수 없습니다.')
      } else {
        axios.post('/api/comment', {
          params: {
            email: this.$store.getters.user.email,
            id: this.id,
            content: this.content
          }
        })
          .then((response) => {
            this.data = response.data
          })
          .catch((error) => {
            console.log(error.response)
          })
        location.reload()
      }
    },
    fetchData () {
      axios.post('/api/color', {
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
      axios.post('/api/like', {
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
      location.reload()
    },
    delLike () {
      axios.post('/api/unlike', {
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
      location.reload()
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@keyframes hero-animation {
  0% {
  background: rgb(253,175,173);
  background: linear-gradient(90deg, rgba(253,175,173,1) 0%, rgba(250,202,192,1) 100%);
  }
  50% {
  background: rgb(255,236,210);
  background: linear-gradient(90deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%);
  }
  100% {
    background: rgb(238,156,167);
    background: linear-gradient(90deg, rgba(238,156,167,1) 0%, rgba(255,221,225,1) 100%);
  }
}
.comment-input {
  display: inline-block;
}
.hero-main {
  animation: hero-animation 30s infinite;
  height: 30rem;
  margin-bottom: 1rem;
}
.corlorful {
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  margin: 11rem 0 0 0;
  color: white;
}
.dot {
  margin: 0 0 0 5px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: inline-block;
}
.spans {
   text-align: center;
}
.corlorful {
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  margin: 11rem 0 0 0;
  color: white;
}
.form-input {
  width: 25rem;
  height: 2.5rem;
}
.comment-text {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
}
.comment-form {
  margin-left: 1rem;
}
</style>
