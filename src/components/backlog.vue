<template>
    <div class="detail" @click="sendParams">
        <div class="detail-left">
            <img class="avatar"  :src=" sex==='男'? imgM : imgWm"  alt="">
        </div>
        <ul class="detail-center">
            <li>
                <ul class="per">
                    <li class="name">{{name}}</li>
                    <li>{{sex}}</li>
                    <li>{{age}}岁</li>
                    <!-- <mt-badge class="badge" color="red">高</mt-badge>
                    <mt-badge class="badge" color="lightblue">老</mt-badge>
                    <mt-badge class="badge" color="green">低</mt-badge>
                    <mt-badge class="badge" color="orange">糖</mt-badge>
                    <mt-badge class="badge" color="blue">残</mt-badge>
                    <mt-badge class="badge" color="red">危</mt-badge> -->
                </ul>
            </li>
            <li style="clear:both">联系电话：{{tel}}</li>
            <li>身份证号：{{card}}</li>
            <li>现住址：{{address}}</li>
        </ul>
        <ul class="detail-right">
            <li>{{date}}</li>
            <li>
                <button>电话</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
             imgWm:require('../assets/woman.png'),
            imgM:require('../assets/man.png'),
        }
    },
    props:{
        name:{default:''},
        sex:{default:''},
        age:{default:''},
        tel:{default:''},
        card:{default:''},
        address:{default:''},
        date:{default:''},
        grdaid:{default:''},
        glkbh:{default:''},
        cid:{default:''},
        lnrid:{default:''},
    },
    methods:{
        sendParams(){
            console.log(this.glkbh)
            //糖尿病管理
            if(this.glkbh){
                this.$router.push({
                    path:"Diabetes/"+this.grdaid,
                    params:{
                        grdaid:this.grdaid
                    }
                })
            }
            // 高血压随访
            if(this.cid){
                this.$router.push({
                    path:"HTN/"+this.grdaid,
                    params:{
                        grdaid:this.grdaid
                    }
                })
            }
            //高血压管理
            if(this.grdaid){
                this.$router.push({
                    path:"Aperson/"+this.grdaid,
                    params:{
                        grdaid:this.grdaid
                    }
                })
            }
            console.log(this.grdaid)
        }
    }
}
</script>
<style scoped>
.detail{
    background: #fff;
    margin: 10px 0px ;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
}
.avatar{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-left:10px;
}
.detail-center{
    padding-left: 0px;
}
ul li{
    list-style: none;
    font-size: 12px;
    color: #999;
    padding-bottom: 3px;
}
ul.per{
    width: 217px;
    height: 16px;
    padding: 0;
}
ul.per li{
    float: left;
}
ul.per>li{
    font-size: 12px;
    padding-right: 4px;
}
ul>li.name{
    color: #000;
    font-size: 14px;
    font-weight: bold;
}
.badge{
    font-size: 12px !important;
    width: 14px;
    height: 14px;
    padding: 2px;
    border-radius: 2px;
}
.mint-badge.is-size-normal{
    padding :1px;
}
.detail-right{
    padding:10px 0 0 10px;;
}
.detail-right li{
    margin-bottom: 10px;
}
button{
    background: url(../assets/phone.png) 10px center no-repeat #f6f6f6;
    width: 64px;
    height: 30px;
    color: #459cfc;
    border:none;
    opacity: 0.8;
    outline: none;
    padding-left:20px;
    border-radius: 10px;
}
</style>

