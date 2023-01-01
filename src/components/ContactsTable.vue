<template>
  <v-container>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    >
    </v-text-field>
    <v-data-table
      @click:row="navigateToDetailed"
      :headers="headers"
      :items="store.contacts"
      :search="search"
      item-key="id.value"
      :items-per-page="15"
    >
      <template v-slot:[`item.picture.thumbnail`]="{ item }">
        <v-avatar>
          <v-img
            class="contacts-table-img"
            :src="item.picture.thumbnail"
          >
          </v-img>
        </v-avatar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { store } from '../store/store.js'

export default {
  name: 'ContactsTable',

  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Profile picture',
          align: 'center',
          sortable: false,
          filterable: false,
          value: 'picture.thumbnail'
        },
        {
          text: 'Full name',
          align: 'start',
          value: 'fullName'
        },
        { text: 'Age', value: 'dob.age' },
        { text: 'Phone number', value: 'cell' },
        { text: 'Email', value: 'email' },
        { text: 'City', value: 'location.city' }
      ],
      store
    }
  },

  methods: {
    navigateToDetailed (item) {
      this.$router.push(`/detailed/${item.login.uuid}`)
    }
  }
}
</script>
