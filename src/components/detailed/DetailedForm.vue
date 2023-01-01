<template>
  <v-form v-if="store.dataLoaded && validId" class="detailed-form-wrapper">
    <BasicDetailsSection :userInfo="userInfo" />
    <PersonalDetailsSection :userInfo="userInfo" />
  </v-form>
  <PageNotFound v-else/>
</template>

<script>
import { store } from '../../store/store.js'
import BasicDetailsSection from './BasicDetailsSection.vue'
import PersonalDetailsSection from './PersonalDetailsSection.vue'
import PageNotFound from '../../views/PageNotFound.vue'

export default {
  name: 'DetailedForm',
  components: {
    BasicDetailsSection,
    PersonalDetailsSection,
    PageNotFound
  },
  data () {
    return {
      id: null,
      store,
      userInfo: {},
      validId: false
    }
  },

  mounted () {
    this.id = this.$route.params.id
    this.userInfo = this.store.contacts.find(c => c.login.uuid === this.id)
    this.validId = !!this.userInfo
  }
}
</script>

<style scoped>

.detailed-form-wrapper {
  padding: 1rem;
}

.detailed-container-wrapper {
  outline: 1px solid lightgrey;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

</style>
