(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7323e154"],{"5a67":function(t,e,s){"use strict";var n=s("f46b"),i=s.n(n);i.a},ef10:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("g",[s("svg",{attrs:{viewBox:"0 0 83 75",width:"83",height:"75",x:"48.05",y:"64.94"}},[s("rect",{attrs:{width:"83",height:"75",rx:"3.01",ry:"3.01"}}),s("path",{staticClass:"cls-1",attrs:{d:"M.42,1.5A3,3,0,0,1,3,0H80a3,3,0,0,1,2.58,1.5Z"}}),s("rect",{staticClass:"cls-1",attrs:{y:"5.78",width:"83",height:"6.18"}}),s("rect",{staticClass:"cls-2",attrs:{y:"15.56",width:"83",height:"5.71"}}),s("path",{staticClass:"cls-1",attrs:{d:"M.42,73.5A3,3,0,0,0,3,75H80a3,3,0,0,0,2.58-1.5Z"}}),s("rect",{staticClass:"cls-1",attrs:{y:"63.04",width:"83",height:"6.18"}}),s("rect",{staticClass:"cls-2",attrs:{y:"53.73",width:"83",height:"5.71"}}),s("rect",{staticClass:"cls-2",attrs:{y:"24.63",width:"83",height:"25.79"}}),s("text",{staticClass:"cls-3",attrs:{transform:"translate(9.26 44.92)"}},[t._v("Option")])])])},i=[],a=s("341a"),o=s("9e85"),r={name:"Option",mounted:function(){this.registerListeners()},beforeDestroy:function(){this.unregisterListeners()},methods:{registerListeners:function(){a["a"].$on(o["h"].Right,this.moveToVSBattleScene),a["a"].$on(o["h"].Left,this.moveToStatusScene),a["a"].$on(o["h"].Cancel,this.moveToStandByScene),a["a"].$on(o["h"].Confirmation,this.moveToOptionTimeScene)},unregisterListeners:function(){a["a"].$off(o["h"].Right),a["a"].$off(o["h"].Left),a["a"].$off(o["h"].Cancel),a["a"].$off(o["h"].Confirmation)},moveToStandByScene:function(){this.$store.commit("session/setCurrentScene",o["j"].StandBy)},moveToVSBattleScene:function(){this.$store.commit("session/setCurrentScene",o["j"].PlayerVSPlayer)},moveToStatusScene:function(){this.$store.commit("session/setCurrentScene",o["j"].NaviStatus)},moveToOptionTimeScene:function(){this.$store.commit("session/setCurrentScene",o["j"].OptionTime)}}},c=r,h=(s("5a67"),s("2877")),f=Object(h["a"])(c,n,i,!1,null,"1508080a",null);e["default"]=f.exports},f46b:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7323e154.493492be.js.map