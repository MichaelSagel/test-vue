<template>

  <div class="layout">
      
      <header class="img-gira">
        <img src="https://virtrex-vtf-stage-files.fra1.digitaloceanspaces.com/files/SgAHSsaBTeFU322LvQGTCQ7xwO7dNhMyfvDuTyfh.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ZXTMNN6WRZVJBDDTCWDO%2F20210425%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20210425T150515Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=57cbf8ee036f241647210cef8f989f81dfba06035a5cf916758c38cda7cffe53" alt="Gira-Logo" class="img-gira-bady">
      </header>  


    <div class="background">
      <div class="background-imag">
      </div>
      
      <svg width="664" height="714" viewBox="0 0 664 714" fill="none" class="background-image-2"><path d="M572.442 417.127C560.081 416.15 547.723 415.141 535.36 414.2C510.756 412.326 487.744 418.536 465.46 429.49C441.846 441.098 423.113 458.777 408.073 481.267C399.067 494.735 390.62 508.642 381.572 522.076C369.6 539.852 355.153 554.733 336.677 564.549C327.255 569.555 317.312 572.306 306.789 572.813C291.755 573.538 276.632 573.287 261.877 577.357C241.105 583.085 223.172 594.089 207.906 610.395C194.558 624.652 184.177 641.186 174.561 658.464C168.57 669.228 161.783 679.48 155.218 689.861C152.941 693.46 150.68 697.302 147.651 700.055C143.719 703.627 139.366 707.279 134.606 709.063C105.694 719.903 79.7251 712.292 56.7354 692.11C42.8894 679.955 37.3898 662.768 35.8961 643.849C34.4345 625.338 38.4119 607.961 43.8231 590.622C49.0721 573.803 54.0493 556.824 58.0107 539.611C63.2949 516.65 59.9832 494.263 51.6844 472.571C46.5017 459.024 39.2605 446.836 31.4047 434.972C25.1909 425.587 19.2782 415.965 13.3728 406.348C-4.53535 377.183 -3.48475 347.137 10.7456 317.026C17.5842 302.555 25.8795 288.897 33.1216 274.638C42.9644 255.258 51.8094 235.322 55.0839 213.251C59.255 185.136 58.2053 157.281 51.8466 129.444C48.1253 113.153 45.4897 96.3763 44.294 79.6574C42.7856 58.5666 48.3587 38.977 61.712 23.0043C80.0257 1.09851 102.603 -4.49853 128.766 3.39894C150.031 9.81817 166.152 24.0953 180.994 40.7388C189.076 49.8005 197.374 58.6404 205.321 67.8358C222.228 87.3982 243.221 96.1131 267.717 96.6492C285.067 97.0289 301.585 92.7254 318.19 88.1984C330.596 84.816 343.082 81.2792 355.736 79.5695C381.559 76.0803 404.077 85.3358 424.052 102.825C439.323 116.195 449.512 133.411 457.259 152.606C462.765 166.248 468.159 179.955 474.088 193.383C479.023 204.558 485.606 214.618 493.138 224.049C503.638 237.195 517.051 244.01 532.561 246.255C546.532 248.276 560.641 249.189 574.609 251.227C600.216 254.964 623.444 264.497 641.714 285.268C654.412 299.705 662.513 316.551 663.859 336.608C664.922 352.446 659.874 366.59 652.088 379.683C636.699 405.559 614.025 416.713 586.235 417.339C583.886 417.392 581.532 417.349 579.183 417.265C576.941 417.186 574.702 416.996 572.461 416.855C572.454 416.946 572.448 417.036 572.442 417.127Z" fill="currentColor">

      </path>
      </svg>

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

        <div class="container-body-button">
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
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10;
    
}

.background-imag {
    position: absolute;
    background-repeat: no-repeat;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    background-image: url(https://expo.stage.virtrex.de/img/pattern_gradient.svg);
    background-position: 100% 75%;
    background-size: cover;
    opacity: .1;
    border:0;
}

.background-image-2{
    width: 100%;
    height: 100%;
    bottom: -60%;
    left: -40%;
    color: #aacc5c;
    position: absolute;
    background-repeat: no-repeat;
}

.div-container-body {
  display: block;
  transform: translateY(10px);
}


:enabled


.img-gira{
  width: 100%;
  padding-bottom: 36px;
  display: flex;
  justify-content: space-between;
  position: relative;
  border:0;
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
  padding: 4px;
  background: transparent;
  border: inherit;
  border-radius: 4px;
}

.button-bady:hover {
  background-color: #aacc5c;
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
      top: -80px;
      right: -20px;
      text-decoration-color: red;
    }
    .container{
      position: absolute;
      top: +100px;
    }
    
  }

.container-body {
  margin: 25px 25px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  
  
}

input:focus{ 
font-size: 18px;



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




.letsGetStarted-container-bady {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20pt;
  background-color: white;
  border-style: solid;
  border-color: #aacc5c;
  padding: 4px;
  border-radius: 6px;
  
}

.letsGetStarted-container-bady:hover {
  background-color: #aacc5c;
}

.container-body-button{
  border: 0;
  margin: 25px 25px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.body{
  display: block;
}

.div {
  display: block;
}



</style>
