<template>
  <div id="app">
    <nav id="topBar" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light"><img src="src\assets\miammm_logo.png" width="40%" height="40%"></router-link>
      <router-link to="/Restaurants" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light" style="border:1px solid white;"><font-awesome-icon icon="utensils"/> &#8203; découvrir de merveilleux RESTAURANTS</router-link>
      <router-link to="/Panier" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light ml-auto" style="border:1px solid white;"><font-awesome-icon icon="shopping-basket"/> &#8203; mes COMMANDES</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#footer{
  background: #280338;
  color: white
}

#footer > span {
  font-family: 'Major Mono Display', monospace;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

#topBar{
  background-color: #280338!important;
  color: white;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

nav{
  font-family: 'Major Mono Display', monospace;
}
</style>
