export default[
    {
        path:"/attendance",
        name:"Attendance",
        meta:{auth:["boss","administration"]}
    },
    {
        path:"/salary",
        name:"Salary",
        meta:{auth:["boss","finance"]}
    },
    {
        path:"*",
        name:"NotFound",
        meta:{auth:["boss","administration","user","finance"]},
        component:()=>import("@/views/NotFound.vue")
      }
]