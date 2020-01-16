<template>
    <div>
        <mt-header title="签约">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="历史签约时间"   style="border-bottom:0.5px solid #f5f5f5">
            <select style="width:200px ;padding-right:20px;margin:10px">
                <option value=""></option>
            </select>
        </mt-cell>
        <mt-cell title="签约时间"   >
            <input type="date"> 
        </mt-cell>
        <mt-cell title="到期时间" >
            <input type="date"> 
        </mt-cell>
        <mt-cell title="签约状态" >
            <input type="text"> 
        </mt-cell>
        <mt-cell title="是否解约" >
            <input type="date"> 
        </mt-cell>
        <mt-cell title="解约时间" >
            <input type="date"> 
        </mt-cell>
        <mt-cell title="解约原因">
            <input type="date"> 
        </mt-cell>
        <mt-cell title="签约团队">
            <input type="text"> 
        </mt-cell>
        <mt-cell title="签约机构">
            <input type="text"> 
        </mt-cell>
        <mt-cell title="签约医生">
            <input type="text"> 
        </mt-cell>
        <mt-cell title="联系方式">
            <input type="text"> 
        </mt-cell>
        <mt-cell title="甲方确认" >
            <input type="text"> 
        </mt-cell>
        <mt-cell title="乙方确认">
            <input type="text"> 
        </mt-cell>
        
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            grdaid:this.$route.params.grdaid,
        }
    },
    methods:{
        qy(){
            http.get('',)
        }
    },
    created(){

    },
    
}
</script>
<style scoped>
input{
        outline: none; 
        border: none;  
        margin-left:20px;
        font-size:12px;
        margin-right:0px;
        width:200px
    }
</style>