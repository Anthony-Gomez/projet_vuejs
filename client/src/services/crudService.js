import Api from '../services/Api'

export default {
  fetchRestos () {
    return Api().get('restos')
  }
}