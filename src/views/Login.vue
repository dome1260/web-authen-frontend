<template>
  <div class="login">
    <div class="login__card">
      <input type="text" placeholder="Firstname" v-model="form.firstName" style="border: 1px solid black;"> <br><br>
      <input type="text" placeholder="Lastname" v-model="form.lastName" style="border: 1px solid black;"> <br><br>
      <button @click="login()" style="border: 1px solid black;">
        login
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setAuth: 'setAuth'
    }),
    async login () {
      try {

        const { data } = await axios.post('http://localhost:3000/auth/login', {
          firstName: this.form.firstName,
          lastName: this.form.lastName
        })

        alert('Login success!')
        this.setAuth(data.accessToken)
        this.$router.push('/')

      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
  .login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login__card {
    border: 1px solid black;
    padding: 24px;
  }
</style>
