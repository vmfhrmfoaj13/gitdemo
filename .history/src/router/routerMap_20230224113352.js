export default[
    {
      path:"/",
      name:"Layout",
      component:()=>import("../views/LayOut.vue"),
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"index",
         component:()=>import("../views/index/HomeIndex.vue")
        }
      ]
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("../views/LoginVue.vue")
     
    }
  ]