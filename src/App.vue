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
import { mapMutations, mapGetters, mapActions } from "vuex"
export default {
  name: 'App',
  mounted() {
    this.initialize()

    const leadInDelay = localStorage.getItem('leadInDelay')
    const spaceDelay = localStorage.getItem('spaceDelay')

    if (leadInDelay) this.setLeadInDelay(leadInDelay)
    if (spaceDelay) this.setSpaceDelay(spaceDelay)

    window.setInterval(() => {
      this.syncADC(this.heatingStatus, this.speedStatus)
    }, 500)
  },
  methods: {
    ...mapMutations([
      'setLeadInDelay',
      'setSpaceDelay'
    ]),
    ...mapActions([
      'initialize',
      'syncADC',
    ])
  },
  computed: {
    ...mapGetters({
      speedStatus: 'speedStatus',
      heatingStatus: 'heatingStatus'
    })

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
