import{i as s}from"./vscodeInject-00cbac9b.js";import{n as o}from"./vueConfig-4610971c.js";const i={mixins:[s],data(){return{documentUrl:null,hash:""}},created(){this.hash=this.$route.hash??"",this.hash=`?theme=${document.body.getAttribute("data-vscode-theme-kind")=="vscode-light"?"light":"dark"}`},mounted(){this.on("resourceHost",({host:e,language:t})=>{console.log(this.hash),this.documentUrl=t=="zh-cn"?`${e}/docs/#/zh/${this.hash}`:`${e}/docs/${this.hash}`}).init()},methods:{loadDocument(){}}};var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"document-container"},[n("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.documentUrl,title:"description"},on:{load:t.loadDocument}})])},c=[],r=o(i,a,c,!1,null,null,null,null);const l=r.exports;export{l as default};
