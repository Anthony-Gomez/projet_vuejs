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

<script>
import crudService from '../services/crudService'
export default {
  name: 'restos',
  data () {
    return {
      restos: []
    }
  },
  mounted () {
    this.getRestos()
  },
  methods: {
    async getRestos () {
      const response = await crudService.fetchRestos()
      this.restos = response.data
    }
  }
}
</script>