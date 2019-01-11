<template>
  <div class="restos">
    <h1>Restos</h1>
    <div v-for="resto in restos" :key="resto">
      <p>
        <span><b>{{ resto.title }}</b></span><br />
        <span>{{ resto.description }}</span>
      </p>
    </div>
  </div>
</template>

<script src="../assets/js/restos.js"></script>