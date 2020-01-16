<template>
    <div>
        <!-- 选项 -->
        <mt-tabbar v-model="message" fixed>
            <mt-tab-item id="home">
                <img src="../assets/histogram.png" slot="icon">
                工作状况
            </mt-tab-item>
            <mt-tab-item id="backlogList">
                <img src="../assets/record.png" slot="icon">
                待办事项
            </mt-tab-item>
            <mt-tab-item id="person">
                <img src="../assets/person.png" slot="icon">
                个人中心
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:this.selected,
        }
    },
    props:{
        selected:String
    },
    watch:{
        message:function(val,oldVal){
            switch(val){
                case 'home':
                    this.$router.push('/Home');
                break;
                case 'backlogList':
                    this.$router.push('/backlogList');
                break;
                case 'person':
                    this.$router.push('/person');
                break;
            }
        }
    }
}
</script>
<style scoped>

</style>

