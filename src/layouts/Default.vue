<template>
  <div class="layout">
    <header class="header">
      <g-link class="initials" to="/">{{ $static.metaData.siteName }}</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
    <transition name="slide" appear>
      <main>
        <slot/>
      </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
}
</script>


<style>
body {
  font-family: 'Open Sans';
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #333;
  font-weight: 100;
}

.initials {
  font-family: 'Fredericka the Great';
  text-decoration: none;
  font-size: 4em;
  color: #333;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
  border: none;
  transition: border 1s;
  text-decoration: none;
  position: relative;
  color: #333;
  z-index: 1;
}

.nav__link:hover {
  color: #333
}

.nav__link::after {
  content: " ";
  transform: scaleX(0);
  transition: transform 0.25s;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: #EEE;
}

.nav__link:hover::after,
.nav__link:active::after {
  content: " ";
  transform: scaleX(1.2);
  transition: transform 0.25s;
  z-index: -1;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s, transform 0.5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(100px)
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
