<template>
  <div>
    <div class="left float-l">
      <div class="user-img">
        <img src="../../assets/images/head_portrait.jpg" alt="">
      </div>
      <p class="username">您好，{{userInfo.username}}</p>
      <p class="lv">{{userInfo.lv == 1 ? '普通会员' : '高级会员'}}</p>
      <p class="userNum">会员账号：{{userInfo.userNum}}</p>
      <p class="message">消息提醒：<a href="#">{{userInfo.msg}}</a></p>
      <div class="left-b">
        <a href="#">基本信息设置</a>
        <a href="#">修改密码</a>
      </div>
    </div>
    <div class="right float-l">
      <h3>账户信息</h3>
      <div class="info float-clear">
        <div class="info-l float-l">
          <p class="info-lv">
            会员等级：
            <img src="../../assets/images/25_25_20160821152932631.png" alt="">
            {{userInfo.lv == 1 ? '普通会员' : '高级会员'}}
            <a href="#">会员升级</a>
          </p>
          <p>
            信誉分值：{{userInfo.xinyu}}分
          </p>
          <p class="renzheng">
                <span v-if="!userInfo.renzheng1">
                  <img src="../../assets/images/icon_wrz(1).png" alt="">
                  交易商未认证
                </span>
            <span v-if="userInfo.renzheng1">
                  <img src="../../assets/images/icon_yrz.png" alt="">
                  交易商已认证
                </span>
            <span v-if="!userInfo.renzheng2">
                  <img src="../../assets/images/icon_wrz(1).png" alt="">
                  仓库未认证
                </span>
            <span v-if="userInfo.renzheng2">
                  <img src="../../assets/images/icon_yrz.png" alt="">
                  仓库已认证
                </span>
            <a href="#" v-if="!userInfo.renzheng1 || !userInfo.renzheng2">去认证</a>
          </p>
        </div>
        <div class="info-r float-l">
          <p>
            结算账号资金总额
            <span class="money">￥{{userInfo.money}}</span>
          </p>
          <div class="btn">
            <a href="#">充值</a>
            <a href="#">提现</a>
          </div>
        </div>
      </div>
      <h3>最新购买合同<a href="#">更多>></a></h3>
      <div class="no-data" v-if="contractBuy.isHas">
        <img src="../../assets/images/no-data.png" alt="">
        <p>暂无购买合同</p>
      </div>
      <p class="contract buyContract" v-if="!contractBuy.isHas">
        <span>{{contractBuy.proName}}</span>
        <span><a href="#">{{contractBuy.No}}</a></span>
        <span>合同总额：￥{{contractBuy.money}}</span>
        <span>{{contractBuy.order == 1 ? '等待卖家支付保证金' : '等待支付全款'}}</span>
      </p>
      <h3 v-if="contractSell.isHas">最近销售合同<a href="#">更多>></a></h3>
      <p class="contract sellContracyBuy" v-if="contractSell.isHas">
        <span>{{contractSell.proName}}</span>
        <span><a href="#">{{contractSell.No}}</a></span>
        <span>合同总额：￥{{contractSell.money}}</span>
        <span>{{contractSell.order == 1 ? '等待卖家支付保证金' : '等待支付全款'}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import $http from '../../axios/http.js'

  export default {
    name: "home",
    data() {
      return {
        userInfo: {
          username: '',
          lv: '',
          userNum: '',
          xinyu: '',
          msg: '',
          renzheng1: 0,
          renzheng2: 0,
          money: ''
        },
        contractBuy: {
          isHas: true,
          proName: '',
          No: '',
          money: '',
          order: 1
        },
        contractSell: {
          isHas: true,
          proName: '',
          No: '',
          money: '',
          order: 1
        }
      }
    },
    methods: {

      // 获取用户信息
      getInfo() {
        $http({
          method: 'post',
          url: '/getUserInfo'
        }).then(res => {
          console.log(res)
          this.userInfo = res.data;
          sessionStorage.setItem("nnw-user-username", res.data.username);
        }, err => {
          console.log(err)
        })
      },

      // 获取最新购买合同
      getRecBuy() {
        $http({
          method: 'post',
          url: '/getRecBuy'
        }).then(res => {
          console.log(res);
          this.contractBuy = res.data;
        }, err => {
          console.log(err)
        })
      },

      // 获取最新销售合同
      getRecSell() {
        $http({
          method: 'post',
          url: '/getRecSell'
        }).then(res => {
          console.log(res);
          this.contractSell = res.data;
        }, err => {
          console.log(err)
        })
      }

    },
    mounted() {
      this.getInfo();
      this.getRecBuy();
      this.getRecSell();
    }
  }
</script>

<style scoped lang="less">

  .left {
    width: 200px;
    border: 1px solid #d2d2d2;
    color: rgb(119, 119, 119);
    .user-img {
      width: 68px;
      height: 68px;
      margin: 0 auto;
      position: relative;
      top: -10px;
      border: 1px solid #d2d2d2;
    }
    p {
      line-height: 20px;
      padding: 3px 0;
      text-align: center;
    }
    .username {
      font-weight: bold;
    }
    .message a {
      color: #aa0707;
      font-weight: bold;
    }
    .left-b {
      text-align: center;
      padding: 10px 0;
      a {
        display: inline-block;
        color: #333;
        margin: 0 12px;
      }
    }
  }

  .right {
    width: 966px;
    border: 1px solid #c0c0c0;
    margin-left: 20px;
    h3 {
      height: 30px;
      padding: 0 22px;
      line-height: 30px;
      color: rgb(119, 119, 119);
      font-size: 12px;
      font-weight: normal;
      background-color: #E2DFDF;
      a {
        color: rgb(119, 119, 119);
        float: right;
      }
      a:hover {
        color: #3966c7;
        text-decoration: none;
      }
    }
    .info {
      padding: 20px 10px 13px 30px;
      .info-l {
        margin-right: 212px;
        p {
          line-height: 25px;
          color: #777;
          img {
            vertical-align: middle;
          }
          a {
            margin-left: 30px;
            text-decoration: underline;
            color: #aa0707;
          }
        }
        .renzheng {
          margin-top: 20px;
          span {
            margin-right: 5px;
            img {
              position: relative;
              bottom: 2px;
            }
          }
        }
      }
      .info-r {
        padding-left: 30px;
        border-left: 1px solid #eee;
        p {
          color: #777;
          margin-bottom: 35px;
          .money {
            color: #aa0707;
            font-size: 30px;
            font-weight: bold;
          }
        }
        .btn {
          a {
            display: inline-block;
            padding: 9px 20px;
            margin: 0 10px;
            background-color: #AD0707;
            color: #fff;
            text-decoration: none;
          }
          a:last-child {
            background-color: #B3AAAA;
          }
        }
      }
    }
    .contract {
      height: 71px;
      line-height: 71px;
      color: rgb(119, 119, 119);
      span {
        display: inline-block;
        padding: 0 65px;
      }
      span:nth-child(3) {
        color: #aa0707;
      }
    }
    .no-data {
      text-align: center;
      p {
        font-size: 16px;
        color: #777;
        margin-top: 16px;
        margin-bottom: 10px;
      }
    }
  }
</style>
