(window["webpackJsonpquorum-remix"]=window["webpackJsonpquorum-remix"]||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(8),c=n(76),i=n(88),s=n(77),u=n(89),l=n(56),p=n(0),d=n.n(p),f=n(10),m=n.n(f),y=(n(96),n(97),n(21)),b={display:"flex",alignItems:"flex-start",flexDirection:"column",minHeight:"100%"},v={display:"flex",alignItems:"flex-end",flexDirection:"column",width:"100%"},h={width:"100%"},O={display:"flex",marginTop:8},g={margin:0,minWidth:100,width:100,wordBreak:"inherit",borderRadius:3,borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0,overflowX:"hidden",textOverflow:"ellipsis"},E={border:"1px solid #dddddd",fontSize:10,padding:".36em",borderRadius:5,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderLeft:0,flexGrow:1},w={display:"flex",flexDirection:"column",marginTop:8},j={display:"flex",alignItems:"center",marginBottom:0},C={padding:"0px 0 10px 10px",border:"1px solid rgba(0,0,0,0.125)",borderTopLeftRadius:0,borderBottomLeftRadius:"0.25rem",borderTopRightRadius:0,borderBottomRightRadius:"0.25rem"},x={width:100,height:28,textAlign:"center",marginTop:4,marginBottom:-5},k={cursor:"pointer",minWidth:28,textAlign:"center",fontSize:16,padding:8,verticalAlign:"center",textDecoration:"none"},S={cursor:"pointer",textAlign:"center",fontSize:11,padding:3,verticalAlign:"center",textDecoration:"none"},P={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"11px"},T={margin:0,wordBreak:"inherit",borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0},N={display:"flex",alignItems:"center",paddingTop:4,width:"100%"},D={display:"flex",alignItems:"center",paddingTop:4,justifyContent:"flex-end"},A={fontSize:12,whiteSpace:"nowrap",minWidth:72},R={maxWidth:92,marginRight:4},_={display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},I={display:"flex",width:"100%",justifyContent:"space-between",height:18,marginTop:12,marginBottom:8,fontSize:12},L={height:18,marginBottom:4,alignSelf:"flex-end"},F={display:"flex",marginBottom:6,width:"100%"},U={fontSize:11,color:"red",width:0,flexGrow:1},G={width:0,flexGrow:1},W={display:"flex",width:"100%",height:"100%",alignItems:"center"},B={display:"flex",flexDirection:"column",whiteSpace:"nowrap",overflow:"hidden",flexGrow:1},M={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#222"},V=function(e){return{color:"Connected"===e?"green":"Connecting..."===e?"black":"red",fontSize:11,marginRight:8}},z=n(6),H=n(11),K=n(32),J=n(28);function Y(){return{type:"SET_ERROR",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e){return{type:"SET_CONTRACT_DEPLOYING",payload:e}}function $(e){return{type:"FETCH_COMPILATION",payload:e.data}}function Z(e,t){return{type:"SET_CONTRACT_LOADING",payload:{address:e,loading:t}}}function ee(e,t,n){return{type:"METHOD_CALL_SUCCESS",payload:{address:e,methodSignature:Object(J.b)(t),result:n}}}function te(e){return{type:"SELECT_CONTRACT",payload:e}}function ne(e,t,n){return{type:"ADD_CONTRACT",payload:q({},e,{address:t,privateFor:n.privateFor,privateFrom:n.privateFrom})}}function re(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.solidity.getCompilationResult();case 3:r=t.sent,n($(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error getting compilation result",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function ae(e){return{type:"ADD_PUBLIC_KEY",payload:e}}function oe(e){return{type:"SET_TESSERA_OPTIONS",payload:e}}function ce(e){return{type:"EDIT_NETWORK",payload:e}}function ie(e,t,n,r,a){return{type:"SET_NETWORK",payload:{endpoint:e,tesseraEndpoint:t,accounts:n,status:r,editing:a}}}function se(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,i,s,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r({type:"SET_NETWORK_CONNECTING"}),o=[],c="Disconnected",i=!0,s="",n.prev=2,!e){n.next=17;break}return n.next=6,Object(K.f)(e,t);case 6:return c="Connected",i=!1,n.next=10,Object(K.c)();case 10:return o=n.sent,n.next=13,Object(K.d)();case 13:u=n.sent,r(oe(u)),n.next=18;break;case 17:s="Please connect to a quorum node";case 18:n.next=24;break;case 20:n.prev=20,n.t0=n.catch(2),console.log("Error fetching network data",n.t0.message),s=n.t0.message;case 24:r(Y(s)),r(ie(e,t,o,c,i)),r({type:"RESET_TX_RESULTS"});case 27:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e){return n.apply(this,arguments)}}()}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(o.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.endsWith("/")&&(t=t.substring(0,t.length-1)),n.next=4,Object(K.e)(e,t);case 4:r(se(e,t)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error fetching network data",n.t0.message),r(Y(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}function le(e){return{type:"UPDATE_PRIVATE_FOR",payload:e&&e.map((function(e){return e.value}))}}function pe(e){return{type:"SELECT_ACCOUNT",payload:e}}var de=n(61),fe=n(87),me=function(e){var t=e.text,n=e.enabled,r=e.children;return n?d.a.createElement(fe.a,{placement:"bottom-start",trigger:"hover",show:"false",overlay:d.a.createElement(de.a,{className:"bg-light",id:"popover-basic"},d.a.createElement(de.a.Content,null,t))},r):r};function ye(){var e=Object(z.d)((function(e){return e})),t=Object(z.c)(),n=e.network,r=n.editing,c=n.status,i=n.endpoint,s=n.tesseraEndpoint,u=d.a.useState(i),l=Object(y.a)(u,2),p=l[0],f=l[1],m=d.a.useState(s),b=Object(y.a)(m,2),h=b[0],O=b[1];d.a.useEffect((function(){f(i),O(s)}),[i,s]);var g=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ue(p,h));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d.a.createElement("form",{style:v,onSubmit:function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Geth RPC"),d.a.createElement(me,{enabled:r,text:"This should be the url for your geth node\\'s RPC endpoint. It should include http(s), host/ip, and port. For example: http://localhost:22000/"},d.a.createElement("input",{className:"form-control",type:"text",disabled:!r,value:p,onChange:function(e){return f(e.target.value)}}))),d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Tessera"),d.a.createElement(me,{enabled:r,text:"This should be the url for your tessera keys endpoint. It should include http(s), host/ip, port, and path. For example: http://localhost:9081/partyInfo/keys"},d.a.createElement("input",{className:"form-control",type:"text",placeholder:"(Optional)",disabled:!r,value:h,onChange:function(e){return O(e.target.value)}}))),r?d.a.createElement("div",{style:D},d.a.createElement("i",{style:k,className:"fa fa-close",onClick:function(){return f(i),O(s),t(ce(!1)),void t(Y())}}),d.a.createElement("i",{style:k,className:"fa fa-check",onClick:function(){return g()}})):d.a.createElement("div",{style:D},d.a.createElement("div",{style:V(c)},c),d.a.createElement("i",{style:k,className:"fa fa-refresh",onClick:function(){t(se(i,s))}}),d.a.createElement("i",{style:k,className:"fa fa-pencil",onClick:function(){t(ce(!0))}})),d.a.createElement("button",{type:"submit",style:{display:"none"}}))}var be=n(23),ve=n(7),he=n(83),Oe=n(55),ge=n(84),Ee=n.n(ge);function we(){var e=Object(z.c)(),t=Object(z.d)((function(e){return e.txMetadata.privateFor})),n=Object(z.d)((function(e){return e.tessera.keysFromUser}),z.b),r=Object(z.d)((function(e){return e.tessera.keysFromServer}),z.b),a=r.length>0,o=a?r:n,c=o.filter((function(e){return t&&t.includes(e.value)})),i=a?Oe.a:he.a;return d.a.createElement(i,{components:{Option:je},placeholder:"Select or add...",options:o,value:c,closeMenuOnSelect:!0,isMulti:!0,autosize:"false",onChange:function(t){return e(le(t))},formatCreateLabel:function(e){return"Add '".concat(e,"'")},onCreateOption:function(t){if(44===t.length)if(Ee()(t)){var n={label:t,value:t,userCreated:!0};e(ae(n)),e(le([].concat(Object(be.a)(c),[n])))}else e(Y("Public key must be a valid base64 string: ".concat(t)));else e(Y("Public key length must equal 44: (actual: ".concat(t.length,") ").concat(t)))}})}var je=function(e){var t=Object(z.c)(),n=e.data;return d.a.createElement(ve.z.Option,e,d.a.createElement("div",{style:W},d.a.createElement("div",{style:B},d.a.createElement("div",{style:M},n.label)),n.userCreated&&d.a.createElement("i",{style:k,className:"fa fa-close",onClick:function(){return t({type:"REMOVE_PUBLIC_KEY",payload:n.value})}})))},Ce=n(50),xe=n.n(Ce);function ke(){var e=Object(z.d)((function(e){return e})),t=Object(z.c)(),n=e.network.accounts,r=void 0===n?[]:n,c=e.txMetadata,i=c.account,s=c.gasLimit,u=c.gasPrice,l=c.value,f=c.valueDenomination,m=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe()(i);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Could not copy to clipboard: ",i,e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){r.length>0&&!r.includes(i)&&t(pe(r[0]))}),[r]),d.a.createElement("div",{style:h},d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Account"),d.a.createElement("select",{className:"form-control",defaultValue:i,onChange:function(e){return t(pe(e.target.value))}},r.map((function(e){return d.a.createElement("option",{key:e,value:e},e)}))),d.a.createElement("i",{style:k,className:"fa fa-clipboard",onClick:function(e){return m()}})),d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Gas price"),d.a.createElement("input",{style:R,className:"form-control",type:"text",value:u,onChange:function(e){return t(function(e){return{type:"CHANGE_GAS_PRICE",payload:e}}(e.target.value))}})),d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Gas limit"),d.a.createElement("input",{style:R,className:"form-control",type:"text",value:s,onChange:function(e){return t(function(e){return{type:"CHANGE_GAS_LIMIT",payload:e}}(e.target.value))}})),d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Value"),d.a.createElement("input",{style:R,className:"form-control",type:"text",value:l,onChange:function(e){return t(function(e){return{type:"CHANGE_VALUE",payload:e}}(e.target.value))}}),d.a.createElement("select",{style:R,className:"form-control",defaultValue:f,onChange:function(e){return t(function(e){return{type:"CHANGE_VALUE_DENOMINATION",payload:e}}(e.target.value))}},d.a.createElement("option",{value:"wei"},"wei"),d.a.createElement("option",{value:"gwei"},"gwei"),d.a.createElement("option",{value:"finney"},"finney"),d.a.createElement("option",{value:"ether"},"ether"))),d.a.createElement("div",{style:N},d.a.createElement("div",{style:A},"Private for"),d.a.createElement("div",{style:G},d.a.createElement(we,null))))}var Se=n(47);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Te=function(e){var t=e.method,n=e.onSubmit,r=e.result,a=e.disabled,o=Object(p.useState)(!1),c=Object(y.a)(o,2),i=c[0],s=c[1],u=Object(p.useState)({}),l=Object(y.a)(u,2),f=l[0],m=l[1],b=Object(p.useState)(""),v=Object(y.a)(b,2),h=v[0],w=v[1],j=function(e){e.stopPropagation(),n(f)},C=function(e){w(e);var n={};e.split(",").forEach((function(e,r){if(!(t.inputs.length<=r)){var a=t.inputs[r].name;n[a]=e.trim()}})),m(n)},x=function(e,t){m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f,Object(H.a)({},e,t)))},S=function(e,n){e.preventDefault(),n||w(t.inputs.map((function(e){return f[e.name]})).filter((function(e){return null!=e})).join(", ")),s(n)},P=t.name||"Deploy";return d.a.createElement("div",{className:"method","data-method":P},i?d.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},d.a.createElement("div",{style:O},d.a.createElement("div",{style:{flexGrow:1}},P),d.a.createElement("i",{style:k,title:"Deploy",className:"fa fa-caret-up methCaret",onClick:function(e){return S(e,!1)}})),t.inputs.map((function(e){return d.a.createElement(Ne,{disabled:a,key:P+e.name,onChange:x,value:f[e.name],input:e})})),d.a.createElement("button",{disabled:a,onClick:j,style:{marginTop:8,alignSelf:"flex-end"},className:"btn btn-sm btn-".concat(t.constant?"info":"warning")},P)):d.a.createElement("div",{style:O},d.a.createElement("button",{disabled:a,onClick:j,style:g,className:"btn btn-sm btn-".concat(t.constant?"info":"warning")},P),t.inputs.length>0&&d.a.createElement("input",{placeholder:t.inputs.map((function(e){return"".concat(e.type," ").concat(e.name)})).join(", "),disabled:a,style:E,onChange:function(e){return C(e.target.value)},value:h,type:"text"}),t.inputs.length>0&&d.a.createElement("i",{style:k,title:"Deploy",className:"fa fa-caret-down methCaret",onClick:function(e){return S(e,!0)}})),r&&d.a.createElement("div",null,Re(r,t.outputs).map((function(e){var t=Object(y.a)(e,2),n=t[0],r=t[1];return"".concat(n,": ").concat(r)})).join(", ")))},Ne=function(e){var t=e.input,n=e.onChange,r=e.value,a=e.disabled,o=r?r.toString().split(",").map((function(e){return e.trim()})):[""],c=Ae(t),i=Object(p.useState)(o),s=Object(y.a)(i,2),u=s[0],l=s[1],f=function(e){n(t.name,c?e:e[0]),l(e)};return d.a.createElement("div",null,d.a.createElement("div",null,De(t),":"),u.map((function(e,n){return d.a.createElement("div",{key:"".concat(t.name).concat(n),className:"input-group method-inputs","data-param":t.name},d.a.createElement("input",{type:"text","data-param":t.name,"data-type":t.type,value:e,disabled:a,onChange:function(e){return function(e,t){var n=Object(be.a)(u);n[e]=t,f(n)}(n,e.target.value)}}),c&&[d.a.createElement("button",{style:T,key:"minus",onClick:function(){return function(e){var t=Object(be.a)(u);t.splice(e,1),f(t)}(n)},disabled:a,className:"btn btn-sm remove input-group-addon text-danger"},d.a.createElement("i",{className:"fa fa-minus"})),d.a.createElement("button",{style:T,key:"plus",onClick:function(){return function(e){var t=Object(be.a)(u);t.splice(e+1,0,""),f(t)}(n)},disabled:a,className:"btn btn-sm add input-group-addon text-success"},d.a.createElement("i",{className:"fa fa-plus"}))])})))},De=function(e){return"".concat(e.name||"input"," (").concat(e.type,")")},Ae=function(e){return e.type.match(/\[(\d+)?\]/)},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("object"!==typeof e){var n=t[0];e=Object(H.a)({},n.name?n.name:0,e)}else if("status"in e)return[["Status",e.status?"Success":"Failed"]];return t.map((function(t,n){var r=n;t.name&&t.name in e&&(r=t.name);var a=e[r];return t.type.startsWith("bytes")&&(a=Object(Se.b)(a)),[r,a]}))},_e=function(e){var t=e.method,n=e.onDeploy,r=e.onExisting,a=e.disabled,o=Object(p.useState)(""),c=Object(y.a)(o,2),i=c[0],s=c[1];return d.a.createElement("div",null,d.a.createElement(Te,{key:"constructor",disabled:a,method:t,onSubmit:function(e){return n(e)}}),d.a.createElement("div",{style:x},"or"),d.a.createElement("div",{style:O,className:"btn-group-sm"},d.a.createElement("button",{style:g,className:"btn btn-sm btn-info",disabled:a||""===i,onClick:function(){return r(i)}},"At Address"),d.a.createElement("input",{placeholder:"Existing contract address",disabled:a,style:E,onChange:function(e){return s(e.target.value)},value:i,type:"text"})))};function Ie(){var e=Object(z.d)((function(e){return e.txMetadata}),z.b),t=Object(z.d)((function(e){return e.compilation})),n=t.contracts,r=t.selectedContract,c=t.deploying,i=Object(z.c)();return Object(p.useEffect)((function(){r in n||i(te(Object.keys(n)[0]))}),[n]),d.a.createElement("div",{style:{width:"100%"}},d.a.createElement("div",null,"Compiled Contracts:"),d.a.createElement("select",{className:"form-control",defaultValue:r,onChange:function(e){return i(te(e.target.value))}},Object.entries(n).map((function(e){var t=Object(y.a)(e,2),n=t[0];t[1];return d.a.createElement("option",{key:n,value:n},n)}))),n[r]&&d.a.createElement(_e,{disabled:c,onDeploy:function(t){return i(function(e,t,n){return function(){var r=Object(o.a)(a.a.mark((function r(o){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o(Q(!0)),r.prev=1,r.next=4,Object(K.b)(t,e,n);case 4:c=r.sent,o(ne(t,c.options.address,n)),o(Y()),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("Error deploying contract",r.t0),o(Y(r.t0.message));case 13:o(Q(!1));case 14:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,n[r],e))},onExisting:function(t){i(function(e,t,n){return function(){var r=Object(o.a)(a.a.mark((function r(o){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o(Q(!0)),r.prev=1,r.next=4,Object(K.g)(t);case 4:o(ne(e,t,n)),o(Y()),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("Error attaching to existing contract",r.t0),o(Y(r.t0.message));case 12:o(Q(!1));case 13:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(n[r],t,e))},method:Object(J.a)(n[r].abi)}))}function Le(e){var t=e.address,n=Object(z.c)(),r=Object(z.d)((function(e){return e.txMetadata})),c=Object(z.d)((function(e){return e.deployed.deployedContracts}))[t],i=c.expanded,s=void 0!==i&&i,u=c.contractName,l=c.privateFor,p=c.loading,f=d.a.useState(l&&l.map((function(e){return{enabled:!0,key:e}}))),m=Object(y.a)(f,2),b=m[0],v=m[1],h=function(e){return c.results&&c.results[Object(J.b)(e)]},O=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe()(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Could not copy to clipboard: ",t,e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return d.a.createElement("div",{style:w},d.a.createElement("div",{className:"alert alert-secondary p-2",style:j},d.a.createElement("i",{style:k,title:"Expand contract instance",className:"fa fa-caret-".concat(s?"down":"right"," methCaret"),onClick:function(e){return n(function(e,t){return{type:"EXPAND_CONTRACT",payload:{address:e,expand:!t}}}(t,s))}}),d.a.createElement("div",{className:"input-group-text",style:P},u,"(",t,")"),d.a.createElement("i",{style:k,title:"Copy contract address",className:"fa fa-clipboard",onClick:function(e){return O()}}),d.a.createElement("i",{style:k,title:"Remove contract instance",className:"fa fa-close",onClick:function(e){return n(function(e){return{type:"REMOVE_CONTRACT",payload:e}}(t))}})),s&&d.a.createElement("div",{style:C},b&&d.a.createElement("div",{style:{fontSize:10}},d.a.createElement("div",null,"Private for:"),b.map((function(e,t){var n=e.enabled,r=e.key;return d.a.createElement("label",{key:r,style:_},d.a.createElement("input",{type:"checkbox",name:r,style:{marginRight:4},checked:n,onChange:function(e){var n=Object(be.a)(b);n[t].enabled=e.target.checked,v(n)}}),r)}))),c.abi.filter((function(e){return"function"===e.type})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return d.a.createElement(Te,{key:e.name,disabled:p,method:e,result:h(e),onSubmit:function(t){return n(function(e,t,n,r,c,i){return function(){var s=Object(o.a)(a.a.mark((function o(s){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(Z(e.address,!0)),a.prev=1,a.next=4,Object(K.a)(r,n,t,c,i,e);case 4:u=a.sent,l=u.res,s(ee(e.address,t,l)),s(Y()),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.error("Error calling contract method",a.t0),s(Y(a.t0.message));case 14:s(Z(e.address,!1));case 15:case"end":return a.stop()}}),o,null,[[1,10]])})));return function(e){return s.apply(this,arguments)}}()}(c,e,t,r,l,b))}})}))))}function Fe(){var e=Object(z.d)((function(e){return e.deployed.deployedAddresses}));return Object(p.useEffect)((function(){}),[]),d.a.createElement("div",{style:h},d.a.createElement("div",null,"Deployed Contracts:"),0===e.length&&d.a.createElement("div",null,"None"),e.map((function(e){return d.a.createElement(Le,{key:e,address:e})})))}function Ue(){var e=Object(z.c)(),t=Object(z.d)((function(e){return e.error}));return""===t?"":d.a.createElement("div",{style:F},d.a.createElement("div",{style:U},t),d.a.createElement("i",{style:S,className:"fa fa-close",onClick:function(){return e(Y())}}))}function Ge(){return d.a.createElement("div",{style:I},d.a.createElement("div",null,"v","0.1.2"),d.a.createElement("img",{style:L,src:"logo.png",alt:"Quorum Logo"}))}var We=function(){var e=Object(z.d)((function(e){return"Disconnected"!==e.network.status}));return d.a.createElement("div",{style:b,className:"App"},d.a.createElement(Ue,null),d.a.createElement(ye,null),e&&d.a.createElement(ke,null),d.a.createElement("br",null),e&&d.a.createElement(Ie,null),d.a.createElement("br",null),e&&d.a.createElement(Fe,null),d.a.createElement("div",{style:{flexGrow:1}}),d.a.createElement(Ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be="";function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze={endpoint:"",tesseraEndpoint:"",accounts:[],editing:!0,status:"Disconnected"};function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Je={gasLimit:"3000000",gasPrice:"0",value:"0",valueDenomination:"wei"};function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe={contracts:{},deploying:!1};function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze={keysFromUser:[],keysFromServer:[]};function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var nt={deployedAddresses:[],deployedContracts:{}};var rt=n(35),at=Object(rt.combineReducers)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.payload;default:return e}},network:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NETWORK":return localStorage.network=JSON.stringify(t.payload),t.payload;case"EDIT_NETWORK":return Ve({},e,{editing:t.payload});case"SET_NETWORK_CONNECTING":return Ve({},e,{status:"Connecting..."});default:return e}},txMetadata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_ACCOUNT":return Ke({},e,{account:t.payload});case"CHANGE_GAS_PRICE":return Ke({},e,{gasPrice:t.payload});case"CHANGE_GAS_LIMIT":return Ke({},e,{gasLimit:t.payload});case"CHANGE_VALUE":return Ke({},e,{value:t.payload});case"CHANGE_VALUE_DENOMINATION":return Ke({},e,{valueDenomination:t.payload});case"UPDATE_PRIVATE_FOR":return Ke({},e,{privateFor:t.payload&&t.payload.length>0?t.payload:void 0});default:return e}},compilation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMPILATION":return Xe({},e,{contracts:Object(J.c)(t.payload)});case"SELECT_CONTRACT":return Xe({},e,{selectedContract:t.payload});case"SET_CONTRACT_DEPLOYING":return Xe({},e,{deploying:t.payload});default:return e}},tessera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PUBLIC_KEY":var n=[].concat(Object(be.a)(e.keysFromUser),[t.payload]);return localStorage.keysFromUser=JSON.stringify(n),$e({},e,{keysFromUser:n});case"REMOVE_PUBLIC_KEY":var r=e.keysFromUser.filter((function(e){return e.value!==t.payload}));return localStorage.keysFromUser=JSON.stringify(r),$e({},e,{keysFromUser:r});case"SET_TESSERA_OPTIONS":return $e({},e,{keysFromServer:t.payload});default:return e}},deployed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTRACT":var n=t.payload,r=Object(be.a)(e.deployedAddresses);return-1===r.indexOf(n.address)&&r.push(n.address),tt({},e,{deployedAddresses:r,deployedContracts:tt({},e.deployedContracts,Object(H.a)({},n.address,n))});case"REMOVE_CONTRACT":var a=t.payload,o=tt({},e.deployedContracts);return delete o[a],tt({},e,{deployedAddresses:e.deployedAddresses.filter((function(e){return e!==a})),deployedContracts:o});case"SET_CONTRACT_LOADING":var c=e.deployedContracts[t.payload.address];return tt({},e,{deployedContracts:tt({},e.deployedContracts,Object(H.a)({},t.payload.address,tt({},c,{loading:t.payload.loading})))});case"METHOD_CALL_SUCCESS":var i=t.payload,s=i.address,u=i.methodSignature,l=i.result,p=e.deployedContracts[s];return tt({},e,{deployedContracts:tt({},e.deployedContracts,Object(H.a)({},s,tt({},p,{results:tt({},p.results,Object(H.a)({},u,l))})))});case"RESET_TX_RESULTS":var d=tt({},e.deployedContracts);return e.deployedAddresses.forEach((function(e){return d[e].results={}})),tt({},e,{deployedContracts:d});case"EXPAND_CONTRACT":var f=e.deployedContracts[t.payload.address];return tt({},e,{deployedContracts:tt({},e.deployedContracts,Object(H.a)({},t.payload.address,tt({},f,{expanded:t.payload.expand})))});default:return e}}}),ot=n(85),ct=n(86),it=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),t}(l.PluginClient),st=Object(rt.createStore)(at,Object(ot.composeWithDevTools)(Object(rt.applyMiddleware)(ct.a))),ut=Object(l.buildIframeClient)(new it);function lt(e,t){return pt.apply(this,arguments)}function pt(){return(pt=Object(o.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:r=JSON.parse(localStorage.network||"{}"),n(se(r.endpoint,r.tesseraEndpoint)),JSON.parse(localStorage.keysFromUser||"[]").forEach((function(e){return n(ae(e))})),n(re(t)),t.solidity.on("compilationFinished",(function(e,r,a,o){n(re(t))}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}ut.onload(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.render(d.a.createElement(z.a,{store:st},d.a.createElement(We,{client:ut})),document.getElementById("root")),lt(ut,st.dispatch).catch((function(e){return console.error("Error initializing plugin",e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));case 3:case"end":return e.stop()}}),e)}))))},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n(11),a=n(21);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){return"".concat(e.name,"(").concat(e.inputs.map((function(e){return"".concat(e.type," ").concat(e.name)})).join(", "),")")}function i(e){var t=e.filter((function(e){return"constructor"===e.type}));return t.length>0?t[0]:{type:"constructor",inputs:[],payable:!1,constant:!1,name:""}}function s(e){if(null===e)return{};var t={};return Object.entries(e.contracts).forEach((function(e){var n=Object(a.a)(e,2),c=n[0],i=n[1];Object.entries(i).forEach((function(e){var n=Object(a.a)(e,2),i=n[0],s=n[1],u="".concat(i," - ").concat(c);t[u]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,{contractName:i,filename:c})}))})),t}},32:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return y})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return S})),n.d(t,"g",(function(){return T}));var r,a,o=n(23),c=n(5),i=n.n(c),s=n(8),u=n(33),l=n.n(u),p=n(47),d=n(28),f=n(43),m=n.n(f);function y(e,t){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O(t),a=n,e.next=4,v(t,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(i.a.mark((function e(t,n){var r,a,o,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("RPC url must not be blank.");case 2:if(e.prev=2,!t.startsWith("http")){e.next=13;break}return r=new URL(t),a=r.username,o=r.password,c={},r.username="",r.password="",a&&(c.auth={username:a,password:o}),e.next=13,m.a.post(r.toString(),{jsonrpc:"2.0",method:"eth_protocolVersion",params:[]},c);case 13:return s=O(t),e.next=16,s.eth.getProtocolVersion();case 16:e.next=27;break;case 18:if(e.prev=18,e.t0=e.catch(2),!e.t0.response){e.next=26;break}if(401!==e.t0.response.status){e.next=23;break}throw new Error("401 Unauthorized. Did you include Basic Auth credentials in the URL? (https://username:password@example.com)");case 23:throw new Error("Error response from ".concat(t,": ").concat(e.t0.response.status," ").concat(e.t0.response.statusText," ").concat(e.t0.response.data));case 26:throw new Error("Could not connect to ".concat(t,": ").concat(e.t0.message,". This could be: a. geth is not running at this address, b. the port is not accessible, or c. CORS settings on geth do not allow this url (check the developer console for CORS errors)"));case 27:if(""===n){e.next=40;break}return e.prev=28,e.next=31,m.a.get("".concat(n));case 31:e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(28),!e.t1.response){e.next=39;break}throw new Error("Error response from ".concat(n,": ").concat(e.t1.response.status," ").concat(e.t1.response.statusText," ").concat(e.t1.response.data));case 39:throw new Error("Could not connect to ".concat(n,": ").concat(e.t1.message,". This could be: a. tessera is not running at this address, b. the port is not accessible, or c. CORS settings on tessera do not allow this url (check the developer console for CORS errors)"));case 40:case"end":return e.stop()}}),e,null,[[2,18],[28,33]])})))).apply(this,arguments)}function O(t){var n;if(t.startsWith("http")){var r=new URL(t),a=[];if(r.username){var o=new e("".concat(r.username,":").concat(r.password)).toString("base64");r.username="",r.password="",a.push({name:"Authorization",value:"Basic ".concat(o)})}n=new l.a.providers.HttpProvider(r.toString(),{headers:a})}else n=t.startsWith("ws")?new l.a.providers.WebsocketProvider(t):t;return new l.a(n)}function g(){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.eth.getAccounts();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,m.a.get("".concat(a));case 4:return t=e.sent,e.abrupt("return",t.data.keys.map((function(e){return C(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return{value:e.key,label:e.key}}function x(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(i.a.mark((function e(t,n,a){var o,c,s,u,f,m,y,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.abi,c=Object(d.a)(o),s="0x"+t.evm.bytecode.object,u=c.inputs.map((function(e){var t=e.name,r=e.type,a=n[t];return r.startsWith("bytes")?Object(p.a)(a):a})),f={from:a.account,gasPrice:a.gasPrice,gas:a.gasLimit,value:l.a.utils.toWei(a.value,a.valueDenomination),privateFrom:a.privateFrom,privateFor:a.privateFor},m=new r.eth.Contract(o),e.next=8,m.deploy({data:s,arguments:u});case 8:return y=e.sent,e.next=11,y.send(f);case 11:return b=e.sent,e.abrupt("return",b);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n,r,a,o){return P.apply(this,arguments)}function P(){return(P=Object(s.a)(i.a.mark((function e(t,n,a,c,s,u){var p,d,f,m,y,b,v,h,O,g,E,w,j,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=t.account,f=t.gasLimit,m=t.gasPrice,y=t.value,b=t.valueDenomination,v=Object.values(n),h=v.map((function(e){return JSON.stringify(e)})).join(", "),O=a.name+"("+h+")",g={from:d,gas:f,gasPrice:m,value:l.a.utils.toWei(y,b),args:v,privateFor:c&&s.filter((function(e){return e.enabled})).map((function(e){return e.key}))},e.next=7,T(u.address);case 7:return E=new r.eth.Contract(u.abi,u.address),w=(p=E.methods)[a.name].apply(p,Object(o.a)(v)),j=a.constant?"call":"send",e.next=12,w[j](g);case 12:return C=e.sent,e.abrupt("return",{methodSig:O,methodArgs:g,res:C});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return N.apply(this,arguments)}function N(){return(N=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.eth.getCode(t);case 2:if("0x"!==e.sent){e.next=5;break}throw new Error("Contract does not exist at ".concat(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.defaults.headers.post["Content-Type"]="application/json"}).call(this,n(102).Buffer)},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(33),a=n.n(r);function o(e){return Array.isArray(e)?e.map((function(e){return o(e)})):a.a.utils.toAscii(e)}function c(e){return Array.isArray(e)?e.map((function(e){return c(e)})):a.a.utils.fromAscii(e)}},90:function(e,t,n){e.exports=n(146)},96:function(e,t,n){},97:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.c3330735.chunk.js.map