<template>
    <div>
        <table>
            <tr>
                <td rowspan="5" style="width:1% ;border-right:0.5px solid #f5f5f5" >生活环境</td>
                <td>
                    <mt-cell title="厨房排风设施"  style="border-bottom:0.5px solid #f5f5f5">
                        <select style="width:90% ;padding-right:20px;margin:10px">
                        <option >请选择</option>
                        <option>无</option>
                        <option>抽油机</option>
                        <option>换气扇</option>
                        <option>烟囱</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="燃料类型" style="border-bottom:0.5px solid #f5f5f5">
                        <select style="width:90% ;padding-right:20px;margin:10px">
                        <option >请选择</option>
                        <option>液化气</option>
                        <option>煤</option>
                        <option>天然气</option>
                        <option>沼气</option>
                        <option>柴火</option>
                        <option>其他</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="饮水" style="border-bottom:0.5px solid #f5f5f5" >
                        <select style="width:90% ;padding-right:20px;margin:10px">
                        <option >请选择</option>
                        <option>自来水</option>
                        <option>经净化过滤的水</option>
                        <option>井水</option>
                        <option>河湖水</option>
                        <option>塘水</option>
                        <option>其他</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="厕所" >
                        <select style="width:90% ;padding-right:20px;margin:10px">
                        <option >请选择</option>
                        <option>卫生厕所</option>
                        <option>一格或二格粪池式</option>
                        <option>马桶</option>
                        <option>露天粪坑</option>
                        <option>慢性阻塞性肺疾病</option>
                        <option>简易棚厕</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
            <tr>
                <td>
                    <mt-cell title="禽畜栏" >
                        <select style="width:90% ;padding-right:20px;margin:10px">
                        <option >请选择</option>
                        <option>无</option>
                        <option>单设</option>
                        <option>室内</option>
                        <option>室外</option>
                        </select>  
                    </mt-cell>
                </td>
            </tr>
        </table>
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
                <td>
                    <mt-cell title="锻炼时间" style="border-bottom:0.5px solid #f5f5f5">
                    </mt-cell>
                </td>
            </tr>
        </table>
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
        </table>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
    background-size:20px; 
 }
 hr{
     width:100%;
     /* size:1; */
    /* background-color:#f5f5f5; */
     border-top:0; 
 }
    
</style>