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
              <h2>工作经历</h2>
              <el-form>
                <div class="workWrapper" v-for="(work, index) in workExperience">
                  <el-button @click="deleteWork(index)" type="danger" icon="el-icon-delete" size="small"></el-button>
                  <el-form-item label="公司">
                        <el-input v-model="work.company"></el-input>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input v-model="work.position"></el-input>
                    </el-form-item>
                    <el-form-item label="工作内容">
                        <el-input v-model="work.content"></el-input>
                  </el-form-item>                  
                  <hr>
                </div>
                <el-button @click="addWork" type="primary" plain>添加经历</el-button>
              </el-form>
            </li>
      </ol>
    </div>
</template>


<script>
import Profile from './Profile'
export default {
  components: {Profile},
  data() {
    return {
      currentTab: 0,
      icons: ['shenfenzheng', 'ziyuan', 'book', 'heart', 'jiangbei', 'phone'],
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      workExperience:[
        {
          company:'',
          position:'',
          content:''
        },
      ],
    }
  },
  methods:{
    addWork: function(){
      this.workExperience.push({company:'',
                                position:'',
                                content:''})
    },
    deleteWork: function(index){
      this.workExperience.splice(index,1)
    },
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
        .workWrapper{
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