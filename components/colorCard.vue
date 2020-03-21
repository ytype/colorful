<template>
  <div class="column is-3">
    <div class="card">
      <div class="spans">
        <span v-for="(find, index) in data.color" :key="index" :style="{ backgroundColor: find }" class="dot" />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left" />
          <div class="media-content">
            <p class="title is-4">
              {{ data._id }}
            </p>
            <p class="subtitle is-6">
              {{ data.user }}
              {{ data.like }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {

    }
  }

}
</script>

<style scope>
.spans {
  padding: 0.5rem 0 0 1rem;
}
.dot {
  margin: 0 0 0 5px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: inline-block;
}
.card-content {
  padding: 0 1rem 1rem 1rem;
}
</style>
