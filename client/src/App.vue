<template>
  <div id="app" class="body">

    <navbar />
    
    <router-view />

  </div>
</template>

<script>

import navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  #app {
    font-family: 'Open Sans', sans-serif;
  }

  a {
        color: inherit;
        text-decoration: none;
    }
</style>
