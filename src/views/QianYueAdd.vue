<template>
    <div>
        <mt-header title="新增签约">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="签约时间" >
                <input type="date" v-model="list.qysj"> 
            </mt-cell>
            <mt-cell title="到期时间" >
                <input type="date" v-model="list.dqsj"> 
            </mt-cell>
            <mt-cell title="签约状态" >
                <input type="text" v-model="list.qyzt"> 
            </mt-cell>
            <mt-cell title="签约团队" >
                <input type="text"  v-model="qy.qytdmc"> 
            </mt-cell>
            <mt-cell title="签约机构"   >
                <input type="text" v-model="qy.orgName"> 
            </mt-cell>
            <mt-cell title="签约医生"  >
               <select style="width:200px" v-model="list.qyysgh">
                    <option v-for="(item,index) of xxr" :key="index" :value="item.userId">{{item.xm}}</option>            
                </select>
            </mt-cell>
            <mt-cell title="联系方式"  >
                <input type="text" v-model="list.lxfs"> 
            </mt-cell>
            <mt-cell title="甲方确认"  >
                <input type="text"  v-model="list.qyysxm"> 
            </mt-cell>
            <mt-cell title="乙方确认" >
                <input type="text"  v-model="qy.xm"> 
            </mt-cell>
            <button style=" margin:30px auto" @click="sc">保存</button>
    </div>
</template>

<script>
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            zjhm:this.$route.params.zjhm,
            list:{},
            xhs:{},
            qy:{},
            xxr:{},
            pers:{},
            // 整合
            lists:{}
        }
    },
    created(){
         // option字典数据
        let dicIdArr = [
            // id=2
        {id:128,name:'jyyys'},
        {id:127,name:'sfjys'},
        ];
        //加载字典列表
        let loadDicList = callBack =>{
            dicIdArr.forEach(dic => {
                http.getDicByGroupId(dic.id,resList => {
                    let that = this;
                    let code = 'that.xhs.'+dic.name+'='+JSON.stringify(resList);
                    callBack(code);
                    
                });
            });
        }
        loadDicList(callBack => {
            let that = this;
            eval(callBack);
        })
        // 签约状态
        http.get('/medical/tbChssJtqygx/checkQyzt/?zjhm='+this.zjhm,{},res=>{
            this.list=res
            if( this.list.qyzt===1| this.list.qyzt==="1")
                  this.list.qyzt="未签约"
            if( this.list.qyzt===2| this.list.qyzt==="2")
                 this.list.qyzt="已签约"
            if( this.list.qyzt===3| this.list.qyzt==="3")
                 this.list.qyzt="待续签"
            if( this.list.qyzt===4| this.list.qyzt==="4")
                 this.list.qyzt="已解约"
        })
        // 签约团队
        http.get('/medical/tbChssJtqygx/jsAdd/?zjhm='+this.zjhm,{},res=>{
            this.qy=res
        })
         // 信息采集人
        http.get('/tb/tbChssInfo/deptUsers',{},res=>{
            this.xxr=res.data
            console.log('xxr',this.xxr)
        })
        // 获取基本数据
        http.get("/tb/tbChssInfo/selectPerson/?cardID="+this.zjhm,{},res=>{ 
            this.pers=res.data;
            console.log("个人基本信息",this.pers)
        })
    },
    methods:{
        // 提交数据
         // 整合数据
        sc(){
            Object.assign(this.lists,this.qy);
            Object.assign(this.lists,this.pers);
            Object.assign(this.lists,this.list);
            console.log("提交参数",this.lists)
            http.post('/medical/tbChssJtqygx/insert',this.lists,res=>{
                 MessageBox('提示', '新增成功');
            })
        },

        
    },
    watch:{
        "list.qyysgh"(){
            if(this.list.qyysgh===57|this.list.qyysgh==="57"){
                this.list.qyysxm="曾文国"
            }
            if(this.list.qyysgh===54|this.list.qyysgh==="54"){
                this.list.qyysxm="杨睿"
            }
            if(this.list.qyysgh===81|this.list.qyysgh==="81"){
                this.list.qyysxm="李莉"
            }
            if(this.list.qyysgh===58|this.list.qyysgh==="58"){
                this.list.qyysxm="杜亮"
            }
         },
         'list.qysj'(){
            var d1=this.list.qysj
             var d2=new Date(d1);
            d2.setFullYear(d2.getFullYear()+1);
            this.list.dqsj=(new Date(d2)).toISOString().slice(0,10);
        } 
    },
}
</script>
<style scoped >
 .container{
        margin:10px 5px 0px;  
    }

input{
        outline: none; 
        border: none;  
        margin-left:20px;
        font-size:14px;
        margin-right:0px;
        width:200px
    }
button{
        width:70%;
        height: 40px;
        color:#fff;
        background-color: #26a2ff; 
        border-radius: 25px ;
        border:none;
        outline:none;
        display: block;
        margin:0 auto;
}
    input[type=date]{
     background-color:#fff;
 } 

</style>

