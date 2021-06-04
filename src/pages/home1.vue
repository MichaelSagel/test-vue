<template>

  <div class="container">

    <div class="container-bady">

      <login></login>

      <containerBodyText></containerBodyText>

      <mail></mail>
      
      <password></password>

      <forgotPassword></forgotPassword>

      <containerBodyButton></containerBodyButton>

    </div>

  </div>

</template>

<script> 

  import containerBodyText from './../components/containerBodyText.vue'
  import mail from './../components/mail.vue'
  import password from './../components/password.vue'
  import login from './../components/login.vue'
  import forgotPassword from './../components/forgotPassword.vue'
  import containerBodyButton from './../components/containerBodyButton.vue'

  /*
  import containerBodyButton from './containerBodyButton.vue'
  */

  export default {
    components: {
      containerBodyText,
      mail,
      password,
      login,
      forgotPassword,
      containerBodyButton,
    }
  }

</script>

<style>

  @import './../style/container.css';

</style>