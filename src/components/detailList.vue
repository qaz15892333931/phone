<template>
<div >
    <ul class="xq">
        <li v-for="(item, index) in list1" :key="index">
            <a>
                    <img class="imgUrl" :src="item.imgUrl"  alt=""  @click="goUrl(item.idx)">
                    <span class="text">{{item.msg}}</span>
                    <span class="rs">{{item.rs}}人</span>
            </a>
        </li>
    </ul> 
</div>
</template>
<script>
export default {
    props:[
        'grdaCount',//个人档案
        'jtdaCount',//家庭档案
        'gxyCount',//高血压
        'tjCount',//体检
        'tnbCount',//糖尿病
        'lnrCount',//老年人
        'qyCount'//签约
    ],
    data(){
        return{
            list1:[
                {'imgUrl':require('../assets/jm.png'),'msg':"居民","idx":0,"rs":'1122343'},
                {"imgUrl":require('../assets/jt.png'),'msg':"家庭信息", "idx":1,"rs":'1122343'},
                {"imgUrl":require('../assets/gxy.png'),"msg":"高血压", "idx":2,"rs":'1122343'},
                {"imgUrl":require('../assets/tnb.png'),"msg":"糖尿病", "idx":3,"rs":'1122343'},
                {"imgUrl":require('../assets/lnr.png'),"msg":"老年人","idx":4,"rs":'1122343'},
                {"imgUrl":require('../assets/qy.png'),"msg":"签约人","idx":4,"rs":'1122343'},
                // {"imgUrl":require('../assets/cjr.png'),"msg":"残疾人","idx":5,"rs":'1122343人'},
                // {"imgUrl":require('../assets/yf.png'),"msg":"孕产妇","idx":6,"rs":'1122343人'},
                // {"imgUrl":require('../assets/db.png'),"msg":"低保人群","idx":7,"rs":'1122343人'},
                // {"imgUrl":require('../assets/gw.png'),"msg":"高危人群","idx":9,"rs":'1122343人'},
            ],
        }
    },
    methods:{
        goUrl(idx){
            if(idx == 0){this.$router.push({ path:'/Personal'  })}
            if(idx == 4){this.$router.push({ path:'/Hypertension'  })}
            if(idx == 5){this.$router.push({ path:'/DiabetesMellitus'  })}
        }

    }
    
}
</script>
<style scoped>

.xq{
     display: flex; 
     /* 折行 */
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-around;  
     /* margin: 0px; */
    padding:0px;
    margin:0px;
     height:320px; 
    border:4px  solid #f4f4f4;
    
}
 /* .imgUrl,.text{
     display:block;
 }   */
  .xq>li{
     list-style: none;
     /* text-align: center; */
    height: 100px;
     width: 100px;  
      white-space: nowrap;  
  }  
 .text,.rs{
     font-size:14px;
     float: right;
 }
 .text{
     margin-top:20px;
     /* margin-right:30px; */
     width: 60px;
     text-align: left
 }
 .imgUrl{
     /* margin-left:34px; */
     margin-bottom: 5px;
     margin-top:15px;
     padding-top:10px;
     float:left;
    
 } 
 .rs{
    /* padding-left:35px ; */
    font-size:12px;
    margin-top:10px
 }
 
</style>