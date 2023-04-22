<template>
    <div class="blog"><br>
      <h1>The Birth of Smoothie</h1><br>
      <img id = "fruit" src ="https://c4.wallpaperflare.com/wallpaper/934/979/751/summer-cocktails-wallpaper-preview.jpg">
      <h2></h2><br>
      <h3>A smoothie is a chilled, blended, sweet beverage most often made from predominantly from fresh fruit. Now and then, you’ll find folks making smoothies from vegetables or with chocolate. Smoothies include crushed ice, frozen fruit and honey. They also often contain yogurt or milk and sometimes even ice cream. They have the consistency of a milkshake.
At Tryst Café, our smoothies have a base of the traditional plain (Greek style), organic yogurt which gives them a thick, creamy texture. We like to use this Greek style yogurt because it improves lactose intolerance, enhances immunity, promotes intestinal and vaginal health, builds stronger bones, lowers blood pressure, and may even have weight-loss and anticancer benefits. An added benefit of Greek yogurt is that it has less sugar than standard yogurt.</h3>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'blog',
    data () {
      return {
        title: 'Blog'
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
  h3{
    text-align: justify;
  }
  </style>