<template>
    <div id="topbar">
      <div class="wrapper">
        <span class="logo">Resumer</span>
      </div>
    </div>
</template>



<style>
  #topbar {
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }

  #topbar .wrapper{    
    /* border: 1px solid green; */
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;

    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #topbar .logo{
    font-size:24px;
    color:#317ef3;
  }
</style>