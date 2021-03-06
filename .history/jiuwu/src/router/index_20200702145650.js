import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import show from '../components/show.vue'
import cateCom from '../components/cateCom.vue'
import markdown from '../components/markdown.vue'
import detail from '../components/detail.vue'
import search from '../components/search.vue'
import buy from '../views/buy.vue'
import person from '../views/person.vue'
import sale from '../components/sale.vue'
import baseinfo from '../components/baseinfo.vue'
import baseinfo2 from '../components/baseinfo2.vue'
import login from '../views/login.vue'
import banner1 from '../components/banner1.vue'
import banner2 from '../components/banner2.vue'
import banner3 from '../components/banner3.vue'
import setting from '//'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show',
    name: "show",
    component: show
  },
  {
    path: "/cate",
    name: "cateCom",
    component: cateCom
  },
  {
    path: "/markdown",
    name: "markdown",
    component: markdown
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
  {
    path: '/search',
    name: "search",
    component: search,
  },
  {
    path: "/buy",
    name: "buy",
    component: buy
  },
  { path: '/person', name: "person", component: person },
  { path: '/sale', name: "sale", component: sale },
  { path: '/baseinfo', name: "baseinfo", component: baseinfo },
  { path: '/baseinfo2', name: "baseinfo2", component: baseinfo2 },
  { path: '/login', name: "login", component: login },
  { path: '/banner1', name: "banner1", component: banner1 },
  { path: '/banner2', name: "banner2", component: banner2 },
  { path: '/banner3', name: "banner3", component: banner3 }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
