<template>
<v-layout fill-height wrap class="pa-4">

  <v-layout class="pa-3 ma-2" column justify-space-around align-content-space-around tag="v-card">
    <v-card-text class="text-h5">Source selection</v-card-text>
    <v-flex class="d-flex align-center">
      <v-btn fab x-large :color="phono.value ? 'primary' : ''" @click="setSelection(phono.pin)">
        <img src="@/assets/phono.png" style="height: 40px" />
      </v-btn>
      <span class="text-h5 ml-4">{{ phono.label }}</span>
    </v-flex>

    <v-flex class="d-flex align-center">
      <v-btn fab x-large :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setSelection(feedBack.pin)">
        <img src="@/assets/feed_back.png" style="height: 40px" />
      </v-btn>
      <span class="text-h5 ml-4">{{ feedBack.label }}</span>
    </v-flex>

    <v-flex class="d-flex align-center">
      <v-btn fab x-large :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setSelection(lineIn.pin)">
        <img src="@/assets/line_in.png" style="height: 40px" />
      </v-btn>
      <span class="text-h5 ml-4">{{ lineIn.label }}</span>
    </v-flex>

  </v-layout>

  <v-card></v-card> <!-- center -->

  <v-layout column>
    <v-flex tag="v-card" class="ma-2 d-flex align-center" v-bind:shrink="status.speed && !status.heating" v-bind:grow="!status.speed && status.heating">
      <v-card-text class="px-4">
        <v-flex class="d-flex justify-space-between align-center">
          <span class="text-h5">Stylus heating<span v-if="status.heating"> : {{ heatingLabel }} A</span></span>
          <v-switch v-model="status.heating"></v-switch>
        </v-flex>
        <v-fade-transition>
          <v-progress-linear reverse readonly v-if="status.heating" v-model="heating" color="rgba(0,0,0, 0.7)" style="background: linear-gradient(0.25turn, #00ff00, #ffa500,#ff0000)" height="50" class="mt-5"></v-progress-linear>
        </v-fade-transition>
      </v-card-text>
    </v-flex>

    <v-flex tag="v-card" class="ma-2 d-flex align-center" v-bind:shrink="!status.speed && status.heating" v-bind:grow="status.speed && !status.heating">

        <v-card-text class="px-4">
          <v-flex class="d-flex justify-space-between align-center">
            <span class="text-h5">Motor speed <span v-if="status.speed">: {{ speed }} %</span></span>
            <v-switch v-model="status.speed"></v-switch>
          </v-flex>
          <v-fade-transition>
            <v-progress-linear v-if="status.speed" top v-model="speed" height="50"></v-progress-linear>
          </v-fade-transition>
        </v-card-text>

    </v-flex>
  </v-layout>

</v-layout>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'phono',
      'feedBack',
      'lineIn',
      'heating',
      'heatingLabel',
      'speed',
      'speedStatus',
      'heatingStatus'
    ]),
  },
  methods: {
    ...mapMutations([
      'setSelection',
      'syncHeating',
      'setStatus'
    ]),
  },
  data() {
    return {
      message: null,
      status: {
        heating: false,
        speed: false
      }
    }
  },
  mounted() {
    window.setInterval(() => {
      this.syncHeating()
    }, 500)
  },
  watch: {
    status: {
      handler(val) {
        this.setStatus(val)
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
