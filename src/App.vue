<template>
  <div class="container">

    <div class="container-head">

      <div class="login">Login</div>

      <div class="ceateNewAccaunt_container">
        <button class="button_bady">
          Create New Accaunt
        </button>
      </div>

    </div>

      <div class="container-body">
        Plase use your credentials to log in. If you have forgotten your password, please click the "Forgot password" button.
      </div>

      <div class="container-body">
        <input class="input_container_body" placeholder="Your e-mail address">
      </div>
                
      <div class="container-body">
        <input class="input_container_body" placeholder="Your password">
      </div>

      <div class="forgotPassword_container">
        <button class="button_bady">
          Forgot password
        </button>
      </div>

      <div class="container-body">
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
  border: 4px solid gray;
  max-width: 800px;
}

.container-head{
  display: flex;
  justify-content: space-between;
}

.login{
  font-size: 24pt;
  font-weight: 600;
  margin:25px 25px;
}

.container-body{
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
