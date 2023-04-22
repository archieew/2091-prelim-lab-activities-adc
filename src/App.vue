<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fruties</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
            <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
