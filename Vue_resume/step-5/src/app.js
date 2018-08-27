import Vue from 'vue';
import AV from 'leancloud-storage';

var APP_ID = 'q1m18i6vGWFPNKyecoKuo4OW-gzGzoHsz';
var APP_KEY = 'DglvfX7JwRpd4j4spbAeM4ss';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


var app_ent = new Vue({
    el: '#app',
    data: {
        actionType: 'signUp',
        formData: {
            username: '',
            password: ''
        },
        newTodo: '',
        todoList: [],
        currentUser: null,
    },
    computed: {
        SignupObject: function() {
            return {
                active: this.actionType === "signUp"
            }
        },
        LoginObject: function() {
            return {
                active: this.actionType === "login"
            }
        }
    },
    created: function() {
        this.currentUser = this.getCurrentUser();
        this.fetchTodos();
    },
    methods: {
        fetchTodos: function() {
            console.log('ffff')
            if (this.currentUser) {
                var query = new AV.Query('AllTodos');
                query.find()
                    .then((todos) => {
                        let avAllTodos = todos[0] // 因为理论上 AllTodos 只有一个，所以我们取结果的第一项
                        let id = avAllTodos.id
                        this.todoList = JSON.parse(avAllTodos.attributes.content) // 为什么有个 attributes？因为我从控制台看到的
                        this.todoList.id = id // 为什么给 todoList 这个数组设置 id？因为数组也是对象啊
                    }, function(error) {
                        console.error(error)
                    })
            }
        },

        updateTodos: function() {
            // 想要知道如何更新对象，先看文档 https://leancloud.cn/docs/leanstorage_guide-js.html#更新对象
            let dataString = JSON.stringify(this.todoList) // JSON 在序列化这个有 id 的数组的时候，会得出怎样的结果？
            let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id)
            avTodos.set('content', dataString)
            avTodos.save().then(() => {
                console.log('更新成功')
            })
        },

        saveTodos: function() {
            let dataString = JSON.stringify(this.todoList)
            var AVTodos = AV.Object.extend('AllTodos');
            var avTodos = new AVTodos();

            var acl = new AV.ACL()
            acl.setReadAccess(AV.User.current(), true) // 只有这个 user 能读
            acl.setWriteAccess(AV.User.current(), true) // 只有这个 user 能写

            avTodos.set('content', dataString);
            avTodos.setACL(acl) // 设置访问控制
            avTodos.save().then((todo) => {
                this.todoList.id = todo.id // 一定要记得把 id 挂到 this.todoList 上，否则下次就不会调用 updateTodos 了
                console.log('保存成功');
            }, function(error) {
                console.log('保存失败');
            });
        },

        saveOrUpdateTodos: function() {
            if (this.todoList.id) {
                this.updateTodos()
            } else {
                this.saveTodos()
            }
        },

        getDate: function(d) {
            return d.toLocaleString();
        },

        addTodo: function() {
            let d = new Date();
            this.todoList.push({
                title: this.newTodo,
                createdAt: this.getDate(d),
                done: false
            })
            this.newTodo = '';
            this.saveOrUpdateTodos(); // 不能用 saveTodos 了
        },

        removeTodo: function(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
            this.saveOrUpdateTodos(); // 不能用 saveTodos 了

        },

        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => { // 👈，将 function 改成箭头函数，方便使用 this
                this.currentUser = this.getCurrentUser() // 👈
            }, (error) => {
                console.log('注册失败') // 👈
            });
        },

        login: function() {
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => { // 👈
                this.currentUser = this.getCurrentUser() // 👈
                this.fetchTodos();
            }, function(error) {
                console.log('登录失败') // 👈
            });
        },

        getCurrentUser: function() { // 👈
            let current = AV.User.current();
            if (current) {
                let { id, createdAt, attributes: { username } } = current;
                return { id, username, createdAt };
            } else {
                return null;
            }
        },

        logout: function() {
            AV.User.logOut();
            this.currentUser = null;
            // window.location.reload()
        }
    }
})

var d = new Date()
console.log(d)