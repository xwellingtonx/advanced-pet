(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74104fdc"],{"2c53":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("g",[e("svg",{attrs:{viewBox:"0 0 83 75",width:"83",height:"75",x:"48.05",y:"64.94"}},[e("rect",{attrs:{width:"83",height:"75",rx:"3.01",ry:"3.01"}}),e("rect",{attrs:{x:"3",y:"3",width:"77",height:"69"}}),e("rect",{staticClass:"cls-1",attrs:{x:"15.43",y:"14.02",width:"52.24",height:"52.24"}}),e("rect",{attrs:{x:"20.55",y:"19.13",width:"41.9",height:"41.9"}}),t._l(this.checkeredAreas,(function(t){return e("g",{key:t.id,staticClass:"checkered-area",style:{transform:"translate("+t.posX+"px,"+t.posY+"px)"}},[e("polygon",{staticClass:"cls-1",attrs:{points:"25.33 28.72 25.33 26.32 22.94 26.32 22.94 28.72 20.55 28.72 20.55 31.11 22.95 31.11 22.95 28.72 25.33 28.72"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"27.72 28.72 25.34 28.72 25.34 31.11 27.73 31.11 27.73 28.72 30.11 28.72 30.11 26.32 27.72 26.32 27.72 28.72"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"20.55 23.93 20.55 21.53 22.94 21.53 22.94 19.14 20.55 19.14 20.55 26.32 22.94 26.32 22.94 23.93 20.55 23.93"}}),e("rect",{staticClass:"cls-1",attrs:{x:"25.34",y:"19.14",width:"2.39",height:"2.39"}}),e("rect",{staticClass:"cls-1",attrs:{x:"25.33",y:"23.93",width:"2.39",height:"2.39"}}),e("rect",{staticClass:"cls-1",attrs:{x:"22.95",y:"21.53",width:"2.39",height:"2.39"}}),e("path",{staticClass:"cls-1",attrs:{d:"M30.12,19.14v2.39H27.73v2.4h2.39v2.39h2.39v2.4H30.12v2.39h2.4v-12Zm2.4,4.79h-2.4v-2.4h2.4Z"}})])})),e("polygon",{staticClass:"cls-1",attrs:{points:"7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18"}}),e("path",{staticClass:"cls-1",attrs:{d:"M62.41,46.07H50.49v-12h12v-3h-12V19.31h0v-.18h-3v.18h0v11.8h-12v-12h-3v12h-12v3h12v12h-12v3h12V61h3v-12h12V61h3v-12h12v-3Zm-14.92,0h-12v-12h12Z"}})],2)])},c=[],n=(e("99af"),e("5530")),i=e("2f62"),s=e("f8b7"),o=e("9a36");e("cb29"),e("7db0"),e("d81d"),e("45fc");function h(){var t=[];return t.push({areaSize:1,matrixIndexes:[{r:1,c:1}]}),t.push({areaSize:2,matrixIndexes:[{r:1,c:0},{r:1,c:1}]}),t.push({areaSize:3,matrixIndexes:[{r:1,c:0},{r:1,c:1},{r:1,c:2}]}),t.push({areaSize:4,matrixIndexes:[{r:1,c:0},{r:1,c:1},{r:0,c:2},{r:2,c:2}]}),t.push({areaSize:5,matrixIndexes:[{r:0,c:1},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:2,c:1}]}),t.push({areaSize:6,matrixIndexes:[{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1}]}),t.push({areaSize:9,matrixIndexes:[{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:2,c:0},{r:2,c:1},{r:2,c:2}]}),t}function d(t){var r=h();if(t.Classe===o["a"].Standard){if(t.AT<5)return r.find((function(r){return r.areaSize===t.AT}));var e=t.AT-t.CP;return r.find((function(t){return t.areaSize===(e<=0?2:e)}))}return t.AT>6?r.find((function(t){return 9===t.areaSize})):r.find((function(r){return r.areaSize===t.AT}))}function u(t){var r=Array(3).fill(null).map((function(){return Array(3).fill(0)})),e=d(t);if(e)for(var a=0;a<r.length;a++)for(var c=0;c<r.length;c++)e.matrixIndexes.some((function(t){return t.r===a&&t.c===c}))&&(r[a][c]=1);return r}var f={name:"ChipAttackAreaScene",computed:Object(n["a"])({},Object(i["b"])({pluggedChip:"battle/getLastChip"})),data:function(){return{checkeredAreas:[]}},mounted:function(){if(s["a"].$on(o["c"].Left,this.onLeft),this.pluggedChip)for(var t=u(this.pluggedChip),r=0;r<3;r++)for(var e=0;e<3;e++)1===t[r][e]&&this.checkeredAreas.push({id:"".concat(r,"_").concat(e),posX:15*e,posY:15*r})},beforeDestroy:function(){s["a"].$off(o["c"].Left)},methods:{onLeft:function(){this.$store.commit("session/setCurrentScene",o["d"].ChipElement)}}},l=f,p=(e("9d3a"),e("2877")),v=Object(p["a"])(l,a,c,!1,null,"91d82900",null);r["default"]=v.exports},"81d5":function(t,r,e){"use strict";var a=e("7b0b"),c=e("23cb"),n=e("50c4");t.exports=function(t){var r=a(this),e=n(r.length),i=arguments.length,s=c(i>1?arguments[1]:void 0,e),o=i>2?arguments[2]:void 0,h=void 0===o?e:c(o,e);while(h>s)r[s++]=t;return r}},"99af":function(t,r,e){"use strict";var a=e("23e7"),c=e("d039"),n=e("e8b5"),i=e("861d"),s=e("7b0b"),o=e("50c4"),h=e("8418"),d=e("65f0"),u=e("1dde"),f=e("b622"),l=e("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",x=l>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=u("concat"),y=function(t){if(!i(t))return!1;var r=t[p];return void 0!==r?!!r:n(t)},b=!x||!m;a({target:"Array",proto:!0,forced:b},{concat:function(t){var r,e,a,c,n,i=s(this),u=d(i,0),f=0;for(r=-1,a=arguments.length;r<a;r++)if(n=-1===r?i:arguments[r],y(n)){if(c=o(n.length),f+c>v)throw TypeError(g);for(e=0;e<c;e++,f++)e in n&&h(u,f,n[e])}else{if(f>=v)throw TypeError(g);h(u,f++,n)}return u.length=f,u}})},"9d3a":function(t,r,e){"use strict";var a=e("f3d0"),c=e.n(a);c.a},cb29:function(t,r,e){var a=e("23e7"),c=e("81d5"),n=e("44d2");a({target:"Array",proto:!0},{fill:c}),n("fill")},d81d:function(t,r,e){"use strict";var a=e("23e7"),c=e("b727").map,n=e("1dde"),i=e("ae40"),s=n("map"),o=i("map");a({target:"Array",proto:!0,forced:!s||!o},{map:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},f3d0:function(t,r,e){}}]);
//# sourceMappingURL=chunk-74104fdc.dbec3328.js.map