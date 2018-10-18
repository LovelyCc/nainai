<template>
    <div>
      <p class="title">
        账户信息 > 基本信息
      </p>
      <div class="formbox">
          <div class="form">
              <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      用户名：
                  </span>
                  <input type="text" class="default" v-model="userInfo.username" :disabled="disabled">
                  <span></span>
              </div>
              <div class="input-box">
                  <span class="input-label">
                      <span class="required"></span>
                      手机号码：
                  </span>
                  <input type="text" class="default" v-model="userInfo.telPhone" disabled="true">
                  <span>
                      <router-link to="/information/changeTel" class="change-tel">
                          <img src="../../../assets/images/info.png" alt="">
                          点击修改手机号码
                      </router-link>
                  </span>
              </div>
              <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      电子邮箱：
                  </span>
                  <input type="text" class="default" v-model="userInfo.email" :disabled="disabled">
                  <span></span>
              </div>
              <div class="input-box">
                  <button class="default" v-if="disabled" @click="disabled = !disabled">修改</button>
                  <button class="default" v-if="!disabled" @click="saveData">保存</button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import $http from '@/axios/http.js'
    export default {
        name: "baseinfo",
        data() {
            return {
                disabled: true,
                userInfo: {
                    username: '',
                    telPhone: '',
                    email: ''
                }
            }
        },
        methods: {

            // 获取用户名，手机号码，电子邮箱
            getInfo() {
                $http({
                    method: 'get',
                    url: '/getBaseInfo'
                }).then(res => {
                    console.log(res);
                    this.userInfo = res.data;
                },err => {
                    console.log(err)
                })
            },

            // 点击保存
            saveData() {
                this.disabled = true;

                /*$http({
                    method: 'post',
                    url: '/'
                }).then(res => {
                    this.disabled = true;
                },err => {
                    console.log(err)
                })*/
            }
        },
        mounted() {
            this.getInfo();
        }
    }
</script>

<style scoped lang="less">
    .input-box{
        .change-tel{
            padding-left: 10px;
            color: rgb(102, 102, 102);
            text-decoration: none;
            img{
                width: 13px;
                vertical-align: middle;
            }
        }
    }
</style>
