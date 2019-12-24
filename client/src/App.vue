<template>
  <div id="app" class="body">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  #app {
    background: linear-gradient(90deg, rgba(33,94,133,1) 0%, rgba(87,166,255,1) 45%, rgba(0,162,255,1) 88%);
    font-family: 'Open Sans', sans-serif;
  }
</style>
