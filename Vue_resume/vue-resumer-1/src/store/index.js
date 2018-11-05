import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
        previewMode: false,
        currentTab: 'profile',
        user: {
            id: '',
            username: ''
        },
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
                    name: '李小明sdf',
                    city: '北京',
                    birth: '1990.01.01'
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
                    email: 'li.xiaoming@163.com',
                    mobile: '12345678',
                    weixin: '12345678',
                    QQ: '12345678'
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
                        company: '百度sdfs',
                        duration: '2012.8-2013.10',
                        content: `专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                        我的主要工作如下:
                        1. 完成既定产品需求。
                        2. 修复 bug。`
                    },
                    {
                        company: '阿狸',
                        duration: '2013.10-至今',
                        content: `专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                        我的主要工作如下:
                        1. 完成既定产品需求。
                        2. 修复 bug。`
                    },
                ],
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
                        school: '前端大学',
                        duration: '2008-09-2012.08',
                        major: '前端专业',
                        degree: '学士'
                    },
                    {
                        school: '前端高级大学',
                        duration: '2008-09-2012.08',
                        major: '前端高级专业',
                        degree: '硕士'
                    },
                ],
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
                    name: 'xxxx网站设计',
                    content: '网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计'
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
                    name: '前端设计大赛',
                    content: '一等奖'
                }, ],
                labels: {
                    name: '奖项名称',
                    content: '奖项内容'
                },
            }
        },
    },
    mutations: {
        /*Object.assign不改变state的引用,state = payload改变了原来对象的引用,
        state之后的变化将追踪不到*/
        initState(state, payload) {
            Object.assign(state, payload)
        },
        increment(state) {
            state.count++
        },
        switchTab(state, payload) {
            state.currentTab = payload;
        },
        updateResume(state, { field, index, key, value }) {
            state.resume[field].itemData[index][key] = value
        },
        addItemData(state, { field, empty }) {
            state.resume[field].itemData.push(empty)
        },
        deleteItemData(state, { field, index }) {
            // console.log(state.resume[field].itemData)
            state.resume[field].itemData.splice(index, 1)
        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
                // console.log(state.user)
        },
        removeUser(state) {
            state.user.id = ''
        },
        switchPreview(state, payload) {
            state.previewMode = payload;
        }
    }
})