import Vue from 'vue'
import Vuex from 'vuex'

const electron = window.require("electron")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commands: {
      phono: {
        label: 'Phono',
        pin: 16,
        value: true
      },
      feedBack: {
        label: 'Feed back',
        pin: 22,
        value: false
      },
      lineIn: {
        label: 'Line In',
        pin: 18,
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
    setSelection(state, pin) {
      electron.ipcRenderer.invoke('setSource', pin).then((result) => {
        state.commands.phono.value = result.phono ? true : false
        state.commands.feedBack.value = result.feedBack ? true : false
        state.commands.lineIn.value = result.lineIn ? true : false
      })
    },
  },
  actions: {

  },
  modules: {

  }
})
