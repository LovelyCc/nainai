<template>
    <div>
        <p class="title">
            账户信息 > 开票信息管理
        </p>
        <div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      发票抬头：
                  </span>
                <input type="text" class="default" v-model="formData.title">
                <span class="err-msg">{{message.title}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      纳税人识别号：
                  </span>
                <input type="text" class="default" v-model="formData.number">
                <span class="err-msg">{{message.number}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      地址：
                  </span>
                <input type="text" class="default" v-model="formData.adderss">
                <span class="err-msg">{{message.adderss}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      电话：
                  </span>
                <input type="text" class="default" v-model="formData.tel">
                <span class="err-msg">{{message.tel}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      开户行：
                  </span>
                <input type="text" class="default" v-model="formData.bank">
                <span class="err-msg">{{message.bank}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      银行账户：
                  </span>
                <input type="text" class="default" v-model="formData.account">
                <span class="err-msg">{{message.account}}</span>
            </div>
            <div class="input-box">
                <button class="default" style="width: 132px; height: 41px;">保存</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ticket",
        data() {
            return {
                formData: {
                    title: '',
                    number: '',
                    adderss: '',
                    tel: '',
                    bank: '',
                    account:''
                },
                message: {
                    title: '',
                    number: '',
                    adderss: '',
                    tel: '',
                    bank: '',
                    account:''
                }
            }
        }
    }
</script>

<style scoped>

</style>