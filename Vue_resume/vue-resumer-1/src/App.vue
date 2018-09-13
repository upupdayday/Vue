<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    
    <main>
      <Editor/>
      <Preview/>  
    </main>
  </div>
  
</template>


<script>

import 'normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  components: {
    Topbar,
    Editor,
    Preview
  }
}
</script>

<style>
  #app{
    /* min-width: 1024px;
    max-width: 1440px; */
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  main{
    min-width: 1024px;
    max-width: 1440px;
    display: flex;   
    justify-content: space-between;
    /*--解决main居中*/
    width: 100%;
    align-self: center;
    /*--*/
    margin: 16px 0;
    padding: 0 16px;
    flex: 1;
  }
</style>
