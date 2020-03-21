<template>
  <div>
    <h1 class="description-main">
      Colorful
    </h1>
    <div class="spans">
      <span v-for="(find, index) in color" :key="index" :style="{ backgroundColor: find.value.hex }" class="dot" />
    </div>
    <div class="form-color">
      <div v-for="(find, index) in color" :key="index">
        <input @click="selected = index" v-model="find.value.hex" :key="index" class="input form-input">
        <chrome-picker v-if="index == selected" v-model="color[index].value" />
      </div>
      <button @click="addColor" class="button">
        add
      </button>
      <button @click="submit" class="button">
        submit
      </button>
      <button @click.prevent="onLogout" class="button">
        logout
      </button>
    </div>
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
      selected: 0 }
  },
  mounted () {
    // eslint-disable-next-line eqeqeq
    if (this.$store.getters.user == null && this.$store.getters.user == undefined) {
      alert('please login')
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
      axios.post('http://127.0.0.1:3000/api/test/formInput', {
        color: this.color,
        user: this.$store.getters.user.email
      })
        .then((response) => {
          this.result = response.data
          if (response.data === 'OK') {
            alert('업로드 성공')
            this.$router.push('/color')
          }
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
.form-color {
  padding: 0 0 0 3rem;
}
.description-main {
  font-size: 2rem;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 2rem 0 0 0;
  text-align: -webkit-center;
}
.form-input {
  display: block;
  width: 15rem;
  height: 2rem;
}
.dot-container {
  white-space: nowrap;
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
</style>
