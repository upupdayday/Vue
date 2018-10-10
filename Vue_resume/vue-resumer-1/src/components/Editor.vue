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
              <ExperienceEditor v-bind:items="workExperience"/>
            </li>
            <li :class="{active: currentTab === 2}">
              <ExperienceEditor v-bind:items="studyExperience"/>
            </li>
            <li :class="{active: currentTab === 3}">
              <ExperienceEditor v-bind:items="projectExperience"/>
            </li>
            <li :class="{active: currentTab === 4}">
              <ExperienceEditor v-bind:items="rewardExperience"/>
            </li>
            <li :class="{active: currentTab === 5}">
              <Contacts v-bind:contact="contact"/>
            </li>
            <li class="test">
              {{count}}
              <button @click="add">test</button>
            </li>
      </ol>
    </div>
</template>


<script>
import Profile from './Profile'
import ExperienceEditor from'./ExperienceEditor'
import Contacts from'./Contacts'
export default {
  components: {Profile, ExperienceEditor, Contacts},
  data() {
    return {
      currentTab: 0,
      icons: ['shenfenzheng', 'ziyuan', 'book', 'xiangmu', 'jiangbei', 'phone'],
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      contact: {
        email: '',
        mobile: '',
        weixin: '',
        QQ:''
      },
      workExperience:{
        title:'工作经历',
        experience:[
            {
              company:'',
              duration:'',
              content:''
            },
        ],
        labels: {
            company:'公司',
            duration:'时间',
            content:'工作内容'
        },
      },
      studyExperience:{
        title:'学习经历',
        experience:[
            {
              school:'',
              duration:'',
              major:'',
              degree:''
            },
        ],
        labels: {
            school:'学校',
            duration:'时间',
            major:'专业',
            degree:'学位'
        },
      },
      projectExperience:{
        title:'项目经历',
        experience:[
            {
              name:'',
              content:''
            },
        ],
        labels: {
              name:'项目名称',
              content:'项目内容'
        },
      },
      rewardExperience:{
        title:'获奖情况',
        experience:[
            {
              name:'',
              content:''
            },
        ],
        labels: {
              name:'奖项名称',
              content:'奖项内容'
        },
      },
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add (){
      this.$store.commit('increment')
    }
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
        &.test{
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