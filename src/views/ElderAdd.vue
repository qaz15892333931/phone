<template>
    <div>
        <mt-header title="新增老年人档案">
            <router-link to="/elderList" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="form">
             <table>
                <tr>
                    <td>档案编号：</td>
                    <td><input v-model="per.dabh"  readonly></td> 
                </tr>
                <tr>
                    <td>管理机构：</td>
                    <td><input v-model="zys.yljgmc" readonly></td> 
                </tr>
                <tr>
                    <td>责任医生姓名：</td>
                    <td><input v-model="zq.zrysxm" type="text" readonly></td> 
                </tr>
                <tr>
                    <td>健康检查症状：</td>
                    <td>
                        <a-select v-model="list.zzdmjkjc" style="width:100%" mode="tags"  placeholder="--请选择--">
                            <a-select-option v-for="(item,index) of msg.jkjczz" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </td>
                </tr>
                <tr>
                    <td>主要健康问题：</td>
                    <td>
                        <a-select v-model="list.xczyjkwt" style="width:100%" mode="tags"  placeholder="--请选择--">
                            <a-select-option v-for="(item,index) of msg.zyjkwt" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </td>
                </tr>
                <tr>
                    <td>生活赡养方式：</td>
                    <td>
                        <select v-model="list.shsyfsbm" name="" id="">
                            <option v-for="(item,index) of msg.shsyfs" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>生活能力评价：</td>
                    <td>
                        <select v-model="list.shnlpjbm" name="" id="">
                            <option v-for="(item,index) of msg.shnlpj" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>护理照顾情况：</td>
                    <td>
                        <select v-model="list.hlzgbm" name="" id="">
                            <option v-for="(item,index) of msg.hlzgqk" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr> 
                <tr>
                    <td>牙齿残缺情况：</td>
                    <td>
                        <select v-model="list.yccqbm" name="" id="">
                            <option v-for="(item,index) of msg.yccq" :key="index" :value="item.dicValue">{{item.dicName}}</option>                 
                        </select>
                    </td>
                </tr> 
                <tr>
                    <td>视力指数情况：</td>
                    <td>
                        <select v-model="list.slzsqkbm" name="" id="">
                            <option v-for="(item,index) of msg.slzs" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr> 
                <tr>
                    <td>心理状态：</td>
                    <td>
                        <select v-model="list.xlztdm" name="" id="">
                            <option v-for="(item,index) of msg.xlzt" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>常住地址类别：</td>
                    <td>
                        <select v-model="list.czdzlbdm" name="" id="">
                            <option v-for="(item,index) of msg.czdzlb" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>遵医行为：</td>
                    <td>
                        <select v-model="list.zyxw" name="" id="">
                            <option v-for="(item,index) of msg.zyxw" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>服药依从性：</td>
                    <td>
                        <select v-model="list.fyycx" name="" id="">
                            <option v-for="(item,index) of msg.fyycx" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>职业暴露标志：</td>
                    <td>
                        <select v-model="list.zyblbz" name="" id="">
                            <option v-for="(item,index) of msg.zyblbz" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>防护措施标志：</td>
                    <td>
                        <select v-model="list.fhcsbz" name="" id="">
                            <option v-for="(item,index) of msg.fhcsbz" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>吸烟标志：</td>
                    <td>
                        <select v-model="list.xybz" name="" id="">
                            <option v-for="(item,index) of msg.xybz" :key="index" :value="item.dicValue">{{item.dicName}}</option>                         
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td>建档机构：</td>
                    <td><input v-model="zys.yljgmc" type="text" name="" id="" readonly></td>
                </tr>
                 <tr>
                    <td>采集日期：</td>
                    <td><input v-model="list.dcrq" type="date" name="" id=""></td>
                </tr>
                 <tr>
                    <td>家医团队：</td>
                    <td>
                        <select v-model="list.gltdid" :label-in-value="true" @change="xxcjr('')" >
                            <option v-for="(item, index) in tds" :key="index" :value="item.yltddm" :label="item.gltdmc">{{item.tdmc}}
                            </option>                      
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>信息采集人：</td>
                    <td>
                        <select v-model="list.dczgh">
                            <option v-for="(item, index) in xxcj" :key="index" :value="item.userId">{{item.xm}}</option>                      
                        </select>
                    </td>
                </tr>
                <tr>
                   <td>建档医生：</td>
                   <td><input v-model="zys.jkysxm" type="text" readonly></td>
                </tr>
                <tr>
                    <td>建档日期：</td>
                    <td><input v-model="list.qmrq" type="date" ></td>
                </tr>
            </table> 
            <!-- <mt-button size="large" type="primary">保存</mt-button> -->
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
            cardID:this.$route.params.zjhm,
            grdaid:this.$route.params.grdaid,
            list:{},
            msg:{},
            per:{},
            zys:{},
            zq:{},
            zrys:{},
            lists:{},
            tds:{},
            xxcj:{},
            jbs:{
                jbjgdm:"",
               zyysxm:'',
                jkyljgdm:'',
                jbysxm:'',
                jbjgxm:""
            },

        }
    },
    methods:{         
        // 数据整合
         lnhe(){
            if( this.list.zzdmjkjc.length>0){
                this.list.zzdmjkjc =this.list.zzdmjkjc.join(',')
            }else{
                 this.list.zzdmjkjc=undefined
            }
            if(this.list.xczyjkwt.length>0){
                this.list.xczyjkwt =this.list.xczyjkwt.join(',')
            }else{
                 this.list.xczyjkwt=undefined
            }
        },
        // fen
        lnfen(){
            if(this.list.zzdmjkjc.length>0){
                this.list.zzdmjkjc =this.list.zzdmjkjc.split(',')
            }else{
                 this.list.zzdmjkjc=undefined
            }
            if(this.list.xczyjkwt.length>0){
                this.list.xczyjkwt =this.list.xczyjkwt.split(',')
            }else{
                 this.list.xczyjkwt=undefined
            }
        },
        // 提交数据
        sc(){
            this.lnhe()
            this.jbs.jbjgdm=this.zys.yljgdm;
            this.jbs.jbjgxm=this.zys.yljgxm;
            this.jbs.zyysxm=this.zq.zrysxm;
            this.jbs.zyysid=this.zq.zrysgh
            this.jbs.jbysxm=this.zys.jkysxm;
            Object.assign(this.lists, this.list);
            Object.assign(this.lists, this.per);
            Object.assign(this.lists, this.zys);
            Object.assign(this.lists, this.zq);
            Object.assign(this.lists, this.zrys);
             Object.assign(this.lists, this.jbs);
            console.log("提交参数" ,this.lists)
            http.post('/tb/tbLnrZxxx/add',this.lists,res=>{
                this.lnfen()
                 MessageBox('提示', '修改成功');
            })
        },
         //信息采集人
        xxcjr:function(yltddm){
            if(yltddm === ''){
                yltddm = this.list.gltdid;
            }
            console.log('当前团队:',yltddm);
            // 信息采集人list.gltdmc
            http.get("/tb/dept-user/list/?deptId="+yltddm,{},res=>{     
                this.xxcj=res.rows
                console.log("this.xxcj", this.xxcj)
            })
        }
    },
    created(){
        let dicIdArr = [
        {id:99,name:'zyxw'},
        {id:100,name:'fyycx'},
        {id:112,name:'shsyfs'},
        {id:113,name:'shnlpj'},
        {id:114,name:'hlzgqk'},
        {id:115,name:'slzs'},
        {id:116,name:'yccq'},
        {id:117,name:'czdzlb'},
        {id:118,name:'xlzt'},
        {id:119,name:'fhcsbz'},
        {id:120,name:'jkjczz'},
        {id:121,name:'zyjkwt'},
        {id:122,name:'xybz'},
        {id:123,name:'zyblbz'}
        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.msg.'+dic.name+'='+JSON.stringify(resList);
                eval(code);
            });
        });
        // 档案编码
        // 获取列表数据
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.per=res.data;
            console.log("per:",this.per);
        });
         //   管辖机构
        http.get("/medical/tb-tnb-hzglk/jsToAdd?grdaid="+this.grdaid,{},res=>{ 
            this.zys=res.data
            console.log("zys:" ,this.zys)
            // 家医团队
            http.get("/sys/dept/listYljgdm/?yljgdm="+this.zys.yljgdm,{},res=>{
                this.tds=res;
                console.log('家医团队:',this.tds);
                if(res.length > 0){
                    this.xxcjr(this.tds[0].yltddm);
                }else{
                    console.log("没有获取到家医团队列表");
                }
            })
            
        });
             // 责任医生请求
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.zq=res.data;
            console.log("zq:",this.zq);
        });
         // 信息采集人
        http.get('/tb/tbChssInfo/deptUsers',{},res=>{
            this.zrys=res.data
            console.log('zrys',this.zrys)
        })
        // // 
        // http.get("/tb/tbChssInfo/selectPerson/?cardID="+this.cardID,{},res=>{ 
        //     this.jbs=res.data;
        //     console.log("jbs:",this.jbs);
        // });
        
    },
    mounted(){
       http.get("/tb/tbLnrZxxx/selectByGrdaid?grdaid="+this.grdaid,{},res=>{
            this.list=res;
            console.log(res)
            if(this.list.zzdmjkjc!=null&&this.list.zzdmjkjc.length>1){
                this.list.zzdmjkjc=this.list.zzdmjkjc.split(',')
            }
            if(this.list.xczyjkwt!=null&&this.list.xczyjkwt.length>1){
                this.list.xczyjkwt=this.list.xczyjkwt.split(',')
            }
        })
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
.form{
    width:100%;
    padding: 10px 10px 0 10px;background: #fff;
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
    border: 1px solid #ddd;
    background: #fff;
}
</style>