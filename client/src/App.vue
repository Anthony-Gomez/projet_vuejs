<template>
  <div id="app">
    <nav class="topBar navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="topBar navbar navbar-expand-lg navbar-light bg-light"><img src="src/assets/img/logo.png" width="40%" height="40%"></router-link>
      <router-link to="/Restaurants" class="topBar navbar navbar-expand-lg navbar-light bg-light menuButtons"><font-awesome-icon icon="utensils"/> &#8203; découvrir de merveilleux RESTAURANTS</router-link>
      <router-link to="/Panier" class="topBar navbar navbar-expand-lg navbar-light bg-light ml-auto menuButtons"><font-awesome-icon icon="shopping-basket"/> &#8203; mes COMMANDES</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="css">
@import "assets/css/app.css";
</style>
