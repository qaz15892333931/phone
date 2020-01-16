<template>
    <div style="background:#459cfc;">
        <!--头部  -->
        <div class="person-header">
            <div class="header-left">
                <img class="avatar"  src="../assets/ys.png" alt="">
            </div>
            <ul class="header-center">
            <li>
                <ul class="per">
                    <li class="name">{{td.name}}</li>
                </ul>
            </li>
             <li class="jg">家医团队: {{user.loginDeptName}}</li>  
             <li class="jg">登录机构：{{user.loginOrgIdName}}</li> 
            
        </ul>
        </div>
        <!-- 社区说明 -->
        <!-- <div class="team">
            <div>家医团队:{{user.loginDeptName}}</div>
            <div>当前角色:管理员|15845698523</div>
        </div>  -->
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
export default {
    data(){
        return{
            td:{},
            user:{},
        }
    },
    created(){
        // 根据登陆获得登陆医生
        http.get('/sys/user/getUserByToken',{},res=>{
            this.td=res.data
            this.user=res.data.userLoginInfo
             console.log("医生",this.td)
        })
    },  
}
</script>
<style scoped>
/* 头部 */
.person-header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    height: 150px;
}
.avatar{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-left:10px;
}
ul.header-center{
   padding-left: 0px;
   margin-top: 10px;
}
ul li{
    list-style: none;
    font-size: 12px;
    color: #fff;
    padding-bottom: 3px;
}
ul.per{
    width: 217px;
    height: 16px;
    padding: 0;
}
/* ul.per li{
    float: left;
} */
ul.per>li{
    font-size: 12px;
    padding-right: 4px;
}
ul>li.name,ul>li.jg{
    color: #fff;
    font-size: 14px;
    /* font-weight: bold; */
}
/* .badge{
    font-size: 12px !important;
    width: 12px;
    height: 12px;
    padding: 2px;
    border-radius: 3px;
} */
button{
    background: url(../assets/phone.png) 10px center no-repeat #fff;
    width: 64px;
    height: 30px;
    color: #459cfc;
    border:none;
    opacity: 0.8;
    outline: none;
    padding-left:20px;
    border-radius: 10px;
}
.team{
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background: url(../assets/default.png) 30px center no-repeat #aaa; */
    border-radius: 5px;
    width:100%;
    opacity: 0.6;
    height: 40px;
    background: #aaa;
    /* padding-left: 10px; */
    color: #fff;
}
.team div{
    padding-left: 15px;
}
</style>


