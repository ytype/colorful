import user from './user'
import shared from './shared'
import VuexPersistence from 'vuex-persist'
import Vuex from 'vuex'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = () => new Vuex.Store({
  modules: {
    user,
    shared
  },
  plugins: [vuexLocal.plugin]
})

export default store
