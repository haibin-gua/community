<template>
  <div class="login-box">
    <form>
      <div class="admin">账号：<input type="text"></div>
      <div class="password">密码：<input type="text"></div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .login-box{
    width:300px;
    height:300px;
    background-color: white;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    opacity: 0.6;
  }
  .login-box form{
    text-align: center;
    margin-top:50px;
  }
  .login-box .admin input{
    border:1px solid red;
  }
  .login-box .password{
      margin-top:30px;
  }
  .login-box .password input{
    border:1px solid red;
  }
</style>