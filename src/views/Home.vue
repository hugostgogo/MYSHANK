<template>
<v-layout fill-height wrap class="pa-4">

  <v-layout class="pa-3 ma-2" column justify-space-around align-content-space-around tag="v-card">
    <v-card-text class="text-h2">Source selection</v-card-text>
    <v-flex class="d-flex align-center">
      <v-btn fab style="width: 150px; height: 150px" :color="phono.value ? 'primary' : ''" @click="setSelection(phono.pin)">
        <img src="@/assets/phono.png" style="height: 100px" />
      </v-btn>
      <span class="text-h3 ml-4">{{ phono.label }}</span>
    </v-flex>

    <v-flex class="d-flex align-center">
      <v-btn fab style="height: 150px; width: 150px" :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setSelection(feedBack.pin)">
        <img src="@/assets/feed_back.png" style="height: 100px" />
      </v-btn>
      <span class="text-h3 ml-4">{{ feedBack.label }}</span>
    </v-flex>

    <v-flex class="d-flex align-center">
      <v-btn fab x-large style="width: 150px; height: 150px" :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setSelection(lineIn.pin)">
        <img src="@/assets/line_in.png" style="height: 100px" />
      </v-btn>
      <span class="text-h3 ml-4">{{ lineIn.label }}</span>
    </v-flex>

  </v-layout>

  <v-card></v-card> <!-- center -->

  <v-layout column>
    <v-flex tag="v-card" class="ma-2 d-flex align-center">
      <v-card-text class="px-4">
        <v-flex class="d-flex justify-space-between align-center">
          <span class="text-h3">Stylus heating<span v-if="status.heating"> : {{ heatingLabel }} A</span></span>
          <v-switch v-model="status.heating" inset></v-switch>
        </v-flex>
        <v-fade-transition>
          <v-progress-linear reverse readonly v-if="status.heating" v-model="heating" color="rgba(0,0,0, 0.7)" style="background: linear-gradient(0.25turn, #00ff00, #ffa500,#ff0000)" height="50" class="mt-5"></v-progress-linear>
        </v-fade-transition>
      </v-card-text>
    </v-flex>

    <v-flex tag="v-card" class="ma-2 d-flex align-center">

        <v-card-text class="px-4">
          <v-flex class="d-flex justify-space-between align-center">
            <span class="text-h3">Motor speed <span v-if="status.speed">: {{ speedLabel }} %</span></span>
            <v-switch v-model="status.speed" inset></v-switch>
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
      'speedLabel',
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
  },
  filters: {
    formatLabel(val) {
      if(val < 0) return 0
      if(1 < val) return 1
      if(val.length < 4) val.length = 4
      else return val
    }
  }
}
</script>

<style>

</style>
