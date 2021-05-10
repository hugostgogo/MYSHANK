<template>
<v-card class="mt-2 pa-3 px-5 d-flex align-center" style="flex-grow: 1">
    <v-flex>
      <v-flex class="d-flex justify-space-between align-center">
        <span class="text-h5">Motor speed <span v-if="speedSat">: {{ speed }} %</span></span>
        <v-switch v-model="speedSat" @change="setSpeed"></v-switch>
      </v-flex>
      <v-fade-transition>
        <v-progress-linear v-if="speedSat" top v-model="speed" height="50"></v-progress-linear>
      </v-fade-transition>
    </v-flex>
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
      speedSat () {
        return this.speedStatus
      }
    },
    methods: {
      ...mapMutations([
        'setSpeed'
      ]),
    }
  }
</script>
