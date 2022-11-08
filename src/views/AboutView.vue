<template>
  <div>
    <my-component>

      <template v-slot:header>
        <h1> หัวข้อตาราง </h1>
      </template>

      <template v-slot:footer>
        <div style="background-color: black; color: white; text-align: center;">
          Footer
        </div>
      </template>

      <template #[`default`]="{ user }">

        {{ user.firstName }} {{ user.lastName }}

        <!-- # = v-slot: -->

        <!-- 1. slotProps = { user: { firstName: '...' } } -->

        <!-- 2. { user } = { firstName: '...' } -->

        <!-- <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"> -->
      </template>

    </my-component>
    <div style="" class=""></div>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'

export default {
  components: {
    MyComponent
  },
  data () {
    return {
      msg: 'My Component'
    }
  }
}
</script>

<style>

</style>
