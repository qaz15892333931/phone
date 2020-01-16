<template>
    <div>
        <div class="dw">
             <!--头部  -->
            <div class="detail"  >
                <div class="detail-left"  >
                    <img class="jt" src="../assets/left_top.png" @click="runback()">
                    <img class="avatar"  :src="sex==='男'? imgM : imgWm" alt="">
                </div>
                <ul class="detail-center"  >
                    <li>
                        <ul class="per">
                            <li class="name">{{pps.xm}}</li>
                            <li class="sex">{{sex}}</li>
                            <!-- <li class="old">{{}}岁</li> -->
                            <!-- <mt-badge class="badge" color="red">{{gao}}</mt-badge>
                            <mt-badge class="badge" color="lightblue">{{lao}}</mt-badge>
                            <mt-badge class="badge" color="green">{{di}}</mt-badge>
                            <mt-badge class="badge" color="orange">{{tang}}</mt-badge>
                            <mt-badge class="badge" color="blue">{{can}}</mt-badge>
                            <mt-badge class="badge" color="red">{{wei}}</mt-badge> -->
                        </ul>
                    </li>
                    <li style="clear:both">
                        <span>联系电话:</span>
                        <span>{{pps.dhhm}}</span>
                    </li>
                    <li>
                        <span>身份证号:</span>
                        <span>{{pps.zjhm}}</span>
                    </li>
                    <li>
                        <span>现住址:</span>
                        <span>{{pps.jzdz}}</span>
                    </li>
                </ul>
                <ul class="detail-right">
                    <!-- <li>2017-12-12</li> -->
                    <li>
                        <button>电话</button>
                    </li>
                </ul>
            </div>
            <!-- 社区说明 -->
            <div class="address">
            <table>
                    <!-- <tr>
                        <td class="qy">签约社区:</td>
                        <td >银桂桥社区</td>
                        <td class="phone">机构电话:</td>
                        <td  >028-12345678</td>
                    </tr> -->
                    <tr style="margin-top:10px">
                        <td class="jy">家医团队:</td>
                        <td  style='padding-left:0px;margin-left:0px'>{{pps.deptmentName}}</td>
                        <td class="ys">责任医生:</td>
                        <td >{{pps.zrysxm}}</td>
                    </tr>
            </table>
            </div>

        </div>
       
        <!-- 详情页 -->
            <div >
                <ul class="xq">
                    <li v-for="(item, index) in list1" :key="index" @click="goUrl(item.idx)">                       
                        <img class="imgUrl" :src="item.imgUrl"  alt=""  >
                        <span class="msg">{{item.msg}}</span>                     
                    </li>
                </ul> 
            </div>
        
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
import detailList from '../components/detailList'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{ 
            imgWm:require('../assets/woman.png'),
            imgM:require('../assets/man.png'), 
            sex:'',
            // url地址中的接收          
            grdaid:this.$route.params.grdaid,
            zjhm:this.$route.params.zjhm,
            pps:[],
            history:[],
            cid:"",
            vid:"",
            glkbh:'',
            list1:[
                {'imgUrl':require('../assets/jb.png'),'msg':"基本信息","idx":0},
                // {"imgUrl":require('../assets/jt.png'),'msg':"家庭信息", "idx":1},
                // {"imgUrl":require('../assets/tj.png'),"msg":"体检信息", "idx":2},
                {"imgUrl":require('../assets/gxy.png'),"msg":"高血压管理","idx":4},
                {"imgUrl":require('../assets/gsf.png'),"msg":"高血压随访","idx":12},
                {"imgUrl":require('../assets/tnb.png'),"msg":"糖尿病管理","idx":5},
                {"imgUrl":require('../assets/sf.png'),"msg":"糖尿病随访","idx":6},
                {"imgUrl":require('../assets/qy.png'),"msg":"签约记录", "idx":3},
                {"imgUrl":require('../assets/lnr.png'),"msg":"老年人管理","idx":7},
                // {"imgUrl":require('../assets/db.png'),"msg":"低保人群管理","idx":8},
                // {"imgUrl":require('../assets/cjr.png'),"msg":"残疾人管理", "idx":9},
                // {"imgUrl":require('../assets/gw.png'),"msg":"高危人群管理","idx":10},
                {"imgUrl":require('../assets/zy.png'),"msg":"中医健康管理","idx":11},
                {"imgUrl":require('../assets/gd.png'),"msg":"更多"},
            ],
        }
    },
    components:{
        "detailList":detailList,
        top
    },       
    methods:{
        runback(){
            if(document.URL.indexOf("Diabetes")!=-1){
                this.$router.push("/DiaList");
                return ;
            }
            if(document.URL.indexOf("HTN")!=-1){
                this.$router.push("/HTNList")
                return ;
            }
            if(document.URL.indexOf("gd=2")!=-1){
                this.$router.push("/Detailed")
                return ;
            }
            if(document.URL.indexOf("qy=1")!=-1){
                this.$router.push("/QianList")
                return;
            }
            if(document.URL.indexOf("Aperson")!=-1){
                 this.$router.push("/Detailed")
            }
        },
        goUrl(idx){
            console.log(idx)
            if(idx == 0){this.$router.push({ path:'/Personal/'+this.grdaid})}
            // 高血压管理
            if(idx == 4){
                http.get("/tbGxyHzglk/selectByGrdaId?grdaid="+this.grdaid,{},res=>{
                    console.log(res)
                    if(res.code==0){
                        this.$router.push({ path:'/Hypertension/'+this.grdaid})
                    }else{
                        this.$router.push({ path:'/HypertensionAdd/'+this.grdaid})
                    }
                })  
            }
             // 高血压随访 
            if(idx == 12){
                  // 高血压
            http.get("/tbGxyHzglk/selectByGrdaId?grdaid="+this.grdaid,{},res=>{
                console.log("高血压", res)
                if(res.code!=0){
                 MessageBox('提示', '该人没有高血压管理信息跳转到新增高血压管理页面');
                    this.$router.push({ path:'/HypertensionAdd/'+this.grdaid})
                }else{
                    this.cid=res.data.cid;
                    //高血压随访  
                    http.get("/tbGxyHzsfk/selectListBycid?cid="+this.cid,{},res=>{
                        console.log(res)
                        this.history=res;
                        if(this.history.length>0){
                         this.$router.push({ path:'/HTN/'+this.cid})
                        }else{
                            this.$router.push({ path:'/HTNAdd/'+this.cid+'/'+this.grdaid})
                        }
                    })
                    
                }    

            })
            }
            // 糖尿病
            if(idx == 5){
                http.get("/medical/tb-tnb-hzglk/query/"+this.grdaid,{},res=>{ 
                    console.log('糖尿病结果',res)
                    if(res.code!=0){
                        this.$router.push({ path:'/DiabetesMellitusAdd/'+this.grdaid}) 
                    }else{
                        this.$router.push({ path:'/DiabetesMellitus/'+this.grdaid}) 
                    }
                    // if(res.data.glkbh==null |res.data.glkbh==''|res.data.glkbh==undefined){
                    //     this.$router.push({ path:'/DiabetesMellitusAdd/'+this.grdaid})
                    // }else{
                    //     this.$router.push({ path:'/DiabetesMellitus/'+this.grdaid})
                    // }
                });
            }
            // 糖随访
            if(idx == 6){
                 http.get("/medical/tb-tnb-hzglk/query/"+this.grdaid,{},res=>{ 
                     console.log('糖尿病管理结果',res)
                     if(res.code!=0){
                         MessageBox('提示', '该人没有糖尿病管理信息跳转到新增糖尿病管理页面');
                        this.$router.push({ path:'/DiabetesMellitusAdd/'+this.grdaid})
                        //  this.$router.push({ path:'/diabetesAdd/'+this.grdaid})
                    }else{
                        this.glkbh=res.data.glkbh
                        this.grdaid=res.data.grdaid
                         http.get("/medical/tb-tnb-hzglk/checkSfjl/"+this.glkbh,{},res=>{
                         console.log('糖尿病随访结果',res)
                         if(res===true){
                            this.$router.push({ path:'/diabetes/'+this.glkbh})
                         }else{
                            this.$router.push({path:'/diabetesAdd/'+this.glkbh+"/"+this.grdaid})
                         }
                    })

                     }
                    
                })
            }
            // 老年人
            if(idx == 7){
                http.get("/tb/tbLnrZxxx/selectByGrdaid?grdaid="+this.grdaid,{},res=>{
                         console.log(res)
                        if(res.code===0){
                            this.$router.push({ path:'/elder/'+this.grdaid})
                         }else{
                              this.$router.push({ path:'/ElderAdd/'+this.grdaid+'/'+this.zjhm})
                         }
                 })
            }
            // 签约
            if(idx == 3){
                http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{
                    this.zjhm=res.data.zjhm
                    http.post("/medical/tbChssJtqygx/jsEdit?zjhm="+this.zjhm,{},res=>{
                         console.log('签约结果', res)
                         if(res.jtqygxid===null|res.jtqygxid===''|res.jtqygxid===undefined){
                             this.$router.push({ path:'/QianYueAdd/'+this.zjhm})
                         }else{
                             this.$router.push({ path:'/QianYue/'+this.zjhm+'/'+this.grdaid})
                         }
                         
                    })    
                }) 
            }
        },
        getUserInfo () {
            http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res =>{
                this.pps=res.data;
                console.log("基本信息",res.data)
                if(this.pps.xb==='1'|this.pps.xb===1){
                   this.sex='男'
                }else{
                    this.sex='女'
                }
            });
        },

    },
    created(){
        // 档案
            this.getUserInfo ()
             // 高血压
        //     http.get("/tbGxyHzglk/selectByGrdaId?grdaid="+this.grdaid,{},res=>{
        //      console.log(res)
        //     this.cid=res.data.cid;
        //     console.log(this.cid) 
        //     //高血压随访  
        //    http.get("/tbGxyHzsfk/selectListBycid?cid="+this.cid,{},res=>{
        //         console.log(res)
        //         this.history=res;
        //     })
        // })
          
    },

}

</script>
<style scoped>

table{
    background-color:#4682B4;
     width:100%;
     height: 50px;
     
}
table tr{
    display: flex;
}
table  tr td{
    color:#ccc;
    font-size:10px;
    margin-top:3px;
    margin-left:3px;
}
.qy,.jy{

    margin-left:4%;
}
.ys{
    margin-left:30px;
}
.phone{
   margin-left:80px;  
}

.detail{
    height: 150px;
    width:100%;
    background: #459cfc;
    /* margin: 10px 20px 10px 0px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-radius: 5px; */
   position: fixed
}
.detail-left{
    width: 68px;
    height: 100%;
}
.jt{
    width: 25px;
    height: 25px;
    margin-bottom:40%;
    padding-top:10%
}
.avatar{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-left:10px;
     /* margin-bottom: 36px;  */
}
.detail-center{
    padding-left: 0px;
    /* box-sizing: border-box; */
}
.detail-center> li{
    list-style: none;
    font-size: 12px;
    color: #fff;
    padding-bottom: 3px;
}
.address{
    padding-top:150px;
    width:100%
}
ul li {
    list-style: none; 
}
ul.per{
    width: 217px;
    height: 16px;
    padding: 0px;
}
ul.per li{
    float: left;
}
ul.per>li{
    font-size: 12px;
    padding-right: 6px;
}
ul>li.name{
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}
ul>li.sex,ul>li.old{
    margin-top:3px;
}
.badge{
    font-size: 6px !important;
    width: 12px;
    /* height: 12px; */
    /* padding: 0px  3px; */
    border-radius: 3px;
    margin-right:4px;
}
.mint-badge.is-size-normal{
    padding :2px;
}
.detail-right{
    padding:10px 0 0 10px;;
}
.detail-right li{
    margin-bottom: 10px;
}
button{
    background: url(../assets/phone.png) 10px center no-repeat #ffffff;
    width: 60px;
    height: 25px;
    color: #459cfc;
    border:none;
    opacity: 0.8;
    outline: none;
    padding-left:20px;
    border-radius: 10px;
    margin-top:3px;
    margin-right:5px;
}
span.mint-badge.is-size-normal{
  padding:0px;
}
span.mint-badge .is-primary.is-size-normal{
    margin-top:4px;
}
/* 详情 */
.xq{
    padding-top:220px;
     display: flex; 
     /* 折行 */
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-around;  
     /* margin: 0px; */
    padding:0px;
    margin:0px;
    height: 510px; 
    border:8px  solid #f4f4f4;
    background: #fff;
    
}
 .imgUrl,.msg{
     display:block;
 }  
 .xq>li{
     list-style: none;
     text-align: center;
     /* border-right:1px solid #888; */
     height: 100px;
     width: 100px; 
     /* white-space: nowrap;  */
 } 
 .msg{
     font-size:14px;
 }
 .imgUrl{
     margin-left:34px;
     margin-bottom: 5px;
     margin-top:15px;
 }
 
</style>


