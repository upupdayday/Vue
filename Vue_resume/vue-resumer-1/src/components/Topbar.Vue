<template>
    <div id="topbar">
      <div class="logo">
        <span>Resumer</span>
      </div>
      <div class="action">        
        <el-button type="primary">登录</el-button>
        <el-button>注册</el-button>
      </div>
    </div>
</template>



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