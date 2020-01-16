<template>
    <div>
        <personHeader></personHeader>
        <div class="person-bottom">
            <!-- <mt-cell title="绑定手机号" to="/phoneNumber" is-link></mt-cell> -->
            <mt-cell title="修改密码" to="/change" is-link></mt-cell>
            <mt-cell title="转换角色" to="/changeRole"  is-link></mt-cell>
            <mt-cell title="退出登录" to="/login"  ></mt-cell>
        </div>
        <tabbar :selected="selected"></tabbar>
    </div>    
</template>
<script>
import personHeader from './personHeader.vue'
import tabbar from './tabbar.vue'
export default {
    data(){
        return{
            selected:"person"
        }
    },
    methods:{
    },
    components:{
        "personHeader":personHeader,
        "tabbar":tabbar
    },
    created(){
       
    }
}
</script>
<style scoped>
.person-bottom{
    /* margin-top: 10px; */
    background: #fff;
    padding:0px 10px;
}
a.mint-cell{
    border-bottom: 1px solid #ddd;
}
</style>


