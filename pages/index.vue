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
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title description-main">
            Feature
          </h1>
          <div class="columns">
            <div class="column feature-description">
              좋아요 순 정렬
              <img class="feature-img" src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/199_Like_logo_logos-512.png">
            </div>
            <div class="column feature-description">
              비슷한 색상 추천
              <img class="feature-img" src="https://cdn2.iconfinder.com/data/icons/ourea-icons/256/palette_256x256-32.png">
            </div>
            <div class="column feature-description">
              코멘트 달기
              <img class="feature-img" src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_comment-512.png">
            </div>
          </div>
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
  text-align: center;
}
.feature-description {
  font-size: 1.25rem;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 2rem 0 0 0;
  text-align: center;
  text-align: -webkit-center;
}
.feature-img{
  display: block;
  height: auto;
  max-width: 10rem;
}
</style>
