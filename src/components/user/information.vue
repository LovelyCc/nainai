<template>
  <div>
    <div class="user-main-left float-l">
      <h3>账户信息</h3>
        <ul class="first-list">
            <li v-for="(item,index) in list">
                <a href="javascript:;"
                   class="first-title"
                   v-if="item.children"
                   @click="item.isShow = !item.isShow">{{item.name}}
                    <span :class="{'right': !item.isShow, 'down': item.isShow}" v-if="item.children"></span></a>
                <router-link :to="item.to" class="first-title" v-if="!item.children">{{item.name}}</router-link>
                <ul class="second-list" v-if="item.isShow">
                    <li v-for="item2 in item.children">
                        <router-link :to="item2.to" exact>{{item2.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="user-main-right float-l">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "information",
          data() {
              return {
                list: [
                  {
                    name: '账户管理',
                    isShow: true,
                    children: [
                      {
                        name: '基本信息',
                        to: '/information'
                      },
                      {
                        name: '修改支付密码',
                        to: '/information/changePayPwd'
                      },
                      {
                        name: '修改密码',
                        to: '/information/changePwd'
                      }
                    ]
                  },
                  {
                    name: '资质认证',
                    isShow: false,
                    children: [
                      {
                        name: '交易商',
                        to: ''
                      },
                      {
                        name: '仓库管理员',
                        to: ''
                      }
                    ]
                  },
                    {
                        name: '开票信息管理',
                        to: '/information/ticket'
                    }
                ]
              }
          }
    }
</script>

<style scoped lang="less">

</style>
