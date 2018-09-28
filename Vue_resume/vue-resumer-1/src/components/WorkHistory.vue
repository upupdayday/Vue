<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        props: ['workExperience'],
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