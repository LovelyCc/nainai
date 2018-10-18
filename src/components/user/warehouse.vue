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
        name: "warehouse",
        data() {
            return {
                list: [
                    {
                        name: '仓单签发',
                        to: ''

                    },
                    {
                        name: '仓单管理',
                        to: ''
                    },
                    {
                        name: '仓单出库',
                        isShow: false,
                        children: [
                            {
                                name: '出库单列表',
                                to: ''
                            },
                            {
                                name: '出库信息维护',
                                to: '/'
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