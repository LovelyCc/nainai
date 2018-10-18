<template>
  <div>
    <user-header :username="username"></user-header>
    <user-nav></user-nav>
    <div class="main">
      <div class="container float-clear">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import userHeader from '../../components/user-header.vue'
  import userNav from '../../components/user-nav.vue';
    export default {
      name: "user",
      data() {
        return {
          username: sessionStorage.getItem("nnw-user-username")
        }
      },
      components: {
        'user-header': userHeader,
        'user-nav': userNav
      }
    }
</script>

<style scoped lang="less">
  .main{
    width: 100%;
    min-width: 1190px;
    margin-top: 20px;
    .container{
      width: 1190px;
      height: 100%;
      margin: 0 auto;
      font-size: 12px;
    }
  }
</style>
