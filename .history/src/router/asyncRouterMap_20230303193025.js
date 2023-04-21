//存放所有需要权限的路由

export default[
    {
        path:"/attendance",
        name:"Attendance",
        meta:{auth:["boss","administration"]},
        component:()=>import("@/views/AuthView/AuthAttendance")
    },
    {
        path:"/salary",
        name:"Salary",
        meta:{auth:["boss","finance"]},
        component:()=>import("@/views/AuthView/AuthSalary")
    },
    {
        path:"*",
        name:"NotFound",
        meta:{auth:["boss","administration","user","finance"]},
        component:()=>import("@/views/NotFound.vue")
      }
]