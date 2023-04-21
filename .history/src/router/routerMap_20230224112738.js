export default[
    {
      path:"/",
      name:"Layout",
      component:()=>import("../views/LayOut.vue"),
      children:[
        {
          path:"/index",
          name:"index",
         
        }
      ]
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("../views/LoginVue.vue")
     
    }
  ]