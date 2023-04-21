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
          meta:{bread:["订单管理","订单列表"]}
        },   
        {
          path:"/waybill/list",
          name:"waybill_list",
          meta:{bread:["运单管理","运单列表"]},
          component:()=>import("../views/waybill/WaybillList"),

        },
        {
          path:"/depart/data",
          name:"waybill_list/detail",
          meta:{bread:["运单管理","运单列表"],keepAlive:true},
          component:()=>import("../views/waybill/WaybillDetail")
        },
        {

        }
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