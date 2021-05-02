<template>
<v-layout fill-height wrap class="pa-4">

  <v-layout class="pa-3 ma-2" column>
    <selection/>
  </v-layout>

  <v-card></v-card>

  <v-layout column>
    <heating />
    <motor />
  </v-layout>
  <fab></fab>
</v-layout>
</template>

<script>
import fab from '../components/fab'
import heating from '../components/heating'
import motor from '../components/motor'
import selection from '../components/selection'
export default {
  components: {
    fab,
    heating,
    motor,
    selection
  }
}
</script>

<style>

</style>
