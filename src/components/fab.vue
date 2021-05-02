<template>
<v-speed-dial
    v-model="fab"
    top right
    direction="left"
    transition="slide-y-reverse-transition"
    fixed
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="primary"
      @click="leadIn"
    >
      <v-icon>mdi-contain-start</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="primary"
      @click="space"
    >
      <v-icon>mdi-keyboard-space</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
import { mapActions } from "vuex"
  export default {
    data: () => ({
      fab: false
    }),
    methods: {
      ...mapActions([
        'leadIn',
        'space'
      ])
    }
  }
</script>
