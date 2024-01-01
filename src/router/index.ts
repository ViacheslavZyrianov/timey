import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes/index'
import checkIsUserLoggedIn from '@/middleware/checkIsUserLoggedIn'
import useAuthStore from '@/store/auth'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  checkIsUserLoggedIn((isUserLoggedIn: boolean) => {
    const authStore = useAuthStore()
    authStore.isUserLoggedIn = isUserLoggedIn
    if (!isUserLoggedIn && to.name !== 'auth') next('auth')
    else if (isUserLoggedIn && to.name === 'auth') next('dashboard')
    else next()
  })
})

export default router
