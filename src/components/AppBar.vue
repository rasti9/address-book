<template>
  <v-app-bar
    app
    dense
    outlined
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="navigateToHomePage()">
        <v-icon
          :title="iconTitle"
        >
          {{ icon }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{appBarHeader}}</v-toolbar-title>
    </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppBar',

  props: {
    appBarHeader: String,
    icon: String,
    iconTitle: String
  },

  methods: {
    navigateToHomePage () {
      if (this.$route.path !== '/home') this.$router.push('/home')
    }
  }
}
</script>
