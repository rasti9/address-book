<template>
  <div>
    <AppBar
      app-bar-header="Address book"
      icon="mdi-home"
      icon-title="Home"
    />
    <ContactsTable />
  </div>
</template>

<script>
import ContactsTable from '../components/ContactsTable'
import AppBar from '../components/AppBar.vue'

export default {
  name: 'ContactsView',

  components: {
    AppBar,
    ContactsTable
  }

}
</script>
