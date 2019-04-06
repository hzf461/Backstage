<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 start -->
      <el-aside width="auto">
        <div class="logo"></div>
        <el-menu
          default-active="3"
          :collapse="isCollapse"
          class="el-menu-admin"
          @open="handleOpen"
          @close="handleClose"
          background-color="#d3dce6"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 侧边栏 end -->

      <el-container>
        <!-- header start -->
        <el-header>
          <el-button type="primary" @click="isCollapse = !isCollapse" icon="myicon myicon-menu"></el-button>
          <div class="system-title">电商后台管理系统</div>
          <div>
            <span class="welcome">您好，xxx</span>
            <el-button type="text" @click="logout">退出</el-button>
          </div>
        </el-header>
        <!-- header end -->

        <!-- main start -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- main end -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getUserList } from '@/api'
export default {
  data: () => ({
    isCollapse: false
  }),
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push({name: 'login'})
    }
  },
  created () {
    getUserList({ query: '', pagenum: 1, pagesize: 5 }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #d3dce6;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d3dce6;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.jpg) no-repeat;
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 60px;
  }
  .system-title {
    font-size: 28px;
    color: #303133;
  }
  .welcome {
    color: #303133;
  }
  .myicon {
    font-size: 28px;
  }
  .el-button {
    padding: 0;
  }
  .el-button--primary {
    background-color: #d3dce6;
    border-color: #d3dce6;
  }
}
</style>
