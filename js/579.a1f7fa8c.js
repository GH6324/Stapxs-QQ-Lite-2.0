"use strict";(self["webpackChunkstapxs_qq_lite"]=self["webpackChunkstapxs_qq_lite"]||[]).push([[579],{30579:function(n,t,s){s.r(t),s.d(t,{default:function(){return N}});var e=s(73396),l=s(87139),i=s(49242);const _=(0,e._)("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"},null,-1),o=[_],a={class:"sys-not-list"},u={key:0,class:"sys_not_new_friend"},d=["src"],r=(0,e._)("br",null,null,-1),c=["onClick"],p=["onClick"],w={key:1,class:"sys_not_new_friend"},m=["src"],y=(0,e._)("span",{style:{display:"none"}},null,-1),g=["onClick"],v=["onClick"],b={key:2,class:"sys_not_new_friend"},f=(0,e._)("span",null,"不支持的消息类型",-1),k={style:{color:"var(--color-font-2)","word-wrap":"anywhere"}};function h(n,t,s,_,h,q){return(0,e.wg)(),(0,e.iD)("div",{id:"chat-pan",class:(0,l.C_)("chat-pan sys-not-pan"+(n.runtimeData.tags.openSideBar?" open":"")+(n.runtimeData.sysConfig.opt_no_window?" withBar":""))},[(0,e._)("div",null,[((0,e.wg)(),(0,e.iD)("svg",{onClick:t[0]||(t[0]=(...t)=>n.exit&&n.exit(...t)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},o)),(0,e._)("span",null,(0,l.zw)(n.$t("sys_notice")),1)]),(0,e._)("div",a,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.runtimeData.systemNoticesList,((t,s)=>((0,e.wg)(),(0,e.iD)(e.HY,{key:"sysNot-"+s},["friend"==t.request_type&&"add"==t.sub_type?((0,e.wg)(),(0,e.iD)("div",u,[(0,e._)("span",null,(0,l.zw)(n.$t("sys_notice_new_friend")),1),(0,e._)("div",null,[(0,e._)("div",null,[(0,e._)("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+t.user_id},null,8,d),(0,e._)("div",null,[(0,e._)("span",null,(0,l.zw)(t.nickname),1),(0,e._)("div",null,[(0,e._)("span",null,(0,l.zw)(("female"==t.sex?"♀ ":"♂ ")+t.age),1),r,(0,e._)("span",null,(0,l.zw)(t.comment),1)]),(0,e._)("span",null,(0,l.zw)(n.$t("sys_notice_new_friend_from")+t.source),1)])]),(0,e._)("div",null,[(0,e._)("button",{onClick:s=>n.dealFriend(t,!1),class:"ss-button"},(0,l.zw)(n.$t("btn_reject")),9,c),(0,e._)("button",{onClick:s=>n.dealFriend(t,!0),class:"ss-button"},(0,l.zw)(n.$t("btn_accept")),9,p)])])])):"group"==t.request_type&&"add"==t.sub_type?((0,e.wg)(),(0,e.iD)("div",w,[(0,e._)("span",null,(0,l.zw)(n.$t("sys_notice_new_group_nmember")),1),(0,e._)("div",null,[(0,e._)("div",null,[(0,e._)("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+t.user_id},null,8,m),(0,e._)("div",null,[(0,e._)("span",null,(0,l.zw)(t.nickname),1),(0,e._)("div",null,[y,(0,e._)("span",{style:(0,l.j5)(""==t.comment?"font-style: italic;":"")},(0,l.zw)(""==t.comment?n.$t("sys_notice_new_group_nmember_no_comment"):t.comment),5)]),(0,e._)("span",null,(0,l.zw)(n.$t("sys_notice_new_group_nmember_add")+t.group_name),1)])]),(0,e._)("div",null,[(0,e._)("button",{onClick:s=>n.dealGroupAdd(t,!1),class:"ss-button"},(0,l.zw)(n.$t("btn_reject")),9,g),(0,e._)("button",{onClick:s=>n.dealGroupAdd(t,!0),class:"ss-button"},(0,l.zw)(n.$t("btn_accept")),9,v)])])])):(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",b,[f,(0,e._)("a",k,(0,l.zw)(JSON.stringify(t)),1)],512)),[[i.F8,"development"==n.NODE_ENV]])],64)))),128))])],2)}var q=s(31264),z=s(55252),C=(0,e.aZ)({name:"ChatSystemNotice",components:{},data(){return{runtimeData:q._1,NODE_ENV:"production"}},methods:{exit(){this.$emit("userClick",{id:0})},dealFriend(n,t){z.wR.send("set_friend_add_request",{flag:n.flag,approve:t},"setFriendAdd")},dealGroupAdd(n,t){z.wR.send("set_group_add_request",{flag:n.flag,approve:t,sub_type:n.sub_type},"setGroupAdd")}},mounted(){this.$watch((()=>q._1.systemNoticesList),(()=>{q._1.systemNoticesList&&q._1.systemNoticesList.length<=0&&this.exit()}))}}),D=s(40089);const $=(0,D.Z)(C,[["render",h]]);var N=$}}]);
//# sourceMappingURL=579.a1f7fa8c.js.map