<template>
  <div>
    <div class="top">
      <div class="container float-clear">
        <div class="float-l">
          <img src="../assets/images/shouy.png" alt="">
          <a href="#">耐耐网首页</a>
          <a class="welcome">您好，{{username}}</a>
          <a href="javascript:;" class="btn-exit">退出</a>
        </div>
        <div class="float-r">
          <ul class="float-clear">
            <li><a href="#">会员中心</a></li>
            <li>|</li>
            <li><a href="#">我的合同</a></li>
            <li>|</li>
            <li><a href="#">消息中心</a></li>
            <li>|</li>
            <li><a href="#">在线客服</a></li>
            <li>|</li>
            <li>交易时间 00:00:00--23:30:00</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-header",
    data() {
      return {

      }
    },
    props: ['username']
  }
</script>

<style scoped lang="less">
  @mainWidth: 1190px;
  @minSize: 12px;
  .container{
    width: @mainWidth;
    height: 100%;
    margin: 0 auto;
  }
  .top{
    width: 100%;
    min-width: 1190px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #dedede;
    font-size: @minSize;
    color: #737373;
    a{
      color: #737373;
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
    .btn-exit{
      margin-left: 20px;
    }
  }
</style>
