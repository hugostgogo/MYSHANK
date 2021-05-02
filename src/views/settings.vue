<template>
  <v-flex>
    <v-card class="pa-5 d-flex flex-column" style="height: 100%">

      <span class="text-h5">Settings</span>

      <v-divider class="my-3" color="white"/>
      <v-flex class="pa-3 d-flex align-center" grow>
        <v-flex grow>
          <v-color-picker hide-inputs @update:color="changeColor" dot-size="25" swatches-max-height="200" @change="changeColor" v-model="colors.primary"></v-color-picker>
        </v-flex>
        <v-divider vertical class="mx-10" color="white"/>
        <v-flex column grow>
          <label class="text-h6">LEAD IN delay</label>
          <v-flex class="d-flex align-center justify-center pb-3">
            <v-text-field outlined hide-details suffix="ms">
            </v-text-field>
            <v-btn :color="colors.primary" @click="changeColor" class="ml-2" style="height: 100Ù">
              set
            </v-btn>
          </v-flex>
          <label class="text-h6">SPACE delay</label>
          <v-flex class="d-flex align-center justify-center pb-3">
            <v-text-field outlined hide-details suffix="ms">
            </v-text-field>
            <v-btn :color="colors.primary" @click="changeColor" class="ml-2" style="height: 100Ù">
              set
            </v-btn>
          </v-flex>
        </v-flex>
      </v-flex>
    </v-card>
  </v-flex>
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
        console.log(this.colors.primary)
        this.$vuetify.theme.currentTheme.primary = this.colors.primary
      }
    }
  }
</script>
