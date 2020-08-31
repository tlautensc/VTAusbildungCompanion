import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from './../firebase/auth'
import {db} from './../firebase/db'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/ausbildungsnachweise',
      name: 'Ausbildungsnachweise',
      component: () => import('../views/Ausbildungsnachweise'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      redirect: '/ausbildungsnachweise'
    },
    {
      path: '/dienstplan',
      name: 'Dienstplan',
      component: () => import('../views/Dienstplan'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stundenplan',
      name: 'Stundenplan',
      component: () => import('../views/Stundenplan'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/versetzungsplan',
      name: 'Versetzungsplan',
      component: () => import('../views/Versetzungsplan'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  //check for auth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      // Proceed to route
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if (auth.currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      // Proceed to route
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresOwner)) {
    //Get Creator of Recipe
    db.collection('rezepte').doc(to.params.id).get()
    .then(doc => {
         return doc.data().ersteller
    })
    .then(ersteller => {
      // Check if logged in
      if (!auth.currentUser) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
        //check Ownership
      }else if (auth.currentUser.email != ersteller) {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next()
      }
    })
    
  } else {
    // Proceed to route
    next()
  }
})


export default router
