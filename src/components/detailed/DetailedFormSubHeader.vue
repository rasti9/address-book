<template>
  <v-col
    cols="12"
    sm="12"
  >
    <v-row class="detailed-subheader-border">
      <v-icon
        medium
      >
        {{ icon }}
      </v-icon>
      <v-subheader>{{label}}</v-subheader>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'DetailedFormSubHeader',
  props: {
    icon: String,
    label: String
  }
}
</script>

<style scoped>

.detailed-subheader-border {
  border-bottom: 1px solid lightgrey;
}

</style>
