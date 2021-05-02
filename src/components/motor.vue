<template>
<v-card tag="v-card" class="ma-2 d-flex align-center">
    <v-card-text class="px-4">
      <v-flex class="d-flex justify-space-between align-center">
        <span class="text-h5">Motor speed <span v-if="status.speed">: {{ speed }} %</span></span>
        <v-switch v-model="status.speed"></v-switch>
      </v-flex>
      <v-fade-transition>
        <v-progress-linear v-if="status.speed" top v-model="speed" height="50"></v-progress-linear>
      </v-fade-transition>
    </v-card-text>
</v-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
  export default {
    data: () => ({
      status: {
        speed: false
      }
    }),
    computed: {
      ...mapGetters([
        'speed',
        'speedStatus',
      ]),
    },
    methods: {
      ...mapMutations([
        'setStatus'
      ]),
    },
    watch: {
      status: {
        handler(val) {
          this.setStatus(val)
        },
        deep: true
      }
    },
  }
</script>
