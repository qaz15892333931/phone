<template>
    <div>
       <mt-header title="新增2型糖尿病患者随访服务记录表">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <!-- <div class="dia-header">
            <label for="history">随访历史记录</label>
             <select name="history" id="history" @change="choice">
                <option v-for="(item,index) of dates" :key="index">{{item.sfrq}}</option>
            </select>
                       <input type="date" style="width:200px">
        </div> -->
        <div style="background:#fff">
            <table>
                <tr style="border-bottom: 1px solid #ddd;">
                   <td colspan="2">随访日期</td>
                    <td colspan="2">
                        <input v-model="list.sfrq" style="width:100%" type="date" name="sfrq" id="sfrq" required>
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
                    <td style="width:8%" rowspan="2">症状</td>
                    <td colspan="3">
                        <a-select v-model="list.tnblczz" style="width:100%" mode="multiple"  placeholder="请选择症状">
                            <a-select-option v-for="(item,index) of msg.zz" :key="index" :value="item.dicValue">{{item.dicName}}
                            </a-select-option>
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
                        <input v-model="list.szy" style="width:40%" type="number" required>/<input  v-model="list.ssy" style="width:40%" type="number" required>
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
                        <label for="method" v-for="(item,index) of msg.zbdmbd" :key="index">
                            <input v-model="list.zbdmbdmc" type="radio" name="method" :value="item.dicValue">{{item.dicName}}
                            <select v-if="list.zbdmbdmc==index+1&&index!=0" v-model="list.jrzcms" name="" id="weaken">
                                <option v-for="(item,index) of msg.zcms" :key="index" :value="item.dicValue">{{item.dicName}}</option>
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
                    <td colspan="2"><input v-model="list.rxyl" style="width:40%" type="number" name="rxyl" id="rxyl" required>/<input v-model="list.mbrxyl" style="width:40%" type="number" name="mbrxyl" id="mbrxyl" required>支</td>
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
                        <select v-model="list.ywblfy" style="width:50%" name="respon" id="respon">
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
                    <td colspan="2"><input style="width:100%"   type="text" v-model="time"
                    required></td>
                </tr>
            </table>
            <!-- <mt-button size="large" type="primary" @click="tsf()">保存</mt-button> -->
        </div>
            <button style="margin:30px auto" @click="tsf()">保存</button>
    </div>    
</template>
<script>
import http from '../lib/js/httpUtil'
import {MessageBox} from 'mint-ui'
export default {
    data(){
        return {
            glkbh:this.$route.params.glkbh,
            grdaid:this.$route.params.grdaid,
            list:{
                sfrq:"",
                sffsdm:"",
                tnblczz:"",
                qtzz:"",
                szy:"",
                ssy:"",
                tz:"",
                mbtz:"",
                sg:"",
                tzzs:"",
                mbtzzs:"",
                zbdmbdmc:"",
                jrzcms:"",
                tzqtms:"",
                rxyl:"",
                mbrxyl:"",
                ryjl:"",
                mbryjl:"",
                ydpldm:"",
                ydsc:"",
                mbydpldm:"",
                mbydsc:"",
                rzsl:"",
                mbrzsl:"",
                xltzpjjgdm:"",
                sfzyxwpjjgdm:"",
                fpg:"",
                chogtt:"",
                hba1c:"",
                fzjcjcrq:"",
                fyycx:"",
                ywblfy:"",
                dxtfy:"",
                ccsffl:"",
                ywmc1:"",
                ywyf1:"",
                ywyl1:"",
                ywmc2:"",
                ywyf2:"",
                ywyl2:"",
                ywmc3:"",
                ywyf3:"",
                ywyl3:"",
                ydszl:"",
                ydsyf:"",
                ydsyl:"",
                zzyy:"",
                zryljgmc:"",
                zrjgksmc:"",
                xcsfrq:"",
                sfysxm:"",
                glkbh:''
            },
            msg:{},
            dates:[],
            cjr:{},
            ssyLimit:'',
            szyLimit:'',
            ssyDanger:'',
            szyDanger:'',
            overweight:'',
            per:{},
            lists:{},
            zrys:{},
            myDate:'',
            time:""
            
            
        }
    },
    methods:{
        // 数据提交
        tsf(){
            this.ys()
            this.list.glkbh=this.glkbh
             Object.assign(this.lists, this.per);
             Object.assign(this.lists, this.list);
            console.log("提交参数",this.lists)
            http.post('/medical/tb-tnb-hzsfk/insert',this.lists,res=>{
                console.log('提交结果:',res)
                alert(1)
                this.ysg()
                MessageBox('提示', '新增成功');
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
            }else{
                 this.list.tnblczz=undefined
            }
        }
    },
    watch:{
        //计算目标BMI
        "list.mbtz"(){
            let height=this.list.sg;
            let weight=this.list.mbtz;
            if(height!=""&&weight!=""){
                this.list.mbtzzs=(weight/(height*height/10000)).toFixed(2);
            }
        },
         //计算BMI
        "list.sg"(){
            let height=this.list.sg;
            let weight1=this.list.tz;
            let weight2=this.list.mbtz;
            if(height!=""&&weight1!=""){
                this.list.tzzs=(weight1/(height*height/10000)).toFixed(2);
            }
            if(height!=""&&weight2!=""){
                this.list.mbtzzs=(weight2/(height*height/10000)).toFixed(2);
            }
        },
        "list.tz"(){
            let height=this.list.sg;
            let weight=this.list.tz;
            if(height!=""&&weight!=""){
                this.list.tzzs=(weight/(height*height/10000)).toFixed(2);
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
        "list.ssy"(){
            if(parseInt(this.list.ssy)>=this.ssyDanger){
                MessageBox("提示","收缩压过高，请立即转诊")
                this.isRequired=true;
            }else{
                console.log(1)
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
        // 症状
        this.ysg();
        // 获取列表数据
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.per=res.data;
            console.log("per:",this.per);
        });
    },
    mounted(){
         // 当前日期
        this.myDate=new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(); 
        this.time=this.myDate
        console.log( this.myDate)
        console.log(this.time)
        // 
        http.get("/tbGxyHzsfk/selectSfysByTeam",{},res=>{
            // console.log(res.data.data)
            this.cjr=res.data
        })
       http.get("/sys/config/getByKey?key=gxy.ssy.limit",{},res=>{
             console.log(res.data)
            this.ssyLimit=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.szy.limit",{},res=>{
             console.log(res.data)
            this.szyLimit=res.data;
        })
        http.get("/sys/config/getByKey?key=gxy.ssy.limit.crisis",{},res=>{
             console.log(res.data)
            this.ssyDanger=res.data;
        })
       http.get("/sys/config/getByKey?key=gxy.szy.limit.crisis",{},res=>{
             console.log(res.data)
            this.szyDanger=res.data;
        })
        http.get("/sys/config/getByKey?key=bmi.overweight.limit",{},res=>{
             console.log(res.data)
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
</style>