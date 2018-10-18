<template>
  <div>
    <reg-header :logo="logoMsg"></reg-header>
    <div class="content">
      <div class="container">
        <div class="main">
          <div class="login-title float-clear">
            <h5 class="float-l">会员登录</h5>
            <span class="float-r">还没有会员帐号？<a href="register.html">免费注册</a></span>
          </div>
          <div class="form-box">
            <span class="error-msg">{{errorMsg}}</span>
            <input type="text" v-model="formData.username" id="username" placeholder="用户名/手机号">
            <input type="password" v-model="formData.password" id="password" placeholder="密码">
            <input type="text" v-model="formData.checkNum" id="checkNum" placeholder="验证码">
            <a href="javascript:;" class="check-img"></a>
            <a href="#" class="forget">忘记密码？</a>
            <button class="submit" @click="login()">{{button}}</button>
          </div>
        </div>
      </div>
    </div>
    <reg-footer></reg-footer>
  </div>
</template>

<script>
  import loginHeader from '../../components/login-header.vue'
  import loginFooter from '../../components/login-footer.vue'
  import $http from '../../axios/http.js'

  export default {
    name: "login",
    data() {
      return {
        logoMsg: '欢迎登录',
        formData: {
          username: '',
          password: '',
          checkNum: ''
        },
        errorMsg: '',
        button: '登 录'
      }
    },
    methods: {

      // 点击登录按钮
      login() {
        if(!this.formData.username) {
          this.errorMsg = '用户名或手机号不能为空';
        }else if(!this.formData.password){
          this.errorMsg = '密码不能为空';
        }else if(!this.formData.checkNum){
          this.errorMsg = '请填写验证码';
        }else{
          $http({
            method: 'POST',
            url: '/authentication/company'
          },{
            "username": 'hrrm'
          }).then(res => {
            console.log(res);
          },err => {
            console.log(err);
          })
        }
      }
    },
    components: {
      'reg-header': loginHeader,
      'reg-footer': loginFooter
    }
  };
</script>

<style scoped lang="less">
.content {
  width: 100%;
  min-width: 1200px;
  height: 540px;
  background: url("../../assets/images/bg_dl.png") no-repeat;
  background-position: left bottom;
  .container{
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .main {
      width: 398px;
      height: 392px;
      position: absolute;
      right: 110px;
      top: 40px;
      border: 1px solid #e6e6e6;
      border-top: 3px solid #df0716;
      border-radius: 3px;
      padding: 20px 30px;
      background-color: #fff;
      .login-title{
        width: 100%;
        height: 42px;
        line-height: 42px;
        h5{
          color: #c81623;
          font-weight: normal;
          font-size: 16px
        }
        span{
          font-size: 14px;
          color: #999;
          a{
            color: #0088cc;
          }
        }
      }
      .form-box{
        width: 328px;
        margin: 0 auto;
        padding-top: 8px;
        font-size: 0;
        .error-msg{
          display: block;
          height: 17px;
          font-size: 12px;
          color: #f00;
        }
        input {
          width: 100%;
          height: 40px;
          margin-bottom: 22px;
          padding: 7px 11px 7px 45px;
          font-size: 14px;
          border: 1px solid #CECECF;
          box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
          color: #333;
        }
        input:focus{
          outline: none;
          border-color: #92AFED;
          box-shadow: 0 0 5px #92AFEC, inset 1px 1px 2px rgba(0, 0, 0, 0.1)
        }
        #username{
          background: url("../../assets/images/css_sprites.png") no-repeat ;
          background-position: 6px 4px;
        }
        #password{
          background: url("../../assets/images/css_sprites.png") no-repeat;
          background-position: 6px -59px;
        }
        #checkNum{
          background: url("../../assets/images/css_sprites.png") no-repeat;
          background-position: 6px -27px;
          width: 213px;
          margin-bottom: 5px;
        }
        .check-img {
          display: inline-block;
          width: 112px;
          height: 40px;
          border: 1px solid #ccc;
          vertical-align: middle;
          position: relative;
          top: -6px;
          left: 3px;
        }
        .forget{
          display: block;
          font-size: 12px;
          color: #0088cc;
          text-align: right;
          margin-bottom: 20px;
        }
        .submit{
          width: 100%;
          height: 50px;
          background-color: #c81623;
          border: none;
          outline: none;
          border-radius: 3px;
          font-size: 18px;
          color: #fff;
        }
      }
    }
  }
}
</style>
