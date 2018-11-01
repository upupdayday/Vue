<template>
    <div id="topbar">
      <div class="logo">
        <span>Resumer</span>
      </div>
      <div class="action">   
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <el-button  @click.prevent="logOut">登出</el-button> 
        </div>
        <div v-else class="userActions">
          <el-button type="primary"  @click.prevent="signUpDialogVisible = true">注册</el-button>
          <el-button type="primary"  @click.prevent="logInDialogVisible = true">登录</el-button>  
        </div>   
        <el-button type="primary">保存</el-button>
        <el-button>预览</el-button>
      </div>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
        <SignUpForm @success="signUp($event)"/>
      </MyDialog>
      <MyDialog title="登录" :visible="logInDialogVisible"  @close="logInDialogVisible = false">
        <LogInForm/>
      </MyDialog>
    </div>
</template>

<script>
import MyDialog from "./MyDialog"
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import AV from '../lib/leancloud'
export default {
    name: 'Topbar',
    components: {
      MyDialog, SignUpForm, LogInForm
    },
    data() {
      return {
        signUpDialogVisible: false,
        logInDialogVisible: false
      }
    },
    computed: {
      user(){
        return this.$store.state.user
      }, 
      logined(){
        //   return this.$store.state.user.id
        //computed嵌套复用
        return this.user.id
      }, 
    },
    methods: {
      logOut(){
        AV.User.logOut()
        this.$store.commit('removeUser')
      },
      signUp(user){
        this.signUpDialogVisible = false
        this.$store.commit('setUser', user)
      }
    }	  
}
</script>



<style lang="scss">
  #topbar {
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    /* border: 1px solid green; */
    margin: 0 auto;

    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 16px;
    >.logo{
    font-size:24px;
    color:#409EFF;
    }
    .action{
      display: flex;
      .userActions{
        margin-right: 3em;
        .welcome{
          margin-right: .5em;
        }
      }

    }

  }
</style>