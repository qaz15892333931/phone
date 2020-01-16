<template>
    <div>
        <mt-header title="绑定手机号">
            <router-link to="/person" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <form class="phone-box">
            <div class="phone">
                <div class="pho">
                    <input type="text" name="pnum" id="phone" placeholder="请输入手机号" v-model="phone">
                </div>
                <div style="height:15px;background:#f5f5f5;"></div>
                <div class="pco">
                    <input type="text" name="code" id="code" placeholder="请输入验证码" v-model="code">
                    <button id="check" :disabled="disabled" @click="sendCode">{{btntxt}}</button>
                </div>
                <div class="pnum">
                    <input type="password" name="pass" id="pwd" placeholder="请输入密码" v-model="pass">
                </div>
            </div>
            <mt-button style="margin-top:99%" type="primary" size="large" class="my-button" @click="addPhone">确认</mt-button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:"",
            code:"",
            pass:"",
            btntxt:"获取验证码",
            time:0,
            disabled:false
        }
    },
    methods:{
        sendCode(e){
            e.preventDefault();
            var reg=/^1[3456789]\d{9}$/;
            if(this.phone==""){
                this.$toast("请输入手机号");
            }else if(!reg.test(this.phone)){
               this.$toast("手机号格式不正确"); 
            }else{
                this.time=60;
                this.disabled=true;
                this.timer();
            }
        },
        timer(){
            if(this.time>0){
                this.time--;
                this.btntxt=this.time+"s后重新获取";
                setTimeout(this.timer,1000);
            }else{
                this.time=0;
                this.btntxt="获取验证码";
                this.disabled=false;
            }
        },
        addPhone(e){
            e.preventDefault();
             var reg=/^[a-zA-Z0-9]{6,16}$/;
            //判断
            if(this.pass!=="123abc"){
                this.$toast("密码错误");
                return;
            }
        }
    }
}
</script>
<style scoped>
.mint-header{
    font-size: 16px; 
}
.phone-box{
    margin:20px 10px;
    box-sizing: border-box;
}
.phone{
    background: #fff;
}
.pho,.pco,.pnum{
    color: #aaa;
    height: 48px;
    font-size: 14px;
    border: 1px solid #ddd;
    padding-left: 5px;
}
.pho{
    background: url(../assets/pho.png) 10px center no-repeat #fff;
}
.pco{
    background: url(../assets/code.png) 10px center no-repeat #fff;
}
.pnum{
    background: url(../assets/password.png) 10px center no-repeat #fff;
}
.pco button,button#check{
    display:inline-block;
    color:#459cfc;
    height: 46px;
    background: #fff;
    border: none;
    font-size: 14px;
}
input{
    margin-left:25px;
    border: none;
    height: 46px;
    width: 90%;
    line-height: 46px;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
}
input#code{
    width: 60%;
}
.my-button{
    margin-top: 30px;
    border-radius: 20px;
}
</style>