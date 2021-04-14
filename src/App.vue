<template>

  <div class="layout">
    
    <header class="epx-authentication__header">
      <img src="https://virtrex-vtf-stage-files.fra1.digitaloceanspaces.com/files/SgAHSsaBTeFU322LvQGTCQ7xwO7dNhMyfvDuTyfh.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ZXTMNN6WRZVJBDDTCWDO%2F20210414%2Ffra1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210414T084519Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=7200&amp;X-Amz-Signature=46fb4d27c956d4ec4c618fa50e8e86816ad628cc7ef85cb309584e723202e13c" alt="Virtrex" class="img-gira">
    </header>  

    
    









    <div class="container">














        <div class="login">
            Login
          <a class="button_bady" href="">
            Create New Accaunt
          </a>
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
        <a class="button_bady" href="">
          Forgot password
        </a>
      </div>

      <div class="container-body">
        <button class="letsGetStarted_container_bady">
          →Let´s get started!
        </button>
      </div>
    </div>
  </div>
</template>





<style>

.layout {
  position: relative;
  margin: 16px;
}

.img-gira {
  height: 44px;
}

.container {
  display: block;
  margin: auto;
  font-size: 20pt;
  border: 4px ridge gray;
  border-radius: 8px;
  max-width: 800px;
}






.vtx-typo-header-2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
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
  border-radius: 8px;
}

.button_bady:hover {
  background-color: green;
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

.letsGetStarted_container_bady:hover {
  background-color: green;
}

</style>
