"use strict";(self["webpackChunkadvanced_pet"]=self["webpackChunkadvanced_pet"]||[]).push([[2540],{32540:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var s=function(){var e=this,t=e._self._c;return t("g",[t("svg",{attrs:{viewBox:"0 0 83 75",width:"83",height:"75",x:"48.05",y:"64.94"}},[t("rect",{attrs:{width:"83",height:"75",rx:"3.01",ry:"3.01"}}),t("rect",{staticClass:"primary-color",attrs:{x:"3",y:"3",width:"77",height:"69"}}),t("polygon",{attrs:{points:"75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18"}}),t("polygon",{attrs:{points:"7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18"}}),t("text",{staticClass:"pet-font",attrs:{transform:"translate(6.79 29.55)"}},[e._v("S - Clear")]),e._l(e.currentStageClear,(function(e){return t("rect",{key:e.id,attrs:{x:e.x,y:"34.24",width:"4.46",height:"5.53"}})})),t("text",{staticClass:"pet-font recovery-text",attrs:{transform:"translate(6.93 57.33)"}},[e._v("Recovery")]),e._l(e.currentRecovery,(function(e){return t("rect",{key:e.id+"_recov",attrs:{x:e.x,y:"62.47",width:"4.46",height:"5.53"}})}))],2)])},i=[],n=r(90408),a=r(26173),o=r(37878),c=r(16933),h={name:"NaviStageDetails",data(){return{bars:[{id:1,x:"6.27"},{id:2,x:"13.51"},{id:3,x:"20.74"},{id:4,x:"27.98"},{id:5,x:"35.22"},{id:6,x:"42.46"},{id:7,x:"49.69"},{id:8,x:"56.93"},{id:9,x:"64.17"},{id:10,x:"71.4"}],currentStageClear:[],currentRecovery:[]}},computed:{...(0,n.rn)({stageClear:e=>e.session.stageClear,deviceType:e=>e.session.deviceType,currentWorld:e=>e.session.currentWorld,currentStage:e=>e.session.currentStage,recovery:e=>e.session.navi.recovery})},mounted(){this.registerListeners();var e=c.Z.getCurrentStage(this.deviceType,this.currentWorld,this.currentStage),t=this.stageClear/e.stageClear,r=this.recovery/100;this.currentStageClear=this.bars.slice(0,Math.floor(t*this.bars.length)),this.currentRecovery=this.bars.slice(0,Math.floor(r*this.bars.length))},beforeDestroy(){this.unregisterListeners()},methods:{registerListeners(){a.Z.$on(o.zW.Right,this.onRight),a.Z.$on(o.zW.Left,this.onLeft),a.Z.$on(o.zW.Cancel,this.onCancel)},unregisterListeners(){a.Z.$off(o.zW.Right),a.Z.$off(o.zW.Left),a.Z.$off(o.zW.Cancel)},onRight(){this.$store.commit("session/setCurrentScene",o.Pm.NaviVsDetails)},onLeft(){this.$store.commit("session/setCurrentScene",o.Pm.NaviLevelDetails)},onCancel(){this.$store.commit("session/setCurrentScene",o.Pm.StandBy)}}},l=h,u=r(1001),d=(0,u.Z)(l,s,i,!1,null,"afbb2132",null),g=d.exports}}]);
//# sourceMappingURL=2540.f5bb232b.js.map