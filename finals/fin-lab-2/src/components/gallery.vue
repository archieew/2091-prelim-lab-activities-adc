<template>
    <div class="gallery"> 
      <h1>Welcome to my my Gallery</h1>
      <img id = "fruit" src ="https://img1.goodfon.com/wallpaper/nbig/f/4f/fruits-fresh-juice-smoothies.jpg"><br>
      <img id = "fruit" src ="https://w0.peakpx.com/wallpaper/116/706/HD-wallpaper-food-smoothie-berry-bottle-drink-fruit.jpg"><br>
      <img id = "fruit" src ="https://img4.goodfon.com/wallpaper/nbig/a/ca/napitki-smuzi-frukty-ovoshchi.jpg"><br>   
      <img id = "fruit" src ="https://e0.pxfuel.com/wallpapers/543/594/desktop-wallpaper-fruit-smoothies-or-juice-ultra-background.jpg"><br> 
    </div>
  </template>
  
  
  <script> 
  export default {
    name: 'gallery', 
    data () {
      return {
        title: 'Gallery'
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
    width: 1000px;
  }
  </style>