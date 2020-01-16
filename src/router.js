import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  //  登陆页加下面按钮页的缓存
    {path: '/',redirect:'/login'},  
    {path: '/Login',component:()=>import('@/views/Login.vue')}, 
    {path: '/Home',component:()=>import('@/views/Home.vue')}, 
    {path:'/BacklogList',component:()=>import('@/components/BacklogList.vue')}, 
    {path: '/person',component:()=>import('@/components/person.vue')}, 

    // 列表页的缓存
    {path:'/DiaList',component:()=>import('@/views/diaList.vue')}, 
    {path:'/ElderList',component:()=>import('@/views/diaList.vue')}, 
    {path:'/ElderList/:zjhm',component:()=>import('@/views/diaList.vue')},
    {path:'/HTNList',component:()=>import('@/views/HTNList.vue')},
    {path: '/Detailed',component:()=>import('@/views/Detailed.vue')},
    {path:'/QianList/:grdaid',component:()=>import('@/views/QianList.vue')},
    {path:'/QianList',component:()=>import('@/views/QianList.vue')},
    
    {path:'/ChangeRole',component:()=>import('@/views/ChangeRole.vue')},
    {path: '/PhoneNumber',component:()=>import('@/views/PhoneNumber.vue')},
    {path: '/Personal/:grdaid',component:()=>import('@/views/Personal.vue')},
    {path: '/Aperson/:grdaid/:zjhm',component:()=>import('@/views/Aperson.vue')},
    {path: '/Aperson/:grdaid',component:()=>import('@/views/Aperson.vue')},
    {path: '/Diabetes/Aperson/:grdaid',component:()=>import('@/views/Aperson.vue')},
    {path: '/HTN/Aperson/:grdaid',component:()=>import('@/views/Aperson.vue')},
    {path:'/Hypertension',component:()=>import('@/views/Hypertension.vue')},
    {path:'/Hypertension/:grdaid',component:()=>import('@/views/DiabetesMellitus.vue')},
    {path:'/DiabetesMellitus',component:()=>import('@/views/Hypertension.vue')},
    {path:'/DiabetesMellitus/:grdaid',component:()=>import('@/views/Hypertension.vue')},
    {path:'/DiabetesMellitusAdd',component:()=>import('@/views/DiabetesMellitusAdd.vue')},
    {path:'/DiabetesMellitusAdd/:grdaid',component:()=>import('@/views/DiabetesMellitusAdd.vue')},
    {path:'/Diabetes',component:()=>import('@/views/Diabetes.vue')},
    {path:'/HTN',component:()=>import('@/views/HTN.vue')},
    {path:'/Diabetes/:glkbh',component:()=>import('@/views/Diabetes.vue')},
    {path:'/HTN/:cid',component:()=>import('@/views/HTN.vue')},
    {path:'/DiaFollow',component:()=>import('@/views/DiaFollow.vue')},
    {path:'/HTNFollow',component:()=>import('@/views/HTNFollow.vue')},
    {path:'/NewPersonal/:zjhm',component:()=>import('@/views/NewPersonal.vue')},
    {path:'/Elder/:grdaid',component:()=>import('@/views/Elder.vue')},
    {path:'/HypertensionAdd',component:()=>import('@/views/HypertensionAdd.vue')},
    {path:'/HypertensionAdd/:grdaid',component:()=>import('@/views/HypertensionAdd.vue')},
    {path:'/HTNAdd/:cid/:grdaid',component:()=>import('@/views/HTNAdd.vue')},
    {path:'/HTNAdd/:cid',component:()=>import('@/views/HTNAdd.vue')},
    {path:'/HTNAdd',component:()=>import('@/views/HTNAdd.vue')},
    {path:'/QianYue',component:()=>import('@/views/QianYue.vue')},
    {path:'/QianYue/:zjhm/:grdaid',component:()=>import('@/views/QianYue.vue')},
    {path:'/DiabetesAdd',component:()=>import('@/views/DiabetesAdd.vue')},
    {path:'/DiabetesAdd/:glkbh/:grdaid',component:()=>import('@/views/DiabetesAdd.vue')},
    {path:'/DiabetesAdd/:grdaid',component:()=>import('@/views/DiabetesAdd.vue')},
    {path:'/ElderAdd',component:()=>import('@/views/ElderAdd.vue')},
    {path:'/ElderAdd/:grdaid/:zjhm',component:()=>import('@/views/ElderAdd.vue')},
    {path:'/QyAdd',component:()=>import('@/views/QyAdd.vue')},
    {path:'/QianYueAdd',component:()=>import('@/views/QyAdd.vue')},
    {path:'/QianYueAdd/:zjhm',component:()=>import('@/views/QyAdd.vue')},
    {path:'/change',component:()=>import('@/views/change.vue')},

  ]
})
