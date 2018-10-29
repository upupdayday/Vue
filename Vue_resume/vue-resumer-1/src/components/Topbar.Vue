<template>
    <div id="topbar">
      <div class="logo">
        <span>Resumer</span>
      </div>
      <div class="action">   
        <div v-if="logined" class="userActions">
          <span>你好，{{user.username}}</span>
          <el-button>登出</el-button> 
        </div>
        <div v-else class="userActions">
          <span>{{user}}</span>

          <!-- <span>{{test}}</span>
          <span>{{reversedMessage}}</span> -->

          <el-button type="primary"  @click.prevent="signUpDialogVisible = true">注册</el-button>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
            <SignUpForm @success="login($event)"/>
          </MyDialog>
          <el-button>登录</el-button>  
        </div>   
        <el-button type="primary">保存</el-button>
        <el-button>预览</el-button>
      </div>
    </div>
</template>

<script>
import MyDialog from "./MyDialog"
import SignUpForm from './SignUpForm'
export default {
    name: 'Topbar',
    components: {
      MyDialog, SignUpForm
    },
    data() {
      return {
        signUpDialogVisible: false,
        message: 'Hello'
      }
    },
    computed: {
      user(){
        return this.$store.state.user
      },
      logined(){
        return this.$store.state.user.id
      }, 
      //直接获取computed的user似乎不行
      // logined(){
      //   return this.user().id
      // }, 
      // reversedMessage: function() {
      //   // `this` 指向 vm 实例
      //   return this.message.split('').reverse().join('')
      // },
      // test: function() {
      //   this.reversedMessage
      // }
    },
    methods: {
      login(user){
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
      }
    }

  }
</style>