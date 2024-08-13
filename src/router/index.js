// 创建history路由实例
import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path: '/', 
    redirect: '/home'
  },{
    path: '/home',
    name: 'home',
    component: () => import('@/views/Main.vue')
  }
]
const router = new createRouter({
  history: createWebHistory(),  
  routes
})

// 添加全局路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       console.log("登录失败");
//       next('/login')
//     } else {
//       console.log("登录成功");
//       next()
//     }
//   }
// })

export default router;