import Home from './components/home.vue'
import Follow from './components/follow.vue'
import Search from './components/search.vue'
import User from './components/user.vue'
import newsshow from './components/newsshow.vue'
import login from './components/login.vue'
import userreg from './components/userreg.vue'
import article from './components/article.vue'


export default[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/User',
    component:User
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/userreg',
    component:userreg
  },
  {
    path:'/newsshow/:id',
    component:newsshow
  },
  {
    path:'/article',
    component:article
  },
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'*',
    redirect: '/home'
  }
]
