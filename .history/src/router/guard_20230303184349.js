import router from "./index"
import {getToken} from "@/utils/auth";


router.beforeEach((to,from,next)=>{
    
    const hasToken=getToken();
   
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
            if(to.name==null){
                //先添加路由
                router.addRoute({
                    
                })
            }


            next();
        }
    }else{
        if(to.path=="/login"){
                next()
            
        }else(
            next("/login")
        )
        }
        
    
    })
    

