import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    email: "",
    phone: "",
    plan: {
      description: "",
      duration: "",
      billing: ""
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
    },
    choosePlan(state, payload){
      state.plan.billing = payload.price;
      state.plan.description = payload.name;
      state.plan.duration = payload.duration;
    },
    addAddons(state, payload){
      state.addons = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
