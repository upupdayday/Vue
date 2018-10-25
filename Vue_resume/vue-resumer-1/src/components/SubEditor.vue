<template>
    <div>
        <h2>{{resume[panelName].title}}</h2>
        <el-form>            
        <div class="experienceEditorWrapper" v-for="(item, index) in resume[panelName].itemData">
            <el-button v-if="resume[panelName].button === 'yes'" @click="deleteItem(index)"
                     type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-form-item v-for="key in keys" v-bind:label="resume[panelName].labels[key]"  v-bind:key= "key">
                <!-- <el-input v-model="item[key]"></el-input> -->
                <el-input :value="item[key]" @input="changeResumeField(panelName, index, key, $event)"></el-input>
                <input
                v-bind:value="item[key]"
                @input="changeResumeField2(panelName, index, key, $event.target.value)"
                >
                <p>aa++{{key}}</p>
                <p>cc++{{resume[panelName].itemData[index][key]}}</p>
            </el-form-item>                
            <hr v-if="resume[panelName].button === 'yes'"> 
        </div>
        <el-button v-if="resume[panelName].button === 'yes'" @click="addItem" 
            type="primary" plain>添加经历</el-button>
        </el-form>
    </div>

</template>

<script>
    export default {
        props: ['panelName'],
        computed:{
            keys:function(){     
                return Object.keys(this.$store.state.resume[this.panelName].itemData[0])
            },

            //需要声明获取store方法;
            resume(){
                return this.$store.state.resume
            },
        },
        methods:{
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
            changeResumeField: function(field, index, key, value){
                console.log("aaa~~~"+value)
                // this.$store.commit('updateResume',{
                //     field,
                //     index,
                //     key,
                //     value
                //     })
            },
            changeResumeField2: function(field, index, key, value){
                console.log("bbb~~~"+value)
                // this.$store.commit('updateResume',{
                //     field,
                //     index,
                //     key,
                //     value
                //     })
            },
            aaa: function(value){
                console.log("bbbb~~~~~"+value)
            }
        }
    }
</script>