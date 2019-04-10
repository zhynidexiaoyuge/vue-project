<template>
  <div id="app">
    <div class="routerLinks">
      <router-link to="/">Go to PageOne</router-link>
      <router-link to="/PageTwo">Go to PageTwo</router-link>
      <router-link to="/PageThree">Go to PageThree</router-link>
      <router-link to="/PageFour">Go to PageFour</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;padding: 0;
}
a:link{color:#f00; text-decoration:none;}
a:visited {text-decoration:none;color:#ba2636;} 
a:hover {color:#0ff;text-decoration:none;} 
a:active {color:#0ff;} 
</style>
<style scoped>
  .routerLinks{
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
  .routerLinks a{
    padding: 0 50px;
  }
  .router-link-exact-active{
    color: #0ff
  }
</style>
