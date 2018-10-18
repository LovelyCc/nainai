<template>
    <div>
        <p class="title">
            账户信息 > 修改支付密码
        </p>
        <div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      原始支付密码：
                  </span>
                <input type="password" class="default" v-model="formData.oldPwd" @blur="checkOldPwd">
                <span style="color: #777;">
                    忘记密码？试试
                    <router-link to="/information/appealPay" style="color: #0088cc">申诉找回</router-link>
                </span>
                <span class="err-msg">{{message.oldPwd}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      新支付密码：
                  </span>
                <input type="password" class="default" v-model="formData.newPwd" @blur="checkNewPwd">
                <span class="err-msg">{{message.newPwd}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      <span class="required">*</span>
                      重复支付密码：
                  </span>
                <input type="password" class="default" v-model="formData.reNewPwd" @blur="checkReNewPwd">
                <span class="err-msg">{{message.reNewPwd}}</span>
            </div>
            <div class="input-box">
                <button class="default" @click="submit">修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "changepaypwd",
        data() {
            return {
                formData: {
                    oldPwd: '',
                    newPwd: '',
                    reNewPwd: ''
                },
                message: {
                    oldPwd: '',
                    newPwd: '',
                    reNewPwd: ''
                }
            }
        },
        methods: {

            // 原始密码验证
            checkOldPwd() {
                if(!this.formData.oldPwd) {
                    this.message.oldPwd = "请填写信息！";
                    return false;
                }else{
                     let reg = /^\S{6,10}$/;
                     if(!reg.test(this.formData.oldPwd)) {
                         this.message.oldPwd = "6-10位支付密码！";
                         return false;
                     }else{
                         this.message.oldPwd = "";
                         return true;
                     }
                }
            },

            // 新支付密码验证
            checkNewPwd() {
                if(!this.formData.newPwd) {
                    this.message.newPwd = "请填写信息！";
                    return false;
                }else{
                    let reg = /^\S{6,10}$/;
                    if(!reg.test(this.formData.newPwd)) {
                        this.message.newPwd = "6-10位支付密码！";
                        return false;
                    }else{
                        this.message.newPwd = "";
                        return true;
                    }
                }
            },

            // 重负密码验证
            checkReNewPwd() {
                if(!this.formData.reNewPwd){
                    this.message.reNewPwd = "请填写信息！";
                    return false;
                }else{
                    if(this.formData.reNewPwd != this.formData.newPwd){
                        this.message.reNewPwd = "两次输入密码不一致！";
                        return false;
                    }else {
                        this.message.reNewPwd = "";
                        return true;
                    }
                }
            },

            // 点击提交
            submit() {
                if(this.checkOldPwd() && this.checkNewPwd() && this.checkReNewPwd()) {

                }
            }
        }
    }
</script>

<style scoped lang="less">
.err-msg{
    color: #f00;
}
</style>
