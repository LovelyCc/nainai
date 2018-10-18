<template>
  <div>
    <reg-header :logo="logoMsg"></reg-header>
    <div class="content">
      <div class="container">
        <div class="toLogin">
          已有账号？<a href="javascript:;">立即登录</a>
        </div>
        <div class="form">
          <div>
            <label for="username">用户名：</label>
            <input type="text" v-model="formData.username" @blur="validateUsername()" id="username">
            <span class="err-msg">{{errMsg.username}}</span>
          </div>
          <div>
            <label for="password">密码：</label>
            <input :type="!pwdIsShow ? 'password' : 'text'" v-model="formData.password" @blur="validatePassword()" id="password">
            <img src="../../assets/images/eye.png" alt="" @click="pwdIsShow = !pwdIsShow">
            <span class="err-msg">{{errMsg.password}}</span>
          </div>
          <div>
            <label for="checkPwd">确认密码：</label>
            <input :type="!checkPwdIsShow ? 'password' : 'text'" v-model="formData.checkPwd" @blur="validateCheckPwd()" id="checkPwd">
            <img src="../../assets/images/eye.png" alt="" @click="checkPwdIsShow = !checkPwdIsShow">
            <span class="err-msg">{{errMsg.checkPwd}}</span>
          </div>
          <div>
            <label for="telPhone">手机号码：</label>
            <input type="text" v-model="formData.telPhone" @blur="validateTel()" id="telPhone">
            <span class="err-msg">{{errMsg.telPhone}}</span>
          </div>
          <div>
            <label for="checkTelNum">校验码：</label>
            <input type="text" v-model="formData.checkTelNum" @blur="validateCheckTel()" id="checkTelNum">
            <a class="btn-getCheckTelNum">获取校验码</a>
            <span class="err-msg">{{errMsg.checkTelNum}}</span>
          </div>
          <div>
            <input type="checkbox" id="checkbox" :checked="checked" @click="checked = !checked">
            我已阅读并同意<a href="javascript:;  ">《耐耐网网站用户协议》</a>
          </div>
          <div>
            <label> </label>
            <button class="submit" :class="{ 'btn-abled': checked}" @click="submit()">注&nbsp;&nbsp;&nbsp;册</button>
          </div>
        </div>
      </div>
    </div>
    <reg-footer></reg-footer>
  </div>
</template>

<script>
  // import '../../assets/css/base.css'
  import loginHeader from '../../components/login-header.vue'
  import loginFooter from '../../components/login-footer.vue'
  import $http from '../../axios/http.js'
    export default {
        name: "register",
      data() {
        return {
          logoMsg: '欢迎注册',
          formData: {
            username: '',
            password: '',
            checkPwd: '',
            telPhone: '',
            checkTelNum: ''
          },
          errMsg: {
            username: '',
            password: '',
            checkPwd: '',
            telPhone: '',
            checkTelNum: ''
          },
          regFlag: {
            username: false,
            password: false,
            checkPwd: false,
            telPhone: false,
            checkTelNum: false
          },
          pwdIsShow: false,
          checkPwdIsShow: false,
          checked: false
        }
      },
      methods: {

        // 用户名验证
        validateUsername() {
          if(!this.formData.username){
            this.errMsg.username = '用户名不能为空';
            return false;
          }else{
            let reg = /^[0-9a-zA-Z]{3,30}$/;
            if(!reg.test(this.formData.username)){
              this.errMsg.username = '请填写3-30位英文字母、数字';
              return false;
            }else{
              this.errMsg.username = '';
              return true;
            }
          }
        },

        // 密码验证
        validatePassword() {
          if(!this.formData.password){
            this.errMsg.password = '密码不能为空';
            return false;
          }else{
            let reg = /^\S{6,16}$/;
            if(!reg.test(this.formData.password)){
              this.errMsg.password = '6-15位非空字符';
              return false;
            }else{
              this.errMsg.password = '';
              return true;
            }
          }
        },

        // 验证确认密码
        validateCheckPwd() {
          if(!this.formData.checkPwd){
            this.errMsg.checkPwd = '确认密码不能为空';
            return false;
          }else{
            if(this.formData.checkPwd === this.formData.password){
              this.errMsg.checkPwd = '';
              return true;
            }else{
              this.errMsg.checkPwd = '两次密码输入不一致'
              return false;
            }
          }
        },

        // 验证手机号
        validateTel() {
          if(!this.formData.telPhone){
            this.errMsg.telPhone = '手机号码不能为空';
            return false;
          }else{
            let reg = /^1[3|4|5|8][0-9]\d{8}$/;
            if(!reg.test(this.formData.telPhone)){
              this.errMsg.telPhone = '手机号码格式不正确';
              return false;
            }else{
              this.errMsg.telPhone = '';
              return true;
            }
          }
        },

        // 验证校验码
        validateCheckTel() {
          if(!this.formData.checkTelNum){
            this.errMsg.checkTelNum = '校验码不能为空';
            return false;
          }else{
            this.errMsg.checkTelNum = '';
            return true;
          }
        },

        // 提交
        submit() {
          if(this.checked) {
            if(this.validateUsername()&&
              this.validatePassword()&&
              this.validateCheckPwd()&&
              this.validateTel()&&
              this.validateCheckTel()){
              // 发送请求
              $http({
                method: 'get',
                url: '/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
              },{wd: 'hello'}).then(res => {
                console.log(res)
              },err => {
                console.log(err)
              })
            }
          }else{

          }
        }
      },
      components: {
        'reg-header': loginHeader,
        'reg-footer': loginFooter
      }
    }
</script>

<style scoped lang="less">
.content{
  width: 100%;
  min-width: 1200px;
  background: url("../../assets/images/bottom_img.png") no-repeat;
  background-size: contain;
  background-position: left bottom;
  .container{
    width: 712px;
    height: 100%;
    margin: 0 auto;
    padding-top: 70px;
    .toLogin{
      font-size: 13px;
      text-align: right;
      padding: 0 0 30px;
      color: rgb(103, 103, 103);
      a{
        color: #33a0d6;
      }
    }
    .form{
      font-size: 14px;
      color: rgb(103,103,103);
      label{
        display: inline-block;
        width: 100px;
        text-align: right;
      }
      .err-msg{
        color: #f00;
      }
      div{
        padding: 6px 0;
        position: relative;
        margin-left: 176px;
        input{
          width: 212px;
          height: 32px;
          border: 1px solid #D8D5D5;
          padding: 5px;
          margin-left: 4px;
          outline: none;
          color: #545454;
        }
        #checkTelNum{
          width: 134px;
        }
        .btn-getCheckTelNum{
          display:  inline-block;
          padding: 0 6px;
          position: relative;
          bottom: 1px;
          height: 32px;
          line-height: 30px;
          border: 1px solid rgb(216, 213, 213);
          color: rgb(102, 102, 102);
          font-size: 12px;
          background: rgb(242, 242, 242);
          cursor: pointer;
        }
        img{
          position: absolute;
          right: 227px;
          top: 15px;
          transform: scale(0.8);
          cursor: pointer;
        }
        #checkbox{
          width: 13px;
          height: 13px;
          margin-left: 70px;
          position: relative;
          top: 2px;
        }
        #checkbox~a{
          color: #0088cc;
        }
        .submit{
          width: 211px;
          height: 41px;
          margin-top: 35px;
          border: none;
          outline: none;
          color: #ccc;
          background-color: #e08181;
          font-size: 16px;
        }
        .btn-abled{
          background-color: #d61515;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
