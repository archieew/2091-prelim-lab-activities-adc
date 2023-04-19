<template>
  <div id="app">
    
    <h1>{{ name }}</h1>
    <profile></profile>
    <career></career>
    <education></education>
    <skill></skill>
  </div>
</template>

<script>
import profile from './profile.vue'
import career from './career.vue'
import education from './education.vue'
import skill from './skill.vue'
export default {
  name: 'app',
  components: {
    profile,
    career,
    education,
    skill
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>
<!-- General -->
<style>
#app {
  font-family: Times New Roman, Arial, sans-serif;
  text-align: justify;
  margin: auto;
  width: 60%;
  padding: 20px;  
}
.id {
  max-height: 200px;
  max-width: 200px;
  width: 170px;
  height: 170px;
  float: left;
}
p {
  font-weight: normal;
  
}

/* First Part CSS Start Here */
.first-part {
  border-bottom: solid;
  border-color: green;

}
.h3 {
  text-align: center;
  float: center;
}

.first-part1 {
  font-family: Times New Roman, Arial, sans-serif;
  margin: auto;
  padding: 20px;
  text-align: justify;
  text-align: center;
 
}
.first-part2 {
  font-family: Copperplate, sans-serif;
  text-align: center;
  font-size: 50px;
  
  
}
.first-part3 {
  font-family: Copperplate, Arial, sans-serif;
  text-align: center;
  padding: 20px;
  font-size: 40px;
  
}
ul li {
  padding: 5px 0px 5px 0px;
  list-style-type: none;
}

img.address {
  padding-left: 10px;
}
img.phone {
  padding-left: 10px;
}
img.email {
  padding-left: 10px;
}
/* First Part CSS End Here */

/* Second Part CSS Start Here */


/* Second Part CSS End Here */

/* Third Part CSS Start Here */
.third-part table {
  border-spacing: 0px;
  border-collapse: collapse;
  table-layout: fixed;
  width:100%;
  padding: 0px 10px 0px 10px;
  border-bottom: solid;
  border-color: green;
}
h4.title {
  text-decoration: underline;
}
/* Third Part CSS End Here */
</style>
