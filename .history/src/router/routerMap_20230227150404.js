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
        },
        {
          path:"/orders/list",
          name:"orders_list",
          component:()=>import("../views/orders/OrdersList"),
          meta:{bread:["订单管理", "/", "订单列表"]}
        },
        {
          path:"/orders/yundan",
          name:"yun_dan",
          component:()=>import("../views/orders/YunDan"),
          meta:{bread:["订单管理", "/", "订单列表"]}
        },
       
      ]
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("../views/LoginVue.vue")
     
    },{
      path:"*",
      name:"NotFound",
      component:()=>import("@/views/NotFound.vue")
    }
  ]