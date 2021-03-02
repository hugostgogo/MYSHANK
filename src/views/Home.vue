<template>
<v-container style="height: 100%" class="d-flex align-center px-3">
  <div class="row justify-space-around" style="height: 90%">

    <v-card class="col pa-5">
      <v-card-title>Source selection</v-card-title>
      <div class="d-flex flex-column justify-space-around" style="height: 80%">
        <div class="d-flex justify-start align-center">
          <v-btn fab :color="phono.value ? 'primary' : ''" @click="setPhono">
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <span class="text-h5 ml-4">{{ phono.label }}</span>
        </div>

        <div class="d-flex justify-start align-center">
          <v-btn fab :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setFeedBack">
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <span class="text-h5 ml-4">{{ feedBack.label }}</span>
        </div>

        <div class="d-flex justify-start align-center">
          <v-btn fab :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setLineIn">
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <span class="text-h5 ml-4">{{ lineIn.label }}</span>
        </div>
      </div>
    </v-card>


    <v-col class="d-flex flex-column justify-space-around align-center">
      <v-card class="col">
        <v-card-text>
          <span v-html="`Stylus heating : ${heatingLabel.toPrecision(1)} A`" class="text-h5"></span>
          <v-progress-linear v-model="heating" height="40"></v-progress-linear>
        </v-card-text>
      </v-card>
      <v-spacer />
      <v-card class="col">
        <v-card-text>
          <span v-html="`Motor speed : ${speed.toPrecision(3)} %`" class="text-h5"></span>
          <v-progress-linear v-model="speed" height="40"></v-progress-linear>
        </v-card-text>
      </v-card>
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
      'setPhono',
      'setLineIn',
      'setFeedBack'
    ])
  }
}
</script>
