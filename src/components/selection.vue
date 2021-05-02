<template>
  <v-card class="pa-5 pb-8 ma-3" style="width: 100%;">
    <v-card-text class="text-h5">Source selection</v-card-text>
    <v-flex class="d-flex">
      <v-flex class="d-flex flex-column align-center">
        <v-btn fab style="height:400px; width: 400px" :color="phono.value ? 'primary' : ''" @click="setSelection(phono.pin)">
          <img src="@/assets/phono.png" style="height: 100px" />
        </v-btn>
        <span class="text-h5 mt-3">{{ phono.label }}</span>
      </v-flex>

      <v-flex class="d-flex flex-column align-center">
        <v-btn fab style="height:400px; width: 400px" :color="feedBack.value ? 'primary' : ''" v-model="feedBack.value" @click="setSelection(feedBack.pin)">
          <img src="@/assets/feed_back.png" style="height: 100px" />
        </v-btn>
        <span class="text-h5 mt-3">{{ feedBack.label }}</span>
      </v-flex>

      <v-flex class="d-flex flex-column align-center">
        <v-btn fab style="height:400px; width: 400px" :color="lineIn.value ? 'primary' : ''" v-model="lineIn.value" @click="setSelection(lineIn.pin)">
          <img src="@/assets/line_in.png" style="height: 100px" />
        </v-btn>
        <span class="text-h5 mt-3">{{ lineIn.label }}</span>
      </v-flex>
    </v-flex>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'phono',
      'feedBack',
      'lineIn',
    ]),
  },
  methods: {
    ...mapMutations([
      'setSelection'
    ]),
  },
}
</script>
