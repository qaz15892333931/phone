<template>

    <div>
        <div></div>
        <mt-header title="新增高血压档案">
            <!-- '/Aperson/'+this.grdaid -->
            <router-link :to="'/Aperson/'+this.grdaid"  slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="form">
             <table>
                <tr>
                    <td>档案编号：</td>
                    <td><input v-model="per.dabh" type="number" name="cxjmjkdabh" id="cxjmjkdabh" readonly></td> 
                </tr>
                <tr>
                    <td>责任医生：</td>
                    <td><input v-model="per.zrysxm" type="text" name="zrysxm" id="zrysxm" readonly></td> 
                </tr>
                <tr>
                    <td>管辖机构：</td>
                    <td><input v-model="zys.yljgmc" type="text" name="yljgmc" id="yljgmc" readonly></td> 
                </tr>
                <tr>
                    <td>吸烟频率：</td>
                    <td>
                        <select v-model="list.xypldm" name="xypldm" id="xypldm">
                            <option v-for="(item,index) of msg.xypl" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>日吸烟量(支)：</td>
                    <td><input v-model="list.rxyl" type="number" name="rxyl" id="rxyl" :disabled="xyDisabled"></td>
                </tr>
               <tr>
                    <td>饮酒频率：</td>
                    <td>
                        <select v-model="list.yjpldm" name="yjpldm" id="yjpldm">
                            <option v-for="(item,index) of msg.yjpl" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                 <tr>
                    <td>日饮酒量(两)：</td>
                    <td><input v-model="list.ryjl" type="text" name="ryjl" id="ryjl" :disabled="yjDisabled"></td>
                </tr>
                <tr>
                    <td>锻炼频率：</td>
                    <td>
                        <select v-model="list.ydpldm" name="ydpldm" id="ydpldm">
                            <option v-for="(item,index) of msg.dlpl" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>饮食习惯：</td>
                    <td>
                        <a-select v-model="list.ysxgdm" style="width:100%;" mode="tags" @change="handleChange" placeholder="请选择饮食习惯">
                            <a-select-option v-for="(item,index) of msg.ysxg" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </td>
                </tr>
                <tr>
                    <td>检出途径：</td>
                    <td>
                        <select v-model="list.jctudm" name="jctudm" id="jctudm">
                            <option v-for="(item,index) of msg.jctj" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>临床确诊时间：</td>
                    <td><input v-model="list.lcqzsj" type="date" name="lcqzsj" id="lcqzsj"></td>
                </tr>
                <tr>
                    <td>病程：</td>
                    <td><input v-model="list.bc" type="text" name="bc" id="bc" readonly></td>
                </tr>    
                <tr>
                    <td>经常就诊地点：</td>
                    <td>
                        <select v-model="list.jcjzdf" name="jcjzdf" id="jcjzdf">
                            <option v-for="(item,index) of msg.jcjzdd" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>身高(cm)：</td>
                    <td>
                        <input v-model="list.sg" type="number" name="sg" id="sg" required>
                    </td>
                </tr> 
               <tr>
                    <td>体重(kg)：</td>
                    <td>
                        <input v-model="list.tz" type="number" name="tz" id="tz" required>
                    </td>
                </tr>
                <tr>
                    <td>BMI：</td>    
                    <td><input v-model="list.bmi" type="number" name="bmi" id="bmi" readonly></td>
                </tr> 
                <tr>
                    <td>收缩压(mmHg)：</td>
                    <td>
                        <input v-model="list.ssy" type="number" name="ssy" id="ssy" required>
                    </td>
                </tr>
                <tr>
                    <td>舒张压(mmHg)：</td>
                    <td>
                        <input v-model="list.szy" type="number" name="szy" id="szy" required>
                    </td>
                </tr>
                <tr>
                    <td>血压正常原因：</td>
                    <td>
                        <input v-model="list.xyzcyy" type="text" name="xyzcyy" id="xyzcyy" required>
                    </td>
                </tr>
                <tr>
                    <td>管理分组：</td>
                    <td>
                        <select v-model="list.gljbbm" id="gljbbm">
                            <option v-for="(item,index) of msg.glfz" :key="index" :value="item.dicValue">{{item.dicName}}</option>                     
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>危险分层：</td>
                    <td>
                        <select v-model="list.wxfcbm" name="wxfcbm" id="wxfcbm">
                            <option v-for="(item,index) of msg.wxfc" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr> 
                <tr>
                    <td>是否规范管理：</td>
                    <td>
                        <select v-model="list.sfgfgldm" name="sfgfgldm" id="sfgfgldm">
                            <option v-for="(item,index) of msg.sfgfgl" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>建档机构：</td>
                    <td><input v-model="zys.jkyljgmc" type="text" name="jkyljgmc" id="jkyljgmc" readonly></td>
                </tr>
                <tr>
                    <td>信息采集人：</td>
                    <td>
                        <select v-model="list.xxcjrgh" name="xxcjrxm" id="xxcjrxm">
                            <option v-for="(item,index) of cjr" :key="index" :value="item.userId">{{item.xm}}</option>               
                        </select>
                    </td>
                </tr> 
                <tr>
                   <td>建档人员：</td>
                   <td><input type="text" v-model="zys.jkysxm" name="jkysxm" id="jkysxm" readonly></td>
               </tr> 
                <tr>
                    <td>采集日期：</td>
                    <td><input v-model="list.cjrq" type="date" name="cjrq" id="cjrq"></td>
                </tr>
                <!-- <tr>
                    <td>建档日期：</td>
                    <td><input v-model="list.jksj" type="date" name="jksj" id="jksj" readonly></td>
                </tr> -->
            </table> 
            
        </div>
            <button style=" margin:30px auto" @click="save">保存</button>
    </div>
</template>

<script>
import http from '../lib/js/httpUtil'
import {MessageBox} from 'mint-ui'
export default {
    data(){
        return{
            grdaid:this.$route.params.grdaid,
            msg:{},
            cjr:{},
            yjDisabled:"",
            xyDisabled:"",
            list:{
                cxjmjkdabh:"",
                zrysxm:"",
                yljgmc:"",
                xypldm:"",
                rxyl:"",
                yjpldm:"",
                ryjl:"",
                ydpldm:"",
                ysxgdm:"",
                jctudm:"",
                lcqzsj:"",
                bc:"",
                jcjzdf:"",
                sg:"",
                tz:"",
                bmi:"",
                ssy:"",
                szy:"",
                xyzcyy:"",
                gljbbm:"",
                wxfcbm:"",
                sfgfgldm:"",
                jkyljgmc:"",
                xxcjrxm:"",
                jkysxm:"",
                cjrq:"",
                jksj:"",
            },
            per:{},
            zys:{},
        }
    },
    vuerify:{
        "list.rxyl":"required",
        "list.ryjl":"required",
        "list.ysxgdm":{
            test:function(){
                if(this.list.ysxgdm==null || this.list.ysxgdm==""){
                    return false;
                }else{
                    return true;
                }
            },
        },
        "list.lcqzsj":"required",
        "list.sg":"required",
        "list.tz":"required",
        "list.ssy":"required",
        "list.szy":"required",
        "list.xyzcyy":"required",
        "list.cjrq":"required",
        "list.jksj":"required",
    },
    methods:{
        handleChange(value) {
            console.log(`selected ${value}`);
        },
         //   数据分割
        ysfg(){
             if (this.list.ysxgdm != '' && this.list.ysxgdm != null && this.list.ysxgdm != undefined){
                    this.list.ysxgdm=this.list.ysxgdm.split(',');
                }else{
                   this.list.ysxgdm =undefined;  
                }
        },
        // 数据合并
        yshb(){
             if (this.list.ysxgdm != '' && this.list.ysxgdm != null && this.list.ysxgdm != undefined){
                    this.list.ysxgdm=this.list.ysxgdm.join(',');
                }else{
                   this.list.ysxgdm =undefined;  
                }
        },
        save(){
            if(this.$vuerify.check()){ // 手动触发校验所有数据
                this.yshb()
                http.post("/tbGxyHzglk/add",this.$qs.stringify(this.list),{},res=>{
                    // console.log(this.list)  
                    this.ysfg()               
                    MessageBox("提示","提交成功")
                }).catch((err=>{
                    console.log(err)
                }))
            }else {
                // console.log(this.list)
                console.log(this.$vuerify.$errors)
                MessageBox("提示","表格未填写完整")
                return false;
            }
        }
    },
    watch:{
        // 管理分层
        "list.ssy"(){
            if(this.list.ssy<=160){
                this.list.gljbbm=1
            }else  if(this.list.ssy>160&&this.list.ssy<180){
                this.list.gljbbm=2
            }else{
                this.list.gljbbm=3
            }
        },
        // 危险分层
        'list.szy'(){
            if(this.list.szy<=100){
                this.list.wxfcbm=1
            }else if(this.list.szy<=110){
                this.list.wxfcbm=2
            }else if(this.list.szy<=120){
                this.list.wxfcbm=3
            }else{
                this.list.wxfcbm=4
            }
        },
        "list.xypldm":function(){
            if(this.list.xypldm==='4'){
                this.xyDisabled=true;
                this.list.rxyl=0;
            }else{
                this.xyDisabled=false;
            }
        },
        //饮酒
        "list.yjpldm":function(){
            if(this.list.yjpldm==='1'){
                this.yjDisabled=true;
                this.list.ryjl=0;
            }else{
                this.yjDisabled=false;
            }
        },
        //计算BMI
        "list.sg":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=""&&weight!=""){
                this.list.bmi=(weight/(height*height/10000)).toFixed(2);
            }
        },
        "list.tz":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=""&&weight!=""){
                this.list.bmi=(weight/(height*height/10000)).toFixed(2);
            }
        },
        //生成病程
        "list.lcqzsj":function(){
            let lcqzsj=new Date((Date.parse(this.list.lcqzsj.replace(/-/g,"/"))));
            let datetime=new Date();
            let time=parseInt(Math.abs(datetime.getTime()-lcqzsj.getTime())/1000/60/60/24);
            let calen='';
            let year=Math.floor(time/365);
            let y=time%365;
            let month=Math.floor(y/30);
            let day =Math.floor(time%365%30);
            calen=year+'年'+month+'月'+day+'天';
            this.list.bc=calen;    
        }
    },
    created(){
        let dicIdArr = [
            {id:86,name:'xypl'},
            {id:87,name:'yjpl'},
            {id:88,name:'ysxg'},
            {id:89,name:'jctj'},
            {id:90,name:'sfgfgl'},
            {id:91,name:'dlpl'},
            {id:92,name:'glfz'},
            {id:93,name:'wxfc'},
            {id:84,name:'jcjzdd'},
        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.msg.'+dic.name+'='+JSON.stringify(resList);
                eval(code);
            });
        });
        http.get("/tbGxyHzsfk/selectSfysByTeam",{},res=>{
            this.cjr=res.data
        })
        // // 档案编号
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.per=res.data;
            console.log("per:",this.per);
        });
        // 责任医生请求  管辖机构
        http.get("/medical/tb-tnb-hzglk/jsToAdd?grdaid="+this.grdaid,{},res=>{ 
            this.zys=res.data
            console.log("zys:" ,this.zys)
            });
    },
}
</script>

<style scoped>
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
.form{
    width:100%;
    padding: 10px 10px 0 10px;
    background: #fff;
}
table{
    width:100%;
    margin-bottom: 20px;
}
tr>td:first-child{
    width: 40%;
    padding-left: 20px;
}
tr{
    margin-bottom: 5px;
}
.ant-select-selection{
    border:1px solid rgb(169, 169, 169) !important;
}
select{
    color: #aaa;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
}
input{
    text-align: center;
    width: 100%;
    border: 1px solid rgb(169, 169, 169);
    background: #fff;
}
</style>