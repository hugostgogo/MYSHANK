<template>
<v-row class="row wrap pa-5">
      <v-card @click="leadIn" class="ma-3 pa-3 col-3">
        <v-responsive :aspect-ratio="1">
          <v-card-title>Lead in</v-card-title>
        </v-responsive>
      </v-card>

      <v-card tag="v-card" class="ma-3 pa-3 col-3">
        <v-responsive :aspect-ratio="1">
          <v-card-title>Space</v-card-title>
        </v-responsive>
      </v-card>
</v-row>
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
