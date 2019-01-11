import crudService from "../../services/crudService"
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