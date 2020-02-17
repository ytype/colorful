import user from './user'
import shared from './shared'
import Vuex from 'vuex'

const store = () => new Vuex.Store({
  modules: {
    user,
    shared
  }
})

export default store
