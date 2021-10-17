@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,700&display=swap');
<template>
  <Header />
  <AdmPanel />
  <!-- <Form /> -->
  <!-- <Curso /> -->
  <!-- <Cursos /> -->
  <Footer/>
</template>

<script>
import Header from './components/header.vue'
import AdmPanel from './components/adm-panel.vue'
import Cursos from './components/cursos.vue'
import Curso from './components/curso.vue'
import Form from './components/curso-form.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    AdmPanel,
    Cursos,
    Curso,
    Form,
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
