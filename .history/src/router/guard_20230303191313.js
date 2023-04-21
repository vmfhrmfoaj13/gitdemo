import router from "./index"
import {getToken} from "@/utils/auth";
import asyncRoutes from "./asyncRouterMap"

router.beforeEach((to,from,next)=>{
    
    const hasToken=getToken();
   
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
           if(to.name==null){
                //先添加路由
                //router.addRoute({
                 //   path:"/attendance",
                //    name:"Attendance",
                //    meta:{auth:["boss","administration"]},
                //    component:()=>import("@/views/AuthView/AuthAttendance")
               // })
               
        //}
              for(let i=0;i<asyncRoutes.length;i++){
                router.addRoute(asyncRoutes[i])
            }
            next({...to,replace:true})
        }else{
                next();
            }
        }
        
    }else{
        if(to.path=="/login"){
                next()
            
        }else(
            next("/login")
        )
        }   
    })
    

