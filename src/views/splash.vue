<template>
    <div class='bg'>
       <img class='lg' src="../assets/lg.png" alt="">
       <p>一切都在掌握之中</p>
    </div>
</template>
<script>
export default {
    mounted () {
        setTimeout(()=>{
             this.$router.replace("/login");
        },2000)
    }
    
}
</script>
<style scoped>
.bg{
    width:100%;
    height: 1000px;
 background-color:rgb(133, 170, 240) 
} 
.lg{
    width:200px;
    height:200px;
    margin-left:24%;
    margin-top:60px;
    border-radius: 60px;    
} 
p{
  font-size:24px;
  color:#fff;
  margin-top:30px;
  margin-left:90px;
}
</style>