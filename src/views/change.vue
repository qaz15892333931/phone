<template>
    <div>
        <mt-header title="修改密码">
            <router-link to="/person" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <form class="change-box">
            <div class="change">
                <div class="pwd">
                    <input type="password" name="oldpass" id="oldPwd" placeholder="请输入旧密码" v-model="oldpass"  @blur="yz" >
                </div>
                <div class="pwd">
                    <input type="password" name="newpass" id="newPwd" placeholder="请输入新密码" v-model="newpass">
                </div>
                <div class="pwd">
                    <input type="password" name="checkpass" id="pwd" placeholder="请重复新密码" v-model="checkpass">
                </div>
            </div>
            <mt-button style="margin-top:99%" type="primary" size="large" class="my-button" @click="change">确认</mt-button>
        </form>
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
export default {
    data(){
        return{
            oldpass:"",
            newpass:"",
            checkpass:"",
            pwd:''
        }
    },
    methods:{
         yz(){
            http.get("/sys/user/checkPassword/",{password:this.oldpass},res=>{
                console.log(res)
                if(res==false){
                    this.$toast("旧密码错误");
                }
            })
        },
        change(e){
            e.preventDefault();
            //获取数据
            var oldpass=this.oldpass;
            var newpass=this.newpass;
            var checkpass=this.checkpass;
            //正则表达式
            var reg=/^[a-zA-Z0-9]{6,16}$/;
            //判断
            if(oldpass===newpass){
                this.$toast("新旧密码一致");
                return;
            }
            if(!reg.test(newpass)){
                this.$toast("密码格式不正确");
                return;
            }
            if(newpass!==checkpass){
                this.$toast("两次输入密码不一致");
                return;
            }
            // 修改密码  
            http.post("/sys/user/resetPwd",{oldPassword:oldpass,newPassword:newpass},res=>{
                // console.log('修改密码',res)
                this.$toast("密码修改成功");
                 this.$router.push({path:"/Login"})
            })
        }
        
    },
}
</script>
<style scoped>
.mint-header{
    font-size: 16px;
}
.change-box{
    margin:20px 10px;
    box-sizing: border-box;
}
.change{
    background: #fff;
}
.pwd{
    height: 48px;
    font-size: 14px;
    border: 1px solid #ddd;
    padding-left: 5px;
    background: url(../assets/password.png) 10px center no-repeat #fff;
}
input{
    margin-left:25px;
    color: #aaa;
    border: none;
    height: 46px;
    width: 90%;
    line-height: 46px;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
}
.my-button{
    margin-top: 30px;
    border-radius: 20px;
}
</style>