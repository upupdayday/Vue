import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: []
    },
    created: function() {
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
            window.localStorage.setItem('mytodoList', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
            dataString = JSON.stringify(this.newTodo)
            window.localStorage.setItem('mynewTodo', dataString)

        }

        let oldDataString = window.localStorage.getItem('mytodoList')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []

        oldDataString = window.localStorage.getItem('mynewTodo')
        oldData = JSON.parse(oldDataString)
        this.newTodo = oldData || []

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
        }
    }
})

var d = new Date()
console.log(d)