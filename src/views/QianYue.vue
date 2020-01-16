<template>
    <div>
        <mt-header title="签约">
            <router-link :to="'/Aperson/'+this.grdaid" slot="left">
                <mt-button style="float:left;background:#459cfc;color:#fff"  icon="back" ></mt-button>
            </router-link>
            <router-link :to="'/QianYueAdd/'+this.zjhm" slot="right">
                <mt-button >
                    <img src="../assets/add.png"  >
                </mt-button>
            </router-link>
        </mt-header>
        <div class="container">
            <mt-cell title="历史签约时间"   style="border-bottom:0.5px solid #f5f5f5">
                <select style="width:200px ;padding-right:20px;margin:10px" id="history" ref="history" @change="choice">
                    <option v-for="(item, index) in qys" :key="index">{{item.qysj}}</option>
                </select>
            </mt-cell>
            <mt-cell title="签约时间"   >
                <input type="date" v-model="list.qysj"> 
            </mt-cell>
            <mt-cell title="到期时间"   >
                <input type="date" v-model="list.dqsj"> 
            </mt-cell>
            <mt-cell title="签约状态"   >
                <input type="text" v-model="list.qyzt"> 
            </mt-cell>
            <mt-cell title="是否解约"   > 
                <select  v-model='list.sfjy' style="width:184px">
                    <option  v-for="(item, index) of xhs.sfjys" :key="index"   >{{item.dicName}}</option>
                </select> 
            </mt-cell>
            <mt-cell title="解约时间"  >
                <input type="date"  v-model="list.jysj"> 
            </mt-cell>
            <mt-cell title="解约原因"   >
                <select  v-model='list.jyyy' >
                    <option  v-for="(item, index) of xhs.jyyys" :key="index"  >{{item.dicName}}</option>
                </select> 
            </mt-cell>
            <mt-cell title="签约团队"  >
                <input type="text"  v-model="list.qytdmc"> 
            </mt-cell>
            <mt-cell title="签约机构"   >
                <input type="text" v-model="list.yljgmc"> 
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
                <input type="text"  v-model="list.xm"> 
            </mt-cell>
        </div>
        <button style=" margin:30px auto" @click="sc">保存</button>
    </div>
</template>

<script>
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            grdaid:this.$route.params.grdaid,
            zjhm:this.$route.params.zjhm,
            qys:{},
            list:{},
            xhs:{},
            xxr:{}
        }
    },
    methods:{
        qyzt(){
            if(this.list.qyzt===1|this.list.qyzt==="1"){
                this.list.qyzt="未签约"
            }
            if(this.list.qyzt===2|this.list.qyzt==="2"){
               this.list.qyzt="已签约"
            }
            if(this.list.qyzt===3|this.list.qyzt==="3"){
               this.list.qyzt="待续签"
            }
            if(this.list.qyzt===4|this.list.qyzt==="4"){
                this.list.qyzt="已解约"
            }
        },
        sfjy(){
            if(this.list.sfjy===0|this.list.sfjy==="0"){
                this.list.sfjy="否"
            }
            if(this.list.sfjy===1|this.list.sfjy==="1"){
                this.list.sfjy="是"
            }
        },

        // 提交数据
        sc(){
            if(this.list.sfjy==="否"){
                this.list.sfjy=0
            }
            if(this.list.sfjy==="是"){
                this.list.sfjy=1
            }
            console.log("提交参数",this.list)
           http.post("/medical/tbChssJtqygx/update",this.list,res=>{
               MessageBox('提示', '修改成功');
           }) 
        },
        // 选择时间
        choice(){
            if(this.qys.length>1){
                for(var i=0;i<this.qys.length;i++){
                    // console.log(this.$refs.history)
                    // if(this.$refs.history==this.qys[i].qysj){
                    if($("#history").find("option:selected").text()==this.qys[i].qysj){
                        http.post("/medical/tbChssJtqygx/jsEdit?zjhm="+this.zjhm+"&jtqygxid="+this.qys[i].jtqygxid,{},res=>{
                            this.list=res
                            console.log("签约时间",this.list)
                            this.qyzt()
                            this.sfjy()
                        })
                    }
                }
            }
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
        });
         // 信息采集人
        http.get('/tb/tbChssInfo/deptUsers',{},res=>{
            this.xxr=res.data
            console.log('xxr',this.xxr)
        })

         // 请求数据
            http.get('/medical/tbChssJtqygx/query/'+this.zjhm,{},res=>{
                this.qys=res.data
                console.log("签约记录", this.qys)
                http.post("/medical/tbChssJtqygx/jsEdit?zjhm="+this.zjhm+"&jtqygxid="+this.qys[0].jtqygxid,{},res=>{
                            this.list=res
                            console.log("签约时间",this.list)
                            this.qyzt()
                             this.sfjy()
                        })
            
         })
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

    }
}
</script>
<style scoped>
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
 img{
    width: 30px;
    height: 30px;
    /* vertical-align:middle;
    border-radius: 50%; */
}
</style>