<template>
    <div>
        <mt-header title="老年人档案">
            <router-link :to="'/Aperson/'+this.grdaid" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link> 
        </mt-header>
        <div class="form">
             <table>
                <tr>
                    <td>档案编号：</td>
                    <td><input v-model="list.cxjmjkdabh" type="number" name="" value="" id="" readonly></td> 
                </tr>
                <tr>
                    <td>管理机构：</td>
                    <td><input v-model="list.yljgmc" type="text" name="" value="" id="" readonly></td> 
                </tr>
                <tr>
                    <td>责任医生姓名：</td>
                    <td><input v-model="list.zyysxm" type="text" name="" value="" id="" readonly></td> 
                </tr>
                <tr>
                    <td>健康检查症状：</td>
                    <td>
                        <a-select v-model="list.zzdmjkjc" style="width:100%" mode="multiple"  placeholder="--请选择--">
                            <a-select-option v-for="(item,index) of msg.jkjczz" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </td>
                </tr>
                <tr>
                    <td>主要健康问题：</td>
                    <td>
                        <a-select v-model="list.xczyjkwt" style="width:100%" mode="multiple"  placeholder="--请选择--">
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
                    <td><input v-model="list.jbjgmc" type="text" name="" id="" readonly></td>
                </tr>
                <tr>
                    <td>采集日期：</td>
                    <td><input type="date"  v-model="list.dcrq" ></td>
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
                        <select v-model="list.dczxm">
                            <option v-for="(item, index) in xxcj" :key="index">{{item.xm}}</option>                      
                        </select>
                    </td>
                </tr>  
               <tr>
                   <td>建档医生：</td>
                   <td><input v-model="list.jbysxm" type="text" readonly></td>
               </tr>
                <tr>
                    <td>建档日期：</td>
                    <td><input type="date" v-model="list.qmrq" ></td>
                </tr>
            </table> 
        </div>
         <button style=" margin:30px auto"  @click.prevent="lnbc()">保存</button>
    </div>
</template>

<script>
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            grdaid:this.$route.params.grdaid,
            list:[],
            msg:{},
            tds:{},
            xxcj:{},
            // 整合数据
            lists:{}
        }
    },
    methods:{
        // 整合数据
        lnbc(){
            this.lnhe()
            console.log("提交参数",this.list)   
            http.post('/tb/tbLnrZxxx/edit2',this.list,res=>{
                this.lnfen()
                MessageBox('提示', '修改成功');
            })
        },
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
        //信息采集人
        xxcjr: function(yltddm){

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
        // 数据请求
        http.get("/tb/tbLnrZxxx/selectByGrdaid?grdaid="+this.grdaid,{},res=>{
            this.list=res.data;
            console.log('list',res.data)
             // 分割数据 
            this.lnfen()
            // 家医团队
            http.get("/sys/dept/listYljgdm/?yljgdm="+this.list.yljgdm,{},res=>{
                this.tds=res;
                console.log('家医团队:',this.tds);
                if(res.length > 0){
                    this.xxcjr(this.tds[0].yltddm);
                }else{
                    console.log("没有获取到家医团队列表");
                }
            }) 
            
         })
       
    },
    
   

  
}
</script>

<style scoped>
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
 input[type="submit"]{
     margin-top:10px;
     width: 100%;
     height: 40px;
     background-color: #26a2ff;
     border-radius: 40px;
     color:#fff
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