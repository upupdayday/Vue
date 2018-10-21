<template>
    <div id="editor">
      <nav>
        <ol>
            <li v-for="item in resume.itemTalbe"
                :class="{active: currentTab === item.itemName}" 
                @click="currentTab = item.itemName"
            >
              <svg class="icon" >
                <use :xlink:href="`#icon-${item.icon}`"></use>
              </svg>
            </li>
        </ol>
      </nav>
      <ol class="panels">
            <li v-for="item in resume.itemTalbe" :class="{active: currentTab === item.itemName}">
              <!--1.传panelName-在sub里面定位resume,2.在外面定位好items直接传进去-->
              <SubEditor v-bind:panelName="item.itemName" v-bind:items="resume[item.itemName]"/>
              <!-- <SubEditor v-bind:items="resume[item.itemName]"/> -->
            </li>
      </ol>
    </div>
</template>


<script>
import SubEditor from './SubEditor'
export default {
  components: {SubEditor},
  data() {
    return {
       
    }
  },
  computed: {
    currentTab: {
      get: function(){
        return this.$store.state.currentTab
      },
      set: function(value){
        return this.$store.commit('switchTab', value)
      }
    },
    resume(){
      return this.$store.state.resume
    }
  },
  methods: {

  }
}
</script>


<style lang="scss">
  #editor{
    background: #fff;
    width: 35%;
    margin-right: 16px;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    border-radius: 5px;
    overflow: hidden;

    > nav {
      background: #409EFF;
      width: 80px;  
      padding: 16px 0;  
      > ol > li {
        padding: 8px 0;
        text-align: center;
        > .icon {
          width:36px;
          height:36px;
          fill: #fff;
        }
        &.active {
          background: #fff;
          >.icon {
            fill: #409EFF;
          }
        }
      }
    }
    
    > .panels{
      flex:1;
      overflow:auto;
      > li {        
        padding: 16px;
        display:none;
        text-align: center;
        &.active{
          display: block;
        }
        .experienceEditorWrapper{
          margin-top: 10px;
          position:relative;
          .el-button--danger{
            position: absolute;
            top: 0px;
            right:0;
            cursor:pointer;
            z-index: 1;
          }
          hr{
            height: 2px;
            border: none;
            border-top: 2px solid #409EFF;
          }
        }
        .el-button--primary{
            margin-top: 15px;
          }
      }
    }
  }
</style>