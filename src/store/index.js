import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    email: "",
    phone: "",
    plan: {
      description: "",
      duration: "",
      billing: "",
      priceValue: 0
    },
    addons:[]
  },
  getters: {
    totalPrice(state){
      const totalAddonsPrice = state.addons.reduce((acumulator, current)=>{
        return acumulator + current.priceValue;
      }, 0)

      return `+$${totalAddonsPrice + state.plan.priceValue}/${state.plan.duration === "monthly" ? "mo" : "yr"}`
    }
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
      state.plan.priceValue = payload.priceValue;
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
