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

  import containerBodyText from './containerBodyText.vue'
  import mail from './mail.vue'
  import password from './password.vue'
  import login from './login.vue'
  import forgotPassword from './forgotPassword.vue'
  import containerBodyButton from './containerBodyButton.vue'

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