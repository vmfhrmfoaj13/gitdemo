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
    }
]