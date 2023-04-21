import router from "./index"
import {getToken} from "@/utils/auth";
import asyncRoutes from "./asyncRouterMap"
import store from "store"

router.beforeEach((to,from,next)=>{
    
    const hasToken=getToken();
   
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
           if(to.name==null){
                //筛选出角色对应所拥有的路由表
              let f=asyncRoutes.filter(item=>item.meta.auth.includes(store/index.js.state.role))
                //先添加路由
              for(let i=0;i<f.length;i++){
                router.addRoute(f[i])
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
    

