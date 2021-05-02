<template>
<v-app>
  <v-main style="max-height: 100vh;">
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
  transition: all .25s;
  transition-delay: .25s;
}

.custom-leave-active {
  transition: all .25s;
}

.custom-enter,
.custom-leave-to
{
  transform: scale(0);
  opacity: 0;
}
</style>
