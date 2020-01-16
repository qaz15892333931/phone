<template>
    <div>
        <!-- 头部 -->
        <mt-header title="新增糖尿病专案信息" fixed>
            <router-link :to="'/Aperson/'+this.grdaid" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="container" >
            <!-- 内容 -->
             <mt-cell title="心率(次/min)"  readonly="value">
                <input type="text" v-model="tbs.xl" >
            </mt-cell>
            <mt-cell title="责任医生" v-model="per.zrysxm"  readonly="value">
            </mt-cell>
            <mt-cell v-model="per.zrysgh" v-show="false"></mt-cell>
            <mt-cell title="管辖机构"   >
                <input type="text"  v-model="zys.yljgmc">
            </mt-cell>
            <mt-cell title="吸烟频率" >
                 <select v-model="tbs.xypl">
                    <option v-for="(item, index) in tnb.xypl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                </select>
            </mt-cell>
            <mt-cell title="日吸烟量(日)" >
                <input type="text" v-model="tbs.rxyl" >
            </mt-cell>
            <mt-cell title="饮酒频率"   >
               <select  v-model="tbs.yjpl">
                    <option v-for="(item, index) in tnb.yjpl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                </select>
            </mt-cell>
            <mt-cell title="日饮酒量(两)" >
                <input type="text"  v-model="tbs.ryjl">
            </mt-cell>
            <mt-cell title="锻炼频率" >
                <select  v-model="tbs.dlpl">
                    <option v-for="(item, index) in tnb.dlpl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                </select>
            </mt-cell> 
            <mt-cell title="饮食习惯"   >
              <a-select
                    mode="multiple"
                    style="width: 200px"
                    placeholder="请选择饮食习惯"
                    v-model="tbs.ysxg"
                >
                    <a-select-option   v-for="(item, index) in tnb.ysxg" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>         
                </a-select> 
            </mt-cell>
            <mt-cell title="空腹血糖(mmol/L)" >
                <input type="text" v-model="tbs.fpg"> 
            </mt-cell>
            <mt-cell title="餐后2小时血糖(mmol/L)" >
                <input type="text" v-model="tbs.chogtt"> 
            </mt-cell>
            <mt-cell title="身高(cm)" >
                <input type="text" v-model="tbs.sg" > 
            </mt-cell>
            <mt-cell title="体重(kg)" >
                <input type="text" v-model="tbs.tz" > 
            </mt-cell>
            <mt-cell title="BMI" >
                <input type="text" v-model="tbs.tzzs"   readonly="value"> 
            </mt-cell>
            <mt-cell title="确诊日期" >
                <input type="date" v-model="tbs.qzrq"> 
            </mt-cell>
            <mt-cell title="患病时长(年)" >
                <input type="text" v-model="tbs.hbsj"> 
            </mt-cell>
            <mt-cell title="采集日期" >
                <input type="date" v-model="tbs.cjrq"> 
            </mt-cell>
            <mt-cell title="信息采集人" >
                <select style="width:180px" v-model="tbs.cjrgh">
                <option v-for="(item, index) in zrys" :key="index" :value="item.userId" >{{item.xm}}</option>
                </select>  
            </mt-cell>
             <mt-cell v-model="tbs.cjrgh"  v-show="false">  
            </mt-cell>
            <mt-cell title="建档人员" >
               <input type="text" v-model="zys.jkysxm"  readonly="value">  
            </mt-cell>
            <mt-cell title="档案注销原因" >
                <input type="text" v-model="tbs.dazxyy"> 
            </mt-cell>
            <mt-cell title="建档机构" >
                <input type="text"  v-model="zys.jkyljgmc" readonly="value">
            </mt-cell>
            <mt-cell title="糖尿病家族史" >
                <select style="width:180px" v-model="tbs.tnbjzs">
                <option  v-for="(item, index) in  tnb.tjz" :key="index" :value="item.dicValue" >{{item.dicName}}</option>
                </select> 
            </mt-cell>
            <mt-cell title="家族史"   >
                <input type="text" v-model="tbs.jzs"> 
            </mt-cell>
            <mt-cell title="病例种类"   >
                <select  v-model="tbs.tnbfxbm">
                <option  v-for="(item, index) in  tnb.zl" :key="index" :value="item.dicValue" >{{item.dicName}}</option>
                </select> 
            </mt-cell>
        </div>
        <button style="margin:30px auto" @click.prevent="sc()">保存</button>
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            grdaid:this.$route.params.grdaid,
            tnb:{},
            tbs:{
                sfgfgl:"是",
                yljgmc:'',
                fpg:"",
                chogtt:"",
                sg:" ",
                tz:'',
                tzzs:"",
                qzrq:'',
                hbsc:"",
                cjrq:'',
                cjrxm:'',
                jkysxm:"",
                dazxyy:'',
                jkyljgmc:'',
                tnbjzs:'',
                jzs:'',
                tnbfxbm:'',
            },
            zrys:{},
            per:{},
            lists:{},
            // 添加字段
            pj:{
                cxjmjkdabh:this.cxjmjkdabh,
                mqglysxm:''
            },
            zys:{},
            ysxg:{}
        }
    },
   watch:{
    // 监听身高体重  
       'tbs.sg'(){
            let height=this.tbs.sg;
            let weight=this.tbs.tz;
            if(height!=""&&weight!=""){
                this.tbs.tzzs=(weight/(height*height/10000)).toFixed(2);
            }  
        },
        'tbs.tz'(){
            let height=this.tbs.sg;
            let weight=this.tbs.tz;
            if(height!=""&&weight!=""){
                this.tbs.tzzs=(weight/(height*height/10000)).toFixed(2);
            }  
        },
    },
    methods:{
         //   数据分割
        ysfg(){
             if (this.tbs.ysxg != '' && this.tbs.ysxg != null && this.tbs.ysxg != undefined){
                    this.tbs.ysxg=this.tbs.ysxg.split(',');
                }else{
                   this.tbs.ysxg =undefined;  
                }
        },
        // 数据合并
        yshb(){
             if (this.tbs.ysxg != '' && this.tbs.ysxg != null && this.tbs.ysxg != undefined){
                    this.tbs.ysxg=this.tbs.ysxg.join(',');
                }else{
                   this.tbs.ysxg =undefined;  
                }
        },
        // 数据提交
        sc(){
            if(this.tbs.xl==''){
                MessageBox('提示', '请输入心率');
            }else if(this.tbs.fpg==''){
                 MessageBox('提示', '请输入空腹血糖');
            }else if(this.tbs.chogtt==''){
                MessageBox('提示', '请输入餐后2小时血糖');
            }else if(this.tbs.sg==''){
                 MessageBox('提示', '请输入身高');
            }else if(this.tbs.tz==''){
                 MessageBox('提示', '请输入体重');
            }else if(this.tbs.qzrq==''){
                 MessageBox('提示', '请输入确诊日期');
            }else if(this.tbs.cjrq==''){
                 MessageBox('提示', '请输入采集日期');
            }else if(this.tbs.jzs==''){
                 MessageBox('提示', '请输入家族史');
            }else{
                this.yshb()
                this.pj.cxjmjkdabh=this.per.dabh
                this.pj.mqglysxm=this.zys.zrysxm
                Object.assign(this.lists, this.per);
                Object.assign(this.lists, this.tbs);
                Object.assign(this.lists, this.zrys);
                Object.assign(this.lists, this.pj);
                http.post('/medical/tb-tnb-hzglk/insert',this.lists,res=>{
                    console.log(this.lists)
                    console.log(res)
                    this.ysfg()
                    MessageBox('提示', '新增成功');
            }) 

            }
             
        },
       callback(){
           this.$router.push({ path:'/Aperson/'+this.grdaid })
       } 
    },
    created(){
         // option字典数据
        let dicIdArr = [
        {id:104,name:'ghgl'},
        {id:105,name:'tjz'},
        {id:106,name:'zl'},
        {id:191,name:"ysxg"},
        {id:189,name:"xypl"},
        {id:190,name:"yjpl"},
        {id:188,name:"dlpl"}

        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.tnb.'+dic.name+'='+JSON.stringify(resList);
                eval(code);
            });
        });
        // 信息采集人
        http.get('/tb/tbChssInfo/deptUsers',{},res=>{
            this.zrys=res.data
            console.log('zrys',this.zrys)
        })
         // 责任医生请求
        http.get("/medical/tb-tnb-hzglk/jsToAdd?grdaid="+this.grdaid,{},res=>{ 
            this.zys=res.data
            console.log("zys:" ,this.zys)
            });
        // 个人基本信息
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.per=res.data;
            console.log("per:",this.per);
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
    input{
        outline: none; 
        border: none;  
        margin-left:20px;
        font-size:16px;
        margin-right:0px;
        width:160px
    }
    .container{
        margin:50px 5px 0px;  
    }
    input[type=date]{
     background-color:#fff;
 }
 select{
    color: #aaa;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
}
</style>
