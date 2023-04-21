import router from "./index"
import {getToken} from "@/utils/auth";


router.beforeEach((to,from,next)=>{
    console.log("守卫触发了")
    const hasToken=getToken();
    console.log(2,hasToken)
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
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
    

