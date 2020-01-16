<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style>
body{
  margin: 0px;
  background: #f5f5f5;
}
div.mint-cell-wrapper{
  padding: 0px;
}
/* .mint-cell{
  height:27px
} */
.mint-cell-value{
  padding-right:15px;
  /* margin:10px; */
}
.mint-cell-value>input{
  width:150px;
  font-size: 16px
}

.mint-cell-text{
    padding-left:4px;
    border-bottom:0.5px solid #f5f5f5
}
.mint-field .mint-cell-title{
  padding-left: 10px;
  width: 50px !important;
}
.log-nav .mint-tab-item-label {
    font-size: 14px;
    font-weight: bold;
}
h1.mint-header-title{
    color: #fff; 
    margin: 0;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: #fff
}
</style>
