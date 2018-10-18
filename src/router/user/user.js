import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/user/home'
import Information from '@/components/user/information'
import Baseinfo from '@/components/user/information/baseinfo'
import Changepaypwd from '@/components/user/information/changePayPwd'
import Changepwd from '@/components/user/information/changePwd'
import Changetel from '@/components/user/information/changetel'
import Appealpay from '@/components/user/information/appealpay'
import Ticket from '@/components/user/information/ticket'
import Appealtel from '@/components/user/information/appealtel'
import Bankroll from '@/components/user/bankroll'
import Agent from '@/components/user/bankroll/agent'
import Openaccount from '@/components/user/bankroll/openaccount'
import Transaction from '@/components/user/transaction'
import Warehouse from '@/components/user/warehouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information/home',
      name: 'Information',
      component: Information,
      children: [
        {
          path: '/information',
          name: 'Baseinfo',
          component: Baseinfo
        },
        {
          path: '/information/changePayPwd',
          name: 'Changepaypwd',
          component: Changepaypwd
        },
        {
          path: '/information/changePwd',
          name: 'Changepwd',
          component: Changepwd
        },
          {
              path: '/information/changeTel',
              name: 'Changetel',
              component: Changetel
          },
          {
              path: '/information/appealPay',
              name: 'Appealpay',
              component: Appealpay
          },
          {
              path: '/information/ticket',
              name: 'Ticket',
              component: Ticket
          },
          {
              path: '/information/appealTel',
              name: 'Appealtel',
              component: Appealtel
          }
      ]
    },
      {
          path: '/bankroll/home',
          name: Bankroll,
          component: Bankroll,
          children: [
              {
                  path: '/bankroll',
                  name: Agent,
                  component: Agent,
              },
              {
                  path: '/openAccount',
                  name: Openaccount,
                  component: Openaccount
              }
          ]
      },
      {
          path: '/transaction/home',
          name: Transaction,
          component: Transaction
      },
      {
          path: '/warehouse/home',
          name: Warehouse,
          component: Warehouse
      }

  ]
})
