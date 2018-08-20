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
    created: function() {
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
            window.localStorage.setItem('mytodoList', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
            dataString = JSON.stringify(this.newTodo)
            window.localStorage.setItem('mynewTodo', dataString)
        }

        let oldDataString = window.localStorage.getItem('mytodoList');
        let oldData = JSON.parse(oldDataString);
        this.todoList = oldData || [];

        oldDataString = window.localStorage.getItem('mynewTodo');
        oldData = JSON.parse(oldDataString);
        this.newTodo = oldData || [];

        this.currentUser = this.getCurrentUser();

    },
    methods: {
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
        },
        removeTodo: function(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        },
        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => { // 👈，将 function 改成箭头函数，方便使用 this
                this.currentUser = this.getCurrentUser() // 👈
            }, (error) => {
                alert('注册失败') // 👈
            });
        },
        login: function() {
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => { // 👈
                this.currentUser = this.getCurrentUser() // 👈
            }, function(error) {
                alert('登录失败') // 👈
            });
        },
        getCurrentUser: function() { // 👈
            let current = AV.User.current();
            if (current) {

            } else {
                return null
            }

            let { id, createdAt, attributes: { username } } = current;
            // 上面这句话看不懂就得看 MDN 文档了
            // 我的《ES 6 新特性列表》里面有链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            return { id, username, createdAt } // 看文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#ECMAScript_6%E6%96%B0%E6%A0%87%E8%AE%B0
        },
        logout: function() {
            AV.User.logOut();
            this.currentUser = null
            window.location.reload()
        }
    }
})

var d = new Date()
console.log(d)