<template>
    <body id="main_bg">
    <el-form class="login_form" label-position="left" label-width="0px" :model="loginForm" :rules="rulesLogin"
             status-icon
             ref="loginForm">
        <h3 class="login_title">系统登录</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"/>
        </el-form-item>
        <el-form-item prop="userpwd">
            <el-input type="password" v-model="loginForm.userpwd" auto-complete="off" placeholder="密码"/>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button type="primary" style="width: 100%;background: #42b9b5;border: none" @click.native="handleSubmit"
                       :loading="logining">登录
            </el-button>
        </el-form-item>
    </el-form>
    </body>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                logining: false,
                loginForm: {
                    username: 'admin',
                    userpwd: '123456'
                },
                rulesLogin: {
                    username: [{require: true, message: '请输入账号', trigger: 'blur'},
                        {min: 2,max: 12,message: '长度在 2 到 12 个字符'}],
                    userpwd: [{require: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6,max: 12,message: '长度在 6 到 12 个字符'}]
                },
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        if (this.loginForm.username === 'admin' && this.loginForm.userpwd === '123456') {
                            this.logining = false;
                            sessionStorage.setItem('user', this.loginForm.username);
                            this.$router.push({path: '/main'});
                        } else {
                            this.logining = false;
                            this.$alert('用户名或密码不正确', '错误', {
                                confirmButtonText: '我知道了'
                            });
                        }
                    } else {
                        console.log('错误提交!!!');
                        return false;
                    }
                });
            },
        },
    }
</script>

<style>
    #main_bg {
        background: url("../assets/img_login_bg.jpg") no-repeat center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .login_form {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #42b9b5;
        box-shadow: 0 0 25px #42b9b5;
    }

    .login_title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #42b9b5;
    }
</style>