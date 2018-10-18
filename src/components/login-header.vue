<template>
    <div>
      <div class="top">
        <div class="container float-clear">
          <div class="float-l">
            <img src="../assets/images/shouy.png" alt="">
            <a href="#">耐耐网首页</a>
            <span class="welcome">您好，欢迎进入耐耐网</span>
            <a href="login.html" class="btn-login">请登录</a>
            <a href="register.html" class="btn-reg">欢迎注册</a>
          </div>
          <div class="float-r">
            <ul class="float-clear">
              <li><a href="#">在线客服</a></li>
              <li>|</li>
              <li>交易时间 00:00:00--23:30:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="container float-clear">
          <div class="float-l">
            <div class="float-l img-box">
              <img src="../assets/images/logo.png" alt="">
            </div>
            <div class="float-l welcome-box">{{logo}}</div>
          </div>
          <div class="float-r">
            <img src="../assets/images/iphone.png" alt="">
            服务热线 : <span>400-6238-086</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login-header",
      data() {
        return {

        }
      },
      props: ['logo']
    }
</script>

<style scoped lang="less">
@mainWidth: 1200px;
@minSize: 12px;
.container{
  width: @mainWidth;
  height: 100%;
  margin: 0 auto;
}
.top{
  width: 100%;
  min-width: 1200px;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #dedede;
  font-size: @minSize;
  color: #9a9a9a;
  a{
    color: #9a9a9a;
  }
  img{
    position: relative;
    top: 2px;
  }
  a:hover{
    text-decoration: underline;
  }
  .float-r{
    ul li{
      float: left;
      padding: 0 4px;
    }
  }
  .welcome{
    margin-left: 55px;
  }
  .btn-login,
  .btn-reg{
    margin-left: 20px;
  }
}
  .bottom{
    width: 100%;
    min-width: 1200px;
    height: 100px;
    margin-bottom: 6px;
    padding-top: 20px;
    .welcome-box{
      width: 108px;
      height: 100%;
      margin: 7px 0 0 35px;
      padding-left: 35px;
      border-left: 1px solid #e6e6e6;
      font-size: 18px;
      color: #676767;
      line-height: 50px;
    }
    .float-r {
      font-size: @minSize+2;
      padding: 20px 20px 0 0;
      color: #999;
      span {
        color: #fd7410;
      }
    }
  }
</style>
