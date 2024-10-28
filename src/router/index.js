import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Community from "@/views/Community.vue";
import Education from "@/views/Education.vue";
import UserPortal from "@/views/UserPortal.vue";
import UserWasteLogForm from "@/views/UserWasteLogForm.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/user-portal',
    name: 'UserPortal',
    component: UserPortal
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/user-waste-form',
    name: 'UserWasteLogForm',
    component: UserWasteLogForm
  }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router
