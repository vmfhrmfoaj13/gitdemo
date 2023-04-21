import Mock from 'mockjs'
//模拟网络请求延迟
Mock.setup({
    timeout:1000
})

//登录接口
Mock.mock("http://localhost:8080/login","post",(req)=>{
        const {username,password}=JSON.parse(req.body);
        if(username=="admin"&&password=="123456"){
            return{
                code:200,
                success:true,
                message:"登录成功",
                token:"3arc9h0vhcr0f8iprpnscmfo8s",
                nickname:"赵铁柱"
            }
        }else{
            return{
                code:100,
                success:false,
                message:"账号或者密码有误"
            }
        }
})

//入职日期接口,
Mock.mock("http://localhost:8080/in","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        time:"2020-07-01 00:00:00"
    }
})

//侧边栏菜单接口
Mock.mock("http://localhost:8080/menu","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:menuList
    }
})

