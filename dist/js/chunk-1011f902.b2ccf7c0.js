(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1011f902"],{"129c":function(t,e,i){"use strict";var s=i("731c"),a=i.n(s);a.a},"696f":function(t,e,i){},"731c":function(t,e,i){},9734:function(t,e,i){},ccc2:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-0",attrs:{width:"800px"}},[s("v-card-title",{staticClass:"title"},[t._v("\n          Profile\n        ")]),s("v-card-text",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm3:""}},[s("v-img",{attrs:{right:"",width:"150px",height:"150px","aspect-ratio":1,src:i("7327")}})],1),s("v-flex",{attrs:{xs12:"",sm9:""}},[s("p",{staticClass:"subtitle-1"},[s("span",[t._v("Full Name : ")]),s("span",[t._v("Muhamad Daffa Fahrizal")]),s("br"),s("span",[t._v("Birthplace : ")]),s("span",[t._v("Bandung")]),s("br"),s("span",[t._v("Birthdate : ")]),s("span",[t._v("16th May 2002")]),s("br"),s("span",[t._v("Address : ")]),s("span",[t._v("Jl Cijerah 2 Gg Delima 1 no 32")]),s("br"),s("span",[t._v("Programmer At : ")]),s("span",[s("a",{attrs:{href:"http://codesolution.my.id"}},[t._v("Code Solution")])])])])],1)],1)],1),s("v-scroll-y-transition",[s("v-card",{staticClass:"my-4 elevation-0",attrs:{width:"800px"}},[s("v-card-title",{staticClass:"title"},[t._v("\n          Hobbies\n        ")]),s("v-card-text",[s("v-layout",{attrs:{wrap:""}},[t._l(t.hobbies,function(e){return[s("v-flex",{key:e.id,attrs:{xs12:"",sm4:""}},[s("v-icon",[t._v(t._s(e.icon))]),t._v("  \n                "),s("span",{staticClass:"subtitle-2"},[t._v(t._s(e.title))]),s("v-tooltip",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[s("p",t._g({staticClass:"ma-0 text-truncate"},a),[s("v-rating",{attrs:{dense:"",readonly:"","empty-icon":t.emptyIcon,"full-icon":t.fullIcon,"half-icon":t.halfIcon,length:e.count,"background-color":"red lighten-3","half-increments":"",color:"red darken-2"},model:{value:e.rate,callback:function(i){t.$set(e,"rate",i)},expression:"item.rate"}})],1)]}}],null,!0)},[s("span",[t._v(t._s(e.description))])])],1)]})],2)],1)],1)],1),s("v-card",{staticClass:"my-4 elevation-0",attrs:{width:"800px"}},[s("v-card-title",{staticClass:"title"},[t._v("\n          Education\n        ")]),s("v-card-text",[s("v-layout",{attrs:{wrap:""}},[t._l(t.educations,function(e){return[s("v-flex",{key:e.id,staticStyle:{padding:"8px 4px"},attrs:{xs12:"",sm4:""}},[s("v-icon",[t._v(t._s(e.icon))]),t._v("  \n                "),s("span",{staticClass:"subtitle-2"},[t._v(t._s(e.title))]),s("br"),s("br"),s("iframe",{staticStyle:{border:"0"},attrs:{src:e.loc,width:"100%",height:"100px",frameborder:"0",allowfullscreen:""}}),s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var a=i.hover;return s("span",{staticClass:"subtitle-2",staticStyle:{cursor:"pointer"}},[s("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[s("v-icon",{attrs:{color:a?"blue":"grey"}},[t._v("mdi-map-marker")]),t._v("  \n                      "),s("span",{class:a?"textblue":"textgrey"},[t._v("\n                        "+t._s(e.name)+"\n                      ")])],1)])}}],null,!0)})],1)]})],2)],1)],1),s("v-card",{staticClass:"my-4 elevation-0",attrs:{width:"800px"}},[s("v-card-title",{staticClass:"title"},[t._v("\n          Skills\n        ")]),s("v-card-text",t._l(t.skills,function(e){return s("v-list-item",{key:e.id,attrs:{dense:""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("\n                "+t._s(e.title)+"\n              ")]),s("v-list-item-subtitle",[s("v-progress-linear",{attrs:{color:e.color,"background-color":e.bgColor,length:e.count},model:{value:e.rate,callback:function(i){t.$set(e,"rate",i)},expression:"item.rate"}})],1)],1),s("v-list-item-action",[t._v("\n              "+t._s(e.rate)+" / 100\n            ")])],1)}),1)],1),s("v-card",{staticClass:"my-4 elevation-0",attrs:{width:"800px"}},[s("v-card-title",{staticClass:"title"},[t._v("\n          Language Skills\n        ")]),s("v-card-text",t._l(t.languages,function(e){return s("v-card",{key:e.id,attrs:{flat:""}},[s("v-card-text",{staticClass:"pb-0 subtitle-1"},[s("span",{staticStyle:{color:"black"}},[t._v(t._s(e.title))])]),s("v-card-text",{staticClass:"pt-0"},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("span",{staticClass:"subtitle-4"},[t._v("Writing")]),s("br"),s("v-progress-circular",{attrs:{value:e.score.writing,color:"error",size:"100",width:"15"}},[t._v(t._s(e.score.writing))])],1),s("v-flex",{attrs:{xs4:""}},[s("span",{staticClass:"subtitle-4"},[t._v("Speaking")]),s("br"),s("v-progress-circular",{attrs:{value:e.score.speaking,color:"blue",size:"100",width:"15"}},[t._v(t._s(e.score.speaking))])],1),s("v-flex",{attrs:{xs4:""}},[s("span",{staticClass:"subtitle-4"},[t._v("Reading")]),s("br"),s("v-progress-circular",{attrs:{value:e.score.reading,color:"orange",size:"100",width:"15"}},[t._v(t._s(e.score.reading))])],1)],1)],1),s("v-divider")],1)}),1)],1)],1),s("v-scroll-y-transition",[t.goUpButton?s("v-btn",{attrs:{color:"yellow darken-1",small:"",fixed:"",bottom:"",right:"",fab:""},on:{click:function(e){return t.$vuetify.goTo(t.target,t.options)}}},[s("v-icon",{attrs:{color:"grey darken-4"}},[t._v("mdi-gesture-swipe-up")])],1):t._e()],1)],1)],1)},a=[],o={data:()=>({goUpButton:!1,hobby:"",education:"",skill:"",language:"",hobbies:[{id:1,icon:"mdi-camera",title:"Video Editing",count:5,rate:4,description:"4/5"},{id:2,icon:"mdi-code-not-equal-variant",title:"Programming",count:5,rate:5,description:"4.5/5, I Love Programming So Much"},{id:3,icon:"mdi-dribbble",title:"Basketball",count:5,rate:4,description:"4"}],educations:[{id:1,icon:"mdi-face",title:"Elementary",name:"SDN Melong Mandiri 1 RSBI",loc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.705713163926!2d107.55802081427719!3d-6.9257378949959785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5d06f9a438d%3A0x29460a67537177ef!2sSDN+MELONG+MANDIRI+1!5e0!3m2!1sid!2sid!4v1565842554024!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0" allowfullscreen',link:"https://goo.gl/maps/rM8ZTRjYyyCXKJ1L7"},{id:2,icon:"mdi-school",title:"Middle",name:"SMP Negeri 4 Cimahi",loc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7165868975085!2d107.56123311427707!3d-6.9244427949968905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5f9f7cdb017%3A0x96641a15d676aead!2sSMPN+4+Cimahi!5e0!3m2!1sid!2sid!4v1565842724143!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0" allowfullscreen',link:"https://goo.gl/maps/fq3N4rCjYQ1Bdh4w6"},{id:3,icon:"mdi-laptop-windows",title:"Vocational",name:"SMKN 11 Bandung",loc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.997236842967!2d107.55608431427682!3d-6.8909325950206375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6bd6aaaaaab%3A0xf843088e2b5bf838!2sSMK+Negeri+11+Bandung!5e0!3m2!1sid!2sid!4v1565842874760!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0" allowfullscreen',link:"https://goo.gl/maps/k8H9cTHVtV1DaDFT6"}],skills:[{id:1,title:"PHP",count:10,rate:85,color:"blue",bgColor:"blue lighten-3"},{id:2,title:"C++",count:10,rate:80,color:"green",bgColor:"green lighten-3"},{id:3,title:"Vue Js",count:10,rate:65,color:"red",bgColor:"red lighten-3"},{id:4,title:"Laravel",count:10,rate:75,color:"teal darken-2",bgColor:"teal lighten-3"},{id:5,title:"Code Igniter",count:10,rate:85,color:"red lighten-1",bgColor:"red lighten-3"},{id:6,title:"Sony Vegas",count:10,rate:80,color:"orange lighten-1",bgColor:"orange lighten-3"},{id:7,title:"Flutter",count:10,rate:60,color:"blue lighten-1",bgColor:"blue lighten-3"}],languages:[{id:1,title:"Bahasa Indonesia",score:{writing:85,speaking:95,reading:90}},{id:2,title:"Sundanese",score:{writing:80,speaking:90,reading:85}},{id:3,title:"English",score:{writing:85,speaking:95,reading:90}},{id:4,title:"Japanese",score:{writing:75,speaking:70,reading:60}}],emptyIcon:"mdi-heart-outline",fullIcon:"mdi-heart",halfIcon:"mdi-heart-half-full",scrollPosition:0}),mounted(){window.onscroll=()=>{this.scrollPosition=document.documentElement.scrollTop,document.documentElement.scrollTop>300?this.goUpButton=!0:this.goUpButton=!1}},computed:{target(){const t=0;return t},options(){return{duration:1e3,offset:0,easing:"easeInOutCubic"}}},methods:{goUp(){document.documentElement.scrollTop=0}}},n=o,r=(i("129c"),i("2877")),l=i("6544"),c=i.n(l),h=i("8336"),d=i("b0af"),u=i("99d9"),v=i("a523"),p=i("ce7e"),f=i("0e8f"),m=i("2b0e"),g=m["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}}),b=i("f2e7"),y=i("58df"),x=i("d9bd"),w=Object(y["a"])(g,b["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(x["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(x["c"])("v-hover should only contain a single element",this),t)}}),C=i("132d"),k=i("adda"),_=i("a722"),A=i("da13"),I=i("1800"),O=i("5d23"),S=i("490a"),N=i("8e36"),T=(i("696f"),i("9d26")),B=i("a9ad"),L=i("af2b"),$=i("5607"),D=m["a"].extend({name:"rippleable",directives:{ripple:$["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),M=i("7560"),E=i("80d2"),V=Object(y["a"])(B["a"],g,D,L["a"],M["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$vuetify.icons.ratingEmpty"},fullIcon:{type:String,default:"$vuetify.icons.ratingFull"},halfIcon:{type:String,default:"$vuetify.icons.ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,medium:e,large:i,light:s,small:a,size:o,xLarge:n}=this.$props;return{dark:t,medium:e,large:i,light:s,size:o,small:a,xLarge:n}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const i=this.genHoverIndex(e,t);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let i=this.isHalfEvent(t);return this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(t,e)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const i={click:e.click};return this.hover&&(i.mouseenter=e=>this.onMouseEnter(e,t),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(T["a"],this.setTextColor(this.getColor(e),{directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(e)])}},render(t){const e=Object(E["g"])(Number(this.length)).map(t=>this.genItem(t));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}}),H=i("0789");i("9734");const j=Object(y["a"])(g,b["a"]);var F=j.extend({name:"activatable",props:{activator:{default:null,validator:t=>{return["string","object"].includes(typeof t)}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[]}),watch:{activator(){this.activatorElement=null,this.getActivator()}},mounted(){const t=Object(E["m"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(x["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this)},methods:{getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},genActivator(){const t=Object(E["l"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},getContentSlot(){return Object(E["l"])(this,"default",this.getValueProxy(),!0)},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator}else t?e=t.currentTarget||t.target:this.activatorNode.length&&(e=this.activatorNode[0].elm);return this.activatorElement=e,this.activatorElement}}}),Y=i("b848"),P=i("9d65");function W(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var R=Object(y["a"])(P["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:W},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.eager&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(E["k"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(x["c"])(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),X=i("fe6c"),z=m["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(E["n"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(E["n"])(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let a=0;a<s.length;a++)t.includes(s[a])||i.push(Object(E["n"])(s[a]));return Math.max(...i)}}});const q=Object(y["a"])(z,X["a"],F);var J=q.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,activatorNode:null,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let a=0;if(a+=this.left?i-(s-t.width):i,this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-e:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(E["e"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(E["e"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.pageYOffset+e,s=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,n=i<o;return n&&this.offsetOverflow&&s.top>a?t=this.pageYOffset+(s.top-a):n&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=F.options.methods.genActivatorListeners.call(this),e=t.click;return t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY},t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{t.content=this.measure(this.$refs.content),this.dimensions=t})}}}),Z=Object(y["a"])(B["a"],g,Y["a"],R,J,b["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),`${this.calcXOverflow(a,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(s+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(E["e"])(this.maxWidth),minWidth:Object(E["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(E["m"])(this,"activator",!0)&&Object(x["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=F.options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===E["o"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}}),U=Object(r["a"])(n,s,a,!1,null,"5554a4ca",null);e["default"]=U.exports;c()(U,{VBtn:h["a"],VCard:d["a"],VCardText:u["a"],VCardTitle:u["b"],VContainer:v["a"],VDivider:p["a"],VFlex:f["a"],VHover:w,VIcon:C["a"],VImg:k["a"],VLayout:_["a"],VListItem:A["a"],VListItemAction:I["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VProgressCircular:S["a"],VProgressLinear:N["a"],VRating:V,VScrollYTransition:H["c"],VTooltip:Z})}}]);
//# sourceMappingURL=chunk-1011f902.b2ccf7c0.js.map