<template>
  <div class="index-layout">
    <slot />
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
  background: black
}
</style>
