export default {
  path: '/:catchAll(.*)',
  name: '404',
  component: () => import('@/views/404/index.vue')
}