import { createWebHistory, createRouter } from 'vue-router'
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
    history: createWebHistory(),
    routes,
})
  
// Modal to replace alert
const createModal = () => {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';
  modalDiv.innerHTML = `
    <div class="bg-white p-8 rounded-lg shadow-xl text-center">
      <h3 class="text-2xl font-semibold mb-4">Authentication Required</h3>
      <p class="mb-6 text-gray-600">Please log in to access this page</p>
      <button 
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onclick="document.getElementById('auth-modal').remove()">
        Close
      </button>
    </div>
  `;
  modalDiv.id = 'auth-modal';
  return modalDiv;
};

router.beforeEach((to, from, next) => {
  const userId = sessionStorage.getItem('user_id');
  const userAccess = sessionStorage.getItem('user_token');

  if ((to.name === 'UserPortal' || to.name === 'UserWasteLogForm') && (!userId || !userAccess)) {
    // Create and show modal
    const modal = createModal();
    document.body.appendChild(modal);
    
    // Block navigation
    next(false);
  } else {
    next();
  }
});
  export default router
