<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from './components/header.vue'

import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Ubuntu', sans-serif;  
  
}
.conteudo{
  flex: 1 0 auto;
  min-height: 100%;
  position: relative;
}
htnl, body{
  height: 100%;
}
body { 
  margin: 0px; 
  padding: 0px;
  box-sizing: border-box;
  /* overflow:hidden; */
  }
 
</style>
