<template>
  <div class="container">

    <div class="hat">

      <div class="login">Login</div>

      <div class="ceateNewAccaunt_container">Ceate New Accaunt</div>

    </div>

      <div class="text_container">
        Plase use your credentials to log in. If you have forgotten your password, please click the "Forgot password" button.
      </div>

      <div class="yourEmailAddress_container">
        <input class="yourEmailAddress_container_body" placeholder="Your e-mail address">
      </div>
                
      <div class="yourPassword_container">
        <input class="yourPassword_container_body" placeholder="Your password">
      </div>

      <div class="forgotPassword_container">
        Forgot password
        </div>

      <div class="letsGetStarted_container">
        <button class="letsGetStarted_container_bady">
          →Let´s get started!
        </button>
      </div>

   </div>

</template>





<style>

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
}
.yourEmailAddress_container_body{
  font-size: 20pt;
  width: 100%;
}

.yourPassword_container{
  margin:25px 25px;
  font-size: 20pt;
}

.yourPassword_container_body{
  width: 100%;
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

.letsGetStarted_container_bady{
  width: 100%;
  font-size: 20pt;
  display: flex;
  justify-content: space-between;
}

</style>
