import Mock from 'mockjs'
Mock.setup({
    timeout:1000
})
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

