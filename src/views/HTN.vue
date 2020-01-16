<template>
    <div>
        <mt-header title="高血压患者随访服务记录表">
            <router-link :to="'/Aperson/'+list.grdaid" slot="left">
                <mt-button icon="back" ></mt-button>
            </router-link>
            <router-link :to="'/HTNAdd/'+this.cid+'/'+list.grdaid" slot="right">
                <mt-button >
                    <img src="../assets/add.png"  >
                </mt-button>
            </router-link>
        </mt-header>
        <div class="dia-header">
                <label for="history">随访历史记录</label>
                <select name="history" id="history" @change="choice">
                    <option v-for="(item,index) of dates" :key="index">{{item.date}}</option>
                </select>
        </div>
        <div style="background:#fff">
            <table>
                <tr style="border-bottom: 1px solid #ddd;">
                   <td colspan="2">随访日期</td>
                    <td colspan="2">
                        <input v-model="list.sfrq" style="width:100%" type="date" name="sfrq" id="sfrq">
                    </td> 
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">随访方式</td>
                    <td colspan="2">
                        <label for="method" v-for="(item,index) of msg.sffs" :key="index">
                            <input v-model="list.sffsdm" type="radio" name="method" :value="item.dicValue">{{item.dicName}}
                        </label>
                    </td>
                </tr>
                <tr>
                    <td rowspan="2" style="width:8%">症状</td>
                    <td colspan="3">
                        <a-select style="width:100%" mode="tags" @change="handleChange" placeholder="请选择症状" v-model="list.mqzzdm">
                            <a-select-option v-for="(item,index) of msg.zz" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>其他：</td>
                    <td colspan="2"><input v-model="list.qtzz" style="width:100%" type="text"></td>
                </tr>
                <tr>
                    <td rowspan="6">体征</td>
                    <td>血压（mmHg）</td>
                    <td colspan="2">
                        <input v-model="list.ssy" style="width:40%" type="number" required>/<input  v-model="list.szy" style="width:40%" type="number">
                    </td>
                </tr>
                <tr>
                    <td>身高（cm）</td>
                    <td colspan="2">
                        <input v-model="list.sg" style="width:82%" type="number">
                    </td>
                </tr>
                <tr>
                    <td>体重（kg）</td>
                    <td colspan="2">
                        <input v-model="list.tz" style="width:40%" type="number">/<input  v-model="list.mbtz" style="width:40%" type="number" :required="tzRequired">
                    </td>
                </tr>
                <tr>
                    <td style="width:35%">体质指数（BMI）（kg/m²）</td>
                    <td colspan="2">
                        <input v-model="list.bmi" type="number" style="width:40%" readonly>/<input  v-model="list.mbbmi" type="number" style="width:40%" readonly>
                    </td>
                </tr>
                <tr>
                    <td>心率（次/分钟）</td>
                    <td colspan="2">
                        <input v-model="list.xl" style="width:100%" type="number">
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>其他</td>
                    <td colspan="2"><input v-model="list.qttz" style="width:100%" type="text"></td>
                </tr>
                <tr>
                    <td rowspan="7">生活方式指导</td>
                    <td>日吸烟量（支）</td>
                    <td colspan="2"><input v-model="list.rxyl" style="width:40%" type="number" name="rxyl" id="rxyl">/<input v-model="list.mbrxyl" style="width:40%" type="number" name="mbrxyl" id="mbrxyl"></td>
                </tr>
                <tr>
                    <td>日饮酒量（两）</td>
                    <td colspan="2"><input v-model="list.ryjl" style="width:40%" type="number" name="ryjl" id="ryjl">/<input v-model="list.mbryjl" style="width:40%" type="number" name="mbryjl" id="mbryjl"></td>
                </tr>
                <tr>
                    <td rowspan="2">运动</td>
                    <td colspan="2"> 
                        <input v-model="list.ydpldm" style="display:inline-block;width:20%;" type="number">次/周
                        <input v-model="list.ydsc" style="width:20%;margin-left:30px" type="number">分钟/次
                    </td>
                </tr>
                <tr>
                    <td colspan="2"> 
                        <input v-model="list.mbydpldm" style="display:inline-block;width:20%;" type="number">次/周
                        <input v-model="list.mbydsc" style="width:20%;margin-left:30px" type="number">分钟/次
                    </td>
                </tr>
                <tr>
                    <td>摄盐情况（咸淡）</td>
                    <td colspan="2">
                        <label for="salt" v-for="(item,index) of msg.syqk" :key="index">
                            <input v-model="list.sylfjdm" type="radio" name="salt" :value="item.dicValue">{{item.dicName}}
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>心理调整</td>
                    <td colspan="2">
                        <select v-model="list.xltzpjjgdm" style="width:40%" id="xltzpjjgdm">
                            <option v-for="(item,index) of msg.xltz" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>遵医行为</td>
                    <td colspan="2">
                        <select v-model="list.sfzyxwpjjgdm" style="width:40%" id="sfzyxwpjjgdm">
                            <option v-for="(item,index) of msg.zyxw" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">辅助检查*</td>
                    <td colspan="2">
                        <input v-model="list.fzjc" type="text" style="width:100%">
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">服药依从性</td>
                    <td colspan="3">
                        <select v-model="list.fyycx" style="width:50%" name="rely" id="rely">
                           <option v-for="(item,index) of msg.fyycx" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">药物不良反应</td>
                    <td colspan="3">
                        <select v-model="list.ywblfybz" style="width:50%" name="respon" id="respon">
                            <option v-for="(item,index) of msg.ywblfy" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                        <input style="border:0;border-bottom:1px solid #bbb;width:40%;" v-if="list.ywblfybz==2" type="text">
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">此次随访分类</td>
                    <td colspan="3">
                        <select v-model="list.ccsffldm" style="width:50%" name="sort" id="sort">
                            <option v-for="(item,index) of msg.ccsffl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td rowspan="8">用药情况</td>
                    <td>药物名称1</td>
                    <td colspan="2"><input v-model="list.ywmca" style="width:100%" type="text"></td>
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.mrcsa" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.mcyla" style="width:40%" type="number"></td>
                </tr>
                <tr>
                    <td>药物名称2</td>
                    <td colspan="2"><input v-model="list.ywmcb" style="width:100%" type="text"></td> 
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.mrcsb" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.mcylb" style="width:40%" type="number"></td>
                </tr>
                <tr>
                    <td>药物名称3</td>
                    <td colspan="2"><input v-model="list.ywmcc" style="width:100%" type="text"></td> 
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.mrcsc" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.mcylc" style="width:40%" type="number"></td>
                </tr>
                <tr>
                    <td>其他药物</td>
                    <td colspan="2"><input v-model="list.ywmcd" style="width:100%" type="text"></td> 
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.mrcsd" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.mcyld" style="width:40%" type="number"></td>
                </tr>
                <tr>
                    <td rowspan="2">转诊</td>
                    <td>原因</td>
                    <td colspan="2"><input v-model="list.zzyy" style="width:100%" type="text"></td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>机构及科别</td>
                    <td colspan="2">
                        机构:<input v-model="list.zryljgmc" style="width:30%" type="text" :required="isRequired">
                        科室:<input v-model="list.zzksmv" style="width:30%" type="text" :required="isRequired">
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">下次随访日期</td>
                    <td colspan="2"><input v-model="list.xcsfrq" style="width:100%" type="date" name="xcsfrq" id="xcsfrq"></td>
                </tr>
                <tr>
                    <td colspan="2">随访医生签名</td>
                    <td colspan="2">
                        <select v-model="list.sfysxm" style="width:100%" name="sfysxm" id="sfysxm">
                            <option v-for="(item,index) of cjr" :key="index" :value="item.xm">{{item.xm}}</option>
                        </select>
                    </td>
                </tr>
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
        return {
            cid:this.$route.params.cid,
            list:[],
            msg:{},
            dates:[],
            cjr:{},
            ssyLimit:'',
            szyLimit:'',
            ssyDanger:'',
            szyDanger:'',
            overweight:'',
            tzRequired:'',
            isRequired:''
        }
    },
    vuerify:{
        "list.sfrq":"required",
        "list.sffsdm":"required",
        "list.mqzzdm":{
            test:function(){
                if(this.list.mqzzdm==null || this.list.mqzzdm==""){
                    return false;
                }else{
                    return true;
                }
            },
            message:"症状未选"
        },
        // "list.qtzz":"required",
        "list.ssy":"required",
        "list.szy":"required",
        "list.sg":"required",
        "list.mbtz":{
            test:function(){
                if(this.list.bmi>=this.overweight){
                return "required";
                MessageBox("提示","已超重，请输入目标体重")
            }else{
                return true;
            }
            }
        },
        "list.tz":"required",
        "list.xl":"required",
        // "list.qttz":"required",
        "list.rxyl":"required",
        "list.mbrxyl":"required",
        "list.ryjl":"required",
        "list.mbryjl":"required",
        "list.ydpldm":"required",
        "list.ydsc":"required",
        // "list.mbydpldm":"required",
        // "list.mbydsc":"required",
        // "list.sylfjdm":"required",
        // "list.xltzpjjgdm":"required",
        // "list.sfzyxwpjjgdm":"required",
        // "list.fzjc":"required",
        // "list.fyycx":"required",
        // "list.ywblfybz":"required",
        // "list.ccsffldm":"required",
        "list.ywmca":"required",
        "list.mrcsa":"required",
        "list.mcyla":"required",
        // "list.zzyy":"required",
        "list.zryljgmc":{
            test:function(){
                if(this.list.ssy>=this.ssyDanger || this.list.szy>=this.szyDanger){
                    return "required";
                }else{
                    return true;
                }
            }
        },
        "list.zzksmv":{
            test:function(){
                if(this.list.ssy>=this.ssyDanger || this.list.szy>=this.szyDanger){
                    return "required";
                }else{
                    return true;
                }
            }
        },
        "list.xcsfrq":"required",
        // "list.sfysxm":"required",    
    },
    methods:{
         // 数据合并
        ys(){
            if(this.list.mqzzdm!=null&&this.list.mqzzdm.length>1){
                    this.list.mqzzdm=this.list.mqzzdm.join(',')
            }
        },
        // 数据分割
        ysg(){
            if(this.list.mqzzdm!=null&&this.list.mqzzdm.length>1){
                    this.list.mqzzdm=this.list.mqzzdm.split(',')
            }else{
                 this.list.mqzzdm=undefined
            }
        },
        loadData(){
           http.get("/tbGxyHzsfk/selectSfrqVidByCid?cid="+this.cid,{},res=>{
               console.log("返回随访时间和vid"+res)
                this.dates=res.data;
               http.get("/tbGxyHzsfk/selectByVid/"+this.dates[0].vid,{},res=>{
                   console.log(res)
                    this.list=res;
                    console.log('高血压随访数据list',this.list)
                    if(this.list.mbbmi==null){this.list.mbbmi=0}
                   this.ysg()
                })
               
            })
        },
        handleChange(value) {
            if(value.indexOf("1")!=-1){
                this.list.mqzzdm="1";
            }
        },
        choice(){ 
            if(this.dates.length>1){
                for(var i=0;i<this.dates.length;i++){
                    if($("#history").find("option:selected").text()==this.dates[i].date){
                       http.get("/tbGxyHzsfk/selectByVid/"+this.dates[i].vid,{},res=>{
                            this.list=res
                            if(this.list.mqzzdm!=null&&this.list.mqzzdm.length>1){
                                this.list.mqzzdm=this.list.mqzzdm.split(',')
                            }
                        })
                    }
                }
            }
        },
        save(){
            if(this.$vuerify.check()){ // 手动触发校验所有数据
                if(this.list.ssy>this.ssyLimit || this.list.szy>this.szyLimit){
                    let sfrq=new Date(Date.parse(this.list.sfrq.replace(/-/g,"/"))+(15*24*60*60*1000));
                    let xcsfrq=new Date(Date.parse(this.list.xcsfrq.replace(/-/g,"/")))
                    if(xcsfrq>sfrq){
                        MessageBox("提示","血压超标，下次随访日期请在15日以内")
                    }
                }
                if(this.list.mqzzdm!=null && this.list.mqzzdm.length>1){
                    this.list.mqzzdm=this.list.mqzzdm.join(',')
                }
               http.post("/tbGxyHzsfk/modify",this.$qs.stringify(this.list),{},res=>{
                    // console.log(res)                 
                    MessageBox("提示","提交成功")
                    //修改后的页面
                   http.get("/tbGxyHzsfk/selectByVid/"+this.list.vid,{},res=>{
                        console.log(res.data);     
                        this.list=res.data;
                        if(this.list.mqzzdm!=null&&this.list.mqzzdm.length>1){
                            this.list.mqzzdm=this.list.mqzzdm.split(',');
                        }
                    })
                }).catch((err=>{
                    console.log(err)
                }))
            }else {
                console.log(this.$vuerify.$errors)
                MessageBox("提示","表格未填写完整")
                return false;
            }
        }
    },
    watch:{
        //超重
        "list.bmi":function(){
            if(this.list.bmi==null){this.list.bmi=0}
            if(this.list.bmi>this.overweight){
                MessageBox("提示","已超重，请输入目标体重")
            }else{
                return true;
            }      
        },
        //计算BMI
        "list.sg":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            let mbweight=this.list.mbtz;
            if(height!=null&&weight!=null){
                this.list.bmi=(weight/(height*height/10000)).toFixed(2);
            }else{
                return true;
            }
            // console.log(this.list.bmi)
            if(height!=null&&mbweight!=null){
                this.list.mbbmi=(mbweight/(height*height/10000)).toFixed(2);
            }else{
                return true;
            }
        },
        "list.tz":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=null&&weight!=null){
                this.list.bmi=(weight/(height*height/10000)).toFixed(2);
            }else{
                return true;
            }
            // console.log(this.list.bmi)
        },
        //计算目标BMI
        "list.mbtz":function(){
            let height=this.list.sg;
            let weight=this.list.mbtz;
            if(height!=null&&weight!=null){
                this.list.mbbmi=(weight/(height*height/10000)).toFixed(2);
            }else{
                return true;
            }
        },
        //高血压危及患者
        "list.ssy":function(){
            if(parseInt(this.list.ssy)>=this.ssyDanger){
                MessageBox("提示","收缩压过高，请立即转诊");
            }
        },
        "list.szy":function(){
            if(parseInt(this.list.szy)>=this.szyDanger){
                MessageBox("提示","舒张压过高，请立即转诊");
            }
        },
        //下次随访日期大于本次
        "list.xcsfrq":function(){
            let minsfrq=new Date(Date.parse(this.list.sfrq.replace(/-/g,"/"))+(24*60*60*1000))
            let maxsfrq=new Date(Date.parse(this.list.sfrq.replace(/-/g,"/"))+(93*24*60*60*1000))
            let xcsfrq=new Date(Date.parse(this.list.xcsfrq.replace(/-/g,"/")))
            if(minsfrq>xcsfrq || maxsfrq<xcsfrq){
                this.list.xcsfrq=""
                MessageBox("提示","请输入正确的随访日期");
            }
        }
    },
    created(){
        let dicIdArr = [
            {id:12,name:'zz'},
            {id:83,name:'sffs'},
            {id:82,name:'syqk'},
            {id:81,name:'xltz'},
            {id:80,name:'zyxw'},
            {id:79,name:'fyycx'},
            {id:78,name:'ywblfy'},
            {id:77,name:'ccsffl'},
        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.msg.'+dic.name+'='+JSON.stringify(resList);
                eval(code);
            });
        });
    },
    mounted(){
        // //安卓返回键
        // let that =this;
        // pushHistory()  // 必须存在
        // that.gotoURL(function () { 
        //     pushHistory()  // 必须存在
        //     console.log('666')  // 点击返回键要执行的方法
        // })

        this.loadData();
        http.get("/tbGxyHzsfk/selectSfysByTeam",{},res=>{
            console.log(res.data)
            this.cjr=res.data
        })
        http.get("/sys/config/getByKey?key=gxy.ssy.limit",{},res=>{
            // console.log(res.data.data)
            this.ssyLimit=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.szy.limit",{},res=>{
            // console.log(res.data.data)
            this.szyLimit=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.ssy.limit.crisis",{},res=>{
            // console.log(res.data.data)
            this.ssyDanger=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.szy.limit.crisis",{},res=>{
            // console.log(res.data.data)
            this.szyDanger=res.data;
        })
        http.get("/sys/config/getByKey?key=bmi.overweight.limit",{},res=>{
            // console.log(typeof(res.data.data))
            this.overweight=parseInt(res.data);
            // console.log(typeof(this.overweight))
        })
    }
}
</script>
<style scoped>
.dia-header{
    background:#fff;
    padding: 10px;
    margin-top: 10px;
}
table{
    /* width:96%; */
    background: #fff;
    margin: 5px;
}
select{
    color: #aaa;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
    background: #fff;
}
input{
    text-align: center;
    width: 30px;
    border: 1px solid #ddd;
    background: #fff;
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
</style>