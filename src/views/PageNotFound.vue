<template>
  <div>
    <AppBar
      icon="mdi-home"
      icon-title="Home"
    />
    <div class="page-not-found-wrapper">
      <p class="page-not-found-code">
        404
      </p>
      <p>
        Oops! Page Not Found.
      </p>
      <p>
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'

export default {
  name: 'PageNotFound',

  components: {
    AppBar
  }

}
</script>

<style>

.page-not-found-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.page-not-found-code {
  font-size: 5rem;
}

</style>
