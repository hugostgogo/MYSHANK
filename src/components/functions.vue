<template>
  <v-list>
    <v-list-item>
      <v-btn @click="leadIn">
        Lead in
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn @click="space">
        space
      </v-btn>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'space',
      'leadIn'
    ])
  }
}
</script>
