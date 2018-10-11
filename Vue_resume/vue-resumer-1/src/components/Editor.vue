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
              <SubEditor v-bind:items="profile"/>
            </li>
            <li :class="{active: currentTab === 1}">
              <SubEditor v-bind:items="work"/>
            </li>
            <li :class="{active: currentTab === 2}">
              <SubEditor v-bind:items="study"/>
            </li>
            <li :class="{active: currentTab === 3}">
              <SubEditor v-bind:items="project"/>
            </li>
            <li :class="{active: currentTab === 4}">
              <SubEditor v-bind:items="reward"/>
            </li>
            <li :class="{active: currentTab === 5}">
              <SubEditor v-bind:items="contact"/>
            </li>
            <li class="test">
              {{count}}
              <button @click="add">test</button>
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
      
      icons: ['shenfenzheng', 'ziyuan', 'book', 'xiangmu', 'jiangbei', 'phone'],
      profile: {
        button:'no',
        title:'个人信息',
        itemData:[
          {
            name: '',
            city: '',
            birth: ''
          },
        ],

        labels:{
          name: '姓名',
          city: '城市',
          birth: '出生日期'
        },
      },
      contact: {
        button:'no',
        title:'联系方式',
        itemData:[
          {
            email: '',
            mobile: '',
            weixin: '',
            QQ:''
          },
        ],

        labels:{
          email: '邮箱',
          mobile: '手机',
          weixin: '微信',
          QQ:'QQ'
        },
      },
      work:{
        button:'yes',
        title:'工作经历',
        itemData:[
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
      study:{
        button:'yes',
        title:'学习经历',
        itemData:[
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
      project:{
        button:'yes',
        title:'项目经历',
        itemData:[
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
      reward:{
        button:'yes',
        title:'获奖情况',
        itemData:[
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
    },
    currentTab: {
      get: function(){
        return this.$store.state.currentTab
      },
      set: function(value){
        return this.$store.commit('switchTab', value)
      }
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