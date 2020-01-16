<template>
    <div>
        <div style="height:310px;width:340px;" ref="chart"></div>
    </div>
</template>
<script>
const echarts=require('echarts');
export default {
    props:[
        'grdaCount',//个人档案
        'gxyCount',//高血压已完成
        'gxysfCount',//高血压随访已完成
        'tnbCount',//糖尿病已完成
        'tnbsfCount',//糖尿病随访已完成
        'lnrCount',//老年人
        'qyCount',//签约已完成

        'tjCount',//体检
        'jtdaCount',//家庭档案

        'ygAddGrdaCount',//个人总任务
        'ygAddGXYCount',//高血压总任务
        'gxysfTaskCount',//高血压随访总任务
        'ygAddTNBCount',//糖尿病总任务
        'tnbsftaskCount',//糖尿病随访总任务
        'ygAddLNRCount',//老年人总任务
        'ygAddQYCount',//签约总任务

    ],
    data(){
        return {
            shuju:[],
            zsj:[]
        }
    },
    methods:{
        initCharts(){
            let myChart=echarts.init(this.$refs.chart);
            //绘制
            myChart.setOption({
                // title:{text:"柱形图"},
                tooltip:{
                     trigger: 'axis'
                },
                legend: {
                    data: ['总任务', '完成量']
                },
                grid: {
                    left: '1%',
                    right: '3%',
                    containLabel: true
                },
                color:['#ff6666','#66cc99'],
                xAxis:{
                     axisLabel:{'interval':0,rotate:-60},
                    data:["个人档案",'高血压档案',"高血压随访","糖尿病档案","糖尿病随访",'老年人档案','签约档案']
                },
                yAxis:{},
                series:[
                    {
                    name: '总任务',
                    type: 'bar',
                    data:this.zsj
                    },
                    {
                    name: '完成量',
                    type: 'bar',
                    data:this.shuju
                    }
                ]
            })
        }
    },
    mounted(){
    },
    watch: {
        // 已完成
        grdaCount(newVal,oldVal){
            this.sj1=parseInt(newVal)
            this.shuju.push(this.sj1)
            this.initCharts();
        },
         gxyCount(newVal,oldVal){
            this.sj2=parseInt(newVal)
            this.shuju.push(this.sj2)
              this.initCharts();
        },
        gxysfCount(newVal,oldVal){
            this.sj3=parseInt(newVal)
            this,shuju.push(this.sj3)
        },
        tnbCount(newVal,oldVal){
            this.sj4=parseInt(newVal)
            this.shuju.push(this.sj4)
              this.initCharts();
        },
        tnbsfCount(newVal,oldVal){
            this.sj5=parseInt(newVal)
            this.shuju.push(this.sj5)
              this.initCharts();
        },
        lnrCount(newVal,oldVal){
            this.sj6=parseInt(newVal)
            this.shuju.push(this.sj6)
              this.initCharts();
        },
        qyCount(newVal,oldVal){
            this.sj7=parseInt(newVal)
            this.shuju.push(this.sj7)
            console.log('已完成数据',this.shuju)
              this.initCharts();
        },
        //    总任务
        ygAddGrdaCount(newVal,oldVal){
           this.zsj1= parseInt(newVal)
           this.zsj.push(this.zsj1)
           this.initCharts();
        },
        ygAddGXYCount(newVal,oldVal){
           this.zsj2= parseInt(newVal)
           this.zsj.push(this.zsj2)
           this.initCharts();
        },
        gxysfTaskCount(newVal,oldVal){
           this.zsj3= parseInt(newVal)
           this.zsj.push(this.zsj3)
        },
        ygAddTNBCount(newVal,oldVal){
           this.zsj4= parseInt(newVal)
           this.zsj.push(this.zsj4)
           this.initCharts();
        },
        tnbsftaskCount(newVal,oldVal){
           this.zsj5= parseInt(newVal)
           this.zsj.push(this.zsj5)
           this.initCharts();
        },
        ygAddLNRCount(newVal,oldVal){
           this.zsj6= parseInt(newVal)
           this.zsj.push(this.zsj6)
           this.initCharts();
        },
        ygAddQYCount(newVal,oldVal){
           this.zsj7= parseInt(newVal)
           this.zsj.push(this.zsj7)
           console.log("总任务",this.zsj)
           this.initCharts();
        }
        
        
    }
}
</script>
<style scoped>

</style>
