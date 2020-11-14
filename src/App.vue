<template>
  <div id="app">
    <img alt="Rotschy inc Logo" src="https://www.rotschyinc.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-28233985/images/594ae164804b5eknjEXB/Picture5_d200.png">
    <HelloWorld msg="Rotschy Inc Employee Access"/>
    <div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  rotate: 180;
}
</style>
