<template>
  <div>
    <div>
      <div class="page-head" style="background-color:#ddd">
        <!-- <input class="head-input" type="search" v-model="message" placeholder="请输入姓名、身份证号、档案编号" > -->
        <div class="head-img">
          <!-- <img src="../assets/message.png" alt="" style="height:30px;width:30px;"> -->
        </div>
      </div>
      <div class="page-nav">
        <mt-navbar>
          <mt-tab-item>
               <router-link to="/QianList">
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">签约</div>
              </router-link> 
          </mt-tab-item>
          <mt-tab-item >
              <router-link to="/Detailed" >
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">档案</div>
              </router-link>
          </mt-tab-item>
          <mt-tab-item>
              <router-link to="/HTNList" >
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">高血压</div>
              </router-link>
          </mt-tab-item>
          <mt-tab-item>
              <router-link to="/DiaList" >
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">糖尿病</div>
              </router-link>  
          </mt-tab-item>
          <mt-tab-item>
               <router-link to="/ElderList">
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">老年人</div>
              </router-link> 
          </mt-tab-item>
          <!-- <mt-tab-item>
            <a href="">
              <img class="top-img" src="../assets/card.png" alt="">
              <div class="top-txt">体检</div>
            </a>                      
          </mt-tab-item> -->
        </mt-navbar>
      </div>
      <div style="height:10px;background:#f5f5f5"></div>
      <div class="nav">
        <a class="nav-tab" v-for="(item,index) in list" :key="index" @click="setActive(index)" :class="[idx == index?'active':'']">{{item}}</a>
      </div>
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active">
          <mt-tab-container-item id="tab1">
            <mt-cell>
              <echartsO :tjCount='grsj.tjCount' :qyCount='grsj.qyCount' :grdaCount='grsj.grdaCount' :jtdaCount='grsj.jtdaCount' :gxyCount='grsj.gxyCount' :tnbCount='grsj.tnbCount' :lnrCount='grsj.lnrCount' 
              :ygAddGrdaCount='grzsj.ygAddGrdaCount' :ygAddGXYCount='grzsj.ygAddGXYCount'  :ygAddTNBCount='grzsj.ygAddTNBCount' :ygAddLNRCount='grzsj.ygAddLNRCount' :tnbsftaskCount='grzsj.tnbsftaskCount' :gxysfTaskCount='grzsj.gxysfTaskCount'  :ygAddQYCount='grzsj.ygAddQYCount'
               style="width:400px;"></echartsO> 
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab2">
            <mt-cell>
              <echartsT :tjCount='tdsj.tjCount' :qyCount='tdsj.qyCount' :grdaCount='tdsj.grdaCount' :jtdaCount='tdsj.jtdaCount' :gxyCount='tdsj.gxyCount' :tnbCount='tdsj.tnbCount' :lnrCount='tdsj.lnrCount' 
              :ygAddGrdaCount='tdzsj.ygAddGrdaCount' :ygAddGXYCount='tdzsj.ygAddGXYCount'  :ygAddTNBCount='tdzsj.ygAddTNBCount' :ygAddLNRCount='tdzsj.ygAddLNRCount' :tnbsftaskCount='tdzsj.tnbsftaskCount' :gxysfTaskCount='tdzsj.gxysfTaskCount'  :ygAddQYCount='tdzsj.ygAddQYCount' 
              style="width:400px;"></echartsT>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab3">
            <mt-cell>
              <echartsS :tjCount='jgsj.tjCount' :qyCount='jgsj.qyCount' :grdaCount='jgsj.grdaCount' :jtdaCount='jgsj.jtdaCount' :gxyCount='jgsj.gxyCount' :tnbCount='jgsj.tnbCount' :lnrCount='jgsj.lnrCount' :ygAddGrdaCount='zrw.ygAddGrdaCount' :ygAddGXYCount='zrw.ygAddGXYCount'  :ygAddTNBCount='zrw.ygAddTNBCount' :ygAddLNRCount='zrw.ygAddLNRCount' :tnbsftaskCount='zrw.tnbsftaskCount' :gxysfTaskCount='zrw.gxysfTaskCount'  :ygAddQYCount='zrw.ygAddQYCount' style="width:400px;"></echartsS>
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <tabbar :selected="selected"></tabbar>
  </div>
</template>

<script>
import http from '../lib/js/httpUtil'
import app from '../lib/js/app'
import echartsO from '../components/echartsO.vue'
import echartsT from '../components/echartsT.vue'
import echartsS from '../components/echartsS.vue'
import detailList from '../components/detailList.vue'
import tabbar from '../components/tabbar.vue'
import inc from '../lib/js/inc'
export default {
  data(){
    return {
      selected:"home",
      message:"",
      active:"tab1",
      list:["我的档案","团队档案","机构档案"],
      idx:"0",
      jgsj:[],
      td:{},
      tdsj:{},
      grsj:{},
      zrw:{},
      tdzsj:{},
      grzsj:{}

    }
  },
  created() {
           // 团队和个人
      http.get('/sys/user/getUserByToken',{},res=>{
        console.log('团队',res)
        this.td=res.data
        console.log(this.td.id)
        // 个人已完成数据
          http.get('/tb/chssStatistic/list/', {yljgdm: this.td.userLoginInfo.loginOrgId,deptmentName: this.td.userLoginInfo.loginDeptId,zrysgh:this.td.id},res=>{
            console.log('个人数据已完成数据',res.data)
            this.grsj=res.data[0]
          })
          // 个人总数据
          http.get('/tb/chssStatistic/list',{yljgdm: this.td.userLoginInfo.loginOrgId,deptmentName: this.td.userLoginInfo.loginDeptId,zrysgh:this.td.id},res=>{
              console.log('个人总数据',res.data)
              this.grzsj=res.data[0]
          })
      })
     
    },
   
  methods:{
    setActive(index){
      //保存点击当前元素下标
      this.idx = index;
      var n = ++index;
      this.active = "tab"+n
      console.log('选中项',this.active)
      if(this.active=='tab2'){
         // 团队和个人
      http.get('/sys/user/getUserByToken',{},res=>{
        console.log('团队',res)
        this.td=res.data
        console.log(this.td.id)
        // 团队已完成数据
          http.get('/tb/chssStatistic/list/', {yljgdm: this.td.userLoginInfo.loginOrgId,deptmentName: this.td.userLoginInfo.loginDeptId},res=>{
            console.log('团队数据已完成数据',res.data)
            this.tdsj=res.data[0]
          })
          // 团队总任务
          http.get('/tb/chssStatistic/list', {yljgdm: this.td.userLoginInfo.loginOrgId,deptmentName: this.td.userLoginInfo.loginDeptId},res=>{
            console.log('团队总数据',res.data)
            this.tdzsj=res.data[0]
          })
          
      })
      }
      if(this.active=='tab3'){
      //机构数据请求已完成数据
      http.get('/tb/chssStatistic/statisticlist',{},res=>{
        this.jgsj=res.data[0]
        console.log('机构数据统计已完成数据',this.jgsj)
      })
      // 机构数据请求总任务
      http.get('/tb/chssStatistic/shoulddata',{},res=>{
        this.zrw=res.data
        console.log('机构数据统计总任务',this.zrw)
      })
      }
    }, 
  },
  components:{
    "echartsO":echartsO,
    "echartsT":echartsT,
    "echartsS":echartsS,
    "detailList":detailList,
    "tabbar":tabbar
  }
}
</script>
<style scoped>
.mint-navbar .mint-tab-item.is-selected{
  border-bottom:0;
}
.mint-navbar .mint-tab-item.is-selected{
padding: 10px;
margin-bottom: 0px;
}
.page-head{
  height: 200px;
  background: url(../assets/sy.png)  no-repeat;
  background-size:420px 200px;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
}
.head-input{
  padding-left:30px;
  margin: 10px;
  width:290px;
  height: 25px;
  font-size: 12px;
  background: url(../assets/search.png) 5px center no-repeat #fff;
  border:0;
  border-radius: 10px;
}
.head-img{
  margin-top: 8px;
  margin-right: 10px;
}
.top-img{
  height:40px;
  width:40px;
}
.page-nav a{
  display: inline-block;
  text-decoration: none;
}
.top-txt{
  color: #000;
}
.nav{
  /* margin-top:4px; */
  padding-left:15px;
  background: #fff;
  /* border-bottom: 2px solid #ddd; */
}
a.nav-tab{
  display: inline-block;
  padding: 5px 10px;
  font-size: 14px;
}
a.active{
  background: #459cfc;
  color: #fff;
  border-radius: 3px;
}

</style>