<template>
  <div>
    <!-- <form @submit.prevent="signUp"> 
      <div class="row">
        <label>用户名</label> 
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">   
        <span class="errorMessage">{{errorMessage}}</span>     
      </div>
    </form> -->
    <el-form :label-position="labelPosition" label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="signUp">注册</el-button>
    </el-form>
  </div>
</template>
<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name:'SignUpForm',
  data(){
    return {
      labelPosition: 'right',
      formData: {
        username: '',
        password: ''
      },
      errorMessage:'',
    }
  },
  methods:{
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(() =>{
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error);
      });
    }
  }
}

</script>