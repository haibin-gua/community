<template>
  <div>
    <div class="login-bj"><img src="../../assets/images/login_bj.png"></div>
    <login-box></login-box>
  </div>
</template>

<script>
import LoginBox from '../Login/commonents/LoginBox'
export default {
  components:{
    LoginBox
  }
}
</script>

<style scoped>
 .login-bj{
   width:1920px;
   height:1080px;
   position:fixed;
   z-index: -9999;
 }
 .login-bj img{
   width:1920px;
   height:1080px;
 }
</style>