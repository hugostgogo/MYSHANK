<template>
  <v-card class="pa-3">
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
