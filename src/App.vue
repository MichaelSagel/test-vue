<template>
  <div class="container-body">

    <div class="hat">

      <div class="login">Login</div>

      <div class="ceateNewAccaunt_container">
        <button class="button_bady">
          Ceate New Accaunt
        </button>
      </div>

    </div>

      <div class="text_container">
        Plase use your credentials to log in. If you have forgotten your password, please click the "Forgot password" button.
      </div>

      <div class="input_container">
        <input class="input_container_body" placeholder="Your e-mail address">
      </div>
                
      <div class="input_container">
        <input class="input_container_body" placeholder="Your password">
      </div>

      <div class="forgotPassword_container">
        <button class="button_bady">
          Forgot password
        </button>
      </div>

      <div class="letsGetStarted_container">
        <button class="letsGetStarted_container_bady">
          →Let´s get started!
        </button>
      </div>

   </div>

</template>





<style>

.container-body{
  display: flex;
  flex-direction: column;
  margin: 30px;
  font-size: 20pt;
  border: 4px solid gray;
  max-width: 800px;
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

.text_container{
  margin:25px 25px;
}

.input_container{
  margin:25px 25px;
  font-size: 20pt;
}
.input_container_body{
  font-size: 20pt;
  width: 100%;
}

.button_bady{
  font-size: 20pt;
  text-decoration: underline;
  text-decoration-color: green;
  margin:25px 25px;
  background: transparent;
  border: inherit;
}

.letsGetStarted_container{
  margin:25px 25px;
  
}

.letsGetStarted_container_bady{
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20pt;
  background-color: white;
  border-style: solid;
  border-color: rgb(56, 151, 56);
}

</style>
