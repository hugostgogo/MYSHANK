import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ipcRenderer = window.require("electron").ipcRenderer

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
    },
    space: {
      delay: 450
    },
    leadIn: {
      delay: 5400
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
      return parseInt(state.displays.heating.value)
    },
    heatingLabel: state => {
      var value = (state.displays.heating.value / 100).toString()
      let result = value[0]
      for (var i = 1; i < 4; i++) {
        result += value[i]
      }
      return result
    },
    speed: state => {
      return state.displays.speed.value
    },
    speedLabel: state => {
     return state.displays.speed.value
    },
    speedStatus: state => {
      return state.status.speed
    },
    heatingStatus: state => {
      return state.status.heating
    },
    leadInDelay: state => {
      return state.leadIn.delay
    },
    spaceDelay: state => {
      return state.space.delay
    }
  },
  mutations: {
    setSelection(state, pin) {
      window.require("electron").ipcRenderer.invoke('setSource', pin).then((result) => {
        state.commands.phono.value = result.phono ? true : false
        state.commands.feedBack.value = result.feedBack ? true : false
        state.commands.lineIn.value = result.lineIn ? true : false
      })
    },

    syncHeating(state, value) {
      state.displays.heating.value = value
    },

    syncSpeed(state, value) {
      state.displays.speed.value = value
    },

    setSpeed(state, payload) {
      state.status.speed = payload
      if (!payload) window.require("electron").ipcRenderer.invoke('stopSpeed', payload)
    },

    setHeating(state, payload) {
      state.status.heating = payload
      window.require("electron").ipcRenderer.invoke('setHeating', payload)
    },

    setLeadInDelay(state, delay) {
      state.leadIn.delay = delay
    },
    setSpaceDelay(state, delay) {
      state.space.delay = delay
    }


  },
  actions: {
    leadIn (store) {
      window.require("electron").ipcRenderer.invoke('leadIn', store.state.leadIn.delay)
    },
    space (store) {
      window.require("electron").ipcRenderer.invoke('space', store.state.space.delay)
    },
    setLeadIn (store, delay) {
      localStorage.setItem('leadInDelay', delay)
      store.commit('setLeadInDelay', delay)
    },
    setSpace (store, delay) {
      localStorage.setItem('spaceDelay', delay)
      store.commit('setSpaceDelay', delay)
      console.log(delay)
    },
    setColor (store, color) {
      localStorage.setItem('primaryColor', color)
    },
    initialize (store) {
      store.commit('setSpeed', false)
      store.commit('setHeating', false)
    },

    async syncSpeed (store) {
      const value = await ipcRenderer.invoke('getSpeedValue')
      store.commit('syncSpeed', value)
    },

    async syncHeating (store) {
      const value = await ipcRenderer.invoke('getHeatingValue')
      store.commit('syncHeating', value)
    }

  },
  modules: {

  }
})
