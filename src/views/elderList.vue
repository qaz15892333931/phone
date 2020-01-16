<template>
    <div>
        <div class="page-head">
            <div>
                <router-link to="/Home">
                    <mt-button style="float:left;background:#459cfc;color:#fff" icon="back"></mt-button>
                </router-link>
                <input class="head-input" type="search" v-model="searchVal" placeholder="输入姓名 身份证号搜索"  >
                    <mt-button style="float:right;background:#459cfc;color:#fff"  @click.stop="yz()">
                        <img src="../assets/add.png"  >
                    </mt-button>
            </div> 
        </div>
        <div class="page-section">
            <backlog v-for="(item,index) of list" :key="index" :name="item.xm" :sex="item.xb" :age="item.nl" :tel="item.brdh" :card="item.zjhm" :address="item.hjdz" :grdaid="item.grdaid" :lnrid="item.lnrid"></backlog>
        </div>
    </div>
</template>
<script>
import backlog from '../components/backlog.vue'
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui'
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
        //查询
        searchVal:function(){
            if(this.searchVal){
                this.list=this.list.filter(item=>{
                    return item.zjhm.indexOf(this.searchVal)!==-1 |item.xm.indexOf(this.searchVal)!==-1
                });
            }else{
               http.get("/tb/tbLnrZxxx/selectList",{},res=>{ 
                    this.list=res;
                })
            }         
        }
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

    },
    created(){
       http.get("/tb/tbLnrZxxx/selectList",{},res=>{
            this.list=res;
            console.log("老年人列表",res)
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
    width: 100%;;
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
.detail{
    width: 100%;
    padding: 5px 20px 5px 0px;
}
img{
    width: 30px;
    height: 30px;
    vertical-align:middle;
    border-radius: 50%;
}
</style>