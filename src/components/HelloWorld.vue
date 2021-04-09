<template>
  <div class="container">

    <div class="hat">

      <div class="login">Login</div>

      <div class="ceateNewAccaunt_container">Ceate New Accaunt</div>

    </div>

      <div class="text_container">Plase use your credentials to log in. If you have forgotten your password, please click the "Forgot password" button.</div>

      <div class="yourEmailAddress_container"><input v-model="message" placeholder="Your e-mail address"></div>
                
      <div class="yourPassword_container"><input v-model="message" placeholder="Your password"></div>

      <div class="forgotPassword_container">Forgot password</div>

      <div class="letsGetStarted_container"><button>→Let´s get started!</button></div>

   </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  margin: 30px;
  font-size: 20pt;
}

.hat {
  display: flex;
  justify-content: space-between;
}

.login{
  font-size: 24pt;
  font-weight: 600;
  margin:25px 25px;
}

.ceateNewAccaunt_container{
  font-size: 20pt;
  text-decoration: underline;
  text-decoration-color: green;
}

.text_container{
  margin:25px 25px;
}

.yourEmailAddress_container{
  margin:25px 25px;
  font-size: 20pt;
  min-width: 420px;
}

.yourPassword_container{
  margin:25px 25px;
  font-size: 20pt;
}

.forgotPassword_container{
  font-size: 20pt;
  text-decoration: underline;
  text-decoration-color: green;
  margin:25px 25px;
}

.letsGetStarted_container{
  margin:25px 25px;
}

</style>
