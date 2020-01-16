                        <td>身份证号</td>

<template>
    <div class="personal">
      <!-- 头部 -->
        <mt-header title="个人档案" fixed>
            <router-link to="/Detailed" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 中部导航 -->
        <mt-navbar v-model="selected">
            <!-- <mt-tab-item id="1">
                 <img  src="../assets/ic_contacts.png" alt=""> 
                <span>基本档案</span>
            </mt-tab-item> -->
            <mt-tab-item id="2">
                <!-- <img src="../assets/ic_find.png" alt="">  -->
                <span>个人情况</span>
            </mt-tab-item>
            <mt-tab-item id="3">
                <!-- <img src="../assets/ic_me.png" alt=""> -->
                <span>健康情况</span>
            </mt-tab-item>
            <mt-tab-item id="4">
                <!-- <img src="../assets/ic_weixin.png" alt=""> -->
                <span>环境情况</span>
            </mt-tab-item> 
        </mt-navbar>
        <!-- 分割线 -->
        <!-- <hr style="margin-top:2px;border-top-width:0px"> -->
        <!-- tab-container -->
        <mt-tab-container v-model="selected"> 
        <mt-tab-container-item id="2" >
            <mt-cell>
                <table>
                    <tr>
                        <td style="width:60px">姓名</td>
                        <td><input type="text" style="width:96%" v-model="pers.xm"  required> </td>
                        <td style="width:60px">性别</td>
                        <td><select style="width:90%" v-model='pers.xb' required >
                            <option  v-for="(item, index) of xhs.xb" :key="index"  :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>
                </table>
            </mt-cell>
            <mt-cell  style="border-bottom:0.5px solid #f5f5f5">
                <table>
                     <tr style="height:40px">
                        <td>责任医生</td>
                        <td>
                            <select v-model="pers.zrysgh"  required >
                                <option v-for="(item, index) in zrys" :key="index"  :value="item.userId" >{{item.xm}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr style="height:40px">
                        <td>档案编号</td>
                        <td><input type="text" style="width:96%" v-model="pers.dnbh" name="zjhm"  required></td>
                    </tr>
                    <tr style="height:40px">
                        <td>身份证号</td>
                        <td><input type="text" style="width:96%" v-model="pers.zjhm"  name="zjhm" readonly  required></td>
                    </tr>
                    <tr style="height:40px">
                        <td>出生日期</td>
                        <td>
                            <input type="date"  style="width:96%"  v-model="csrq"  name="csrq">
                        </td>
                    </tr>
                </table>    
            </mt-cell>
            <mt-cell>
                <table> 
                    <tr>
                        <td >联系电话</td>
                        <td><input type="text" style="width:100px" v-model="pers.dhhm"  oninput="value=value.replace(/[^\d]/g,'')"
                        maxlength="11"
                        @blur="test()" 
                        name="dhhm">
                        </td>
                        <td>婚姻状态</td>
                        <td><select  v-model="pers.hyzk">
                            <option  v-for="(item, index) of xhs.hy" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>    
                </table> 
            </mt-cell>
            <mt-cell title="医疗费用支付方式" style="border-bottom:0.5px solid #f5f5f5 ;color:#888">
                <a-select
                    mode="multiple"
                    style="width: 200px"
                    placeholder="请选择"
                    v-model="pers.ylzffs"
                >
                    <a-select-option   v-for="(item, index) in xhs.ylzffs " :key="index" :value="item.dicValue">
                        {{item.dicName}}
                    </a-select-option>         
                </a-select>
            </mt-cell>
            <mt-cell>
                <table>
                    <tr>
                        <td style="padding-right:18px">工作单位</td>
                        <td><input style="width:220px" type="text" v-model="pers.gzdwmc" autocomplete='organization'></td>
                    </tr>
                </table>
            </mt-cell>
            <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                <table>
                    <tr>
                        <td style="width:40%">联系人姓名</td>
                        <td style="width:20%"><input style="width:105px" type="text" v-model="pers.lxrxm" name="lxrxm" autocomplete='name'></td>
                        <td style="width:40%">联系人号码</td> 
                        <td style="width:10%"><input type="text"  v-model="pers.lxrdh" oninput="value=value.replace(/[^\d]/g,'')"
                        maxlength="11"
                        @blur="testlxr()" name="lxrdh"></td>
                    </tr>
                </table>
            </mt-cell>

             <mt-cell>
                <table> 
                    <tr>
                        <td style="width:26%">常住类型</td>
                        <td><select  v-model="pers.czlx">
                            <option  v-for="(item, index) in xhs.czlx" :key="index" :value="item.dicValue">{{item.dicName}}</option>   
                        </select></td>
                        <td style="width:100px">民族</td>
                        <td><select  v-model="pers.mzmc">
                            <option  v-for="(item, index) in xhs.mz" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>    
                </table> 
            </mt-cell>
            <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                <table>
                    <tr>
                        <td >职业</td>
                        <td ><select style="width:260px" v-model='pers.zy' >
                            <option  v-for="(item, index) in xhs.zy" :key="index" :value="item.dicValue">{{item.dicName}} </option>
                        </select></td>
                    </tr>
                </table>
            </mt-cell>
            <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                <table>
                    <tr>
                        <td >文化程度</td>
                        <td ><select style="width:220px"  v-model='pers.whcd'>   
                            <option  v-for="(item, index) in xhs.whcd" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>
                </table>
            </mt-cell>
            <mt-cell >
                <table>
                    <tr>
                        <td>现住址区划</td>
                        <td style="width:460px">
                           <select style="width:70px" v-model="pers.jzdShebm" @change="hq_shi()">
                               <option v-for="(item, index) in dzs" :key="index" :value="item.id">{{item.name}}</option>
                           </select>
                           <select style="width:70px" v-model="pers.jzdShibm" @change="hq_qu()" >
                               <option v-for="(item, index) in dzshi" :key="index" :value="item.id">{{item.name}}</option>
                           </select>
                           <select style="width:70px" v-model="pers.jzdXngbm">
                               <option v-for="(item, index) in dzqu" :key="index" :value="item.id">{{item.name}}</option>
                           </select>
                        </td>   
                    </tr>
                </table>
            </mt-cell>
            <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                <table>
                    <tr>
                        <td>现住址门牌</td>
                        <td><input style="width:200px" type="text"  v-model="pers.mph"></td>
                    </tr>
                </table>
            </mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
                <mt-cell>
                    <form class="hl">
                <mt-cell style="border-bottom:0.5px solid #f5f5f5">
                    <table> 
                        <tr>
                            <td style="width:26%">血型</td>
                            <td><select v-model="pers.xx">
                                <option  v-for="(item, index) in  xhs.xx" :key="index" :value="item.dicValue" >{{item.dicName}}</option>
                            </select></td>  
                            <td style="width:150px">RH阴型</td>
                            <td><select  v-model="pers.rh">
                                <option  v-for="(item, index) in  xhs.rh" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                            </select></td>
                        </tr>    
                    </table> 
                    </mt-cell>
                <mt-cell title="药物过敏史" style="border-bottom:0.5px solid #f5f5f5">
                <a-select
                    mode="multiple"
                    style="width: 200px"
                    placeholder="请选择"
                    v-model="pers.ywgmymc"
                    @change="handleChangeyw"
                >
                    <a-select-option   v-for="(item, index) in xhs.gm "  :key="index" :value="item.dicValue">
                        {{item.dicName}}
                        </a-select-option>         
                </a-select>
            </mt-cell>
            <div style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showqt">
                <span style="padding-right:30px;">其他药物过敏史</span>
                <input type="text"  v-model="pers.qtgmymc" style='width:200px'>   
            </div>    
            <mt-cell title="暴露史" style="border-bottom:0.5px solid #f5f5f5">
                <a-select
                    mode="multiple"
                    style="width: 200px"
                    v-model="pers.hjwxysbbllbdm"
                    placeholder="请选择"
                >
                    <a-select-option    v-for="(item, index) in xhs.bls" :key="index" :value="item.dicValue"> {{item.dicName}}</a-select-option>
                </a-select>
            </mt-cell> 

            <!-- 既往史 -->
            <table>
                <tr>
                    <td rowspan="4" style="width:1% ;border-right:0.5px solid #f5f5f5" >既往史</td>
                    <td>
                         <!--  -->
                        <mt-cell title="疾病" style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="pers.jbmc"
                                placeholder="请选择"
                            >
                                <a-select-option    v-for="(item, index) in xhs.bls" :key="index" :value="item.dicValue"> {{item.dicName}}</a-select-option>
                            </a-select>
                        </mt-cell>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mt-cell title="手术" style="border-bottom:1px solid #f5f5f5">
                            <select  @change="ss($event)" style="width:200px ;padding-right:20px;margin:10px">
                                <option value="无">无</option>
                                <option value="有">有</option>
                            </select>
                        </mt-cell> 
                        <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="willshow">
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p> 
                        </div>     
                    </td>
                </tr>

                <tr>
                    <td>
                        <mt-cell title="外伤" style="border-bottom:1px solid #f5f5f5" >
                            <select @change="ws($event)"  style="width:200px;padding-right:20px;margin:10px">
                            <!-- <option >请选择外伤</option> -->
                            <option >无</option>
                            <option >有</option>
                            </select>  
                        </mt-cell>
                        <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="show">
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mt-cell title="输血"  >
                            <select @change="sx($event)"   style="width:200px;padding-right:20px;margin:10px">
                            <!-- <option >请选择输血</option> -->
                            <option>无</option>
                            <option>有</option>
                            </select>  
                        </mt-cell>
                        <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showa">
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p>
                            <p>名称<input type="text">时间<input type="date" style="width:150px"></p> 
                        </div>
                    </td>
                </tr>
            </table>
            <hr>
            <!-- 家族史 -->
            <table>
                <tr>
                    <td rowspan="8" style="width:1% ;border-right:0.5px solid #f5f5f5" >家族史</td>
                    <td>
                        <mt-cell title="父亲家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="pers.father"
                                placeholder="请选择父亲家族史"
                                @change="handleChangefq"
                            >
                                <a-select-option v-for="(item, index) in xhs.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                            </a-select>
                        </mt-cell>
                    </td>
                </tr>
                <tr>
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showfq">
                        <span>父亲其他家族史</span>
                        <input type="text"  v-model="pers.fatherOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                <tr>
                    <td>
                        <mt-cell title="母亲家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                 v-model="pers.mother"
                                placeholder="请选择母亲家族史"
                                 @change="handleChangemq"
                            
                            >
                                <a-select-option v-for="(item, index) in xhs.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                            
                            </a-select>
                        </mt-cell>
                    </td>
                </tr>
                <tr>
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showmq">
                        <span>母亲其他家族史</span>
                        <input type="text"  v-model="pers.motherOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                <tr>
                    <td>
                        <mt-cell title="兄弟姐妹家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="pers.brothersisters"
                                placeholder="请选择兄弟姐妹家族史"
                                 @change="handleChangexd" 
                                
                            >
                                <a-select-option v-for="(item, index) in xhs.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option> 
                            </a-select>
                        </mt-cell>
                        
                    </td>
                </tr>
                <tr>
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showxd">
                        <span>兄弟姐妹其他家族史</span>
                        <input type="text"  v-model="pers.brothersistersOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                <tr>
                    <td>
                        <mt-cell title="子女家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="pers.children"
                                placeholder="请选择子女家族史"
                                 @change="handleChangezn"
                            >
                                <a-select-option v-for="(item, index) in xhs.jzs" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                            </a-select>
                        </mt-cell>
                    </td>
                </tr>
                 <tr>
                    <div class="ssxq" style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showzn">
                        <span>子女其他家族史</span>
                        <input type="text"  v-model="pers.childrenOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>
                        <mt-cell title="遗传病史" style="border-bottom:0.5px solid #f5f5f5 ;width:360px">
                            <select @change="getCouponSelected"  style="width:100px ;padding-right:20px;margin:10px" v-model="pers.grycxjbsdm"> 
                                <!-- <option >请选择遗传病史</option> -->
                                <option  v-for="(item, index) in xhs.ycbs" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                            </select>
                        </mt-cell>
                        <div class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showb">
                            <span>疾病名称</span> 
                            <input type="text" style="margin-left:80px" v-model="pers.grycxjbs" >    
                        </div>
                    </td>
                </tr>
            </table>

            <mt-cell title="残疾情况"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                placeholder="请选择残疾情况"
                                v-model="pers.cjqk"
                                 @change="handleChangecj"
                            >
                                <a-select-option v-for="(item, index) in xhs.cj" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                            </a-select>
            </mt-cell>
            <div v-if="showcj">
                <span>其他残疾情况</span>
                 <input type="text"  v-model="pers.qtcjqk" style='width:200px ;padding-left:46px'> 
            </div >
            
            <!-- <input  type="submit" value="保存">   -->
            </form>
            </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
                <mt-cell>
                <form action="">
                <div class="life">
                    <table>
                        <tr>
                            <td rowspan="5" style="width:1% ;border-right:0.5px solid #f5f5f5" >生活环境</td>
                            <td>
                                <mt-cell title="厨房排风设施">
                                    
                                    <select v-model="pers.shhjCfpfss" style="padding-right:20px;margin:10px">
                                    <option v-for="(item, index) in xhs.cfpf" :key="index" :value="item.dicValue">
                                        {{item.dicName}}
                                    </option>
                                    </select>  
                                </mt-cell> 
                            </td>  
                        </tr>
                        <tr>
                            <td>
                                <mt-cell title="燃料类型" >
                                    <select v-model="pers.shhjRllx" style="padding-right:20px;margin:10px">
                                    <option v-for="(item, index) in xhs.rllx" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                                    </select>  
                                </mt-cell>
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                <mt-cell title="饮水"  >
                                    <select v-model="pers.shhjYs" style="width:100px; padding-right:20px;margin:10px">
                                    <option v-for="(item, index) in xhs.ys" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                                    </select>  
                                </mt-cell>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mt-cell title="厕所" >
                                    <select v-model="pers.shhjCs" style="width:90% ;padding-right:20px;margin:10px">
                                    <option v-for="(item, index) in xhs.cs" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                                    </select>  
                                </mt-cell>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mt-cell title="禽畜栏" >
                                    <select v-model="pers.shhjQcl" style="width:90% ;padding-right:20px;margin:10px">
                                    <option v-for="(item, index) in xhs.qcl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                                    </select>  
                                </mt-cell>
                            </td>
                        </tr>
                    </table>    
                </div>	
                <!-- <hr>
                <mt-cell>
                        <table>
                            <tr>
                                <td>身高(CM):</td>
                                <td><input type="text" style="width:90%"></td>
                                <td>体重:</td>
                                <td><input type="text" style="width:90%"></td>
                            </tr>
                        </table>
                </mt-cell>
                <hr>
                <mt-cell>
                        <table>
                            <tr>
                                <td>心率(次/分):</td>
                                <td><input type="text" style="width:90%"></td>
                                <td>血压(mmHG):</td>
                                <td><input type="text" style="width:90%"></td>
                            </tr>
                        </table>
                </mt-cell>
                <hr> -->
            </form>  
                    </mt-cell>
                    <button class="bc"  @click.prevent="ntj()">保存</button> 
                </mt-tab-container-item>
        </mt-tab-container>
       
    </div>
</template>

<script >
import http from '../lib/js/httpUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            zjhm:this.$route.params.zjhm,
            selected:"2",
            value:undefined,
            showqt:false,
            showfq:false,
            showmq:false,
            showxd:false,
            showzn:false,
            showcj:false,
            // v-model收集数据
        pers:{
            xm:'',
            xb:'',
            zjhm:this.$route.params.zjhm,
            dnbh:'',
            csrq:'',
            dhhm:'',
            hyzk:'',
            ylzffs:'',
            gzdwmc:'',
            lxrxm:'',
            lxrdh:'',
            czlx:1,
            mzmc:1,
            zy:'',
            whcd:'',
            zrysgh:'',
            // 2
            xx:1,
            rh:1,
            ywgmymc:'',
            hjwxysbbllbdm:'',
            jbmc:'',
            father:'',
            mother:'',
            brothersisters:'',
            children:'',
            cjqk:'',
            // 3
            shhjCfpfss:1,
            shhjRllx:1,
            shhjYs:1,
            shhjCs:1,
            shhjQcl:1
        },
            xhs:{},
            jws:{},
            hls:{},
            jzs:{},
            ssp:0,
            willshow:false,
            show:false,
            wsp:0,
            sxp:0,
            showa:false,
            ycp:0,
            showb:false,
            dzs1:{},
            dzs2:{}, 
            zrys:{},    
            // 地址
             dzs:{},
            dzshi:{},
            dzqu:{},
            showb:false,
            dlysgh:''
             
        }
    },
    computed:{
        csrq(){
            var YYYY = this.pers.zjhm.substring(6, 10);
            var MM = this.pers.zjhm.substring(10, 12);
            var DD = this.pers.zjhm.substring(12, 14);
            var birthday= YYYY + '-' + MM + '-' + DD;
            this.pers.csrq=birthday
            return  birthday
        },
    },
    created(){
        // 地址
        // 省
        http.get("/districts/areaList"+'?pid=1',{},res=>{ 
            this.dzs=res.data
           this.pers.jzdShebm=res.data[22].id
            console.log("dzs:" ,this.dzs)
             //获取市
            http.get("/districts/areaList?pid="+this.pers.jzdShebm,{},res=>{ 
                this.dzshi=res.data
                // console.log('市',this.dzshi)
                this.pers.jzdShibm = res.data[0].id;
                    // 区
                http.get("/districts/areaList?pid="+this.pers.jzdShibm,{},res=>{ 
                    this.dzqu=res.data
                    // console.log('区',this.dzqu)
                    this.pers.jzdXngbm = res.data[6].id;
                });
            });
        });
       
        
        // option字典数据
        let dicIdArr = [
            // id=2
        {id:24,name:'hy'},
        {id:36,name:'zy'},
        {id:45,name:'czlx'},
        {id:39,name:'mz'},
        {id:26,name:'whcd'},
        {id:21,name:'xb'},
        {id:38,name:'ylzffs'},
         {id:46,name:'ycbs'},
        // id=3
         {id:25,name:'xx'},
        {id:74,name:'rh'},
        {id:47,name:'gm'},
        {id:34,name:'bls'},
        {id:41,name:'jzs'},
        {id:27,name:'cj'},
        // id=4
        {id:29,name:'cfpf'},
        {id:30,name:'rllx'},
        {id:31,name:'ys'},
        {id:32,name:'cs'},
        {id:33,name:'qcl'},


        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.xhs.'+dic.name+'='+JSON.stringify(resList);
                eval(code);
            });
        });
        // 责任医生
        http.get("/tb/tbChssInfo/deptUsers",{},res=>{ 
            this.zrys=res.data
            console.log("zrys:" ,this.zrys)
        });
            // 默认获得当前登陆医生
        http.get('/sys/user/getUserByToken',{},res=>{
            this.dlysgh=res.data.id
            this.pers.zrysgh= this.dlysgh
            console.log('登陆医生', this.dlysgh)
        })
            // 默认空白
        this.pers.ylzffs =undefined;
        this.pers.ywgmymc=undefined;
        this.pers.hjwxysbbllbdm=undefined;
        this.pers.jbmc=undefined;
        this.pers.father=undefined;
        this.pers.mother=undefined;
        this.pers.brothersisters=undefined;
        this.pers.children=undefined;
        this.pers.cjqk=undefined;
    },
    watch: {
    },
    methods:{
        // 手机号码验证
        test() {
            const reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
            if (this.pers.dhhm == '' || this.pers.dhhm.length <= 10 || !reg.test(this.pers.dhhm)) {
                MessageBox('提示', '请输入正确的手机号码');
            } 
        },
         testlxr() {
            const reg =/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/ ;
            if (this.pers.lxrdh == '' || this.pers.lxrdh.length <= 10 || !reg.test(this.pers.lxrdh)) {
                MessageBox('提示', '请输入正确的手机号码');
            } 
        },
        // 提交数据
        ntj(){
            if(this.pers.xm==''){
                MessageBox('提示', '请输入姓名');
            }
            else if(this.pers.zrysgh==''){
                 MessageBox('提示', '请选择责任医生工号');
            }
            else if(this.pers.dnbh==''){
                 MessageBox('提示', '请输入档案编号');
            }
            else if(this.pers.zjhm==''){
                 MessageBox('提示', '请输入身份证号');
            }
            else if(this.pers.dhhm==''){
                 MessageBox('提示', '请输入电话号码');
            }
            else if(this.pers.lxrxm==''){
                 MessageBox('提示', '请输入联系人姓名');
            }
            else if(this.pers.lxrdh==''){
                 MessageBox('提示', '请输入联系人电话');
            }
            else if(this.pers.xx==''){
                 MessageBox('提示', '请输入血型');
            }
            else if(this.pers.rh==''){
                 MessageBox('提示', '请输入RH');
            }else{
                console.log('提交参数',this.pers)
                http.post('/tb/tbChssInfo/addChassInfo',this.pers,res=>{
                 MessageBox('提示', '添加成功');
                })
            }
            
            
        },
      onChange(value){
        //   console.log(value)
          this.value=value
      },
      onChange2(value){
        //   console.log(value)
          this.value=value
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
            if(this.ycp==="有"){
                this.showb=true
            }else{
                this.showb=false
            }
        },
         // 过敏史其他
        handleChangeyw(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showqt=true   
            }else{
                this.showqt=false
            }
            }
        },
        // 父亲
        handleChangefq(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showfq=true   
            }else{
                this.showfq=false
            }
            }
        },
        handleChangezn(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showzn=true   
            }else{
                this.shozn=false
            }
            }
        },
        handleChangemq(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showmq=true   
            }else{
                this.showmq=false
            }
            }
        },
        handleChangexd(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showxd=true   
            }else{
                this.showxd=false
            }
            }
        },
        handleChangecj(value){
            console.log('复选框选中的值', value)
            for(var i=0;i<value.length;i++){
                if(value.indexOf("1001")!=-1){
                this.showcj=true   
            }else{
                this.showcj=false
            }
            }
        },
        getCouponSelected(){
            console.log(this.pers.grycxjbsdm ,typeof(this.pers.grycxjbsdm))
            if(this.pers.grycxjbsdm===1||this.pers.grycxjbsdm==='1'){
                this.showb=true
            }else{
                this.showb=false
            }
        },
     
            
    },
    
}        

</script>
<style scoped>
.personal{
       padding-top:40px;  
       padding-bottom:50px;  
     overflow-x:hidden;  
   }
.body{
    margin:0px;  
}
input[type=date]{
     background-color:#fff;
 }
/* 表格 */

 /*每个单元格宽度  */
 table tr td{
    box-sizing: border-box; 
    width:200px;   
    padding-left:2px; 
    margin:0px;
    /* padding:0px; */
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
 div.mint-cell-wrapper{
     height:28px;
 }
 /* button{
     width:100%;
     height: 30px;
     box-sizing: border-box;
     background-color:#26a2ff;
 }  */
 input[type="submit"]{
     margin-top:10px;
     width: 100%;
     height: 40px;
     background-color: #26a2ff;
     border-radius: 40px;
     color:#fff
 }
 .dl,.dlsj,.dlfs,.ry,.yj{
     margin-bottom: 5px;
     padding-left:10px;
 }
 input.method{
    width: 120px;
}
.bc{
        width:70%;
        height: 40px;
        color:#fff;
        background-color: #26a2ff; 
        border-radius: 25px ;
        border:none;
        outline:none;
        display: block;
        /* margin:0 auto; */
        position: fixed;
        bottom:20px;
        left:15%
    }
</style>
