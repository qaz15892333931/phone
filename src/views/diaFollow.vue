<template>
    <div>
        <div class="page-head">
            <div>
                <router-link to="/Home">
                    <mt-button style="float:left;background:#459cfc;color:#fff" icon="back"></mt-button>
                </router-link>
                <input class="head-input" type="search" v-model="searchVal" placeholder="搜索" >
                <router-link to="/diabetes">
                    <mt-button style="float:right;background:#459cfc;color:#fff" icon="more"></mt-button>
                </router-link>
            </div> 
        </div>
         <div class="page-section">
            <backlog v-for="(item,index) of list" :key="index" :name="item.xm" :sex="item.xb" :age="item.nl" :tel="item.brdh" :card="item.zjhm" :address="item.hjdz" :date="item.jksj" :id="item.glkbh"></backlog>
        </div> 
    </div>
</template>
<script>
import backlog from '../components/backlog.vue'
import http from '../lib/js/httpUtil'
export default {
    data(){
        return{
            searchVal:"",
            list:[]
        }
    },
    components:{
        "backlog":backlog
    },
    watch:{
        searchVal:function(){
            if(this.searchVal){
                this.list=this.list.filter(item=>{
                    return item.zjhm.indexOf(this.searchVal)!==-1
                });
            }else{
               http.get("/medical/tb-tnb-hzsfk/list",{},res=>{
                    this.list=res.data.rows;
                })
            }         
        }
    },
    mounted(){
       http.get("/medical/tb-tnb-hzsfk/list",{},res=>{
            this.list=res.data.rows;
        })
    }
}
</script>
<style scoped>
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
}
.page-section{
    margin-top: 50px;
}
.detail{
    width: 100%;
    padding: 5px 20px 5px 0px;
}
</style>