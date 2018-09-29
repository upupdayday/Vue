<template>
    <div id="editor">
      <nav>
        <ol>
            <li v-for="i in [0,1,2,3,4,5]"
                :class="{active: currentTab === i}" 
                @click="currentTab = i"
            >
              <svg class="icon" >
                <use :xlink:href="`#icon-${icons[i]}`"></use>
              </svg>
            </li>
        </ol>
      </nav>
      <ol class="panels">
            <li :class="{active: currentTab === 0}">
              <Profile v-bind:profile="profile"/>
            </li>
            <li :class="{active: currentTab === 1}">
              <ExperienceEditor v-bind:items="workExperience"
              v-bind:title="'工作经历'" v-bind:labels="workLabels"/>
            </li>
            <li :class="{active: currentTab === 2}">
              <ExperienceEditor v-bind:items="studyExperience"
              v-bind:title="'学习经历'" v-bind:labels="studyLabels"/>
            </li>
      </ol>
    </div>
</template>


<script>
import Profile from './Profile'
import WorkHistory from './WorkHistory'
import ExperienceEditor from'./ExperienceEditor'
export default {
  components: {Profile, WorkHistory, ExperienceEditor},
  data() {
    return {
      currentTab: 0,
      icons: ['shenfenzheng', 'ziyuan', 'book', 'xiangmu', 'jiangbei', 'phone'],
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      workExperience:[
        {
          company:'',
          duration:'',
          content:''
        },
      ],
      studyExperience:[
        {
          school:'',
          duration:'',
          major:'',
          degree:''
        },
      ],
      workLabels:{
          company:'公司',
          duration:'时间',
          content:'工作内容'
      },
      studyLabels:{
          school:'学校',
          duration:'时间',
          major:'专业',
          degree:'学位'
      },
    }
  },
  methods:{

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

          }
        }
        .el-button--primary{
            margin-top: 15px;
          }
      }
    }
  }
</style>