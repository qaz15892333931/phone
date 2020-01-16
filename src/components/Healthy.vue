<template>
    <div>
    <form action="">
        <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                <table> 
                    <tr>
                        <td style="width:26%">血型</td>
                        <td><select v-model="xx">
                            <option  v-for="(item, index) in  hls.xx" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>  
                        <td style="width:150px">RH阴型</td>
                        <td><select v-model="rh">
                            <option  v-for="(item, index) in  hls.rh" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>    
                </table> 
        </mt-cell>
        <mt-cell title="药物过敏史" style="border-bottom:0.5px solid #f5f5f5">
            <a-select
                mode="tags"
                style="width: 200px"
                @change="handleChange"
                placeholder="请选择"
                v-model="ywgmymc"
            >
                <a-select-option   v-for="(item, index) in hls.gm "  :key="index" :value="item.dicValue">
                    {{item.dicName}}
                    </a-select-option>         
            </a-select>
        </mt-cell>    
        <mt-cell title="暴露史" style="border-bottom:0.5px solid #f5f5f5">
            <a-select
                mode="multiple"
                style="width: 200px"
                @change="handleChange"
                placeholder="请选择"
                v-model="hjwxysbbllbdm"
            >
                <a-select-option    v-for="(item, index) in hls.bls" :key="index" :value="item.dicValue"> {{item.dicName}}</a-select-option>
                <!-- <a-select-option value='2' >化学品</a-select-option>
                <a-select-option value='3' >毒物</a-select-option>
                <a-select-option value='4' >射线</a-select-option>          -->
            </a-select>
        </mt-cell> 

        <!-- 既往史 -->
        <table>
            <tr>
                <td rowspan="4" style="width:1% ;border-right:0.5px solid #f5f5f5" >既往史</td>
                <td>
                     <mt-cell title="疾病"  style="border-bottom:0.5px solid #f5f5f5">
                        <select style="width:90% ;padding-right:20px;margin:10px"  >
                            <optgroup >
                                <option >请选择疾病</option>
                                <option>无</option>
                                <option>高血压</option>
                                <option>糖尿病</option>
                                <option>冠心病</option>
                                <option>慢性阻塞性肺疾病</option>
                                <option>恶性肿瘤</option>
                                <option>脑卒中</option>
                                <option>严重精神障碍</option>
                                <option>结核病</option>
                                <option>肝炎</option>
                                <option>先天畸形</option>
                                <option>其他法定传染病</option>
                                <option >职业病</option>
                                <option >其他</option>
                            </optgroup>
                        </select>  
                    </mt-cell> 
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="手术" style="border-bottom:1px solid #f5f5f5">
                        <select  @change="ss($event)" v-model="ssp" style="width:200px ;padding-right:20px;margin:10px">
                            <option value="无">无</option>
                            <option value="有">有</option>
                        </select>
                    </mt-cell> 
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="willshow">
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p> 
                    </div>     
                </td>
            </tr>

            <tr>
                <td>
                    <mt-cell title="外伤" style="border-bottom:1px solid #f5f5f5" >
                        <select @change="ws($event)" v-model="wsp" style="width:200px;padding-right:20px;margin:10px">
                        <!-- <option >请选择外伤</option> -->
                        <option >无</option>
                        <option >有</option>
                        </select>  
                    </mt-cell>
                     <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="show">
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p> 
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="输血"  >
                        <select @change="sx($event)" v-model="sxp"  style="width:200px;padding-right:20px;margin:10px">
                        <!-- <option >请选择输血</option> -->
                        <option>无</option>
                        <option>有</option>
                        </select>  
                    </mt-cell>
                     <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showa">
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p>
                        <p>名称<input type="text">时间<input type="text"></p> 
                    </div>
                </td>
            </tr>
        </table>
        <hr>
        <!-- 家族史 -->
        <table>
            <tr>
                <td rowspan="4" style="width:1% ;border-right:0.5px solid #f5f5f5" >家族史</td>
                <td>
                    <mt-cell title="父亲家族史"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="multiple"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择父亲家族史"
                            v-model="father"
                        >
                            <a-select-option v-for="(item, index) in hls.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="母亲家族史"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="multiple"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择母亲家族史"
                            v-model="mother"
                        >
                            <a-select-option v-for="(item, index) in hls.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                           
                        </a-select>
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="兄弟姐妹家族史"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="multiple"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择兄弟姐妹家族史"
                            v-model="brothersisters"
                        >
                            <a-select-option v-for="(item, index) in hls.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option> 
                        </a-select>
                    </mt-cell>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="子女家族史"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="multiple"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择子女家族史"
                            v-model="children"
                        >
                            <a-select-option v-for="(item, index) in hls.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
                    </mt-cell>
                </td>
            </tr>
        </table>
        <hr>
        <table>
            <tr>
                <td>
                    <mt-cell title="遗传病史" style="border-bottom:0.5px solid #f5f5f5">
                        <select @change="yc($event)" v-model="ycp" style="width:90% ;padding-right:20px;margin:10px">
                            <!-- <option >请选择遗传病史</option> -->
                            <option>无</option>
                            <option>其他</option>
                        </select>
                    </mt-cell>
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showb">
                         <p>疾病名称<input type="text"></p>      
                    </div>
                </td>
            </tr>
        </table>
        <!-- <mt-cell title="遗传病史" style="border-bottom:0.5px solid #f5f5f5">
            <select @change="yc($event)" v-model="ycp" style="width:90% ;padding-right:20px;margin:10px">
                <option >请选择遗传病史</option>
                <option>无</option>
                <option>其他</option>
            </select>
            <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showb">
                <p>疾病名称<input type="text"></p>      
            </div>  
        </mt-cell> -->
         <!-- <mt-cell title="残疾情况" style="border-bottom:0.5px solid #f5f5f5">
            <select style="width:90% ;padding-right:20px;margin:10px">
                <option >请选择</option>
                <option>无残疾</option>
                <option>视力残疾</option>
                <option>听力残疾</option>
                <option>言语残疾</option>
                <option>肢体残疾</option>
                <option>智力残疾</option>
                <option>精神残疾</option>
                <option>其他残疾</option>
            </select>  
        </mt-cell>  -->
        <mt-cell title="残疾情况"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="multiple"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择残疾情况"
                            v-model="cj"
                        >
                            <a-select-option v-for="(item, index) in hls.cj" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                        </a-select>
        </mt-cell>
        
        <!-- <input  type="submit" value="保存">   -->
    </form>
    </div>
</template>

<script>
import http from '../lib/js/httpUtil'
export default {
    props:{
        xx:{default:''},
        rh:{default:''},
        sssbz:{default:''},
        ywgmymc:{default:''},
        ycxjbs:{default:''},
        hjwxysbbllbdm:{default:''},
        cj:{default:''},
        father:{default:''},
        mother:{default:''},
        brothersisters:{default:''},
        children:{default:''}
    },
    data(){
        return{
            value:["无"],
            // visible:false
            ssp:0,
            willshow:false,
            show:false,
            wsp:0,
            sxp:0,
            showa:false,
            ycp:0,
            showb:false,  
            hls:{},
            jzs:{},
            copyYwgmymc:this.ywgmymc
        }
    },
    methods: {
        handleChange(value,data) {
            this.$emit('updata',data)
            console.log(`selected ${value}`)
        },
        ss(evevt){
            this.ssp=event.target.value
            // console.log(this.product)
            if(this.ssp==="有"){
                this.willshow=true
            }else{
                this.willshow=false
            }
        },
         ws(evevt){
            this.wsp=event.target.value
            // console.log(this.product)
            if(this.wsp==="有"){
                this.show=true
            }else{
                this.show=false
            }
        },
         sx(evevt){
            this.sxp=event.target.value
            // console.log(this.product)
            if(this.sxp==="有"){
                this.showa=true
            }else{
                this.showa=false
            }
        },
        yc(evevt){
            this.ycp=event.target.value
            // console.log(this.product)
            if(this.ycp==="其他"){
                this.showb=true
            }else{
                this.showb=false
            }
        },
        
    },
    created(){
        let dicIdArr = [
            {id:25,name:'xx'},
            {id:74,name:'rh'},
            {id:47,name:'gm'},
            {id:34,name:'bls'},
            {id:41,name:'jzs'},
            {id:27,name:'cj'},
        ];
        let codeList = [];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.hls.'+dic.name+'='+JSON.stringify(resList);
                codeList.push(code);
                if(codeList.length === dicIdArr.length){
                    codeList.forEach(code => {
                        eval(code);
                    })
                }
            });
        })
    },
    watch:{
        

    },
    
   
 
}
</script>
<style scoped>
*{
    padding:0px;
}
/*每个单元格宽度  */
 table tr td{
    /* box-sizing: border-box; */
     width: 25%;    
    padding-left:2px; 
    margin:0px;
   
}

 /* 隐藏input */
 input{
     width: 100px;
     font-size: 16px;
     padding-top:0px;
      padding-left:4px; 
    border: none;
    outline: none;  
 }
 select{
     width:96%;
     /* 边框清0 */
     border:0px;
     /* padding-left:30px; */
     /* 清楚默认的箭头样式 */
  appearance:none;   
  -moz-appearance:none;  
  -webkit-appearance:none;  
   /* 右侧添加小箭头 */
   background:url('../assets/right.png')   no-repeat scroll right center transparent; 
    background-size:10px; 
 }
 hr{
     width:100%;
     /* size:1; */
    /* background-color:#f5f5f5; */
     border-top:0; 
 }
 input[type="submit"]{
     margin-top:10px;
     width: 100%;
     height: 40px;
     background-color: #26a2ff;
     border-radius: 40px;
     color:#fff
 }
 .ssxq>P{
     margin-bottom: 5px;
     padding-left:10px; 
 }

</style>

