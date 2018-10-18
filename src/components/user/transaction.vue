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
        name: "transaction",
        data() {
            return {
                list: [
                    {
                        name: '仓单管理',
                        isShow: true,
                        children: [
                            {
                                name: '仓单列表',
                                to: ''
                            }
                        ]
                    },
                    {
                        name: '销售管理',
                        isShow: false,
                        children: [
                            {
                                name: '销售列表',
                                to: ''
                            },
                            {
                                name: '发布产品',
                                to: '/'
                            },
                            {
                                name: '竞价拍卖',
                                to: ''
                            },
                            {
                                name: '抢购',
                                to: ''
                            }
                        ]
                    },
                    {
                        name: '招投标',
                        isShow: false,
                        children: [
                            {
                                name: '招标管理',
                                to: ''
                            },
                            {
                                name: '投标管理',
                                to: '/'
                            }
                        ]
                    },
                    {
                        name: '采购管理',
                        isShow: false,
                        children: [
                            {
                                name: '报价列表',
                                to: ''
                            },
                            {
                                name: '采购列表',
                                to: '/'
                            },
                            {
                                name: '采购添加',
                                to: ''
                            }
                        ]
                    },
                    {
                        name: '合同管理',
                        isShow: false,
                        children: [
                            {
                                name: '销售合同',
                                to: ''
                            },
                            {
                                name: '购买合同',
                                to: '/'
                            }
                        ]
                    },
                    {
                        name: '提单管理',
                        isShow: false,
                        children: [
                            {
                                name: '购买提单',
                                to: ''
                            },
                            {
                                name: '入库单列表',
                                to: '/'
                            },
                            {
                                name: '销售提单',
                                to: ''
                            }
                        ]
                    },
                    {
                        name: '申诉列表',
                        isShow: false,
                        children: [
                            {
                                name: '申诉列表',
                                to: ''
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