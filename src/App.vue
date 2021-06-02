<template>

  <div class="layout">

    <div class="layout-bady">

      <logo></logo> 

      <background></background>
      
      <container></container>
        
      <info></info>

    </div>

    <div>

      <router-link to="/about">Перейти к Home</router-link>
      <router-view></router-view>

    </div>

  </div> 

</template>

<script> 
  import info from './components/info.vue'
  import background from './components/background.vue'
  import logo from './components/logo.vue'
  import container from './components/container.vue'
  /*
  import logo from './components/logo.vue'
  */
  export default {
    components: {
      info,
      background,
      logo,
      container,
    }
  }
</script>



<style>
  @import './style/global.css';
  @import './style/app.css';
</style>