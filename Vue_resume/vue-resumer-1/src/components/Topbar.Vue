<template>
    <div id="topbar">
      <div class="logo">
        <span>Resumer</span>
      </div>
      <div class="action">   
        <span>{{user}}</span>
        <el-button type="primary"  @click.prevent="signUpDialogVisible = true">注册</el-button>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
          <SignUpForm @success="login($event)"/>
        </MyDialog>
        <el-button>登录</el-button>     
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
        signUpDialogVisible: false
      }
    },
    computed: {
      user(){
        return this.$store.state.user
      }
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
  }
</style>