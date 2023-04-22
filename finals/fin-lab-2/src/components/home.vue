<template>
    <div class="home">
      <h1>Welcome to my Home Page</h1>
      <h3>All about fruit shakes</h3>
      <img id = "fruit" src ="https://www.liveeatlearn.com/wp-content/uploads/2020/09/how-to-make-smoothies-22.jpg">
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'home',
    data () {
      return {
        title: 'Home'
      }
    }
  }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1{
    color: black;
    text-align: center;
  }
  #fruit{
    width: auto;
  }
  </style>