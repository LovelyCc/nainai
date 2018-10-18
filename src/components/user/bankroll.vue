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
        name: "bankroll",
        data() {
            return {
                list: [
                    {
                        name: '开户信息管理',
                        to: '/openAccount'
                    },
                    {
                        name: '资金账户管理',
                        isShow: true,
                        children: [
                            {
                                name: '中信银行',
                                to: '/zhongxin'
                            },
                            {
                                name: '市场代理账户',
                                to: '/bankroll'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>