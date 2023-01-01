<template>
  <v-container class="detailed-container-wrapper">
    <DetailedFormSubHeader
      icon="mdi-tooltip-account"
      label="BASIC DETAILS"
    />
    <v-row class="detailed-form-first-block">
      <v-col
        cols="12"
        sm="3"
        class="detailed-user-picture"
      >
        <v-avatar
          height="10rem"
          width="10rem"
        >
          <img
            :src="userInfo.picture.large"
          />
        </v-avatar>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-row>
          <v-col sm="4">
            <v-text-field
              :value="userInfo.name.title"
              readonly
              label="Title"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              :value="userInfo.fullName"
              readonly
              label="Full name"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          :value="userInfo.email"
          readonly
          label="Email Adress"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailedFormSubHeader from './DetailedFormSubHeader'

export default {
  name: 'BasicDetailsSection',
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
  },

  mounted () {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

.detailed-form-first-block{
  margin-top: 1rem;
}

.detailed-user-picture {
  display: flex;
  justify-content: center;
}

</style>
