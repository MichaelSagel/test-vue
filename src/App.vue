<template>

  <div class="layout">

    <div class="layout-bady">

      <logo></logo> 

      <background></background>
      
      <router-view>

        <home1></home1>
      
      </router-view>
        
      <info></info>

    </div>

  </div> 

</template>

<script> 
  import info from './components/info.vue'
  import background from './components/background.vue'
  import logo from './components/logo.vue'
  import home1 from './pages/home1.vue'
  /*
  import logo from './components/logo.vue'
  */
  export default {
    components: {
      info,
      background,
      logo,
      home1,
    },
  }
</script>



<style>
  @import './style/global.css';
  @import './style/app.css';
</style>