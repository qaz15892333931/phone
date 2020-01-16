<template>
<div>
    <div v-show="log" class="login-form">
        <dir class="login-box">
            <form id="loginForm">
                <div class="user">
                    <label for="loginName">账号</label>
                    <input type="text" name="loginName" id="loginName" placeholder="手机号/用户名" v-model="user" >
                </div>
                <div class="pwd">
                    <label for="password">密码</label>
                    <input type="password" name="password" autocomplete='pwd' id='password' placeholder="输入密码" v-model="pwd">
                </div>
                <div class="sel">
                    <label for="role">单位</label>
                    <select name="role" id="role" v-model="orgId">
                        <option v-for="(org, index) in orgList" :key="index" :value="org.id">{{org.orgName}}</option>
                    </select>
                </div>
                <div class="sel">
                    <label for="role">团队</label>
                    <select name="role" id="role2" v-model="deptId">
                        <option v-for="(dept, index) in deptList" :key="index" :value="dept.deptId">{{dept.tdmc}}</option>
                    </select>
                </div>
            </form>
            <mt-button type="primary" size="large" class="my-button" @click="login">登录</mt-button>
        </dir>

        <div class="link" hidden>
            <a class="phone" href="">绑定手机号</a>
            <a class="password" href="">忘记密码</a>
        </div> 
    </div>
     <div v-show='qd' class='bg'>
       <img class='lg' src="../assets/lg.png" alt="">
       <p>一切都在掌握之中</p>
    </div>

</div>
</template>
<script>

import $ from 'jquery'
import app from '../lib/js/app'
import http from '../lib/js/httpUtil'
import layer from 'layui-layer'
export default {
    data(){
        return {
            qd:true,
            log:false,
            user: null,
            pwd: null,
            //选择的单位
            orgId: null,
            //单位
            orgList:[{id:'',orgName:'请选择单位'}],
            //选择的团队
            deptId: null,
            //团队
            deptList: [{id:'',tdmc:'请选择团队'}],
        }
    },
    methods:{
        login(){
            if(this.orgId !== null && this.deptId !== null){ 
                this.toIndex(() => {
                    // window.location.href = app.homePath;
                     this.$router.push({ path:'/home'})
                });
                return;
            }
            layer.load();
            let url = "/login.do";
            let data = { loginName:this.user, password:this.pwd };
            localStorage.setItem('user', this.user );
            localStorage.setItem('pwd', this.pwd );
            http.post(url,data,res => {
                layer.closeAll();
                console.log(res);
                if(res.code === 0){
                    localStorage.setItem('token',res.data);
                    layer.msg('请选择团队',{icon:1,time:1000},()=>{
                         
                        // localStorage.setItem('login','true');                       
                        // location.href = app.homePath;
                        this.setLoginSuccess();
                       
                    });
                }else{
                    layer.alert(res.msg);
                }
               
            });
        },
        setLoginSuccess(){
                //设置登录信息，方便这里获取单位和团队
                http.post("/sys/user/setLoginSuccess", {isLogin:true}, res => {
                    layer.closeAll();
                    if (res.code === 0) {
                        this.loadOrg();
                        this.loadDept();
                    }else{
                        layer.msg(res.msg,{icon:2,time:2000});
                    }
                });
        },

        loadOrg(){
            http.get('/t/organization/listOrgByToken',{},res => {
                if (res.code === 0) {
                    this.orgList = res.data;
                }else{
                    layer.msg(res.msg,{icon: 2, time: 1000});
                }
            });
        },

        loadDept(){
            http.get('/tb/dept-user/listDeptUserByToken',{}, res => {
                if (res.code === 0) {
                    this.deptList = res.data;
                   
                } else {
                    layer.msg(res.msg,{icon: 2, time: 1000});
                }
            });
        },

        toIndex(callback){
            layer.msg('加载中...',{icon:16,shade:0.01});
            http.post("/sys/user/updateByTokenLoginInfo", {loginOrgId:this.orgId,loginDeptId:this.deptId}, res => {
                layer.closeAll();
                if (res.code === 0) {
                    layer.msg("登录成功",{icon: 1, time: 1000}, () => {
                         localStorage.setItem('orgId', this.orgId );
                         localStorage.setItem('deptId', this.deptId )
                        callback(true);
                    });
                }else{
                    layer.msg(res.msg,{icon:2,time:2000});
                }
            });
        }

    },
    created(){
        if(localStorage.user!=''){
            console.log(localStorage.user)
             this.user=localStorage.user;
             this.pwd=localStorage.pwd;
            //  this.orgId=localStorage.orgId;
            //  this.deptId=localStorage.deptId
        }
         setTimeout(()=>{
             this.log=true;
             this.qd=false
        },5000)
    }
}
</script>
<style scoped>
.bg{
    width:100%;
    height: 1000px;
 background-color:rgb(133, 170, 240) 
} 
.lg{
    width:200px;
    height:200px;
    margin-left:24%;
    margin-top:60px;
    border-radius: 60px;    
} 
p{
  font-size:24px;
  color:#fff;
  margin-top:30px;
  margin-left:90px;
}
div.mint-cell-title{
    width: 50px;
}
.login-form{
    width: 100%;
    height: 667px;
    box-sizing: border-box;
    background: url(../assets/login.jpg) center 0px no-repeat;
}
.login-box{
    position:absolute;
    top: 100px;
    left: 37px;
    padding:80px 15px 25px;
    box-sizing: border-box;
    width: 300px;
    border-radius: 5px;
    /* opacity: 0.9; */
    background: #fff;
    
}
.user,.pwd,.sel{
    font-size: 14px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 5px;
}
label{
    color: #aaa;
}
input{
    padding-left: 6px;
}
input,select{
    color: #aaa;
    border: none;
    height: 46px;
    width: 200px;
    line-height: 48px;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
    background: #fff;

}
.my-button{
    margin-top: 40px;
    border-radius: 20px;
}
.link{
    box-sizing: border-box;
    width: 300px;
    padding: 10px;
    position: absolute;
    left: 37px;
    bottom: 110px;
}
.phone{
    text-decoration: none;
    float: left;
    color: #fff;
}
.password{
    text-decoration: none;
    float: right;
    color: #fff;
}
/* select{
    
} */
</style>
