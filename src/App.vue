<template>

  <div class="layout">
    
    <header class="epx-authentication-header">
      <img src="https://virtrex-vtf-stage-files.fra1.digitaloceanspaces.com/files/SgAHSsaBTeFU322LvQGTCQ7xwO7dNhMyfvDuTyfh.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ZXTMNN6WRZVJBDDTCWDO%2F20210415%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20210415T112551Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=c3383159750acaa6783c2b1d1e00d1f84f2ea735abbf4625e3066058d96f6453" class="img-gira">
    </header>  




    <div class="container">


        <div class="login">
            Login
          <a class="button-bady cnw" href="">
            Create New Accaunt
          </a>
        </div>

      <div class="container-body">
        Plase use your credentials to log in. If you have forgotten your password,
        please click the "Forgot password" button.
      </div>

      <div class="container-body">
        <label>
          <div class="input-container-body">
            Your e-mail address
          </div>
          <input class="input-container-footer" placeholder="Your e-mail address"/>
        </label>  
      </div>

      <div class="container-body">
        <input class="input-container-footer" placeholder="Your password"/>
      </div>

      <div class="forgotPassword-container">
        <a class="button-bady" href="">
          Forgot password
        </a>
      </div>

      <div class="container-body">
        <button class="letsGetStarted-container-bady">
          →Let´s get started!
        </button>
      </div>
    </div>
  </div>
</template>





<style>

label {
  display: flex;
  flex-direction: column;
  
}

.div-container-body {
  display: block;
  transform: translateY(10px);
}




.layout {
  position: relative;
  margin: 16px;
  
}

.img-gira {
  height: 44px;
  margin: 8px;
}

.container {
  display: block;
  margin: auto;
  font-size: 20pt;
  border: 4px ridge gray;
  border-radius: 8px;
  max-width: 800px;
  margin-top: 200px;
}

.button-bady {
  font-size: 16pt;
  text-decoration: underline;
  text-decoration-color: #aacc5c;
  color: black;
  margin: 25px 25px;
  background: transparent;
  border: inherit;
  border-radius: 8px;
}


.login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24pt;
  margin: 25px 25px;
}@media screen and (max-width: 640px) {
    .cnw {
      position: absolute;
      top: +170px;
      right: -22px;
      text-decoration-color: red;
    }
    
  }

.container-body {
  margin: 25px 25px;
  border-radius: 8px;
}
.input-container-footer {
  display: flex;
  flex-direction: column;
  font-size: 20pt;
  width: 100%;
  min-height: 56px;
  border-radius: 8px;
}

.input-container-body{
  box-sizing: border-box;
  display: none;
  font-size: 12pt;
  color: gray;
}@media screen and (max-width: 640px) {
    .input-container-body {
      display: block;
      position: absolute;
      top: +450px;
      left: +40px;
    }
    
  }


.button-bady:hover {
  background-color: #aacc5c;
}


.letsGetStarted-container-bady {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20pt;
  background-color: white;
  border-style: solid;
  border-color: #aacc5c;
  border-radius: 8px;
}

.letsGetStarted-container-bady:hover {
  background-color: #aacc5c;
}

.body{
  display: block;
}

</style>
