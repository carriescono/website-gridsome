<template>
  <div class="layout">
    <header class="header">
      <g-link class="initials" to="/">{{ $static.metaData.siteName }}</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
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
  color: #EEE;
  font-weight: 100;
}

.initials {
  font-family: 'Fredericka the Great';
  text-decoration: none;
  font-size: 4em;
  color: #EEE;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background: #333;
  height: 100vh;
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
  color: #EEE;
  z-index: 1;
}

.nav__link:hover {
  color: #333
}

.nav__link::after {
  content: " ";
  height: 100%;
  width: 100%;
  transform: scaleX(0);
  background: #EEE;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: transform 0.25s;
  z-index: 0;
}

.nav__link:hover::after {
  content: " ";
  height: 100%;
  width: 100%;
  transform: scaleX(1.2);
  background: #EEE;
  position: absolute;
  bottom: 0;
  right: 0;
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
