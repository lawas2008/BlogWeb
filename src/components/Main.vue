<template>
    <el-container style="height: 900px;border: 1px solid #eee;margin:0 15%">
        <el-aside width="200px" style="background-color:rgb(238, 241, 246)">
            <el-menu :router="true" :default-active="this.$route.path">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-user"></i>用户管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/user" route="">用户审核</el-menu-item>
                        <el-menu-item index="/main/account">账号管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-attract"></i>博客管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/blog">博客审核</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>配置管理</template>
                    <el-menu-item-group>
                        <template slot="title">App设置</template>
                        <el-menu-item index="/main/appsplash">App启动页</el-menu-item>
                        <el-menu-item index="/main/appcarousel">App轮播图</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">网页设置</template>
                        <el-menu-item index="/main/webcarousel">网页轮播图</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/dictionary">数据字典</el-menu-item>
                        <el-menu-item index="/main/skin">皮肤设置</el-menu-item>
                        <el-menu-item index="/main/version">版本信息</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right;font-size: 16px">
                <span>admin</span>
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px;margin-left: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "hello",
        data() {
            return {
            }
        }
    };
</script>

<style>
    .el-header{
        background-color: #B3C0D1;
        color: #333333;
        line-height: 60px;
    }
    .el-aside{
        color: #333333;
    }
</style>