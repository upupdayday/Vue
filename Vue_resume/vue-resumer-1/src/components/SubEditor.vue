<template>
    <div>
        <p>------subeditor中直接访问resume,利用传进来的panelName寻址-------</p>
        <h2>aa+{{resume[panelName].title}}</h2>
        <p>bb+{{resume[panelName].itemData[0]}}</p>
        <p>------在Editor中定位好，直接用props传进来items-------</p>
        <h2>cc+{{items.title}}</h2>
        <p>dd+{{items.itemData[0]}}</p>
        <!-- <p>------subeditor中用传进来的props访问resume-------</p>
        <div>{{items.itemData}}</div>
        <li v-for="(item,index) in items.itemData">
            <p>{{index}}</p>
        </li> -->
        <!-- <el-form>            
        <div class="experienceEditorWrapper" v-for="(item, index) in items.itemData">
            <el-button v-if="items.button === 'yes'" @click="deleteItem(index)"
                     type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-form-item v-for="key in keys" v-bind:label="items.labels[key]"  v-bind:key= "key">
                <el-input v-model="item[key]"></el-input>
            </el-form-item>               
            <hr v-if="items.button === 'yes'"> 
            <p>ss+{{index}}</p>
            <p>nn+{{items.itemData[0]}}</p>
            <p>mm+{{keys(items.itemData[0])}}</p> 
        </div>
        <el-button v-if="items.button === 'yes'" @click="addItem" 
            type="primary" plain>添加经历</el-button>
        </el-form> -->
    </div>

</template>

<script>
    export default {
        // props: ['items'],
        props: ['panelName', 'items'],
        computed:{
            count () {
                return this.$store.state.count
            },

            //使用闭包方式获取key
            // keys:function(){
            //     return function(obj){
            //             return Object.keys(obj) 
            //         }             
            // },

            //需要声明获取store方法;
            resume(){
                return this.$store.state.resume
            },
            
            //也可以用闭包的方式，传参数进来获取items
            // items: function(){      
            //     return function(panelName){
            //             return this.$store.state.resume[panelName] 
            //         }             
            // },
        },
        methods:{
            add (){
                this.$store.commit('increment')
            },

            // keys: function(obj){
            //     return Object.keys(obj);
            //     //return items.itemData[0]
            // },

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