<template>
  <v-card class="ma-2 pa-5 d-flex align-center">
    <v-card-text class="px-4">
      <v-flex class="d-flex justify-space-between align-center">
        <span class="text-h5">Stylus heating<span v-if="status.heating"> : {{ heatingLabel }} A</span></span>
        <v-switch v-model="status.heating"></v-switch>
      </v-flex>
      <v-fade-transition>
        <v-progress-linear reverse readonly v-if="status.heating" v-model="heating" color="rgba(0,0,0, 0.7)" style="background: linear-gradient(0.25turn, #00ff00, #ffa500,#ff0000)" height="50" class="mt-5"></v-progress-linear>
      </v-fade-transition>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    status: {
      heating: false,
    }
  }),
  methods: {
    ...mapMutations([
      'setStatus'
    ])
  },
  computed: {
    ...mapGetters([
      'heating',
      'heatingLabel',
      'heatingStatus'
    ])
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
