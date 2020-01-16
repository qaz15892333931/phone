<template>
    <div>
        <!-- 头部 -->
        <div class="page-head">
            <div>
                <router-link to="/Home" >
                    <mt-button style="float:left;background:#459cfc;color:#fff" icon="back"></mt-button>
                </router-link>
                <input class="head-input" type="search" v-model="keywords"  placeholder="输入姓名 身份证号搜索" >
                    <mt-button  style="float:right;background:#459cfc;color:#fff" @click.stop="yz()">
                        <img src="../assets/add.png"  >
                    </mt-button>
            </div> 
        </div>
        <!-- 二级导航 -->
        <!-- <div class="nav">
            <ul>
                <li>
                    <select >
                        <option >网络地址</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>
                    <select >
                        <option >团队医生</option>
                        <option>王青</option>
                        <option>赵三三</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>
                    <select>
                        <option>重点人群</option>
                        <option>高</option>
                        <option>老</option>
                        <option>残</option>
                        <option>糖</option>
                        <option>低</option>
                        <option>危</option>
                    </select>

                </li>
            </ul>
            <ul>
                <li>
                    <select >
                        <option >更多筛选</option>
                        <option>无</option>
                    </select>
                </li>
            </ul>    
        </div> -->
        <!-- 列表 -->
        <div class="page-section">
             <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div v-for="(item, index) in peoples" :key="index">
                <router-link  :to="'/Aperson/'+item.grdaid+'/'+item.zjhm+'?qy=1'">
                    <div class="detail"  > 
                        <div class="detail-left">
                            <img class="avatar"  :src=" item.xb==='男'? imgM : imgWm" alt="">
                        </div>
                        <ul class="detail-center">
                            <li>
                                <ul class="per">
                                    <li class="name" >{{item.xm}}</li>
                                    <li class="sex">{{item.xb}}</li>
                                    <li class="old">{{item.age}}岁</li>
                                    <!-- <mt-badge class="badge" color="badge.color">{{gao}}</mt-badge> 
                                    <mt-badge class="badge" color="lightblue">{{lao}}</mt-badge>
                                    <mt-badge class="badge" color="orange">{{tang}}</mt-badge> -->
                                    <!-- <mt-badge class="badge" color="green">{{di}}</mt-badge>
                                    <mt-badge class="badge" color="blue">{{can}}</mt-badge>
                                    <mt-badge class="badge" color="red">{{wei}}</mt-badge>  -->
                                </ul>
                            </li>
                            <li style="clear:both">
                                <span>联系电话:</span>
                                <span>{{item.lxfs}}</span>
                            </li>
                            <li>
                                <span >身份证号:</span>
                                <span>{{item.zjhm}}</span>
                            </li>
                            <li>
                                <span>现住址:</span>
                                <span>{{item.hkdz}}</span>
                            </li>
                        </ul>
                        <ul class="detail-right">
                            <li>{{item.data}}</li> 
                            <li>
                                <button class=phone>电话</button>
                            </li>
                        </ul>
                    </div>
                </router-link>
            </div>
        </div> 
        </div>
             
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
import layer from 'layui-layer'
import {MessageBox} from 'mint-ui'
// import func from '../../vue-temp/vue-editor-bridge';
// import Bus from '../bus.js'

export default {
    data(){
        return{
            imgWm:require('../assets/woman.png'),
            imgM:require('../assets/man.png'),
            nowPage: 1,
            pageSize: 10,
            peoples:[],
            keywords:'',
            isLoading: false,
            //数据加载完毕
            loaded: false,
        }
    },
    mounted(){
    },
    methods:{
       // 判断身份证是否存在  在进入新增页面
        yz(){
            MessageBox.prompt('请输入身份证号').then(({ value, action}) => {
                if(value==null){
                    MessageBox('提示', '不能为空')
                }else{
                    http.get('/tb/tbChssInfo/selectPerson',{cardID:value},res=>{
                        console.log(res)
                        if(res.code===0){
                            MessageBox('提示', '该用户已存在');
                        }else{
                            this.$router.push({path:"/NewPersonal"})
                        }
                    })
                }
            }).catch(()=>{

            })
        },
        // 数据加载
        loadMore() {
            http.get("/medical/tbChssJtqygx/treeList",{},res=>{
                console.log(res)
                this.peoples=res.rows
                for(var i=0;i<this.peoples.length;i++){
                    // console.log(this.peoples[i].xb)
                     if(this.peoples[i].xb==="1"||this.peoples[i].xb===1){
                          this.peoples[i].xb="男"
                     }else{
                        this.peoples[i].xb="女"
                        
                     }
                }
            })

        },
    },
    created(){
        this.loadMore()
    },
    watch:{  
         // 根据姓名 身份证号进行关键字搜索
        keywords(){
            if(this.keywords){
               this.peoples=this.peoples.filter(item=>{
                   return (item.xm.indexOf(this.keywords)!=-1 | item.zjhm.indexOf(this.keywords)!=-1 )
               }); 
            }else{
                http.get("/medical/tbChssJtqygx/list",{ },
                res=>{
                    this.peoples=res.rows
                })
            }   
        },

    },



}
</script>
<style  scoped>
/* 头部 */
.page-head{
    background: #459cfc;
    text-align: center;
    position: fixed;
    left: 0;
    top:0;
    z-index:999;
    width: 100%;
}
.head-input{
    margin-top: 5px;
    padding-left:30px;
    background: url(../assets/search.png) 5px center no-repeat #fff;
    width:70%;
    height: 30px;
    line-height: 30x;
    font-size: 12px;
    border:0;
    border-radius: 20px;
     outline: none;
}
.page-section{
    margin-top: 50px;
}
img{
    width: 30px;
    height: 30px;
    vertical-align:middle;
    border-radius: 50%;
}
/* input{
    width:80%;
    border-radius: 50px;
    height: 25px;
    background:url('../assets/search.png')   no-repeat scroll right center ; 
    background-size:20px; 
    padding-left:5px;
     outline: none;  
     margin-left:5px;
     vertical-align:center
} */
select{
     /* 边框清0 */
     width:77px;
     /* height:100px; */
     border:0px;
     outline: none;
     /* padding-right:10px;  */
     color:#737373;
    
}
/* .nav{
    margin-top:20px;
    display: flex;
    justify-content: space-around;
} */
/* ul{
    padding-left:0px;
}
ul li{
    list-style: none;
    /* display: inline-block; */
    
/* } */ 
/* 列表 */
/* .phone{
    width:60px;
    height: 30px;
    color:rgb(187, 204, 195);
    border-radius: 5px;
    margin-top:15px;
    margin-left:15px;
   /* background:url('../assets/phone.png')   no-repeat scroll  center ;  */
   /* outline: none;
} */ 
.detail{
    /* height: 100px; */
    /* background: #fff; */
    /* margin: 10px 20px 10px 0px; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border-radius: 5px; */
     border:8px solid #F4F4F4 ;
     background:#fff;
}
.jt{
    width: 25px;
    height: 25px;
    margin-bottom: 80px;
}
.avatar{
    width:40px;
    height:40px;
    border-radius:50%;
    /* margin-left:10px; */
    margin-bottom: 36px;
    margin-top:30px;
}
.detail-center{
    padding-left: 0px;
}
ul li{
    list-style: none;
    font-size: 12px;
    color:#737373 ;
    padding-bottom: 3px;
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
    color: #000;
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
.phone{
    background: url(../assets/phone.png) 10px center no-repeat #F4F4F4;
    width: 64px;
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
</style>

