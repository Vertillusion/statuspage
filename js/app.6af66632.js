(function(t){function e(e){for(var o,a,r=e[0],l=e[1],_=e[2],u=0,g=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(g.length)g.shift()();return n.push.apply(n,_||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(o=!1)}o&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},i={app:0},n=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var _=0;_<r.length;_++)e(r[_]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),i=s("5c96"),n=s.n(i),a=(s("0fae"),s("e05f"),s("bc3a")),r=s.n(a),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},_=[],c=(s("034f"),s("2877")),u={},g=Object(c["a"])(u,l,_,!1,null,null,null),p=g.exports,d=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"container-max"},[s("el-header",{staticClass:"style-header"},[s("h2",{staticClass:"title"},[s("span",{staticClass:"title-big"},[t._v(t._s(this.main_title))]),t._v("    "),s("span",{staticStyle:{"font-size":"1.7rem"},attrs:{id:"title-small"}},[t._v(t._s(this.main_title_eng))])]),s("h4",{staticClass:"title",staticStyle:{"margin-top":"10px"}},[t._v("报告生成时间："),s("span",[t._v(t._s(t.time_text))]),t._v("  "),t.json.config_auto_refresh_seconds>0?s("span",[s("i",{staticClass:"el-icon-refresh",class:{"loading-icon":t.icon_loading}}),t._v(t._s(t.counter)+"s")]):t._e()])]),s("el-main",{staticClass:"style-main"},[s("el-alert",{staticStyle:{"text-align":"left"},attrs:{title:t.alert_title,type:t.alert_type,description:t.alert_description,"show-icon":"",closable:!1,center:!1}}),s("br"),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("实时总览"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" Ontime")])]),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet success-bg"}),t._v("  "),s("span",{staticClass:"status-span success-color"},[t._v("正常运转 "+t._s(t.success)+" 个")])])]),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet danger-bg"}),t._v("  "),s("span",{staticClass:"status-span danger-color"},[t._v("发生故障 "+t._s(t.danger)+" 个")])])]),s("el-col",{attrs:{span:8}},[s("el-tooltip",{attrs:{effect:"dark",content:"由于计划性维护等正常原因而暂时暂停监控。",placement:"top-start"}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet info-bg"}),t._v("  "),s("el-badge",{attrs:{"is-dot":"",hidden:0==t.info}},[s("span",{staticClass:"status-span info-color"},[t._v("暂停监控 "+t._s(t.info)+" 个")])])],1)])],1)],1)],1),s("el-dialog",{attrs:{title:t.response_title,visible:t.response_time_dialog,width:"60%"},on:{"update:visible":function(e){t.response_time_dialog=e}}},[s("el-alert",{staticStyle:{"text-align":"left"},attrs:{title:t.dialog.alert_title,type:t.dialog.alert_type,description:t.dialog.alert_description,"show-icon":"",closable:!1,center:!1}}),t.dialog.chart_show?s("v-chart",{staticClass:"chart",attrs:{option:t.option,"update-options":{notMerge:!0},autoresize:!0}}):t._e(),t.dialog.chart_show?t._e():s("el-empty",{attrs:{description:"暂无响应时间数据"}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.response_time_dialog=!1}}},[t._v("关闭")])],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("数据中心"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" DataCenter")])]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:this.datacenter_table},on:{"cell-click":t.table_click}},[s("el-table-column",{attrs:{label:"状态",width:"50","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{domProps:{innerHTML:t._s(e.row.status_html)},on:{click:function(s){return t.show_respontime(e.row)}}})]}}])}),s("el-table-column",{attrs:{label:"可用率",width:"90","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("span",{class:e.row.custom_uptime_ratio_class,on:{click:function(s){return t.show_respontime(e.row)}}},[t._v(t._s(e.row.custom_uptime_ratio)+"%")])])]}}])}),s("el-table-column",{attrs:{label:"名称",width:"110","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("div",{domProps:{innerHTML:t._s(e.row.friendly_name)},on:{click:function(s){return t.show_respontime(e.row)}}})])]}}])}),s("el-table-column",{attrs:{label:"详细可用率（过去"+t.json.config_history_time+"天）","min-width":"670"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.custom_uptime_ranges_a,(function(e){return s("el-tooltip",{key:e.key,attrs:{effect:"dark",content:e.time+" "+e.range+"%",placement:"top"}},[s("span",{staticClass:"square",class:[1==e.info?"info-bg":e.range>t.json.config_success_min?"success-bg":e.range>t.json.config_warning_min?"warning-bg":"danger-bg"]})])}))}}])})],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("网站"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" WebSite")])]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:this.website_table},on:{"cell-click":t.table_click}},[s("el-table-column",{attrs:{label:"状态",width:"50","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{domProps:{innerHTML:t._s(e.row.status_html)}})]}}])}),s("el-table-column",{attrs:{label:"可用率",width:"90","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("span",{class:e.row.custom_uptime_ratio_class},[t._v(t._s(e.row.custom_uptime_ratio)+"%")])])]}}])}),s("el-table-column",{attrs:{label:"名称",width:"110","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("div",{domProps:{innerHTML:t._s(e.row.friendly_name)},on:{click:function(s){return t.show_respontime(e.row)}}})])]}}])}),s("el-table-column",{attrs:{label:"详细可用率（过去"+t.json.config_history_time+"天）","min-width":"670"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.custom_uptime_ranges_a,(function(e){return s("el-tooltip",{key:e.key,attrs:{effect:"dark",content:e.time+" "+e.range+"%",placement:"top",size:"large",color:"activity.color"}},[s("span",{staticClass:"square",class:[1==e.info?"info-bg":e.range>t.json.config_success_min?"success-bg ":e.range>t.json.config_warning_min?"warning-bg":"danger-bg"]})])}))}}])})],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}]},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{xs:14,sm:14,md:14,lg:14,xl:14}},[s("h4",{staticClass:"card-title"},[t._v("状态日志"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" Logs")])])]),s("el-col",{attrs:{xs:10,sm:10,md:10,lg:10,xl:10}},[s("div",{staticStyle:{"text-align":"right","margin-top":"8px"}},[s("el-switch",{attrs:{"active-text":"倒序","inactive-text":"正序"},on:{change:function(e){return t.pages_change()}},model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}})],1)])],1),s("br"),t.table_loading?s("el-empty",{attrs:{description:"加载中，请稍后..."}}):t._e(),s("el-timeline",{staticStyle:{"text-align":"left"}},t._l(t.logs_list_inpage,(function(e,o){return s("el-timeline-item",{key:o,attrs:{timestamp:t.get_full_time(e.datetime),icon:t.type_to_icon(e.type),color:t.type_to_color(e.type)}},[t._v(" "+t._s(e.name)+" "+t._s(t.type_to_text(e.type))+" - 具体信息："+t._s(e.reason.code)+" - "+t._s(e.reason.detail)),1==e.type?s("span",[t._v(" - 持续 "+t._s(t.duration_to_text(e.duration)))]):t._e()])})),1),s("center",[s("el-pagination",{attrs:{layout:"prev, pager, next",total:t.logs_list.length,"current-page":t.logs_now_page,"page-size":t.json.logs_each_page?t.json.logs_each_page:10},on:{"current-change":t.pages_change,"update:currentPage":function(e){t.logs_now_page=e},"update:current-page":function(e){t.logs_now_page=e}}})],1)],1)],1),s("el-footer")],1)},h=[],f=(s("ac1f"),s("1276"),s("a9e3"),s("4e82"),s("99af"),s("22b4")),b=s("97ac"),y=s("3620"),v=s("2da7"),w=s("4b2a"),E=s("5c7f");Object(f["a"])([b["a"],v["a"],w["a"],y["a"]]);var S={name:"Index",components:{VChart:E["a"]},data:function(){return{main_title:"状态监控",main_title_eng:"StatusLive",json:[],website_table:[],datacenter_table:[],success:0,danger:0,info:0,table_loading:!0,icon_loading:!0,time_now:0,alert_type:"info",alert_title:"请稍等",alert_description:"正在连接服务器加载数据...",time_text:"Loading...",counter:1,refresh_timer:[],logs_list:[],logs_list_inpage:[],logs_now_page:1,logs_page_total:-1,logs_each_page:10,danger_times:0,reverse:!0,response_time_dialog:!1,option:{},response_title:"响应时间",dialog:{alert_title:"状态加载中……",alert_type:"success",alert_description:"Loading……",chart_show:!0}}},mounted:function(){this.get_conf_json(),this.table_loading=!0},beforeUnmount:function(){clearInterval(this.refresh_timer)},methods:{get_conf_json:function(){var t=this;Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_use_env?(console.log("[StatusLive]使用环境变量模式"),this.main_title=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title:"状态监控",this.main_title_eng=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title_english,this.json={config_title:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title:"状态监控",config_title_english:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title_english?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_title_english:"StatusLive",config_mode:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_mode?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_mode:2,config_readonly_apikey:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_readonly_apikey?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_readonly_apikey:"USE_SERVER_APIKEY",config_proxy_link:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_proxy_link?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_proxy_link:"/core.php",config_history_time:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_history_time?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_history_time:60,config_logs_history_days:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_logs_history_days?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_logs_history_days:30,config_success_min:parseFloat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_success_min?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_success_min:98),config_warning_min:parseFloat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_warning_min?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_warning_min:90),config_auto_refresh_seconds:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_auto_refresh_seconds?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_config_auto_refresh_seconds:60,logs_each_page:parseInt(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_logs_each_page)?parseInt(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_logs_each_page):10},this.main_title=this.json.config_title,this.main_title_eng=this.json.config_title_english,this.get_status()):(console.log("[StatusLive]使用conf.json模式"),this.$axios.get("./conf.json").then((function(e){t.json=e.data,t.main_title=t.json.config_title,t.main_title_eng=t.json.config_title_english,t.get_status()})).catch((function(e){console.log("[StatusLive]配置项载入失败了，检查一下配置项吧:("),console.log(e),t.$notify.error({title:"出现异常",message:"连接服务器失败，请刷新页面尝试恢复。",type:"danger"})})))},get_status:function(){var t=this;this.alert_type="info",this.alert_title="请稍等",this.alert_description="正在连接服务器加载数据...",this.icon_loading=!0;var e="";e=1==this.json.config_mode?"https://api.uptimerobot.com/v2/getMonitors":this.json.config_proxy_link;var s="";if(this.time_now=Date.parse(new Date)/1e3,s=this.time_now-86400+"_"+this.time_now,this.json.config_history_time>0)for(var o=1;o<this.json.config_history_time;o++)s=s+"-"+(this.time_now-86400*(o+1))+"_"+(this.time_now-86400*o);this.$axios.post(e,{api_key:this.json.config_readonly_apikey,format:"json",logs:1,custom_uptime_ratios:"7",custom_uptime_ranges:s,custom_down_durations:1,logs_start_date:this.time_now-86400*this.json.config_logs_history_days,response_times:1,response_times_average:5}).then((function(e){"ok"!=e.data.stat?(console.log("[StatusLive]UptimeRobot API有返回错误信息："),console.log(e.data),t.danger_times<3?(t.$notify.error({title:"出现异常",message:"请求参数异常，5秒后将会自动重试...",type:"danger"}),t.danger_times++,t.counter=5,t.refresh_timer=setInterval(t.countdown_function,1e3)):(t.$notify.error({title:"出现异常",message:"请求参数异常。连续三次连接服务器失败，请检查您的网络（或配置），并刷新页面重试。"}),t.icon_loading=!1)):t.refresh_status(e.data)})).catch((function(e){console.log("[StatusLive]连接UptimeRobot API时出现问题："),console.log(e),t.danger_times<3?(t.$notify.error({title:"出现异常",message:"连接服务器失败，5秒后将会自动重试...",type:"danger"}),t.danger_times++,t.counter=5,t.refresh_timer=setInterval(t.countdown_function,1e3),t.icon_loading=!1):(t.$notify.error({title:"出现异常",message:"连接服务器失败。连续三次连接服务器失败，请检查您的网络（或配置），并刷新页面重试。"}),t.icon_loading=!1)}))},refresh_status:function(t){var e=[];this.success=0,this.danger=0,this.info=0,this.website_table=[],this.datacenter_table=[];for(var s=0;s<t.monitors.length;s++){t.monitors[s].status<2?(t.monitors[s].status_html='<span class="bullet info-bg"></span>',this.info++):2==t.monitors[s].status?(t.monitors[s].status_html='<span class="bullet success-bg"></span>',this.success++):(t.monitors[s].status_html='<span class="bullet danger-bg"></span>',this.danger++),t.monitors[s].status<2?t.monitors[s].custom_uptime_ratio_class="info-color":t.monitors[s].custom_uptime_ratio<this.json.config_success_min&&2==t.monitors[s].status?t.monitors[s].custom_uptime_ratio_class="warning-color":t.monitors[s].custom_uptime_ratio<this.json.config_warning_min||t.monitors[s].status>=8?t.monitors[s].custom_uptime_ratio_class="danger-color":t.monitors[s].custom_uptime_ratio_class="success-color";var o=[];t.monitors[s].custom_uptime_ranges_a=[],o=t.monitors[s].custom_uptime_ranges.split("-");for(var i=0;i<o.length;i++)t.monitors[s].custom_uptime_ranges_a.push({key:i,range:o[i],info:this.time_now-86400*i<t.monitors[s].create_datetime?1:0,time:this.get_time_ymd(this.time_now-86400*i)});1==t.monitors[s].type?this.website_table.push(t.monitors[s]):3==t.monitors[s].type&&this.datacenter_table.push(t.monitors[s]);for(var n=[],a=0;a<t.monitors[s].logs.length;a++)n={name:t.monitors[s].friendly_name,datetime:String(t.monitors[s].logs[a].datetime),duration:t.monitors[s].logs[a].duration,reason:t.monitors[s].logs[a].reason,type:Number(t.monitors[s].logs[a].type)},e.push(n)}e.sort((function(t,e){return parseInt(t.datetime)-parseInt(e.datetime)})),this.logs_list=e,this.danger>0?(this.danger>=this.success?this.alert_type="danger":this.alert_type="warning",this.alert_title="服务异常",this.alert_description="很抱歉，当前部分服务遇到问题，我们会尽快修复。您可持续关注本页面以获取最新信息。"):(this.alert_type="success",this.alert_title="服务正常",this.alert_description="当前所有服务正常运转。您可持续关注本页面以获取最新信息。");var r=new Date(1e3*this.time_now),l=r.getFullYear()+"-",_=(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+"-",c=(r.getDate()<10?"0"+r.getDate():r.getDate())+" ",u=(r.getHours()<10?"0"+r.getHours():r.getHours())+":",g=(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())+":",p=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();this.time_text=l+_+c+u+g+p,this.danger_times=0,this.table_loading=!1,this.icon_loading=!1,this.counter=this.json.config_auto_refresh_seconds,this.counter>0&&(this.refresh_timer=setInterval(this.countdown_function,1e3)),this.pages_change()},countdown_function:function(){this.counter--,0==this.counter&&(clearInterval(this.refresh_timer),this.counter=this.json.config_auto_refresh_seconds,this.get_status())},get_full_time:function(t){var e=new Date(1e3*t),s=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",n=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",a=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",r=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return s+o+i+n+a+r},get_time_ymd:function(t){var e=new Date(1e3*t),s=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=e.getDate()<10?"0"+e.getDate():e.getDate();return s+o+i},type_to_icon:function(t){return t=Number(t),1==t?"el-icon-close":2==t?"el-icon-check":98==t?"el-icon-video-play":99==t?"el-icon-video-pause":"el-icon-full-screen"},type_to_color:function(t){return t=Number(t),1==t?"#F56C6C":2==t?"#67C23A":98==t||99==t?"#909399":"#303133"},type_to_text:function(t){return t=Number(t),1==t?"发生故障":2==t?"恢复正常":98==t?"开始":99==t?"开始维护（暂停监控）":"发生特情"},duration_to_text:function(t){t=Number(t);var e=t%60,s=(t-e)/60,o=(t-e-60*s)/60;return o>0?"".concat(o," 小时 ").concat(s," 分钟 ").concat(e," 秒"):" ".concat(s," 分钟 ").concat(e," 秒")},pages_change:function(){var t=JSON.parse(JSON.stringify(this.logs_list));this.reverse&&t.reverse(),this.logs_each_page=this.json.logs_each_page,this.logs_page_total=Math.ceil(t.length/this.logs_each_page),this.logs_now_page>this.logs_page_total&&(this.logs_now_page=1),this.logs_list_inpage=[];for(var e=0;e<this.logs_each_page;e++)this.logs_each_page*(this.logs_now_page-1)+e<t.length&&this.logs_list_inpage.push(t[this.logs_each_page*(this.logs_now_page-1)+e])},show_respontime:function(t){var e=t.response_times;console.log(t);for(var s=[],o=[],i=0;i<e.length;i++)s.push(this.get_full_time(e[i].datetime)),o.push(e[i].value>1?e[i].value:"-");this.response_title=t.friendly_name+" 详细信息",t.status<2?(this.dialog.alert_title=t.friendly_name+" 监控因故暂停，监控期平均在线率为 "+t.custom_uptime_ratio+"% ，最近一次探测响应时间："+o[0]+" ms",this.dialog.alert_type="info"):t.custom_uptime_ratio<this.json.config_success_min&&2==t.status?(this.dialog.alert_title=t.friendly_name+" 当前状态正常，在线率为 "+t.custom_uptime_ratio+"% ，最近一次探测响应时间："+o[0]+" ms",this.dialog.alert_type="warning"):t.custom_uptime_ratio<this.json.config_warning_min||t.status>=8?(this.dialog.alert_title=t.friendly_name+" 当前状态"+(t.status>=8?"异常":"正常")+"，在线率为 "+t.custom_uptime_ratio+"% ，最近一次探测响应时间："+o[0]+" ms",this.dialog.alert_type="danger"):(this.dialog.alert_title=t.friendly_name+" 当前状态正常，在线率为 "+t.custom_uptime_ratio+"% ，最近一次探测响应时间："+o[0]+" ms",this.dialog.alert_type="success"),this.dialog.alert_title=t.friendly_name+" "+(t.status<2?" 监控因故暂停，近期平均在线率为 ":"当前状态"+(t.status>=8?"异常":"正常")+"，在线率为 ")+t.custom_uptime_ratio+"% ，"+(o[0]?"最近一次探测响应时间："+o[0]+" ms":"暂无最近探测响应时间数据")+"。",this.dialog.alert_description="最近动态："+this.get_full_time(t.lastLogTypeBeforeStartDate.datetime)+" - "+this.type_to_text(t.lastLogTypeBeforeStartDate.type)+" - 具体信息："+t.lastLogTypeBeforeStartDate.reason.code+" - "+t.lastLogTypeBeforeStartDate.reason.detail+(1==t.lastLogTypeBeforeStartDate.type?" - 持续"+this.duration_to_text(t.lastLogTypeBeforeStartDate.duration):""),o[0]?this.dialog.chart_show=!0:this.dialog.chart_show=!1,this.response_time_dialog=!0,this.option={xAxis:{type:"category",data:s.reverse()},tooltip:{trigger:"axis"},grid:{show:!0},yAxis:{type:"value",name:"ResponseTime(ms)"},series:[{data:o.reverse(),type:"line",smooth:!0,connectNulls:!0,symbol:"none",endLabel:{show:!0}}]}},table_click:function(t){this.show_respontime(t)}}},j=S,O=(s("cccb"),Object(c["a"])(j,m,h,!1,null,null,null)),P=O.exports;o["default"].use(d["a"]);var N=[{path:"/",name:"Home",component:P,meta:{title:"StatusLive"}}],A=new d["a"]({routes:N}),U=A;o["default"].config.productionTip=!1,o["default"].prototype.$axios=r.a,o["default"].use(n.a),U.beforeEach((function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()})),new o["default"]({router:U,render:function(t){return t(p)}}).$mount("#app")},"5ced":function(t,e,s){},"85ec":function(t,e,s){},cccb:function(t,e,s){"use strict";s("5ced")}});
//# sourceMappingURL=app.6af66632.js.map