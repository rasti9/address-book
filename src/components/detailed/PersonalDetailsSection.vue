<template>
  <v-container class="detailed-container-wrapper">
    <DetailedFormSubHeader
      icon="mdi-account-circle"
      label="PERSONAL DETAILS"
    />
    <v-row align="center">
      <v-col cols="6" md="2" sm="2">
        <v-subheader>Date of birth</v-subheader>
      </v-col>
      <v-col cols="6" md="4" sm="4">
        <v-text-field
          :value="new Date(userInfo.dob.date).toLocaleDateString()"
          readonly
        >
        </v-text-field>
      </v-col>
      <v-col cols="6" md="1" sm="2">
        <v-subheader>Gender</v-subheader>
      </v-col>
      <v-col cols="6" md="2" sm="4">
        <v-text-field
          :value="userInfo.gender"
          readonly
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="detailed-row-padding">
      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          :value="getLocation()"
          readonly
          label="Current location"
        >
        </v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-text-field
          :value="this.userInfo.location.postcode"
          readonly
          label="Postcode"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="detailed-row-padding">
      <v-col
        cols="12"
        sm="4"
      >
        <v-text-field
          :value="this.userInfo.phone"
          readonly
          label="Phone number"
        >
        </v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="5"
      >
        <v-text-field
          :value="this.userInfo.cell"
          readonly
          label="Cellphone"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailedFormSubHeader from './DetailedFormSubHeader'

export default {
  name: 'PersonalDetailsSection',
  components: {
    DetailedFormSubHeader
  },
  props: {
    userInfo: {}
  },

  methods: {
    getLocation () {
      return `${this.userInfo.location.street.name} ${this.userInfo.location.street.number}, ${this.userInfo.location.city}, ${this.userInfo.location.country}`
    }
  }
}
</script>

<style scoped>

.detailed-row-padding {
  @media screen and (min-width: 900px) {
    padding-left: 16px
  }
}

</style>
