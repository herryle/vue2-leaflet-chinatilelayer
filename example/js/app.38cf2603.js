(function(e){function a(a){for(var l,n,u=a[0],i=a[1],p=a[2],s=0,v=[];s<u.length;s++)n=u[s],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&v.push(t[n][0]),t[n]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);c&&c(a);while(v.length)v.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],l=!0,u=1;u<o.length;u++){var i=o[u];0!==t[i]&&(l=!1)}l&&(r.splice(a--,1),e=n(n.s=o[0]))}return e}var l={},t={app:0},r=[];function n(a){if(l[a])return l[a].exports;var o=l[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=l,n.d=function(e,a,o){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)n.d(o,l,function(a){return e[a]}.bind(null,l));return o},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=a,u=u.slice();for(var p=0;p<u.length;p++)a(u[p]);var c=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"034f":function(e,a,o){"use strict";var l=o("85ec"),t=o.n(l);t.a},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var l=o("2b0e"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"selectmap"},[o("el-select",{attrs:{placeholder:"请选择底图"},on:{change:e.changeLayerName},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.layerOptions,(function(a){return o("el-option-group",{key:a.label,attrs:{label:a.label}},e._l(a.options,(function(e){return o("el-option",{key:e.value,attrs:{value:e.value}})})),1)})),1)],1),o("l-map",{staticStyle:{height:"100vh"},attrs:{zoom:e.zoom,center:e.center}},[o("l-china-tilelayer",{attrs:{layerName:e.layerName,options:e.options}})],1)],1)},r=[],n=(o("6cc5"),o("2699")),u=o("1289"),i=o.n(u),p={name:"app",components:{LMap:n["a"],LChinaTilelayer:i.a},data:function(){return{layerOptions:[{label:"TianDiTu",options:[{value:"TianDiTu.Normal.Map"},{value:"TianDiTu.Satellite.Map"},{value:"TianDiTu.Terrain.Map"}]},{label:"GaoDe",options:[{value:"GaoDe.Normal.Map"},{value:"GaoDe.Satellite.Map"},{value:"GaoDe.Satellite.Annotion"}]},{label:"Google",options:[{value:"Google.Normal.Map"},{value:"Google.Satellite.Map"},{value:"Google.Satellite.Annotion"}]},{label:"Geoq",options:[{value:"Geoq.Normal.Map"},{value:"Geoq.Normal.PurplishBlue"},{value:"Geoq.Normal.Gray"},{value:"Geoq.Normal.Warm"},{value:"Geoq.Normal.Hydro"}]},{label:"Geoq",options:[{value:"Geoq.Normal.Map"},{value:"Geoq.Normal.PurplishBlue"},{value:"Geoq.Normal.Gray"},{value:"Geoq.Normal.Warm"},{value:"Geoq.Normal.Hydro"}]},{label:"Geoq",options:[{value:"Geoq.Normal.Map"},{value:"Geoq.Normal.PurplishBlue"},{value:"Geoq.Normal.Gray"},{value:"Geoq.Normal.Warm"},{value:"Geoq.Normal.Hydro"}]},{label:"OSM",options:[{value:"OSM.Normal.Map"}]}],value:"",zoom:13,layerName:"Geoq.Normal.PurplishBlue",options:{maxZoom:18,minZoom:9},center:[32.03956857467441,118.63768386683661]}},methods:{changeLayerName:function(){this.layerName=this.value}}},c=p,s=(o("034f"),o("2877")),v=Object(s["a"])(c,t,r,!1,null,null,null),f=v.exports,m=o("5c96"),d=o.n(m);o("0fae");l["default"].use(d.a),l["default"].config.productionTip=!1,new l["default"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,a,o){}});
//# sourceMappingURL=app.38cf2603.js.map