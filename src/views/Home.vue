<template>
<v-container style="height: 100%" class="d-flex align-center px-3">
  <div class="row" style="min-height: 100%; width: 100vw;">
    <v-col md="6" sm="12" class="pr-1">
      <v-card class="pl-5 pt-3 d-flex flex-column" height="100%">
          <div class="col pa-0 text-center">
            <span class="text-h3">Source selection</span>
          </div>
          <div class="col-11 pa-0 d-flex flex-column justify-space-around">
            <div class="d-flex justify-start align-center">
              <v-btn fab width="150px" height="150px" :color="phono.value ? 'primary' : ''" @click="setSelection(phono.pin)">
                <v-icon x-large>mdi-play</v-icon>
              </v-btn>
              <span class="text-h2 ml-4">{{ phono.label }}</span>
            </div>

            <div class="d-flex justify-start align-center">
              <v-btn fab width="150px" height="150px" :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setSelection(feedBack.pin)">
                <v-icon x-large>mdi-play</v-icon>
              </v-btn>
              <span class="text-h2 ml-4">{{ feedBack.label }}</span>
            </div>

            <div class="d-flex justify-start align-center">
              <v-btn fab width="150px" height="150px" :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setSelection(lineIn.pin)">
                <v-icon x-large>mdi-play</v-icon>
              </v-btn>
              <span class="text-h2 ml-4">{{ lineIn.label }}</span>
            </div>
          </div>

      </v-card>
    </v-col>

    <v-col md="6" sm="12" class="d-flex flex-column pl-1" height="100%">
      <v-col class="pa-0 pb-1">
        <v-card style="min-height: 100%" class="d-flex flex-column justify-center">
          <v-card-text>
            <span v-html="`Stylus heating : ${heatingLabel.toPrecision(1)} A`" class="text-h2"></span>
            <v-progress-linear v-model="heating" height="40" class="mt-5"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-1 pa-0">
        <v-card style="min-height: 100%" class="d-flex flex-column justify-center">
          <v-card-text>
            <span v-html="`Motor speed : ${speed.toPrecision(3)} %`" class="text-h2"></span>
            <v-progress-linear v-model="speed" height="40" class="mt-5"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-col>
  </div>
</v-container>
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
      'speed'
    ])
  },
  methods: {
    ...mapMutations([
      'setSelection',
      'syncHeating'
    ]),
  },
  data () {
    return {
      message: null
    }
  },
  mounted () {
    window.setInterval(() => {
      this.syncHeating()
    }, 500)

  }
}
</script>
