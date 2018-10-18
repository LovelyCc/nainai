<template>
    <div>
        <p class="title">
            账户信息 > 手机号申诉修改
        </p>

        <div v-if="view == 1" class="view-box">
            <img src="../../../assets/images/infor_jd2.jpg" alt="" class="process-img">
            <p class="tip">
                <img src="../../../assets/images/jinggao.png" alt="">
                请填写真实准确的信息，有利于提高申诉成功率，耐耐网会保护您的个人信息。
            </p>
            <div class="input-box">
                <span class="input-label">
                    企业名称：
                </span>
                <input type="text" class="default" v-model="formData.company">
                <span class="err-msg">{{message.company}}</span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    企业法人：
                </span>
                <input type="text" class="default" v-model="formData.representative">
                <span class="err-msg">{{message.representative}}</span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    新手机号：
                </span>
                <input type="text" class="default" v-model="formData.newTel">
                <span class="err-msg">{{message.newTel}}</span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      上传营业执照：
                  </span>
                <input type="file">
            </div>
            <div class="input-box">
                <span class="input-label">
                    营业执照照片：
                </span>
                <div class="img-box">
                    <img alt="">
                </div>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      上传申请单：
                  </span>
                <input type="file">
            </div>
            <div class="input-box">
                <span class="input-label">
                    申请单照片：
                </span>
                <div class="img-box">
                    <img alt="">
                </div>
            </div>
            <div class="input-box">
                <span class="input-label">

                </span>
                <button class="default" style="margin-left: 0" @click="sendInfo()">下一步</button>
            </div>
        </div>
        <div v-if="view == 2" class="view-box">
            <img src="../../../assets/images/infor_jd3.jpg" alt="" class="process-img">
            <p class="tip">
                <span style="display: block; text-align: center">您的申诉已提交成功！</span>
                <span>请您耐心等待。申诉结果会及时向您反馈，申诉成功后新密码会以 短信的方式发送到您的手机，请您注意查收，并及时修改新密码。</span>

            </p>
        </div>
    </div>
</template>

<script>
    import $http from '../../../axios/http.js'
    export default {
        name: "appealtel",
        data() {
            return {
                view: 1,
                telCheckNum: '',
                formData: {
                    company: '',
                    representative: '',
                    newTel: '',
                    license: '',
                    apply: ''
                },
                message: {
                    telCheckNum: '',
                    company: '',
                    representative: '',
                    newTel: ''
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    .get-checknum{
        height: 37px;
        vertical-align: top;
        padding: 0 10px;
        border: 1px solid #c0c0c0;
        margin-left: 5px;
        background: #F4F1F1;
        color: #777;
    }
    .view-box{
        margin: 40px;
        .process-img{
            margin-left: 80px;
        }
        .tip{
            padding:10px 0 10px 140px;
            color: #777;
            img{
                width: 25px;
                vertical-align: middle;
            }
        }
        .img-box{
            display: inline-block;
            width: 282px;
            height: 152px;
            border: 1px solid #e6e6e6;
            vertical-align: text-top;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .tip {
            line-height: 25px;
        }
    }
</style>