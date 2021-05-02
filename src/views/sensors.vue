<template>
  <v-layout column>
    <v-container>
      <heating />
      <motor />
    </v-container>
  </v-layout>
</template>

<script>
import heating from '../components/heating'
import motor from '../components/motor'
export default {
  components: {
    heating,
    motor
  }
}
</script>
