<template>
  <div id="app" v-bind:class="{app_edit: !previewMode}">
    <header>
      <Topbar/>
    </header>
    
    <main v-bind:class="{show: previewMode, edit: !previewMode}">
      <Editor v-show="!previewMode"/>
      <Preview />  
    </main>
  </div>
  
</template>


<script>

import 'normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'
import store from './store/index'

export default {
  name: 'App',
  store,
  components: {
    Topbar,
    Editor,
    Preview
  },
  created() {
    // let state = localStorage.getItem('state')
    // if(state){
    //   state = JSON.parse(state) 
    // }
    // this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
  },
  computed: {
    previewMode(){
      return this.$store.state.previewMode
    }
  }
}
</script>

<style lang="scss">
  #app{
    /* min-width: 1024px;
    max-width: 1440px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .app_edit{
    height: 100vh;
  }
  .edit{
    min-width: 1024px;
    /* max-width: 1440px; */
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
  .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
  }

  .show{
      width: 1024px;
      margin: 24px auto;
      color: red;
  }
</style>
