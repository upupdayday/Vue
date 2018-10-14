import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
        currentTab: 'profile',
        resume: {
            itemTalbe: [
                { itemName: 'profile', icon: 'shenfenzheng' },
                { itemName: 'work', icon: 'ziyuan' },
                { itemName: 'study', icon: 'book' },
                { itemName: 'project', icon: 'xiangmu' },
                { itemName: 'reward', icon: 'jiangbei' },
                { itemName: 'contact', icon: 'phone' },
            ],
            profile: {
                button: 'no',
                title: '个人信息',
                itemData: [{
                    name: '',
                    city: '',
                    birth: ''
                }, ],
                labels: {
                    name: '姓名',
                    city: '城市',
                    birth: '出生日期'
                },
            },
            contact: {
                button: 'no',
                title: '联系方式',
                itemData: [{
                    email: '',
                    mobile: '',
                    weixin: '',
                    QQ: ''
                }, ],
                labels: {
                    email: '邮箱',
                    mobile: '手机',
                    weixin: '微信',
                    QQ: 'QQ'
                },
            },

            work: {
                button: 'yes',
                title: '工作经历',
                itemData: [{
                    company: '',
                    duration: '',
                    content: ''
                }, ],
                labels: {
                    company: '公司',
                    duration: '时间',
                    content: '工作内容'
                },
            },

            study: {
                button: 'yes',
                title: '学习经历',
                itemData: [{
                    school: '',
                    duration: '',
                    major: '',
                    degree: ''
                }, ],
                labels: {
                    school: '学校',
                    duration: '时间',
                    major: '专业',
                    degree: '学位'
                },
            },

            project: {
                button: 'yes',
                title: '项目经历',
                itemData: [{
                    name: '',
                    content: ''
                }, ],
                labels: {
                    name: '项目名称',
                    content: '项目内容'
                },
            },

            reward: {
                button: 'yes',
                title: '获奖情况',
                itemData: [{
                    name: '',
                    content: ''
                }, ],
                labels: {
                    name: '奖项名称',
                    content: '奖项内容'
                },
            }
        },
    },
    mutations: {
        switchTab(state, payload) {
            state.currentTab = payload;
        }
    }
})