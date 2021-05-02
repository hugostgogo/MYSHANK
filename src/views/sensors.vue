<template>
  <v-layout>
    <heating />
    <motor />
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
