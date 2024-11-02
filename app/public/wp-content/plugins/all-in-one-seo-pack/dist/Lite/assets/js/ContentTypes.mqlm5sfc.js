import{m as x,b as w,u as B,j as D}from"./index.ba51ghj9.js";import{u as F}from"./PostTypes.pd67gy5m.js";import{A as q,T as L}from"./TitleDescription.lzx9mbqe.js";import{C as N}from"./Card.0q0mr1wq.js";import{C as O}from"./Tabs.opo0ypfq.js";import{C as P}from"./Tooltip.i4md1nj9.js";import{C,S as V}from"./Schema.nzvi4zq5.js";import{_ as k}from"./_plugin-vue_export-helper.oebm7xum.js";import{v as c,o as n,c as S,k as _,b as y,F as M,J as U,l as r,a as l,G as z,x as h,t as m,C as u,q as I,T as R}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{a as E}from"./index.kaabvvzj.js";import"./translations.b896ab1m.js";import{_ as a}from"./default-i18n.hohxoesu.js";import"./helpers.lwqbledo.js";import"./constants.hcfrsngk.js";import"./JsonValues.g6ep3o3z.js";import"./RadioToggle.cler7vn3.js";import"./RobotsMeta.nthz6djw.js";import"./Checkbox.cv4w58s0.js";import"./Checkmark.d5kkjaf5.js";import"./Row.h4gujlzc.js";import"./SettingsRow.d9u0swi1.js";import"./Editor.ipgvvrs0.js";import"./isEqual.dwjbg1yu.js";import"./_baseIsEqual.j7gru8tk.js";import"./_getTag.fx9iqlmr.js";import"./_baseClone.n1l9l19s.js";import"./_arrayEach.n8ou32wp.js";import"./Caret.dwp6xpza.js";import"./Tags.mkuonlme.js";import"./postSlug.ms4f44w2.js";import"./metabox.y83zoorm.js";import"./cleanForSlug.dzbbaoug.js";import"./toString.oppn28a8.js";import"./_baseTrim.ohbpllmu.js";import"./_stringToArray.mpukyt2g.js";import"./_baseSet.ipousrvi.js";import"./regex.bekpgw04.js";import"./GoogleSearchPreview.mmblg2b4.js";import"./HtmlTagsEditor.irue4ytl.js";import"./UnfilteredHtml.o4azp64h.js";import"./Slide.dop8j51m.js";import"./vue-router.eypfdvl5.js";import"./TruSeoScore.das28gz4.js";import"./ProBadge.e32os6n3.js";import"./Information.djrr3pec.js";import"./Ellipse.mhzh8c2h.js";import"./Textarea.gulsuctc.js";import"./Blur.mu93d3e2.js";import"./Index.jq0lth54.js";const G={setup(){return{licenseStore:x()}},components:{CustomFields:C,CustomFieldsLite:C},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean}},J={class:"aioseo-sa-ct-custom-fields-view"};function Q(s,d,t,o,p,f){const b=c("custom-fields",!0),g=c("custom-fields-lite");return n(),S("div",J,[o.licenseStore.isUnlicensed?y("",!0):(n(),_(b,{key:0,type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk},null,8,["type","object","options","show-bulk"])),o.licenseStore.isUnlicensed?(n(),_(g,{key:1,type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk},null,8,["type","object","options","show-bulk"])):y("",!0)])}const H=k(G,[["render",Q]]),i="all-in-one-seo-pack",K={setup(){const{getPostIconClass:s}=F();return{getPostIconClass:s,optionsStore:w(),rootStore:B(),settingsStore:D()}},components:{Advanced:q,CoreCard:N,CoreMainTabs:O,CoreTooltip:P,CustomFields:H,Schema:V,SvgCircleQuestionMark:E,TitleDescription:L},data(){return{internalDebounce:null,strings:{label:a("Label:",i),name:a("Slug:",i)},tabs:[{slug:"title-description",name:a("Title & Description",i),access:"aioseo_search_appearance_settings",pro:!1},{slug:"schema",name:a("Schema Markup",i),access:"aioseo_search_appearance_settings",pro:!0},{slug:"custom-fields",name:a("Custom Fields",i),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:a("Advanced",i),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{postTypes(){return this.rootStore.aioseo.postData.postTypes.filter(s=>s.name!=="attachment")}},methods:{processChangeTab(s,d){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${s}SA`,value:d}),setTimeout(()=>{this.internalDebounce=!1},50))}}},W={class:"aioseo-search-appearance-content-types"},X={class:"aioseo-description"},Y=l("br",null,null,-1),Z=l("br",null,null,-1);function $(s,d,t,o,p,f){const b=c("svg-circle-question-mark"),g=c("core-tooltip"),v=c("core-main-tabs"),j=c("core-card");return n(),S("div",W,[(n(!0),S(M,null,U(f.postTypes,(e,A)=>(n(),_(j,{key:A,slug:`${e.name}SA`},{header:r(()=>[l("div",{class:z(["icon dashicons",o.getPostIconClass(e.icon)])},null,2),h(" "+m(e.label)+" ",1),u(g,{"z-index":"99999"},{tooltip:r(()=>[l("div",X,[h(m(p.strings.label)+" ",1),l("strong",null,m(e.label),1),Y,h(" "+m(p.strings.name)+" ",1),l("strong",null,m(e.name),1),Z])]),default:r(()=>[u(b)]),_:2},1024)]),tabs:r(()=>[u(v,{tabs:p.tabs,showSaveButton:!1,active:o.settingsStore.settings.internalTabs[`${e.name}SA`],internal:"",onChanged:T=>f.processChangeTab(e.name,T)},null,8,["tabs","active","onChanged"])]),default:r(()=>[u(R,{name:"route-fade",mode:"out-in"},{default:r(()=>[(n(),_(I(o.settingsStore.settings.internalTabs[`${e.name}SA`]),{object:e,separator:o.optionsStore.options.searchAppearance.global.separator,options:o.optionsStore.dynamicOptions.searchAppearance.postTypes[e.name],type:"postTypes"},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const We=k(K,[["render",$]]);export{We as default};
