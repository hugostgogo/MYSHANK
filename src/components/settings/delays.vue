<template>
  <v-dialog fullscreen v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-on="on" v-bind="attrs">DELAYS</v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary">
        <v-flex class="d-flex align-center justify-space-between pa-5">
          <v-flex>
            <span class="text-h4">Functions delays</span>
          </v-flex>

            <v-btn icon x-large @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-flex>
      </v-toolbar>
      <v-flex class="d-flex justify-center align-center">
        <v-flex column class="px-16 pt-10">
          <label class="text-h6">LEAD IN delay</label>
          <v-flex class="d-flex align-center justify-space-around">

              <v-btn x-large icon color="error">
                <v-icon x-large>mdi-minus</v-icon>
              </v-btn>

            <v-flex class="d-flex align-center justify-center pa-5">
              <v-text-field outlined hide-details suffix="ms" v-model="form.leadInDelay" @keyup.enter="setLeadIn(form.leadInDelay)">
              </v-text-field>
            </v-flex>

              <v-btn x-large icon color="success">
                <v-icon x-large>mdi-plus</v-icon>
              </v-btn>

          </v-flex>



          <label class="text-h6">SPACE delay</label>
          <v-flex class="d-flex align-center justify-center pb-3">
            <v-text-field outlined hide-details suffix="ms" v-model="form.spaceDelay" @keyup.enter="setSpace(form.spaceDelay)">
            </v-text-field>

          </v-flex>
          <v-flex class="d-flex align-center justify-space-around">
            <v-flex shrink>
              <v-btn x-large icon color="error">
                <v-icon x-large>mdi-minus</v-icon>
              </v-btn>
            </v-flex>
            <v-flex shrink>
              <v-btn x-large icon color="success">
                <v-icon x-large>mdi-plus</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-flex>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    ...mapActions({
      setLeadIn: 'setLeadIn',
      setSpace: 'setSpace',
    })
  },
  computed: {
    ...mapGetters({
      leadInDelay: 'leadInDelay',
      spaceDelay: 'spaceDelay'
    }),
    form () {
      return { spaceDelay: this.spaceDelay, leadInDelay: this.leadInDelay }
    }
  }
}
</script>
