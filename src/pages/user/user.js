import Vue from 'vue'
import user from './user.vue'
import '@/utils/mock'
import router from '@/router/user/user'

new Vue({
  el: '#user',
  router,
  render: h => h(user)
})
