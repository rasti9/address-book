<template>
  <div v-if="store.dataLoaded">
    <AppBar
      app-bar-header="Detailed page"
      icon="mdi-arrow-left"
      icon-title="Back"
    />
    <DetailedForm />
  </div>
  <v-progress-circular
    v-else
    color="blue"
    :size="70"
    indeterminate
    style="detailed-loading-indicator"
    >
  </v-progress-circular>
</template>

<script>
import DetailedForm from '../components/detailed/DetailedForm.vue'
import AppBar from '../components/AppBar.vue'
import { store } from '../store/store.js'

export default {
  name: 'DetailedView',

  components: {
    DetailedForm,
    AppBar
  },

  data () {
    return {
      store
    }
  }

}
</script>

<style>

.v-progress-circular {
  top: 50%;
  left: 50%;
}

</style>
