<template>
  <div class="container">

      <div class="login">
          Login
        <button class="button_bady">
          Create New Accaunt
        </button>
      </div>

    <div class="container-body">
      Plase use your credentials to log in. If you have forgotten your password,
      please click the "Forgot password" button.
    </div>

    <div class="container-body">
      <input class="input_container_body" placeholder="Your e-mail address" />
    </div>

    <div class="container-body">
      <input class="input_container_body" placeholder="Your password" />
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

.container {
  display: block;
  margin: auto;
  position: relative;
  font-size: 20pt;
  border: 4px ridge rgb(26, 207, 207);
  border-radius: 8px;
  max-width: 800px;
}

.login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24pt;
  margin: 25px 25px;
}@media screen and (max-width: 400px) {
    .login {flex-direction: column;}
   }

.container-body {
  margin: 25px 25px;
}
.input_container_body {
  font-size: 20pt;
  width: 100%;
}

.button_bady {
  font-size: 20pt;
  text-decoration: underline;
  text-decoration-color: rgb(179, 19, 19);
  margin: 25px 25px;
  background: transparent;
  border: inherit;
}

.letsGetStarted_container_bady {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20pt;
  background-color: white;
  border-style: solid;
  border-color: rgb(56, 151, 56);
}
</style>
