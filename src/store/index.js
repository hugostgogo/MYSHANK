import Vue from 'vue'
import Vuex from 'vuex'

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
      heating: {
        value: 250,
      },
      speed: {
        value: 128,
      }
    },
    status: {
      heating: false,
      speed: false
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
      return (255 - state.displays.heating.value) / 255 * 100
    },
    heatingLabel: state => {
      var value = (state.displays.heating.value / 255).toString()
      let result = value[0]
      for (var i = 1; i < 4; i++) {
        result += value[i]
      }
      return result
    },
    speed: state => {
      return parseInt(state.displays.speed.value * 100 / 255)
    },
    speedStatus: state => {
      return state.status.speed
    },
    heatingStatus: state => {
      return state.status.heating
    },
  },
  mutations: {
    setSelection(state, pin) {
      window.require("electron").ipcRenderer.invoke('setSource', pin).then((result) => {
        state.commands.phono.value = result.phono ? true : false
        state.commands.feedBack.value = result.feedBack ? true : false
        state.commands.lineIn.value = result.lineIn ? true : false
      })
    },
    syncHeating(state) {
      window.require("electron").ipcRenderer.invoke('getHeatingValue').then((value) => {
        state.displays.heating.value = value
      })
      window.require("electron").ipcRenderer.invoke('getSpeedValue').then((value) => {
        state.displays.speed.value = value
      })
    },

    setStatus(state, payload) {
      state.status = payload
      var obj = payload
      if (obj.speed == true) {
        obj.speedValue = state.displays.speed.value
      }
      else {
        obj.speedValue = 0
      }
      console.log(obj)
      window.require("electron").ipcRenderer.invoke('setStatus', obj)
    },


  },
  actions: {
    leadIn () {
      window.require("electron").ipcRenderer.invoke('leadIn')
    },
    space () {
      window.require("electron").ipcRenderer.invoke('space')  
    }
  },
  modules: {

  }
})
