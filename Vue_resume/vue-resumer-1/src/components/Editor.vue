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
              <SubEditor v-bind:items="resume[item.itemName]"/>
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
      resume:{
        itemTalbe:[
          {itemName:'profile', icon:'shenfenzheng'},
          {itemName:'work', icon:'ziyuan'},
          {itemName:'study', icon:'book'},
          {itemName:'project', icon:'xiangmu'},
          {itemName:'reward', icon:'jiangbei'},
          {itemName:'contact', icon:'phone'},
        ],
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
        }
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