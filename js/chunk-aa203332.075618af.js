(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa203332"],{"04b0":function(t,n,e){t.exports=e.p+"media/slot-in.bd17171e.mp3"},"0836":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",[e("svg",{attrs:{viewBox:"0 0 83 75",width:"83",height:"75",x:"48.05",y:"64.94"}},[e("rect",{attrs:{width:"83",height:"75",rx:"3.01",ry:"3.01"}}),e("g",{attrs:{id:"Time"}},[e("rect",{staticClass:"cls-1",attrs:{x:"2.92",y:"64.51",width:"76.89",height:"7.45"}}),t._l(t.countDownBars,(function(t){return e("rect",{key:t.id,attrs:{x:t.x,y:"64.79",width:"4.85",height:"6.88"}})}))],2),e("text",{staticClass:"cls-2",attrs:{transform:"translate(17.93 33.75)"}},[t._v("SLOT"),e("tspan",{attrs:{x:"15",y:"18"}},[t._v("IN")])])])])},i=[],r=(e("a434"),e("341a")),o=e("9e85"),a=e("1e5c"),c={name:"SlotIn",data:function(){return{countDownBars:[{id:1,x:"4.44"},{id:2,x:"12.11"},{id:3,x:"19.78"},{id:4,x:"27.44"},{id:5,x:"35.11"},{id:6,x:"42.77"},{id:7,x:"50.44"},{id:8,x:"58.11"},{id:9,x:"65.77"},{id:10,x:"73.44"}],interval:null}},mounted:function(){this.registerListeners(),this.startCountDown()},beforeDestroy:function(){this.unregisterListeners()},methods:{registerListeners:function(){r["a"].$on(o["h"].SlotIn,this.onSlotIn)},unregisterListeners:function(){r["a"].$off(o["h"].SlotIn)},startCountDown:function(){var t=this,n=new a["Howl"]({src:e("04b0"),volume:1,loop:!1});this.interval=setInterval((function(){t.countDownBars.length>0&&(t.$store.state.session.sound&&n.play(),t.countDownBars.splice(t.countDownBars.length-1,1),0===t.countDownBars.length&&t.$store.commit("session/setCurrentScene",o["j"].MegaBuster))}),500)},onSlotIn:function(t){clearInterval(this.interval),this.$store.commit("battle/addChip",t),this.$store.commit("session/setCurrentScene",o["j"].ChipStatus)}}},u=c,l=(e("d10b"),e("2877")),h=Object(l["a"])(u,s,i,!1,null,"7cd619fc",null);n["default"]=h.exports},d10b:function(t,n,e){"use strict";var s=e("fe5c"),i=e.n(s);i.a},fe5c:function(t,n,e){}}]);
//# sourceMappingURL=chunk-aa203332.075618af.js.map