<template>
<v-container style="height: 100%" class="d-flex align-center px-3">
  <div class="row" style="min-height: 100%">
    <v-col class="pr-1">
      <v-card class="pl-5 pt-3 d-flex flex-column" height="100%">
          <div class="col pa-0">
            <span class="text-h5">Source selection</span>
          </div>
          <div class="col-11 pa-0 d-flex flex-column justify-space-around">
            <div class="d-flex justify-start align-center">
              <v-btn fab :color="phono.value ? 'primary' : ''" @click="setSelection('phono')">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <span class="text-h5 ml-4">{{ phono.label }}</span>
            </div>

            <div class="d-flex justify-start align-center">
              <v-btn fab :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setSelection('feedBack')">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <span class="text-h5 ml-4">{{ feedBack.label }}</span>
            </div>

            <div class="d-flex justify-start align-center">
              <v-btn fab :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setSelection('lineIn')">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <span class="text-h5 ml-4">{{ lineIn.label }}</span>
            </div>
          </div>

      </v-card>
    </v-col>

    <v-col md="10" lg="10" class="d-flex flex-column pl-1" height="100%">
      <v-col class="pa-0 pb-1">
        <v-card style="min-height: 100%" class="d-flex flex-column justify-center">
          <v-card-text>
            <span v-html="`Stylus heating : ${heatingLabel.toPrecision(1)} A`" class="text-h5"></span>
            <v-progress-linear v-model="heating" height="40"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-1 pa-0">
        <v-card style="min-height: 100%" class="d-flex flex-column justify-center">
          <v-card-text>
            <span v-html="`Motor speed : ${speed.toPrecision(3)} %`" class="text-h5"></span>
            <v-progress-linear v-model="speed" height="40"></v-progress-linear>
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
const electron = window.require("electron")
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
      'setSelection'
    ])
  },
  data () {
    return {
      message: null
    }
  },
  mounted () {
    console.log(this)
    electron.ipcRenderer.invoke('setSource', 'non').then((result) => {
      console.log(result)
    })
  }
}
</script>
