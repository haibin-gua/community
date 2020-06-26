<template>
<div>
  <div class="login-box" v-if="show">
    <form>
      <div class="admin">账号：<input type="text" placeholder="请输入账号"></div>
      <div class="password">密码：<input type="text" placeholder="请输入密码"></div>
      <div class="btn-box">
        <el-button type="success" plain class="left">登陆</el-button>
        <el-button type="info" class="right" @click="register">注册</el-button>
      </div>
    </form>
  </div>
  <div class="register-box" v-if="conceal">
    <form>
      <div class="admin">账号：<input type="text" placeholder="请输入账号"></div>
      <div class="password">密码：<input type="text" placeholder="请输入密码"></div>
      <div class="btn-box">
        <el-button type="success" plain class="left" @click="registerclick()">确认注册</el-button>
        <el-button type="info" class="right" @click="back">返回</el-button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name:'LoginBox',
  data(){
    return{
      show:true,
      conceal:false,
      admin:[{
        username:'',
        password:''
      }]
    }
  },
  methods:{
    register(){
      this.show = false;
      this.conceal = true;
    },
    back(){
      this.show = true;
      this.conceal = false;
    }
  }
}
</script>

<style scoped>
/* 登陆*/
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
    border:1px solid #cccccc;
    border-radius: 10px;
    width:200px;
    height:30px;
  }
  .login-box .password{
      margin-top:30px;
  }
  .login-box .password input{
    border:1px solid #cccccc;
    border-radius: 10px;
    width:200px;
    height:30px;
  }
  .login-box .btn-box{
    margin-top:40px;
  }
 .login-box .btn-box .left{
    margin-left:20px;
  }
 .login-box .btn-box .right{
    margin-left:40px;
  }
  /*注册 */
  .register-box{
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
  .register-box form{
    text-align: center;
    margin-top:50px;
  }
  .register-box .admin input{
    border:1px solid #cccccc;
    border-radius: 10px;
    width:200px;
    height:30px;
  }
  .register-box .password{
      margin-top:30px;
  }
  .register-box .password input{
    border:1px solid #cccccc;
    border-radius: 10px;
    width:200px;
    height:30px;
  }
  .register-box .btn-box{
    margin-top:40px;
  }
 .register-box .btn-box .left{
    margin-left:20px;
  }
 .register-box .btn-box .right{
    margin-left:40px;
  }
</style>