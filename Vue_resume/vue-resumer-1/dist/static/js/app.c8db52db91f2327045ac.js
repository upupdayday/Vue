webpackJsonp([1],{DTU9:function(e,t){},EvOM:function(e,t){},LVYe:function(e,t){},MPzD:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("/5sW"),r=(n("uMhA"),n("MPzD"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"topbar"}},[this._m(0),this._v(" "),t("div",{staticClass:"action"},[t("el-button",{attrs:{type:"primary"}},[this._v("登录")]),this._v(" "),t("el-button",[this._v("注册")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("span",[this._v("Resumer")])])}]});var s=n("VU/8")(null,r,!1,function(e){n("LVYe")},null,null).exports,a=n("fZjL"),o=n.n(a),u={props:["items"],computed:{count:function(){return this.$store.state.count},keys:function(){return o()(items.itemData[0])}},methods:{add:function(){this.$store.commit("increment")},addItem:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.itemData.push(e)},deleteItem:function(e){this.items.itemData.splice(e,1)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.items.title))]),e._v(" "),n("el-form",[e._l(e.items.itemData,function(t,i){return n("div",{staticClass:"experienceEditorWrapper"},["yes"===e.items.button?n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(t){e.deleteItem(i)}}}):e._e(),e._v(" "),e._l(e.keys,function(i){return n("el-form-item",{key:i,attrs:{label:e.items.labels[i]}},[n("el-input",{model:{value:t[i],callback:function(n){e.$set(t,i,n)},expression:"item[key]"}})],1)}),e._v(" "),"yes"===e.items.button?n("hr"):e._e()],2)}),e._v(" "),"yes"===e.items.button?n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.addItem}},[e._v("添加经历")]):e._e()],2)],1)},staticRenderFns:[]},m={components:{SubEditor:n("VU/8")(u,c,!1,null,null,null).exports},data:function(){return{}},computed:{currentTab:{get:function(){return this.$store.state.currentTab},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ol",e._l(e.resume.itemTalbe,function(t){return n("li",{class:{active:e.currentTab===t.itemName},on:{click:function(n){e.currentTab=t.itemName}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))]),e._v(" "),n("ol",{staticClass:"panels"},e._l(e.resume.itemTalbe,function(t){return n("li",{class:{active:e.currentTab===t.itemName}},[n("SubEditor",{attrs:{items:e.resume[t.itemName]}})],1)}))])},staticRenderFns:[]};var v=n("VU/8")(m,l,!1,function(e){n("mpXi")},null,null).exports,_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.profile,expression:"resume.profile"}],attrs:{"data-name":"profile"}},[n("h1",[e._v(e._s(e.resume.profile.itemData[0].name))]),e._v(" "),n("h2",[e._v(e._s(e.resume.profile.title))]),e._v(" "),n("p",[e._v("城市："+e._s(e.resume.profile.itemData[0].city))]),e._v(" "),n("p",[e._v("出生日期："+e._s(e.resume.profile.itemData[0].birth))])]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.work,expression:"resume.work"}],attrs:{"data-name":"work"}},[n("h2",[e._v(e._s(e.resume.work.title))]),e._v(" "),n("ol",e._l(e.resume.work.itemData,function(t){return n("li",[n("h3",[e._v(e._s(t.company)+"  "+e._s(t.duration))]),e._v(" "),n("p",[e._v(e._s(t.content))])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.study,expression:"resume.study"}],attrs:{"data-name":"study"}},[n("h2",[e._v(e._s(e.resume.study.title))]),e._v(" "),n("ol",e._l(e.resume.study.itemData,function(t){return n("li",[n("h3",[e._v(e._s(t.school)+"   "+e._s(t.duration))]),e._v(" "),n("p",[e._v("专业："+e._s(t.major))]),e._v(" "),n("p",[e._v("学位："+e._s(t.degree))])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.project,expression:"resume.project"}],attrs:{"data-name":"project"}},[n("h2",[e._v(e._s(e.resume.project.title))]),e._v(" "),n("ol",e._l(e.resume.project.itemData,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v(e._s(t.content))])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.reward,expression:"resume.reward"}],attrs:{"data-name":"reward"}},[n("h2",[e._v(e._s(e.resume.reward.title))]),e._v(" "),n("ol",e._l(e.resume.reward.itemData,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v(e._s(t.content))])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contact,expression:"resume.contact"}],attrs:{"data-name":"contact"}},[n("h2",[e._v(e._s(e.resume.contact.title))]),e._v(" "),n("ol",e._l(e.resume.contact.itemData[0],function(t,i){return n("li",[n("h3",[e._v(e._s(i))]),e._v(" "),n("p",[e._v(e._s(t))])])}))])])},staticRenderFns:[]};var d=n("VU/8")({computed:{resume:function(){return this.$store.state.resume}}},_,!1,function(e){n("EvOM")},null,null).exports,p=n("NYxO");i.default.use(p.a);var f={name:"App",store:new p.a.Store({state:{count:0,currentTab:"profile",resume:{itemTalbe:[{itemName:"profile",icon:"shenfenzheng"},{itemName:"work",icon:"ziyuan"},{itemName:"study",icon:"book"},{itemName:"project",icon:"xiangmu"},{itemName:"reward",icon:"jiangbei"},{itemName:"contact",icon:"phone"}],profile:{button:"no",title:"个人信息",itemData:[{name:"李小明",city:"北京",birth:"1990.01.01"}],labels:{name:"姓名",city:"城市",birth:"出生日期"}},contact:{button:"no",title:"联系方式",itemData:[{email:"li.xiaoming@163.com",mobile:"12345678",weixin:"12345678",QQ:"12345678"}],labels:{email:"邮箱",mobile:"手机",weixin:"微信",QQ:"QQ"}},work:{button:"yes",title:"工作经历",itemData:[{company:"百度",duration:"2012.8-2013.10",content:"专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。\n                        我的主要工作如下:\n                        1. 完成既定产品需求。\n                        2. 修复 bug。"},{company:"阿狸",duration:"2013.10-至今",content:"专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。\n                        我的主要工作如下:\n                        1. 完成既定产品需求。\n                        2. 修复 bug。"}],labels:{company:"公司",duration:"时间",content:"工作内容"}},study:{button:"yes",title:"学习经历",itemData:[{school:"前端大学",duration:"2008-09-2012.08",major:"前端专业",degree:"学士"}],labels:{school:"学校",duration:"时间",major:"专业",degree:"学位"}},project:{button:"yes",title:"项目经历",itemData:[{name:"xxxx网站设计",content:"网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计"}],labels:{name:"项目名称",content:"项目内容"}},reward:{button:"yes",title:"获奖情况",itemData:[{name:"前端设计大赛",content:"一等奖"}],labels:{name:"奖项名称",content:"奖项内容"}}}},mutations:{increment:function(e){e.count++},switchTab:function(e,t){e.currentTab=t}}}),components:{Topbar:s,Editor:v,Preview:d}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("header",[t("Topbar")],1),this._v(" "),t("main",[t("Editor"),this._v(" "),t("Preview")],1)])},staticRenderFns:[]};var b=n("VU/8")(f,h,!1,function(e){n("DTU9")},null,null).exports,w=n("zL8q"),y=n.n(w);n("tvR6");i.default.use(y.a),i.default.config.productionTip=!1,new i.default({el:"#app",render:function(e){return e(b)}})},mpXi:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c8db52db91f2327045ac.js.map