import{c}from"./g2-6ed706d2.js";import{i as d}from"./vscodeInject-00cbac9b.js";import{u as o}from"./umy-table.common-7962b0a6.js";import{n as v}from"./vueConfig-4610971c.js";import"./index-14b8440c.js";import"./index-f37b6d04.js";import"./index-f06350f9.js";const u={name:"Status",components:{UxGrid:o.UxGrid,UxTableColumn:o.UxTableColumn},mixins:[d],data(){return{info:{},activePanel:"processList",process:{fields:[],rows:[]},variableList:{fields:[],rows:[]},statusList:{fields:[],rows:[]},dashBoard:{sessions:{data:[],lock:!1,chart:null,previous:null},queries:{data:[],lock:!1,chart:null,previous:null},traffic:{data:[],lock:!1,chart:null,previous:null}}}},mounted(){function r(t,e){const i=new c.Chart({container:t,autoFit:!0,height:300});return i.data(e),i.line().position("now*value").color("type").size(2),i.render(),i}function s(t,e,i,a){const l=JSON.parse(JSON.stringify(i));if(e.previous||(e.previous=l),e.data.push(...i),a&&a(i,e.previous),e.previous=l,!e.chart)e.chart=r(t,e.data);else{if(e.data.length>=i.length*60)for(let n=0;n<i.length;n++)e.data.shift();e.chart.changeData(e.data)}e.lock=!1}this.on("info",t=>{this.info=t,this.activePanel=["MariaDB","MySQL"].includes(this.info.dbType)?"dashBoard":"processList"}).on("processList",t=>{this.process=t}).on("variableList",t=>{this.variableList=t}).on("statusList",t=>{this.statusList=t}).on("dashBoard",t=>{s("sessions",this.dashBoard.sessions,t.sessions),s("queries",this.dashBoard.queries,t.queries,(e,i)=>{for(let a=0;a<i.length;a++)e[a].value=e[a].value-i[a].value}),s("traffic",this.dashBoard.traffic,t.traffic,(e,i)=>{for(let a=0;a<i.length;a++)e[a].value=(e[a].value-i[a].value)/1e3+"kb"})}).init(),this.emit("processList").emit("variableList").emit("statusList"),this.sendLoadDashBoard(),setInterval(()=>{this.sendLoadDashBoard()},1e3)},methods:{remainHeight(){return window.outerHeight-150},sendLoadDashBoard(){this.dashBoard.sessions.lock||(this.dashBoard.sessions.lock=!0,this.emit("dashBoard"))},changePannel(){switch(this.activePanel){case"processList":this.emit("processList");break;case"variableList":this.emit("variableList");break;case"statusList":this.emit("statusList");break;case"dashBoard":this.sendLoadDashBoard();break}}}};var h=function(){var s=this,t=s._self._c;return t("div",{staticClass:"status-container"},[t("ul",{staticClass:"tab"},[t("li",{staticClass:"tab__item",class:{"tab__item--active":s.activePanel=="dashBoard"},on:{click:function(e){s.activePanel="dashBoard",s.sendLoadDashBoard()}}},[s._v("Dashboard")]),t("li",{staticClass:"tab__item",class:{"tab__item--active":s.activePanel=="processList"},on:{click:function(e){s.activePanel="processList",s.emit("processList")}}},[s._v("ProcessList")]),t("li",{staticClass:"tab__item",class:{"tab__item--active":s.activePanel=="variableList"},on:{click:function(e){s.activePanel="variableList",s.emit("variableList")}}},[s._v("VariableList")]),t("li",{staticClass:"tab__item",class:{"tab__item--active":s.activePanel=="statusList"},on:{click:function(e){s.activePanel="statusList",s.emit("statusList")}}},[s._v("StatusList")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:["MariaDB","MySQL"].includes(s.info.dbType)&&s.activePanel=="dashBoard",expression:"['MariaDB', 'MySQL'].includes(info.dbType) && activePanel=='dashBoard'"}]},[s._m(0),s._m(1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:s.activePanel=="processList",expression:"activePanel=='processList'"}]},[t("ux-grid",{staticStyle:{width:"100%"},attrs:{data:s.process.rows,size:"small","cell-style":{height:"35px"},height:s.remainHeight()}},s._l(s.process.fields,function(e,i){return t("ux-table-column",{key:i,attrs:{field:e.name,title:e.name,align:"center","show-overflow-tooltip":"true"}})}),1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:s.info.dbType!="SqlServer"&&s.activePanel=="variableList",expression:"info.dbType!='SqlServer' && activePanel=='variableList'"}]},[t("ux-grid",{staticStyle:{width:"100%"},attrs:{data:s.variableList.rows,size:"small","cell-style":{height:"35px"},height:s.remainHeight()}},s._l(s.variableList.fields,function(e,i){return t("ux-table-column",{key:i,attrs:{field:e.name,title:e.name,align:"center","show-overflow-tooltip":"true"}})}),1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:s.info.dbType!="SqlServer"&&s.activePanel=="statusList",expression:"info.dbType!='SqlServer' && activePanel=='statusList'"}]},[t("ux-grid",{staticStyle:{width:"100%"},attrs:{data:s.statusList.rows,size:"small","cell-style":{height:"35px"},height:s.remainHeight()}},s._l(s.statusList.fields,function(e,i){return t("ux-table-column",{key:i,attrs:{field:e.name,title:e.name,align:"center","show-overflow-tooltip":"true"}})}),1)],1)])},m=[function(){var r=this,s=r._self._c;return s("div",{staticStyle:{height:"45vh","margin-top":"10px"}},[r._v(" Queries: "),s("div",{attrs:{id:"queries"}})])},function(){var r=this,s=r._self._c;return s("div",{staticClass:"flex flex-row"},[s("div",{staticClass:"basis-1/2"},[r._v(" Traffic: "),s("div",{attrs:{id:"traffic"}})]),s("div",{staticClass:"basis-1/2"},[r._v(" Server Sessions: "),s("div",{attrs:{id:"sessions"}})])])}],f=v(u,h,m,!1,null,null,null,null);const y=f.exports;export{y as default};
