<template>
<v-app>
  <v-main style="max-height: 100vh;">
  <v-tabs>
    <v-tab :to="{ name: 'selection' }">Source selection</v-tab>
    <v-tab :to="{ name: 'sensors' }">Sensors</v-tab>
    <v-tab :to="{ name: 'functions' }">Functions</v-tab>
    <v-tab :to="{ name: 'settings' }">Settings</v-tab>
  </v-tabs>
    <transition name="custom">
      <router-view />
    </transition>
  </v-main>
</v-app>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: 'App',
  mounted() {
    window.setInterval(() => {
      this.syncHeating()
    }, 500)
  },
  methods: {
    ...mapMutations([
      'syncHeating'
    ])
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}

.custom-enter-active {
  transition: opacity .75s;
  transition-delay: .75s;
}

.custom-leave-active {
  transition: opacity .75s;
}

.custom-enter,
.custom-leave-to
{
  opacity: 0;
}
</style>
