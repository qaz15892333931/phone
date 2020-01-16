<template>
    <div>
    <form action="">
        <div class="life">
        <table>
            <tr>
                <td rowspan="5" style="width:1% ;border-right:0.5px solid #f5f5f5" >生活环境</td>
                <td>
                     <mt-cell title="厨房排风设施">
                         
                        <select v-model="cfpf" style="padding-right:20px;margin:10px">
                        <option v-for="(item, index) in hjs.cfpf" :key="index" :value="item.dicValue">
                            {{item.dicName}}
                        </option>
                        </select>  
                    </mt-cell> 
                </td>  
            </tr>
            <tr>
                <td>
                    <mt-cell title="燃料类型" >
                        <select v-model="rllx" style="padding-right:20px;margin:10px">
                        <option v-for="(item, index) in hjs.rllx" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>  
                    </mt-cell>
                </td> 
            </tr>
            <tr>
                <td>
                    <mt-cell title="饮水"  >
                        <select v-model="ys" style="width:100px; padding-right:20px;margin:10px">
                        <option v-for="(item, index) in hjs.ys" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="厕所" >
                        <select v-model="cs" style="width:90% ;padding-right:20px;margin:10px">
                        <option v-for="(item, index) in hjs.cs" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="禽畜栏" >
                        <select v-model="qcl" style="width:90% ;padding-right:20px;margin:10px">
                        <option v-for="(item, index) in hjs.qcl" :key="index" :value="item.dicValue">{{item.dicName}}</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
        </table>    
        </div>	
        <hr>
        <table>
            <tr>
                <td rowspan="2" style="width:1% ;border-right:0.5px solid #f5f5f5" >体育锻炼</td>
                    <td>
                        <mt-cell title="锻炼频率"  style="border-bottom:0.5px solid #f5f5f5">
                            <select style="width:90% ;padding-right:20px;margin:10px">
                            <option >请选择</option>
                            <option>每天</option>
                            <option>每周一次以上</option>
                            <option>偶尔</option>
                            <option>不锻炼</option>
                            </select>  
                        </mt-cell> 
                    </td>
            </tr>
            <tr>
                <p class="dl"> 每次锻炼时间：<input type="number">分钟 </p> 
                <p class="dlsj"> 坚持锻炼时间：<input type="number">年</p> 
                <p class="dlfs">锻炼方式：<input class="method" type="text"></p>  
            </tr>
        </table>
        <hr>
        <mt-cell title="饮食习惯"  style="border-bottom:0.5px solid #f5f5f5">
                        <a-select
                            mode="tags"
                            style="width: 200px"
                            @change="handleChange"
                            placeholder="请选择饮食习惯"
                        >
                            <a-select-option value='1' >荤素均衡</a-select-option>
                            <a-select-option value='2' >荤食为主</a-select-option>
                            <a-select-option value='3' >素食为主</a-select-option>
                            <a-select-option value='4' >嗜盐</a-select-option>
                            <a-select-option value='5' >嗜油</a-select-option>
                            <a-select-option value='6' >嗜糖</a-select-option>
                        </a-select>
        </mt-cell>
        <table>
            <tr>
                <td rowspan="2" style="width:1% ;border-right:0.5px solid #f5f5f5" >吸烟情况</td>
                    <td>
                        <mt-cell title="吸烟状况"  style="border-bottom:0.5px solid #f5f5f5">
                            <select style="width:90% ;padding-right:20px;margin:10px">
                            <option >请选择</option>
                            <option>从不吸烟</option>
                            <option>已戒烟</option>
                            <option>吸烟</option>
                            </select>  
                        </mt-cell> 
                    </td>
            </tr>
            <tr>
                
                 <!--  <td rowspan="3">开始吸烟年龄</td> -->
                    <p class="dl"> 开始吸烟年龄：<input type="number">岁 </p> 
                    <p class="dlsj"> 戒烟年龄：<input type="number">岁</p> 
                    <p class="dlfs">日吸烟量：平均<input class="method" type="text">年</p>  
                        
             </tr>
        </table>
        <hr>
        <table>
            <tr>
                <td rowspan="2" style="width:1% ;border-right:0.5px solid #f5f5f5" >饮酒情况</td>
                    <td>
                        <mt-cell title="饮酒频率"  style="border-bottom:0.5px solid #f5f5f5">
                            <select style="width:90% ;padding-right:20px;margin:10px">
                            <option >请选择</option>
                            <option>从不</option>
                            <option>偶尔</option>
                            <option>经常</option>
                            <option>每天</option>
                            </select>  
                        </mt-cell> 
                    </td>
            </tr>
            <tr>
               <p class="ry">日饮酒量<input type="text">两</p>
               <p class="yj">饮酒年龄<input type="text">岁</p>
            </tr>
        </table>
        <hr>
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
        <hr>
       <input  type="submit" value="保存" @click="tj()">
    </form>
    </div>
</template>
<script>
import http from '../lib/js/httpUtil'
// 序列化
$.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
};
export default {
    props:{
        cfpf:{default:''},
        rllx:{default:''},
        ys:{default:''},
        cs:{default:''},
        qcl:{default:''}
    },
    data(){
        return {
            hjs:{},
        }
    },
    methods:{
        handleChange(value) {
        console.log(`selected ${value}`);
        },
        tj(){
            let param = $("#form").serializeObject();
            console.log(param);
            http.post("/tb/tbChssInfo/addChassInfo",param,res => {
                console.log(res)
            });
            this.axios({
                url : "http://192.168.1.200:8080/tb/tbChssInfo/addChassInfo",
                method: 'post',
                dataType : 'json',
                data:this.data,
                xhrFields: {withCredentials: true}, 
                crossDomain: true,
                headers:{ 
                    "Authorization": localStorage.getItem("token"),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res)=>{
                    console.log(res)
                })
            
        },
    },
    created(){
        let dicIdArr = [
            {id:29,name:'cfpf'},
            {id:30,name:'rllx'},
            {id:31,name:'ys'},
            {id:32,name:'cs'},
            {id:33,name:'qcl'},
        ];
        dicIdArr.forEach(dic => {
            http.getDicByGroupId(dic.id,resList => {
                let that = this;
                let code = 'that.hjs.'+dic.name+'='+JSON.stringify(resList);
                eval(code);

            });
        })
    },
    
}
</script>
<style scoped>
.per,.alcohol,.smoke,.eat,.sport,.life{
    background: #fff;
}
table{
    width:100%;
}
/* td,th{
    border: 1px solid #ddd;
} */
table tr td{
    /* box-sizing: border-box; */
     width: 25%;    
    padding-left:2px; 
    margin:0px;
   
}
label{
    display: inline-block;
    width:84px;
    text-align: center;
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
    /* color: #aaa;
    border: none;
    height: 36px;
    width: 200px;
    line-height: 36px;
    font:300 14px Arial;
    outline: none;
    box-sizing: border-box; */
}
.sel{
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 5px;
}
input{
    text-align: center;
    width:30px;
    border: none;
}
input.method{
    width: 120px;
}
hr{
     width:100%;
     /* size:1; */
    /* background-color:#f5f5f5; */
     border-top:0; 
 }
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
</style>