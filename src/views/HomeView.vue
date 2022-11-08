<template>
  <div>
    Home Page <br><br>
    <button @click="logout()" style="border: 1px solid black;">
      Logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      setAuth: 'setAuth'
    }),
    logout () {
      this.setAuth('')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
