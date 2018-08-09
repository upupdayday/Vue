import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: []
    },
    methods: {
        addTodo: function() {
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
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