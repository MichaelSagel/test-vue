<template>

  <div class="layout">
    
    <header class="img-gira">
      <img src="https://virtrex-vtf-stage-files.fra1.digitaloceanspaces.com/files/SgAHSsaBTeFU322LvQGTCQ7xwO7dNhMyfvDuTyfh.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ZXTMNN6WRZVJBDDTCWDO%2F20210416%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20210416T132037Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e234160f0443aa7758c9403d339d4bddf422ae24aaa7389fd4711b667306fac2" class="img-gira-bady">
    </header>  


  <div class="background">
    <div class="background-imag">
    </div>
    <div class="background-imag-2">

    </div>
  </div>





    <div class="container">


        <div class="login">
            Login
          <a class="button-bady cnw" href="">
            Create New Accaunt
          </a>
        </div>

      <div class="container-body-text">
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

*, :after, :before {
    box-sizing: border-box;
}

label {
  display: flex;
  flex-direction: column;
  position: relative;
}

.layout {
  position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 36px;
}

.background{
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10;
    
}

.background-imag {
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    background-image: url(https://expo.stage.virtrex.de/img/pattern_gradient.svg);
    background-position: 100% 75%;
    background-size: cover;
    opacity: .1;
}

.background-imag-2 {
    
}


.div-container-body {
  display: block;
  transform: translateY(10px);
}





.img-gira{
  width: 100%;
  padding-bottom: 36px;
  display: flex;
  justify-content: space-between;
  position: relative
}

.img-gira-bady {
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
  background-color: white;
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
      top: +180px;
      right: +15px;
      text-decoration-color: red;
    }

    
  }

.container-body {
  margin: 25px 25px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  
}

.container-body-text {
  margin: 25px 25px;
  border-radius: 8px;
}

.input-container-body{
  box-sizing: border-box;
  display: none;
  font-size: 12pt;
  color: gray;
}

.input-container-footer {
  display: flex;
  flex-direction: column;
  font-size: 20pt;
  width: 100%;
  min-height: 56px;
  border: 0;
  outline: 0;
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

.div {
  display: block;
}


</style>
