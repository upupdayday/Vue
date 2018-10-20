<template>
    <div>
        <h2>tt+{{resume[panelName].title}}</h2>
        <h2>ss+{{items(panelName).title}}</h2>
        <!-- <el-form>
        <div class="experienceEditorWrapper" v-for="(item, index) in items.itemData">
            <el-button v-if="items.button === 'yes'" @click="deleteItem(index)"
                     type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-form-item v-for="key in keys" v-bind:label="items.labels[key]"  v-bind:key= "key">
                <el-input v-model="item[key]"></el-input>
            </el-form-item>               
            <hr v-if="items.button === 'yes'">
        </div>
        <el-button v-if="items.button === 'yes'" @click="addItem" 
            type="primary" plain>添加经历</el-button>
        </el-form> -->
    </div>

</template>

<script>
    export default {
        props: ['panelName'],
        computed:{
            count () {
                return this.$store.state.count
            },

            keys: function(){
                return Object.keys(items.itemData[0]);
            },

            resume(){
                return this.$store.state.resume
            },
            items: function(){
                return function(panelName){
                        return this.$store.state.resume[panelName] 
                    }             
            },
        },
        methods:{
            add (){
                this.$store.commit('increment')
            },

            addItem: function(){
                const empty = {};
                this.keys.map(
                    (key)=>{
                        empty[key] = '';
                    }
                );
                this.items.itemData.push(empty);
            },
            deleteItem: function(index){
                //todo:可以考虑在为0时，只去掉input里的数据，不删除数组成员
                //preview时，同时对内容判空，决定是否显示
                // if (index===0) {
                //     this.items.itemData.splice(index,1,{})
                // }
                // else{
                    this.items.itemData.splice(index,1)
                // }                
            },
        }
    }
</script>