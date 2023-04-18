<template>
  <div class="header">
    XX管理系统
  </div>
  <div class="content left">
    <ul>
      <li><router-link to="/users">用户管理</router-link></li>
      <li><router-link to="/rights">权限管理</router-link></li>
      <li><router-link to="/goods">商品管理</router-link></li>
      <li><router-link to="/orders">订单管理</router-link></li>
      <li><router-link to="/settings">系统管理</router-link></li>
    </ul>
  </div>
  <div class="content right">
    <router-view></router-view>
  </div> 
  <div class="footer">
    版权页
  </div>
</template>

<script >

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding:0px;
}
.header,.footer{
  height: 50px;
  background-color: #ccc;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
}
.content{
  height: 400px;
  float:left;
  width: 500px;
}
.left{
  width: 200px;
  background-color: wheat;
}
.left li{
  list-style: none;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: thistle;
  cursor: pointer;/* 鼠标变成手指 */
}
.left li a{
  text-decoration-line: none;
}
.left li:hover{
  background-color: yellowgreen;
}
.footer{
 /*  clear: both;清除浮动 */
 position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #ccc;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
}
</style>
