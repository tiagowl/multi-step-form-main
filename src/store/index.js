import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    email: "",
    phone: "",
    plan: {
      description: "",
      duration: "",
      billing: 0
    },
    addons:[]
  },
  getters: {
  },
  mutations: {
    subscription(state, payload){
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
    }
  },
  actions: {
  },
  modules: {
  }
})
