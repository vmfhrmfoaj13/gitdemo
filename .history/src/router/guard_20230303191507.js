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
    

