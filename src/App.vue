<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { store } from './store/store.js'

export default {
  name: 'App',

  data: () => ({
    store
  }),

  methods: {
    // fetch data from BE
    getContacts () {
      fetch('https://randomuser.me/api/?page=1&results=100&seed=abc')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('There was an error while fetching data. Please try again later')
          }
        })
        .then((data) => {
          store.dataLoaded = true
          store.contacts = data.results
          store.contacts = store.contacts.map(c => {
            c.fullName = `${c.name.first} ${c.name.last}`
            return c
          })
        })
        .catch((error) => {
          store.dataLoaded = false
          throw new Error(error)
        })
    }
  },
  created () {
    this.getContacts()
  }
}

</script>
