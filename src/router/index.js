import { createRouter, createWebHashHistory } from 'vue-router'
import Cursosview from '../views/Cursos.vue'
import Cursoview from '../views/Curso.vue'
import AdmPanelview from '../views/Adm-panel.vue'
import CursoFormview from '../views/Curso-form.vue'

const routes = [
  {
    path: '/',
    name: 'Cursos',
    component: Cursosview
  },
  {
    path: '/curso',
    name: 'Curso',
    component: Cursoview
  },
  {
    path: '/adm-panel',
    name: 'AdmPanel',
    component: AdmPanelview
   },
   {
     path: '/curso-form',
     name: 'CursoForm',
     component: CursoFormview
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
