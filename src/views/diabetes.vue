<template>
    <div>
        <mt-header title="2型糖尿病患者随访服务记录表">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
             <router-link :to="'/diabetesAdd/'+this.list.grdaid" slot="right">
                <mt-button  >
                     <img src="../assets/add.png"  >
                </mt-button>
            </router-link>
        </mt-header>
        <div class="dia-header">
            <label for="history">随访历史记录</label>
            <select name="history" id="history" ref="history"  @change="choice">
                <option v-for="(item,index) of dates" :key="index">{{item.sfrq}}</option>
            </select>
        </div>
        <div style="background:#fff">
            <table>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">随访日期</td>
                    <td colspan="2">
                        <input v-model="list.sfrq" style="width:100%" type="date" name="sfrq" id="sfrq" ref="sfrq"  required>
                    </td> 
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">随访方式</td>
                    <td colspan="2" style="padding-left:52px;padding-right:20px">
                        <label :for="item.dicValue" v-for="(item,index) of msg.sffs" :key="index" >
                                <input type="radio" :id="item.dicValue" :value="item.dicValue" v-model="list.sffsdm">
                        {{item.dicName}}
                        </label>
                    </td>
                </tr>
                <tr>
                    <td style="width:8%" rowspan="2">症状</td>
                    <td colspan="3">
                        <a-select v-model="list.tnblczz" style="width:100%" mode="tags" @change="handleChange" placeholder="--请选择--">
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
                        <input v-model="list.ssy" style="width:40%" type="number" required>/<input  v-model="list.szy" style="width:40%" type="number" required>
                    </td>
                </tr>
                <tr>
                    <td>体重（kg）</td>
                    <td colspan="2">
                        <input v-model="list.tz" style="width:40%" type="number" required>/<input  v-model="list.mbtz" style="width:40%" type="number" required>
                    </td>
                </tr>
                <tr>
                    <td>身高（cm）</td>
                    <td colspan="2">
                        <input v-model="list.sg" style="width:82%" type="number" required>
                    </td>
                </tr>
                <tr>
                    <td style="width:35%">体质指数（kg/m²）</td>
                    <td colspan="2">
                        <input v-model="list.tzzs" type="number" style="width:40%" readonly>/<input  v-model="list.mbtzzs" type="number" style="width:40%" readonly>
                    </td>
                </tr>
                <tr>
                    <td>足背动脉搏动</td>
                    <td colspan="2">
                        <label :for="item.dicValue" v-for="(item,index) of msg.zbdmbd" :key="index" > {{item.dicName}}
                            <input type="radio" :id="item.dicValue" :value="item.dicValue" v-model="list.zbdmbdmc">
                        <select v-model="list.jrzcms"  v-if="list.zbdmbdmc==index+1&&index!=0">
                        <option   v-for="(item,index) of msg.zcms" :key="index"  :value="item.dicValue">{{item.dicName}}</option>
                        </select><br>
                        </label>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>其他</td>
                    <td colspan="2"><input v-model="list.tzqtms" style="width:100%" type="text"></td>
                </tr>
                <tr>
                    <td rowspan="7">生活方式指导</td>
                    <td>日吸烟量</td>
                    <td colspan="2">
                        <input v-model="list.rxyl" style="width:40%" type="number" name="rxyl" id="rxyl" required>/<input v-model="list.mbrxyl" style="width:40%" type="number" name="mbrxyl" id="mbrxyl" required>支
                    </td>
                </tr>
                <tr>
                    <td>日饮酒量</td>
                    <td colspan="2"><input v-model="list.ryjl" style="width:40%" type="number" name="ryjl" id="ryjl" required>/<input v-model="list.mbryjl" style="width:40%" type="number" name="mbryjl" id="mbryjl" required>两</td>
                </tr>
                <tr>
                    <td rowspan="2">运动</td>
                    <td colspan="2">
                        <input v-model="list.ydpldm" style="display:inline-block;width:20%;" type="number" required>次/周
                        <input v-model="list.ydsc" style="width:20%;margin-left:30px" type="number" required>分钟/次
                    </td>
                </tr>
                <tr>
                    <td colspan="2"> 
                        <input v-model="list.mbydpldm" style="display:inline-block;width:20%;" type="number" required>次/周
                        <input v-model="list.mbydsc" style="width:20%;margin-left:30px" type="number" required>分钟/次
                    </td>
                </tr>
                <tr>
                    <td>主食（克/天）</td>
                    <td colspan="2">
                        <input v-model="list.rzsl" style="width:40%" type="number" required>/<input  v-model="list.mbrzsl" style="width:40%" type="number" required>
                    </td>
                </tr>
                <tr>
                    <td>心理调整</td>
                    <td colspan="2">
                        <select v-model="list.xltzpjjgdm" style="width:40%" name="heart" id="heart">
                            <option v-for="(item,index) of msg.xltz" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>遵医行为</td>
                    <td colspan="2">
                        <select v-model="list.sfzyxwpjjgdm" style="width:40%" name="doc" id="doc">
                            <option v-for="(item,index) of msg.zyxw" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td rowspan="3">辅助检查</td>
                    <td>空腹血糖值</td>
                    <td colspan="2"><input v-model="list.fpg" style="width:40%" type="text" required>mmol/L</td>
                </tr>
                <tr>
                    <td>餐后两小时血糖</td>
                    <td colspan="2"><input v-model="list.chogtt" style="width:40%" type="text" required>mmol/L</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>其他检查*</td>
                    <td colspan="2">
                        糖化血红蛋白<input v-model="list.hba1c" style="width:40%;margin:5px 10px;" type="number" required>%<br>
                        检查日期：<input v-model="list.fzjcjcrq" type="date" style="width:60%" name="" required>
                        
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
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">低血糖反应</td>
                    <td colspan="3">
                        <select v-model="list.dxtfy" style="width:50%" name="dia" id="dia">
                            <option v-for="(item,index) of msg.dxtfy" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">此次随访分类</td>
                    <td colspan="3">
                        <select v-model="list.ccsffl" style="width:50%" name="sort" id="sort">
                            <option v-for="(item,index) of msg.ccsffl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td rowspan="7">用药情况</td>
                    <td>药物名称1</td>
                    <td colspan="2"><input v-model="list.ywmc1" style="width:100%" type="text" required></td>
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.ywyf1" style="width:40%" type="number" required>次</td>
                    <td>每次<input v-model="list.ywyl1" style="width:40%" type="number" required></td>
                </tr>
                <tr>
                    <td>药物名称2</td>
                    <td colspan="2"><input v-model="list.ywmc2" style="width:100%" type="text"></td> 
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.ywyf2" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.ywyl2" style="width:40%" type="number"></td>
                </tr>
                <tr>
                    <td>药物名称3</td>
                    <td colspan="2"><input v-model="list.ywmc3" style="width:100%" type="text"></td> 
                </tr>
                <tr>
                    <td>用法用量</td>
                    <td>每日<input v-model="list.ywyf3" style="width:40%" type="number">次</td>
                    <td>每次<input v-model="list.ywyl3" style="width:40%" type="number"></td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>胰岛素</td>
                    <td colspan="2">
                        种类：<input v-model="list.ydszl" style="width:70%;margin-bottom:5px;" type="text"><br>
                        用法和用量：每日<input v-model="list.ydsyf" style="width:35%" type="text">次
                        每次<input v-model="list.ydsyl" style="width:35%" type="text">
                    </td>
                </tr>
                <tr>
                    <td rowspan="2">转诊</td>
                    <td>原因</td>
                    <td colspan="2"><input v-model="list.zzyy" style="width:100%" type="text"></td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td>机构及科别</td>
                    <td colspan="2">
                        机构:<input v-model="list.zryljgmc" style="width:30%" type="text">
                        科室:<input v-model="list.zrjgksmc" style="width:30%" type="text">
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">下次随访日期</td>
                    <td colspan="2"><input style="width:100%" type="date" name="xcsfrq" id="xcsfrq" v-model="list.xcsfrq" required></td>
                </tr>
                <tr>
                    <td colspan="2">随访医生签名</td>
                    <td colspan="2">
                        <select v-model="list.sfysgh" style="width:100%" name="sfysxm" id="sfysxm" required> 
                            <option v-for="(item,index) of cjr" :key="index" :value="item.userId">{{item.xm}}</option>
                        </select>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">责任医生</td>
                    <td colspan="2">
                         <select style="width:100%"  v-model="list.zrysgh">
                            <option v-for="(item, index) in zrys" :key="index" :value="item.userId" >{{item.xm}}</option> 
                        </select>    
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td colspan="2">录入日期</td>
                    <td colspan="2"><input style="width:100%"  type="text" v-model="list.lrrq"  required></td>
                </tr>
            </table>
        </div>
         <!-- <button style="margin:30px auto"  @click="tntj()>保存</button>  -->
         <button style=" margin:30px auto" @click="tntj">保存</button>
    </div>    
</template>
<script>
import http from '../lib/js/httpUtil'
import {MessageBox} from 'mint-ui'
export default {
    data(){
        return {
            glkbh:this.$route.params.glkbh,
            list:[],
            msg:{},
            dates:[],
            cjr:{},
            ssyLimit:'',
            szyLimit:'',
            ssyDanger:'',
            szyDanger:'',
            overweight:'',
            zrys:{},
        }
    },
    methods:{
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        choice(){ 
            if(this.dates.length>1){
                for(var i=0;i<this.dates.length;i++){
                    if($("#history").find("option:selected").text()==this.dates[i].sfrq){
                        http.post("/medical/tb-tnb-hzsfk/query?glkbh="+this.glkbh+"&sfjlid="+this.dates[i].sfjlid,{},res=>{
                            console.log(res)
                            this.list=res[0]
                            this.ysg()
                        })
                    }
                }
            }
        },
        // 数据提交
        tntj(){
            this.ys()
             Object.assign(this.lists, this.list);
            //   Object.assign(this.lists, this.tbs);
            console.log("提交参数",this.lists)
            http.post("/medical/tb-tnb-hzsfk/update",this.lists,res=>{
                this.ysg()
                MessageBox('提示', '修改成功');
            })
        },
        // 数据合并
        ys(){
            if(this.list.tnblczz!=null&&this.list.tnblczz.length>1){
                    this.list.tnblczz=this.list.tnblczz.join(',')
                }
        },
        // 数据分割
        ysg(){
            if(this.list.tnblczz!=null&&this.list.tnblczz.length>1){
                    this.list.tnblczz=this.list.tnblczz.split(',')
            }

        }
       
    },
    watch:{
        //计算BMI
        "list.sg":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=""&&weight!=""){
                this.list.tzzs=(weight/(height*height/10000)).toFixed(2);
            }
        },
        "list.tz":function(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=""&&weight!=""){
                this.list.tzzs=(weight/(height*height/10000)).toFixed(2);
            }
        },
        //计算目标BMI
        "list.mbtz":function(){
            let height=this.list.sg;
            let weight=this.list.mbtz;
            if(height!=""&&weight!=""){
                this.list.mbtzzs=(weight/(height*height/10000)).toFixed(2);
            }
        },
        "list.sg":function(){
            let height=this.list.sg;
            let weight=this.list.mbtz;
            if(height!=""&&weight!=""){
                this.list.mbtzzs=(weight/(height*height/10000)).toFixed(2);
            }
        },
        //高血压危及患者
        "list.szy"(){
            console.log(this.szyDanger)
            if(parseInt(this.list.szy)>=this.szyDanger){
                MessageBox("提示","舒张压过高，请立即转诊")
                this.isRequired=true;
            }
        },
        "list.ssy":function(){
             console.log(this.ssyDanger)
            if(parseInt(this.list.ssy)>=this.ssyDanger){
                MessageBox("提示","收缩压过高，请立即转诊")
                this.isRequired=true;
            }
        },
        //下次随访日期大于本次
        "list.xcsfrq":function(){
            let minsfrq=new Date(Date.parse(this.list.sfrq.replace(/-/g,"/"))+(24*60*60*1000))
            let maxsfrq=new Date(Date.parse(this.list.sfrq.replace(/-/g,"/"))+(93*24*60*60*1000))
            let xcsfrq=new Date(Date.parse(this.list.xcsfrq.replace(/-/g,"/")))
            if(minsfrq>xcsfrq&&maxsfrq<xcsfrq){
                MessageBox("提示","请输入正确的随访日期");
            }
        }
    },
    created(){
        let dicIdArr = [
            {id:95,name:'zz'},
            {id:96,name:'sffs'},
            {id:97,name:'zbdmbd'},
            {id:98,name:'xltz'},
            {id:99,name:'zyxw'},
            {id:100,name:'fyycx'},
            {id:101,name:'ywblfy'},
            {id:102,name:'dxtfy'},
            {id:103,name:'ccsffl'},
            {id:108,name:'zcms'},
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
         // 当前日期
        this.myDate=new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(); 
        this.time=this.myDate
        console.log( this.myDate)
        console.log(this.time)
        //数据请求
        http.get("/medical/tb-tnb-hzsfk/queryLssfrq?glkbh="+this.glkbh,{},res=>{
            console.log(res.rows)
            this.dates=res.rows;
            http.post("/medical/tb-tnb-hzsfk/query?glkbh="+this.glkbh+"&sfjlid="+this.dates[0].sfjlid,{},res=>{
                console.log(res)
                this.list=res[0]
                console.log("this.list",this.list)
                this.ysg()
            })
        })
        // 随访医生签名
        http.get("/tbGxyHzsfk/selectSfysByTeam",{},res=>{
             console.log("cjr",res)
            this.cjr=res.data
        })
        http.get("/sys/config/getByKey?key=gxy.ssy.limit",{},res=>{
             console.log(res)
            this.ssyLimit=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.szy.limit",{},res=>{
            console.log(res)
            this.szyLimit=res.data;
         })   
        http.get("/sys/config/getByKey?key=gxy.ssy.limit.crisis",{},res=>{
             console.log(res)
            this.ssyDanger=res.data;
        })
       http.get("/sys/config/getByKey?key=gxy.szy.limit.crisis",{},res=>{
             console.log(res)
            this.szyDanger=res.data;
        })
       http.get("/sys/config/getByKey?key=bmi.overweight.limit",{},res=>{
             console.log(res)
            this.overweight=res.data;
        })
        // 责任医生
        http.get('/tb/tbChssInfo/deptUsers',{},res=>{
            this.zrys=res.data
            console.log('zrys',this.zrys)
        });
        
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
    background: #fff;
    margin:5px 5px 20px;
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
        height: 30px;
        color:#fff;
        background-color: #26a2ff; 
        border-radius: 25px ;
        border:none;
        outline:none;
        display: block;
        margin:0 auto;
    }
</style>