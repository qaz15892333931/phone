<template>
    <div>
        <mt-navbar v-model="select" fixed class="log-nav">
            <mt-tab-item id="1">高血压随访</mt-tab-item>
            <mt-tab-item id="2">糖尿病随访</mt-tab-item>
            <!-- <mt-tab-item id="3">待体检</mt-tab-item> -->
        </mt-navbar>
        <mt-tab-container v-model="select">
            <mt-tab-container-item id="1">
                <div v-for="(item, index) in gxyList" :key="index" >
                    <router-link  :to="'/Aperson/'+item.grdaid">
                        <backlog :name='item.xm' :sex='item.xb' :tel='item.dhhm' :card='item.zjhm' :age='item.nl' :address='item.jzdJw'>
                     </backlog>
                    </router-link>
                </div>      
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div  v-for="(item, index) in tnbList" :key="index">
                    <router-link  :to="'/Aperson/'+item.grdaid">
                        <backlog :name='item.xm' :sex='item.xbmc' :tel='item.dhhm' :age='item.nl' :card='item.zjhm'  :address='item.jzdJw'>
                        </backlog>
                    </router-link>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <tabbar :selected="selected"></tabbar>
    </div>
</template>
<script>
import backlog from './backlog.vue'
import tabbar from './tabbar.vue'
import http from '../lib/js/httpUtil'
export default {
    data(){
        return {
            select:"1",
            selected:"backlogList",
            tnbList:{},
            gxyList:{}

        }
        
    },
    components:{
        "backlog":backlog,
        "tabbar":tabbar
    },
    created() {
        http.get('/medical/tb-tnb-hzsfk/treeList',{},res=>{
            this.tnbList=res.rows
            console.log('糖尿病随访列表',res)
        })
        http.get('/tbGxyHzsfk/findList',{},res=>{
            this.gxyList=res.rows
            console.log('高血压随访列表',res)

        })
    },
}
</script>
<style scoped>
.mint-tab-container-item{
    margin-top:50px;
}
</style>
