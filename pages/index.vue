<template>
  <div>
    <section class="hero hero-main">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title corlorful">
            Color Palette For Web Developers
          </h1>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title description-main">
            Colorful은
          </h1>
          <h2 class="subtitle description">
            개발자들을 위한 색상 팔레트입니다.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
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
.hero-main {
  animation: hero-animation 30s infinite;
  height: 30rem;
}
.corlorful {
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  margin: 11rem 0 0 0;
  color: white;
}
.description-main {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 2rem;
}
.description {
  font-family: 'Noto Sans KR', sans-serif;
  padding: 2rem 0 0 0;
}
</style>
