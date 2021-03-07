import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commands: {
      phono: {
        label: 'Phono',
        value: true
      },
      feedBack: {
        label: 'Feed back',
        value: false
      },
      lineIn: {
        label: 'Line in',
        value: false
      },
    },
    displays: {
      heating: 15,
      speed: 128
    }
  },
  getters: {
    phono: state => {
      return state.commands.phono
    },
    feedBack: state => {
      return state.commands.feedBack
    },
    lineIn: state => {
      return state.commands.lineIn
    },
    heating: state => {
      return state.displays.heating * 100 / 255
    },
    heatingLabel: state => {
      return state.displays.heating * (1 / 255)
    },
    speed: state => {
      return state.displays.speed * 100 / 255
    }
  },
  mutations: {
    setSelection(state, selection) {
      state.commands.phono.value = false
      state.commands.feedBack.value = false
      state.commands.lineIn.value = false
      switch (selection) {
        case "phono":
          state.commands.phono.value = true
          break;
        case "feedBack":
          state.commands.feedBack.value = true
          break;
        case "lineIn":
          state.commands.lineIn.value = true
          break;
      }
    },
  },
  actions: {

  },
  modules: {

  }
})
