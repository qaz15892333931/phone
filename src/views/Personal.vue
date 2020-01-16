<template>
    <div class="personal">
      <!-- 头部 -->
        <mt-header title="个人档案">
            <router-link :to="'/Aperson/'+this.grdaid" slot="left">
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
                        <td>姓名</td>
                        <td><input type="text" style="width:90%" v-model="pers.xm" autocomplete='name' required > </td>
                        <td>性别</td>
                        <td><select style="width:96%" v-model='pers.xb' >
                            <option  v-for="(item, index) of xhs.xb" :key="index"  :value="item.dicValue" >{{item.dicName}}</option>
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
                        <td><input type="text" style="width:96%" v-model="pers.dabh" name="zjhm" required></td>
                    </tr>
                    <tr style="height:40px">
                        <td>身份证号</td>
                        <td><input type="text" style="width:96%" v-model="pers.zjhm" name="zjhm" required></td>
                    </tr>
                    <tr style="height:40px">
                        <td>出生日期</td>
                        <td>
                            <input type="date"  style="width:96%" v-model="pers.csrq">
                        </td>
                    </tr>
                </table>    
            </mt-cell>
            <mt-cell>
                <table> 
                    <tr>
                        <td style="width:100px">联系电话</td>
                        <td><input type="text" style="width:100px" v-model="pers.dhhm"   required></td>
                        <td>婚姻状态</td>
                        <td><select  v-model="pers.hyzk" >
                            <option  v-for="(item, index) of xhs.hy" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select></td>
                    </tr>    
                </table> 
            </mt-cell>
             <mt-cell title="医疗费用支付方式" style="border-bottom:0.5px solid #f5f5f5 ;color:#888 ;width:400px">
                 <a-select
                    mode="multiple"
                    style="width: 200px"
                    placeholder="请选择"
                    v-model.lazy="pers.ylzffs"
                    @click(e)="qx()"
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
                        <td style="width:20%"><input style="width:105px"  type="text" v-model="pers.lxrxm" name="lxrxm" required autocomplete='name'></td>
                        <td style="width:40%">联系人号码</td> 
                        <td style="width:10%"><input type="text"  v-model="pers.lxrdh" name="lxrdh" required></td>
                    </tr>
                </table>
            </mt-cell>

             <mt-cell>
                <table> 
                    <tr>
                        <td style="width:26%">常住类型</td>
                        <td><select  v-model="pers.czlx" >
                            <option  v-for="(item, index) in xhs.czlx" :key="index" :value="item.dicValue">{{item.dicName}}</option>   
                        </select></td>
                        <td style="width:100px">民族</td>
                        <td><select  v-model="pers.mzmc" >
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
                        <td >现住址区划</td>
                       <td style="width:460px">
                           <select style="width:70px" v-model="pers.jzdShebm" @change="hq_shi()">
                               <option v-for="(item, index) in dzs" :key="index" :value="item.id">{{item.name}}</option>
                           </select>
                           <select style="width:70px" v-model="pers.jzdShibm" @change="hq_qu()" >
                               <option v-for="(item, index) in dzshi" :key="index" :value="item.id">{{item.name}}</option>
                           </select>
                           <select style="width:70px" v-model="pers.jzdXiabm">
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
                        <td><input style="width:200px" type="text" v-model="pers.jzdMph"></td>
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
                            <td><select v-model="pers.xx" required>
                                <option  v-for="(item, index) in  xhs.xx" :key="index" :value="item.dicValue" >{{item.dicName}}</option>
                            </select></td>  
                            <td style="width:150px">RH阴型</td>
                            <td><select  v-model="pers.rh" required>
                                <option  v-for="(item, index) in  xhs.rh" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                            </select></td>
                        </tr>    
                    </table> 
                    </mt-cell>
                <mt-cell title="药物过敏史" style="border-bottom:0.5px solid #f5f5f5">
                <a-select
                    mode="multiple"
                    style="width: 200px"
                    placeholder="请选择药物过敏史"
                    v-model="pers.ywgmymc"
                     @change="handleChangeyw"
                >
                    <a-select-option   v-for="(item, index) in xhs.gm "  :key="index" :value="item.dicValue">
                        {{item.dicName}}
                        </a-select-option>         
                </a-select>
            </mt-cell> 
            <div class="ssxq" style="border-bottom:1px solid #f5f5f5;height:28px" v-if="showqt">
                <span style="padding-right:30px;">其他药物过敏史</span>
                <input type="text"  v-model="pers.qtgmymc" style='width:200px'>   
            </div> 
            <mt-cell title="暴露史" style="border-bottom:0.5px solid #f5f5f5">
                <a-select
                    mode="multiple"
                    style="width: 200px"
                    v-model=" pers.hjwxysbbllbdm "
                    placeholder="请选择暴露史"
                >
                    <a-select-option    v-for="(item, index) in xhs.bls" :key="index" :value="item.dicValue"> {{item.dicName}}</a-select-option>
                </a-select>
            </mt-cell> 

            <!-- 既往史 -->
            <table>
                <tr>
                    <td rowspan="4" style="width:1% ;border-right:0.5px solid #f5f5f5" >既往史</td>
                    <td>
                        <mt-cell title="疾病" style="border-bottom:1px solid #f5f5f5">
                            <select  @change="jwjb($event)" style="width:200px ;padding-right:20px;margin:10px">
                                <option value="无">无</option>
                                <option value="有">有</option>
                            </select>
                        </mt-cell> 
                         <div  class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showjb">
                                <p v-for="(item, index) in jws"  :key="index">
                                    名称<a-select
                                            mode="multiple"
                                            style="width: 120px"
                                            v-model="item.jbmc"
                                            placeholder="请选择疾病"
                                        >
                                            <a-select-option v-for="(item, index) in xhs.jb" :key="index" :value="item.dicValue">{{item.dicName}}</a-select-option>
                                        </a-select>
                                    时间<input type="date" style="width:140px"   v-model="item['qzrq'+index]">
                                </p> 
                         </div> 
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
                        <div  class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="willshow">
                                <p v-for="(item, index) in shs"  :key="index">
                                    名称<input type="text"  v-model="item['ssmc'+index]">
                                    时间<input type="date" style="width:150px"  v-model="item['ssrq'+index]">
                                </p>
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
                        <div  class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="show">
                                <p v-for="(item, index) in wss"  :key="index">
                                    名称<input type="text"  v-model="item['wsmc'+index]">
                                    时间<input type="date" style="width:150px"  v-model="item['wsrq'+index]">
                                </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mt-cell title="输血"  >
                            <select @change="sx($event)"   style="width:200px;padding-right:20px;margin:10px">
                            <option>无</option>
                            <option>有</option>
                            </select>  
                        </mt-cell>
                        <div  class="ssxq" style="border-bottom:1px solid #f5f5f5" v-if="showa">
                                <p v-for="(item, index) in sxs"  :key="index">
                                    名称<input type="text"  v-model="item['sxyy'+index]">
                                    时间<input type="date" style="width:150px"  v-model="item['sxrq'+index]">
                                </p>
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
                                v-model="jzs.father"
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
                        <input type="text"  v-model="jzs.fatherOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                
                <tr>
                    <td>
                        <mt-cell title="母亲家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                 v-model="jzs.mother"
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
                        <input type="text"  v-model="jzs.motherOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                <tr>
                    <td>
                        <mt-cell title="兄弟姐妹家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="jzs.brothersisters"
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
                        <input type="text"  v-model="jzs.brothersistersOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
                <tr>
                    <td>
                        <mt-cell title="子女家族史"  style="border-bottom:0.5px solid #f5f5f5">
                            <a-select
                                mode="multiple"
                                style="width: 200px"
                                v-model="jzs.children"
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
                        <input type="text"  v-model="jzs.childrenOther" style='margin-left:20px ;width:200px'>   
                    </div> 
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>
                        <mt-cell title="遗传病史" style="border-bottom:0.5px solid #f5f5f5 ;width:360px">
                            <select @change="getCouponSelected" style="width:100px ;padding-right:20px;margin:10px" v-model="pers.grycxjbsdm">
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
                            <td rowspan="5" style="width:0.1%; border-right:0.5px solid #f5f5f5" >生活环境</td>
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
                     <button class="bc"  @click.prevent="tj()">保存</button> 
                </mt-tab-container-item>
        </mt-tab-container>
            <!-- <input  type="submit" value="保存" @click.prevent="tj()"> -->
        <!-- <button style=" margin:10px auto" @click.prevent="tj()">保存</button> -->
    </div>
</template>

<script >
import http from '../lib/js/httpUtil'
import objUtil from '../lib/js/objUtil'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            selected:"2",
            value:undefined,
            grdaid:this.$route.params.grdaid,
            pers:{},
            xhs:{},
            jws:{},
            hls:{},
            jzs:{},
            ssp:0,
            jbs:0,
            showjb:false,
            willshow:false,
            show:false,
            wsp:0,
            sxp:0,
            showa:false,
            ycp:0,
            showb:false,
            showqt:false,
            qts:0,
            showfq:false,
            showmq:false,
            showxd:false,
            showzn:false,
            showcj:false,

            dzs1:{},
            dzs2:{}, 
            zrys:{},
            // 手术
            shs:{},
            // 外伤
            wss:{},
            // 输血
            sxs:{},
            // 地址
            dzs:{},
            dzshi:{},
            dzqu:{},
            // 合并数据
            lists:{},
            pj:{
                // sxsbz:0,
                // sssbz:0,
                // wssbz:0,
                jwjbsbz:0,
                jzqtjbs:0,
                jwjbmc0:null,
                jwjbmc1:null,
                jwjbmc2:null,
                jwjbmc3:null,
                jwjbmc4:null,
                jwjbmc5:null,
                jwjbrecordId0:null,
                jwjbrecordId1:null,
                jwjbrecordId2:null,
                jwjbrecordId3:null,
                jwjbrecordId4:null,
                jwjbrecordId5:null,
                qzrq0:null,
                qzrq1:null,
                qzrq2:null,
                qzrq3:null,
                qzrq4:null,
                qzrq5:null,
            },
            xshs:{
                ssmc0:null,
                ssmc1:null,
                ssmc2:null,
                ssrq0:null,
                ssrq1:null,
                ssrq2:null,
                ssrecordId0:null,
                ssrecordId1:null,
                ssrecordId2:null,
            },
            xwss:{
                wsmc0:null,
                wsmc1:null,
                wsmc2:null,
                wsrecordId0:null,
                wsrecordId1:null,
                wsrecordId2:null,
                wsrq0:null,
                wsrq1:null,
                wsrq2:null
            },
            xsxs:{
                sxyy0:null,
                sxyy1:null,
                sxyy2:null,
                sxrq0:null,
                sxrq1:null,
                sxrq2:null,
                sxrecordId0:null,
                sxrecordId1:null,
                sxrecordId2:null
            }
             
        }
    },
    components: {
    
    },
    created(){       
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
        // id=3
         {id:25,name:'xx'},
        {id:74,name:'rh'},
        {id:47,name:'gm'},
        {id:34,name:'bls'},
        {id:41,name:'jzs'},
        {id:27,name:'cj'},
        {id:46,name:'ycbs'},
        // id=4
        {id:29,name:'cfpf'},
        {id:30,name:'rllx'},
        {id:31,name:'ys'},
        {id:32,name:'cs'},
        {id:33,name:'qcl'},
        {id:129,name:'jb'},
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
 
        // 既往史疾病
        http.get("/tb/chssjwjbs/jwjbsList/"+this.grdaid,{},res=>{ 
            this.jws=res.data
            console.log(this.jws)
             this.cjw();
        });
        // 获取列表数据
        http.get("/tb/tbChssInfo/detailChssInfo/"+this.grdaid,{},res=>{ 
            this.pers=res.data;
            console.log("pers:",this.pers);
            if(this.pers.cjqk!=null && this.pers.cjqk!=''&&this.pers.cjqk!=undefined ){
               if(this.pers.cjqk.indexOf('1001')!=-1){
                   this.showcj=true
               }
            }else{
              this.pers.cjqk=undefined  
            }
            if(this.pers.ywgmymc!=null && this.pers.ywgmymc!=''&&this.pers.ywgmymc!=undefined ){
               if(this.pers.ywgmymc.indexOf('1001')!=-1){
                   this.showqt=true
               }
            }else{
              this.pers.ywgmymc=undefined  
            }
            if( this.pers.grycxjbsdm!=null &&  this.pers.grycxjbsdm!=''&& this.pers.grycxjbsdm!=undefined ){
               if(this.pers.grycxjbsdm.indexOf('1')!=-1){
                   this.showb=true
               }
            }else{
              this.pers.grycxjbsdm=undefined  
            }
           

            // 转换数据格式
            this.zsh() ;
            this.hq_shen();
        });
        // 家族史
        http.get("/tb/chssfamily/family/"+this.grdaid,{},res=>{ 
            this.jzs=res.data;
            console.log("jzs:" ,this.jzs);
            if(this.jzs.father!=null && this.jzs.father!=''&&this.jzs.father!=undefined ){
               if(this.jzs.father.indexOf('1001')!=-1){
                   this.showfq=true
               }
            }else{
              this.jzs.father=undefined  
            }
            if(this.jzs.mother!=null && this.jzs.mother!=''&&this.jzs.mother!=undefined ){
               if(this.jzs.mother.indexOf('1001')!=-1){
                   this.showmq=true
               }
            }else{
              this.jzs.mother=undefined  
            }
            if(this.jzs.children!=null && this.jzs.children!=''&&this.jzs.children!=undefined ){
               if(this.jzs.children.indexOf('1001')!=-1){
                   this.showzn=true
               }
            }else{
              this.jzs.children=undefined  
            }
            if(this.jzs.brothersisters!=null && this.jzs.brothersisters!=''&&this.jzs.brothersisters!=undefined ){
               if(this.jzs.brothersisters.indexOf('1001')!=-1){
                   this.showxd=true
               }
            }else{
              this.jzs.brothersisters=undefined  
            }
            this.cf()
    
        });
         // 责任医生工号
        http.get("/tb/tbChssInfo/deptUsers",{},res=>{ 
            this.zrys=res.data
            // console.log("zrys:" ,this.zrys)
            // this.lists.push(this.zrys)
            console.log('list',this.lists)
            });
    },
    mounted(){
        // 外伤
        http.get('/tb/chssjwwss/jwwss/'+this.grdaid,{},res=>{
            this.wss=res.data
            console.log("wss",this.wss)
        })
        // 手术
        http.get('/tb/chssjwsss/jwsssList/'+this.grdaid,{},res=>{
            this.shs=res.data
             console.log("shs:" ,this.shs)
        });
        // 输血
        http.get('/tb/chssjwsxs/jwsxsList/'+this.grdaid,{},res=>{
            this.sxs=res.data
             console.log("sxs:" ,this.sxs)
        });
    },
    watch:{
    },
    methods:{
        // 复选框取消焦点
        
        // 数据格式转换（分）
        zsh(){
            if (this.pers.ylzffs != '' && this.pers.ylzffs != null && this.pers.ylzffs != undefined){
                    this.pers.ylzffs=this.pers.ylzffs.split(',');
                }else{
                    this.pers.ylzffs =undefined;  
                }

                if(this.pers.ywgmymc=='' || this.pers.ywgmymc==null || this.pers.ywgmymc ==undefined){
                    this.pers.ywgmymc =undefined  
                }else{
                    this.pers.ywgmymc=this.pers.ywgmymc.split(',')
                }
                if(this.pers.qtgmymc=='' || this.pers.qtgmymc==null || this.pers.qtgmymc ==undefined){
                    this.pers.qtgmymc =undefined  
                }else{
                    this.pers.qtgmymc=this.pers.qtgmymc.split(',')
                }
               
                if(this.pers.hjwxysbbllbdm==''  || this.pers.hjwxysbbllbdm==null ||this.pers.hjwxysbbllbdm==undefined){
                    this.pers.hjwxysbbllbdm = undefined  
                }else{
                    this.pers.hjwxysbbllbdm=this.pers.hjwxysbbllbdm.split(',')
                }
                if(this.pers.cjqk==''  || this.pers.cjqk==null ||this.pers.cjqk==undefined){
                    this.pers.cjqk = undefined  
                }else{
                    this.pers.cjqk=this.pers.cjqk.split(',')
                }
        },
        // 数据格式转换 （和）
        hsj(){
            if (this.pers.ylzffs != '' && this.pers.ylzffs != null &&this.pers.ylzffs != undefined){
                    this.pers.ylzffs=this.pers.ylzffs.join(',');
            }else{
                 this.pers.ylzffs =undefined;  
            }
            if(this.pers.ywgmymc=='' || this.pers.ywgmymc==null ||this.pers.ywgmymc==undefined ){
                    this.pers.ywgmymc =undefined  
            }else{
                this.pers.ywgmymc=this.pers.ywgmymc.join(',')
            }
            if(this.pers.qtgmymc=='' || this.pers.qtgmymc==null ||this.pers.qtgmymc==undefined ){
                    this.pers.qtgmymc =undefined  
            }else{
                this.pers.qtgmymc=this.pers.qtgmymc.join(',')
            }
            
            if(this.pers.hjwxysbbllbdm==''  || this.pers.hjwxysbbllbdm==null ||this.pers.hjwxysbbllbdm==undefined){
                this.pers.hjwxysbbllbdm = undefined  
            }else{
                this.pers.hjwxysbbllbdm=this.pers.hjwxysbbllbdm.join(',')
            }
            if(this.pers.cjqk==''  || this.pers.cjqk==null ||this.pers.cjqk==undefined){
                    this.pers.cjqk = undefined  
                }else{
                    this.pers.cjqk=this.pers.cjqk.join(',')
                }
        },
        // 家族史拆分
        cf(){
            if(this.jzs.father != '' && this.jzs.father != null && this.jzs.father != undefined){
                this.jzs.father =this.jzs.father.split(',')
            }else{
                 this.jzs.father=undefined
            }
            
            if(this.jzs.brothersisters != '' && this.jzs.brothersisters != null &&this.jzs.brothersisters != undefined){
                this.jzs.brothersisters =this.jzs.brothersisters.split(',')
            }else{
                this.jzs.brothersisters = undefined  
            }

            if(this.jzs.children != '' && this.jzs.children != null &&this.jzs.children != undefined){
                this.jzs.children =this.jzs.children.split(',')
            }else{
                this.jzs.children = undefined  
            }

            if(this.jzs.mother != '' && this.jzs.mother != null &&this.jzs.mother != undefined){
                this.jzs.mother =this.jzs.mother.split(',')
            }else{
                this.jzs.mother = undefined  
            } 
        },
        //和jzs
        hcf(){
            if(this.jzs.father != '' && this.jzs.father != null && this.jzs.father != undefined){
                this.jzs.father =this.jzs.father.join(',')
            }else{
                 this.jzs.father=undefined
            }
            
            if(this.jzs.brothersisters != '' && this.jzs.brothersisters != null &&this.jzs.brothersisters != undefined){
                this.jzs.brothersisters =this.jzs.brothersisters.join(',')
            }else{
                this.jzs.brothersisters = undefined  
            }

            if(this.jzs.children != '' && this.jzs.children != null &&this.jzs.children != undefined){
                this.jzs.children =this.jzs.children.join(',')
            }else{
                this.jzs.children = undefined  
            }

            if(this.jzs.mother != '' && this.jzs.mother != null &&this.jzs.mother != undefined){
                this.jzs.mother =this.jzs.mother.join(',')
            }else{
                this.jzs.mother = undefined  
            } 
        },
        // jws
        cjw(){
            this.jws.forEach(item=>{
                if(item.jbmc!= '' && item.jbmc != null &&item.jbmc != undefined){
                    item.jbmc =item.jbmc.split(',')
                }else{
                    item.jbmc =undefined  
                }
            })
        },
        // 和jws
        hcjw(){
            this.jws.forEach(item=>{
                if(item.jbmc!= '' && item.jbmc != null &&item.jbmc != undefined){
                    item.jbmc =item.jbmc.join(',')
                }else{
                    item.jbmc = undefined  
                }
            })

        },

        // 省
        hq_shen(){
            http.get("/districts/areaList"+'?pid=1',{},res=>{ 
                this.dzs=res.data;
                // this.pers.jzdShebm = this.dzs[0].id;
                console.log("dzs:" ,this.dzs);
                console.log(objUtil.isNotEmpty(this.pers.jzdShebm),this.pers.jzdShebm,typeof(this.pers.jzdShebm));
                if(this.pers.jzdShebm !== null && this.pers.jzdShebm !== '' && this.pers.jzdShebm !== undefined){
                    this.hq_shi();
                }
            });
        },

        //获取市
        hq_shi(){
            // 市
            if(this.pers.jzdShebm === null){return;}
            http.get("/districts/areaList?pid="+this.pers.jzdShebm,{},res=>{ 
                this.dzshi=res.data
                this.pers.jzdShibm = res.data[0].id;
                // console.log("市:" ,this.dzs);
                this.hq_qu();    
            });
        },
        hq_qu(){
             // 区
             if(this.pers.jzdShibm === null){return;}
            http.get("/districts/areaList?pid="+this.pers.jzdShibm,{},res=>{ 
                this.dzqu=res.data
                    console.log("区:" ,this.dzqu)
                for(var i=0;i<this.dzqu.length;i++){
                    if(this.dzqu[i].jzdXiabm===this.pers.jzdXiabm){
                         this.pers.jzdXiabm = this.dzqu[i].id;
                    }
                }
            });

        },
        // 提交数据
        tj(){
            this.hsj(); 
            this.hcf();
            this.hcjw();
            // 疾病
            for(let i=0;i<this.jws.length;i++){
                eval('this.jws['+i+'].jwjbmc'+i+' = this.jws['+i+'].jbmc');
                // console.log('jws:',this.jws[i]);
                if(objUtil.isNotEmpty(this.jws[i].jbmc)){
                    eval('this.pj.jwjbmc'+i+'=this.jws['+i+'].jwjbmc'+i);
                }
                if(objUtil.isNotEmpty('this.jws['+i+'].jwjbrecordId'+i)){
                    eval('this.pj.jwjbrecordId'+i+'=this.jws['+i+'].jwjbrecordId'+i);
                }
                if(objUtil.isNotEmpty('this.jws['+i+'].qzrq'+i)){
                    eval('this.pj.qzrq'+i+'=this.jws['+i+'].qzrq'+i);
                }
            }
            // 手术
            for(let i=0;i<this.shs.length;i++){
                if(objUtil.isNotEmpty('this.shs['+i+'].ssmc'+i)){
                    eval('this.xshs.ssmc'+i+'=this.shs['+i+'].ssmc'+i);
                }
                if(objUtil.isNotEmpty('this.shs['+i+'].ssrecordId'+i)){
                    eval('this.xshs.ssrecordId'+i+'=this.shs['+i+'].ssrecordId'+i);
                }
                if(objUtil.isNotEmpty('this.shs['+i+'].ssrq'+i)){
                    eval('this.xshs.ssrq'+i+'=this.shs['+i+'].ssrq'+i);
                }
            }
            // 外伤
            for(let i=0;i<this.wss.length;i++){
                if(objUtil.isNotEmpty('this.wss['+i+'].wsmc'+i)){
                    eval('this.xwss.wsmc'+i+'=this.wss['+i+'].wsmc'+i);
                }
                if(objUtil.isNotEmpty('this.wss['+i+'].wsrq'+i)){
                    eval('this.xwss.wsrq'+i+'=this.wss['+i+'].wsrq'+i);
                }
                 if(objUtil.isNotEmpty('this.wss['+i+'].wsrecordId'+i)){
                    eval('this.xwss.wsrecordId'+i+'=this.wss['+i+'].wsrecordId'+i);
                }
            }
            // 输血
            for(let i=0;i<this.sxs.length;i++){
               if(objUtil.isNotEmpty('this.sxs['+i+'].sxyy'+i)){
                    eval('this.xsxs.sxyy'+i+'=this.sxs['+i+'].sxyy'+i);
                } 
                if(objUtil.isNotEmpty('this.sxs['+i+'].sxrq'+i)){
                    eval('this.xsxs.sxrq'+i+'=this.sxs['+i+'].sxrq'+i);
                } 
                if(objUtil.isNotEmpty('this.sxs['+i+'].sxrecordId'+i)){
                    eval('this.xsxs.sxrecordId'+i+'=this.sxs['+i+'].sxrecordId'+i);
                } 

            }

            // 整合数据
            Object.assign(this.lists, this.jzs);
            Object.assign(this.lists, this.zrys);
            Object.assign(this.lists, this.pj);
            Object.assign(this.lists, this.xsxs);
            Object.assign(this.lists, this.xwss);
            Object.assign(this.lists, this.xshs);
            Object.assign(this.lists, this.pers);
            console.log('提交参数:',this.lists);
            http.post('/tb/tbChssInfo/editChassInfo',this.lists,res=>{
                console.log(res)
                this.zsh();
                this.cf();
                this.cjw()  
                MessageBox('提示', '修改成功');
            })  
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

        // 疾病
        jwjb(event){
            this.jbs=event.target.value
            if(this.jbs==="有"){
                this.showjb=true    
            }else{
                this.showjb=false
            }
        },
        // 手术
        ss(event){
            this.ssp=event.target.value
            if(this.ssp==="有"){
                this.willshow=true   
            }else{
                this.willshow=false
            }
        },
         ws(event){
            this.wsp=event.target.value
            if(this.wsp==="有"){
                this.show=true
            }else{
                this.show=false
            }
        },
        sx(event){
            this.sxp=event.target.value
            if(this.sxp==="有"){
                this.showa=true
            }else{
                this.showa=false
            }
        },
        getCouponSelected(){
            console.log(this.pers.grycxjbsdm ,typeof(this.pers.grycxjbsdm))
            if(this.pers.grycxjbsdm===1||this.pers.grycxjbsdm==='1'){
                this.showb=true
            }else{
                this.showb=false
            }
        }      
    },
    
}        

</script>
<style scoped>
.personal{
       /* padding-top:40px;   */
       padding-bottom:50px;  
     overflow-x:hidden;  
   }
.body{
    margin:0px;  
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
 input[type=date]{
     background-color:#fff;
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
        bottom: 20px;
        left:15%
    }
</style>
