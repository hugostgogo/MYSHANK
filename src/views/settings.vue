<template>
  <v-layout column>
    <v-flex>
      <h1>Settings</h1>
    </v-flex>
    <v-flex>
      <v-flex>
        <label>Primary color</label>
        <v-text-field v-model="colors.primary"></v-text-field>
        <v-btn color="primary" @click="changeColor">0</v-btn>
      </v-flex>
      <v-flex>
      1
      </v-flex>
      <v-flex>
      1
      </v-flex>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      colors: {
        primary: '#000000'
      }
    }),
    created () {
      this.colors.primary = this.$vuetify.theme.currentTheme.primary
    },
    methods: {
      changeColor () {
        this.$vuetify.theme.currentTheme.primary = this.colors.primary
      }
    }
  }
</script>
