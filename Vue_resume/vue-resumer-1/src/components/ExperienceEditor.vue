<template>
    <div>
        <h2>{{items.title}}</h2>
        <el-form>
        <div class="experienceEditorWrapper" v-for="(item, index) in items.experience">
            <el-button @click="deleteItem(index)" type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-form-item v-for="key in keys" v-bind:label="items.labels[key]"  v-bind:key= "key">
                <el-input v-model="item[key]"></el-input>
            </el-form-item>               
            <hr>
        </div>
        <el-button @click="addItem" type="primary" plain>添加经历</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        computed:{
            keys: function(){
                return Object.keys(this.items.experience[0]);
            }
        },
        methods:{
            addItem: function(){
                const empty = {};
                this.keys.map(
                    (key)=>{
                        empty[key] = '';
                    }
                );
                this.items.experience.push(empty);
            },
            deleteItem: function(index){
                // if (index===0) {
                //     this.items.experience.splice(index,1,{})
                // }
                // else{
                    this.items.experience.splice(index,1)
                // }                
            },
        }
    }
</script>