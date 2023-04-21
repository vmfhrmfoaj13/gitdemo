export default[
    {
      path:"/",
      name:"Layout",
      component:()=>import("../views/LayOut.vue"),
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("../views/LoginVue.vue")
     
    }
  ]