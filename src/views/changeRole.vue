<template>
    <div>
        <mt-header title="角色选择">
            <router-link to="/person" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="role" v-for="(item, index) in td" :key="index"  @click="tdxz(item.deptId)">
            <mt-cell :title='item.tdmc' ></mt-cell>
        </div>
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
export default {
    data(){
        return {
            td:{}
        }
    },
    created(){
       // 根据登陆获得该人相对应的团队
        http.get('/sys/user/getUserByToken',{},res=>{
            this.td=res.data.tbDeptList
             console.log("团队",this.td)
        }) 
    },
    methods: {
        tdxz(id){
            http.post('/sys/user/updateByTokenLoginInfo',{loginDeptId:id},res=>{
                console.log("团队选中结果",res)
                    this.$router.push({ path:'/home'})
                    
            })
        }
    }
}
</script>
<style scoped>
.mint-header{
    font-size: 16px;
}
a.mint-cell{
    border-bottom: 1px solid #ddd;
}
.role{
    /* margin-top: 10px; */
    background: #fff;
    padding:0px 10px;
}
</style>