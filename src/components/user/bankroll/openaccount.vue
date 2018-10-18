<template>
    <div>
        <p class="title">
            资金管理 > 开户信息管理
        </p>
        <div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    开户状态：
                </span>
                <span>开户申请,等待审核</span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    开户银行：
                </span>
                <input type="text" class="default">
                <span class="err-msg"></span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    银行卡类型：
                </span>
                <select class="default">
                    <option value="">借记卡</option>
                    <option value="">信用卡</option>
                </select>
                <span class="err-msg"></span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    公司名称：
                </span>
                <input type="text" class="default">
                <span class="err-msg"></span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    银行账号：
                </span>
                <input type="text" class="default">
                <span class="err-msg"></span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    <span class="required">*</span>
                    请上传公司的银行许可证：
                </span>
                <input type="file">
                <span class="err-msg"></span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    图片预览：
                </span>

            </div>
            <div class="input-box">
                <button class="default" style="width: 132px; height: 41px;">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "openaccount"
    }
</script>

<style scoped>

</style>