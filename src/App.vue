<template>
  <div id="app">
    <SearchUser />
  </div>
</template>

<script>
import SearchUser from './components/SearchUser.vue';

export default {
  name: 'App',
  components: {
    SearchUser
  }
}
</script>

<style>
@import url('./assets/css/all.min.css');
@import url('https://fonts.googleapis.com/css?family=Abel');

html, body {
	font-family: Abel, Arial, Verdana, sans-serif;
}

#app {
  font-family: Abel, Arial, Verdana, sans-serif;
}
</style>
