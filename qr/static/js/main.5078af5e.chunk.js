(window["webpackJsonpquorum-remix"]=window["webpackJsonpquorum-remix"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(8),c=n(73),i=n(85),s=n(74),l=n(86),u=n(53),d=n(0),p=n.n(d),f=n(10),m=n.n(f),y=(n(93),n(94),n(20)),v={display:"flex",alignItems:"flex-start",flexDirection:"column",minHeight:"100%"},b={display:"flex",alignItems:"flex-end",flexDirection:"column",width:"100%"},h={width:"100%"},E={display:"flex",marginTop:8},g={margin:0,minWidth:100,width:100,wordBreak:"inherit",borderRadius:3,borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0,overflowX:"hidden",textOverflow:"ellipsis"},O={border:"1px solid #dddddd",fontSize:10,padding:".36em",borderRadius:5,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderLeft:0,flexGrow:1},x={display:"flex",flexDirection:"column",marginTop:8},w={display:"flex",alignItems:"center",marginBottom:0},C={padding:"0px 0 10px 10px",border:"1px solid rgba(0,0,0,0.125)",borderTopLeftRadius:0,borderBottomLeftRadius:"0.25rem",borderTopRightRadius:0,borderBottomRightRadius:"0.25rem"},j={width:100,height:28,textAlign:"center",marginTop:4,marginBottom:-5},k={cursor:"pointer",minWidth:28,textAlign:"center",fontSize:16,padding:8,verticalAlign:"center",textDecoration:"none"},T={cursor:"pointer",textAlign:"center",fontSize:11,padding:3,verticalAlign:"center",textDecoration:"none"},S={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"11px"},N={margin:0,wordBreak:"inherit",borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0},A={display:"flex",alignItems:"center",paddingTop:4,width:"100%"},R={display:"flex",alignItems:"center",paddingTop:4,justifyContent:"flex-end"},_={fontSize:12,whiteSpace:"nowrap",minWidth:72},P={maxWidth:92,marginRight:4},D={display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},L={display:"flex",width:"100%",justifyContent:"space-between",height:18,marginTop:12,marginBottom:8,fontSize:12},I={height:18,marginBottom:4,alignSelf:"flex-end"},M={display:"flex",marginBottom:6,width:"100%"},F={fontSize:11,color:"red",width:0,flexGrow:1},G={width:0,flexGrow:1},U={display:"flex",width:"100%",height:"100%",alignItems:"center"},B={display:"flex",flexDirection:"column",whiteSpace:"nowrap",overflow:"hidden",flexGrow:1},W={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#222"},H=function(e){return{color:"Connected"===e?"green":"Connecting..."===e?"black":"red",fontSize:11,marginRight:8}},V=n(6),z=n(24);function K(e){return"".concat(e.name,"(").concat(e.inputs.map((function(e){return"".concat(e.type," ").concat(e.name)})).join(", "),")")}function J(e){var t=e.filter((function(e){return"constructor"===e.type}));return t.length>0?t[0]:{type:"constructor",inputs:[],payable:!1,constant:!1,name:""}}var Y=n(23),X=n(34),q=n.n(X);function Q(e){return Array.isArray(e)?e.map((function(e){return Q(e)})):q.a.utils.toAscii(e)}function $(e){return Array.isArray(e)?e.map((function(e){return $(e)})):q.a.utils.fromAscii(e)}var Z,ee,te=n(40),ne=n.n(te);function ae(e,t){return re.apply(this,arguments)}function re(){return(re=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z=new q.a(t),ee=n,e.next=4,oe(t,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("RPC url must not be blank.");case 2:return e.prev=2,e.next=5,ne.a.post(t,{body:JSON.stringify({jsonrpc:"2.0",method:"eth_protocolVersion",params:[]})});case 5:e.next=14;break;case 7:if(e.prev=7,e.t0=e.catch(2),!e.t0.response){e.next=13;break}throw new Error("Error response from ".concat(t,": ").concat(e.t0.response.status," ").concat(e.t0.response.statusText," ").concat(e.t0.response.data));case 13:throw new Error("Could not connect to ".concat(t,": ").concat(e.t0.message,". This could be: a. geth is not running at this address, b. the port is not accessible, or c. CORS settings on geth do not allow this url (check the developer console for CORS errors)"));case 14:if(""===n){e.next=27;break}return e.prev=15,e.next=18,ne.a.get("".concat(n));case 18:e.next=27;break;case 20:if(e.prev=20,e.t1=e.catch(15),!e.t1.response){e.next=26;break}throw new Error("Error response from ".concat(n,": ").concat(e.t1.response.status," ").concat(e.t1.response.statusText," ").concat(e.t1.response.data));case 26:throw new Error("Could not connect to ".concat(n,": ").concat(e.t1.message,". This could be: a. tessera is not running at this address, b. the port is not accessible, or c. CORS settings on tessera do not allow this url (check the developer console for CORS errors)"));case 27:case"end":return e.stop()}}),e,null,[[2,7],[15,20]])})))).apply(this,arguments)}function ie(){return se.apply(this,arguments)}function se(){return(se=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.eth.getAccounts();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return(ue=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,ne.a.get("".concat(ee));case 4:return t=e.sent,e.abrupt("return",t.data.keys.map((function(e){return de(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return{value:e.key,label:e.key}}function pe(e,t,n){return fe.apply(this,arguments)}function fe(){return(fe=Object(o.a)(r.a.mark((function e(t,n,a){var o,c,i,s,l,u,d,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.abi,c=J(o),i="0x"+t.evm.bytecode.object,s=c.inputs.map((function(e){var t=e.name,a=e.type,r=n[t];return a.startsWith("bytes")?$(r):r})),l={from:a.account,gasPrice:a.gasPrice,gas:a.gasLimit,value:q.a.utils.toWei(a.value,a.valueDenomination),privateFrom:a.privateFrom,privateFor:a.privateFor},u=new Z.eth.Contract(o),e.next=8,u.deploy({data:i,arguments:s});case 8:return d=e.sent,e.next=11,d.send(l);case 11:return p=e.sent,e.abrupt("return",p);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t,n,a,r,o){return ye.apply(this,arguments)}function ye(){return(ye=Object(o.a)(r.a.mark((function e(t,n,a,o,c,i){var s,l,u,d,p,f,m,y,v,b,h,E,g,O;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.account,u=t.gasLimit,d=t.gasPrice,p=t.value,f=t.valueDenomination,m=Object.values(n),y=m.map((function(e){return JSON.stringify(e)})).join(", "),v=a.name+"("+y+")",b={from:l,gas:u,gasPrice:d,value:q.a.utils.toWei(p,f),args:m,privateFor:o&&c.filter((function(e){return e.enabled})).map((function(e){return e.key}))},e.next=7,ve(i.address);case 7:return h=new Z.eth.Contract(i.abi,i.address),E=(s=h.methods)[a.name].apply(s,Object(Y.a)(m)),g=a.constant?"call":"send",e.next=12,E[g](b);case 12:return O=e.sent,e.abrupt("return",{methodSig:v,methodArgs:b,res:O});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return be.apply(this,arguments)}function be(){return(be=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.eth.getCode(t);case 2:if("0x"!==e.sent){e.next=5;break}throw new Error("Contract does not exist at ".concat(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e){return{type:"SET_CONTRACT_DEPLOYING",payload:e}}function Oe(e,t){return{type:"START_METHOD_CALL",payload:{address:e,methodSignature:K(t)}}}function xe(e,t,n){return{type:"METHOD_CALL",payload:{address:e,methodSignature:K(t),result:n}}}function we(e){return{type:"SELECT_CONTRACT",payload:e}}function Ce(e,t,n){return{type:"ADD_CONTRACT",payload:Ee({},e,{address:t,privateFor:n.privateFor,privateFrom:n.privateFrom})}}function je(){return{type:"SET_ERROR",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}function ke(e){return{type:"EDIT_NETWORK",payload:e}}function Te(e){return{type:"UPDATE_PRIVATE_FOR",payload:e&&e.map((function(e){return e.value}))}}function Se(e){return{type:"SELECT_ACCOUNT",payload:e}}function Ne(e){return{type:"FETCH_COMPILATION",payload:e.data}}function Ae(e){return{type:"ADD_PUBLIC_KEY",payload:e}}function Re(e){return{type:"SET_TESSERA_OPTIONS",payload:e}}function _e(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.solidity.getCompilationResult();case 3:a=t.sent,n(Ne(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error getting compilation result",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function Pe(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o,c,i,s,l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a({type:"SET_NETWORK_CONNECTING"}),o=[],c="Disconnected",i=!0,s="",n.prev=2,!e){n.next=17;break}return n.next=6,ae(e,t);case 6:return c="Connected",i=!1,n.next=10,ie();case 10:return o=n.sent,n.next=13,le();case 13:l=n.sent,a(Re(l)),n.next=18;break;case 17:s="Please connect to a quorum node";case 18:n.next=24;break;case 20:n.prev=20,n.t0=n.catch(2),console.log("Error fetching network data",n.t0.message),s=n.t0.message;case 24:a(je(s)),a({type:"SET_NETWORK",payload:{endpoint:e,tesseraEndpoint:t,accounts:o,status:c,editing:i}}),a({type:"RESET_TX_RESULTS"});case 27:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e){return n.apply(this,arguments)}}()}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(o.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.endsWith("/")&&(t=t.substring(0,t.length-1)),n.next=4,oe(e,t);case 4:a(Pe(e,t)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error fetching network data",n.t0.message),a(je(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}ne.a.defaults.headers.post["Content-Type"]="application/json";var Le=n(58),Ie=n(84),Me=function(e){var t=e.text,n=e.enabled,a=e.children;return n?p.a.createElement(Ie.a,{placement:"bottom-start",trigger:"hover",show:"false",overlay:p.a.createElement(Le.a,{className:"bg-light",id:"popover-basic"},p.a.createElement(Le.a.Content,null,t))},a):a};function Fe(){var e=Object(V.d)((function(e){return e})),t=Object(V.c)(),n=e.network,a=n.editing,c=n.status,i=n.endpoint,s=n.tesseraEndpoint,l=p.a.useState(i),u=Object(y.a)(l,2),d=u[0],f=u[1],m=p.a.useState(s),v=Object(y.a)(m,2),h=v[0],E=v[1];p.a.useEffect((function(){f(i),E(s)}),[i,s]);var g=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(De(d,h));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p.a.createElement("form",{style:b,onSubmit:function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Geth RPC"),p.a.createElement(Me,{enabled:a,text:"This should be the url for your geth node\\'s RPC endpoint. It should include http(s), host/ip, and port. For example: http://localhost:22000/"},p.a.createElement("input",{className:"form-control",type:"text",disabled:!a,value:d,onChange:function(e){return f(e.target.value)}}))),p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Tessera"),p.a.createElement(Me,{enabled:a,text:"This should be the url for your tessera keys endpoint. It should include http(s), host/ip, port, and path. For example: http://localhost:9081/partyInfo/keys"},p.a.createElement("input",{className:"form-control",type:"text",placeholder:"(Optional)",disabled:!a,value:h,onChange:function(e){return E(e.target.value)}}))),a?p.a.createElement("div",{style:R},p.a.createElement("i",{style:k,className:"fa fa-close",onClick:function(){return f(i),E(s),t(ke(!1)),void t(je())}}),p.a.createElement("i",{style:k,className:"fa fa-check",onClick:function(){return g()}})):p.a.createElement("div",{style:R},p.a.createElement("div",{style:H(c)},c),p.a.createElement("i",{style:k,className:"fa fa-refresh",onClick:function(){t(Pe(i,s))}}),p.a.createElement("i",{style:k,className:"fa fa-pencil",onClick:function(){t(ke(!0))}})),p.a.createElement("button",{type:"submit",style:{display:"none"}}))}var Ge=n(7),Ue=n(80),Be=n(52),We=n(81),He=n.n(We);function Ve(){var e=Object(V.c)(),t=Object(V.d)((function(e){return e.txMetadata.privateFor})),n=Object(V.d)((function(e){return e.tessera.keysFromUser}),V.b),a=Object(V.d)((function(e){return e.tessera.keysFromServer}),V.b),r=a.length>0,o=r?a:n,c=o.filter((function(e){return t&&t.includes(e.value)})),i=r?Be.a:Ue.a;return p.a.createElement(i,{components:{Option:ze},placeholder:"Select or add...",options:o,value:c,closeMenuOnSelect:!0,isMulti:!0,autosize:"false",onChange:function(t){return e(Te(t))},formatCreateLabel:function(e){return"Add '".concat(e,"'")},onCreateOption:function(t){if(44===t.length)if(He()(t)){var n={label:t,value:t,userCreated:!0};e(Ae(n)),e(Te([].concat(Object(Y.a)(c),[n])))}else e(je("Public key must be a valid base64 string: ".concat(t)));else e(je("Public key length must equal 44: (actual: ".concat(t.length,") ").concat(t)))}})}var ze=function(e){var t=Object(V.c)(),n=e.data;return p.a.createElement(Ge.z.Option,e,p.a.createElement("div",{style:U},p.a.createElement("div",{style:B},p.a.createElement("div",{style:W},n.label)),n.userCreated&&p.a.createElement("i",{style:k,className:"fa fa-close",onClick:function(){return t({type:"REMOVE_PUBLIC_KEY",payload:n.value})}})))},Ke=n(47),Je=n.n(Ke);function Ye(){var e=Object(V.d)((function(e){return e})),t=Object(V.c)(),n=e.network.accounts,a=void 0===n?[]:n,c=e.txMetadata,i=c.account,s=c.gasLimit,l=c.gasPrice,u=c.value,f=c.valueDenomination,m=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Je()(i);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Could not copy to clipboard: ",i,e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){a.length>0&&!a.includes(i)&&t(Se(a[0]))}),[a]),p.a.createElement("div",{style:h},p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Account"),p.a.createElement("select",{className:"form-control",defaultValue:i,onChange:function(e){return t(Se(e.target.value))}},a.map((function(e){return p.a.createElement("option",{key:e,value:e},e)}))),p.a.createElement("i",{style:k,className:"fa fa-clipboard",onClick:function(e){return m()}})),p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Gas price"),p.a.createElement("input",{style:P,className:"form-control",type:"text",value:l,onChange:function(e){return t(function(e){return{type:"CHANGE_GAS_PRICE",payload:e}}(e.target.value))}})),p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Gas limit"),p.a.createElement("input",{style:P,className:"form-control",type:"text",value:s,onChange:function(e){return t(function(e){return{type:"CHANGE_GAS_LIMIT",payload:e}}(e.target.value))}})),p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Value"),p.a.createElement("input",{style:P,className:"form-control",type:"text",value:u,onChange:function(e){return t(function(e){return{type:"CHANGE_VALUE",payload:e}}(e.target.value))}}),p.a.createElement("select",{style:P,className:"form-control",defaultValue:f,onChange:function(e){return t(function(e){return{type:"CHANGE_VALUE_DENOMINATION",payload:e}}(e.target.value))}},p.a.createElement("option",{value:"wei"},"wei"),p.a.createElement("option",{value:"gwei"},"gwei"),p.a.createElement("option",{value:"finney"},"finney"),p.a.createElement("option",{value:"ether"},"ether"))),p.a.createElement("div",{style:A},p.a.createElement("div",{style:_},"Private for"),p.a.createElement("div",{style:G},p.a.createElement(Ve,null))))}function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var qe=function(e){var t=e.method,n=e.onSubmit,a=e.result,r=e.disabled,o=Object(d.useState)(!1),c=Object(y.a)(o,2),i=c[0],s=c[1],l=Object(d.useState)({}),u=Object(y.a)(l,2),f=u[0],m=u[1],v=Object(d.useState)(""),b=Object(y.a)(v,2),h=b[0],x=b[1],w=function(e){e.stopPropagation(),n(f)},C=function(e){x(e);var n={};e.split(",").forEach((function(e,a){if(!(t.inputs.length<=a)){var r=t.inputs[a].name;n[r]=e.trim()}})),m(n)},j=function(e,t){m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f,Object(z.a)({},e,t)))},T=function(e,n){e.preventDefault(),n||x(t.inputs.map((function(e){return f[e.name]})).filter((function(e){return null!=e})).join(", ")),s(n)},S=t.name||"Deploy";return p.a.createElement("div",{className:"method","data-method":S},i?p.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},p.a.createElement("div",{style:E},p.a.createElement("div",{style:{flexGrow:1}},S),p.a.createElement("i",{style:k,title:"Deploy",className:"fa fa-caret-up methCaret",onClick:function(e){return T(e,!1)}})),t.inputs.map((function(e){return p.a.createElement(Qe,{disabled:r,key:S+e.name,onChange:j,value:f[e.name],input:e})})),p.a.createElement("button",{disabled:r,onClick:w,style:{marginTop:8,alignSelf:"flex-end"},className:"btn btn-sm btn-".concat(t.constant?"info":"warning")},S)):p.a.createElement("div",{style:E},p.a.createElement("button",{disabled:r,onClick:w,style:g,className:"btn btn-sm btn-".concat(t.constant?"info":"warning")},S),t.inputs.length>0&&p.a.createElement("input",{placeholder:t.inputs.map((function(e){return"".concat(e.type," ").concat(e.name)})).join(", "),disabled:r,style:O,onChange:function(e){return C(e.target.value)},value:h,type:"text"}),t.inputs.length>0&&p.a.createElement("i",{style:k,title:"Deploy",className:"fa fa-caret-down methCaret",onClick:function(e){return T(e,!0)}})),a&&p.a.createElement("div",null,et(a,t.outputs).map((function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];return"".concat(n,": ").concat(a)})).join(", ")))},Qe=function(e){var t=e.input,n=e.onChange,a=e.value,r=e.disabled,o=a?a.toString().split(",").map((function(e){return e.trim()})):[""],c=Ze(t),i=Object(d.useState)(o),s=Object(y.a)(i,2),l=s[0],u=s[1],f=function(e){n(t.name,c?e:e[0]),u(e)};return p.a.createElement("div",null,p.a.createElement("div",null,$e(t),":"),l.map((function(e,n){return p.a.createElement("div",{key:"".concat(t.name).concat(n),className:"input-group method-inputs","data-param":t.name},p.a.createElement("input",{type:"text","data-param":t.name,"data-type":t.type,value:e,disabled:r,onChange:function(e){return function(e,t){var n=Object(Y.a)(l);n[e]=t,f(n)}(n,e.target.value)}}),c&&[p.a.createElement("button",{style:N,key:"minus",onClick:function(){return function(e){var t=Object(Y.a)(l);t.splice(e,1),f(t)}(n)},disabled:r,className:"btn btn-sm remove input-group-addon text-danger"},p.a.createElement("i",{className:"fa fa-minus"})),p.a.createElement("button",{style:N,key:"plus",onClick:function(){return function(e){var t=Object(Y.a)(l);t.splice(e+1,0,""),f(t)}(n)},disabled:r,className:"btn btn-sm add input-group-addon text-success"},p.a.createElement("i",{className:"fa fa-plus"}))])})))},$e=function(e){return"".concat(e.name||"input"," (").concat(e.type,")")},Ze=function(e){return e.type.match(/\[(\d+)?\]/)},et=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("object"!==typeof e){var n=t[0];e=Object(z.a)({},n.name?n.name:0,e)}else if("status"in e)return[["Status",e.status?"Success":"Failed"]];return t.map((function(t,n){var a=n;t.name&&t.name in e&&(a=t.name);var r=e[a];return t.type.startsWith("bytes")&&(r=Q(r)),[a,r]}))},tt=function(e){var t=e.method,n=e.onDeploy,a=e.onExisting,r=e.disabled,o=Object(d.useState)(""),c=Object(y.a)(o,2),i=c[0],s=c[1];return p.a.createElement("div",null,p.a.createElement(qe,{key:"constructor",disabled:r,method:t,onSubmit:function(e){return n(e)}}),p.a.createElement("div",{style:j},"or"),p.a.createElement("div",{style:E,className:"btn-group-sm"},p.a.createElement("button",{style:g,className:"btn btn-sm btn-info",disabled:r||""===i,onClick:function(){return a(i)}},"At Address"),p.a.createElement("input",{placeholder:"Existing contract address",disabled:r,style:O,onChange:function(e){return s(e.target.value)},value:i,type:"text"})))};function nt(){var e=Object(V.d)((function(e){return e.txMetadata}),V.b),t=Object(V.d)((function(e){return e.compilation})),n=t.contracts,a=t.selectedContract,c=t.deploying,i=Object(V.c)();return Object(d.useEffect)((function(){a in n||i(we(Object.keys(n)[0]))}),[n]),p.a.createElement("div",{style:{width:"100%"}},p.a.createElement("div",null,"Compiled Contracts:"),p.a.createElement("select",{className:"form-control",defaultValue:a,onChange:function(e){return i(we(e.target.value))}},Object.entries(n).map((function(e){var t=Object(y.a)(e,2),n=t[0];t[1];return p.a.createElement("option",{key:n,value:n},n)}))),n[a]&&p.a.createElement(tt,{disabled:c,onDeploy:function(t){return i(function(e,t,n){return function(){var a=Object(o.a)(r.a.mark((function a(o){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(ge(!0)),a.prev=1,a.next=4,pe(t,e,n);case 4:c=a.sent,o(Ce(t,c.options.address,n)),o(je()),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.error("Error deploying contract",a.t0),o(je(a.t0.message));case 13:o(ge(!1));case 14:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,n[a],e))},onExisting:function(t){i(function(e,t,n){return function(){var a=Object(o.a)(r.a.mark((function a(o){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(ge(!0)),a.prev=1,a.next=4,ve(t);case 4:o(Ce(e,t,n)),o(je()),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error("Error attaching to existing contract",a.t0),o(je(a.t0.message));case 12:o(ge(!1));case 13:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(n[a],t,e))},method:J(n[a].abi)}))}function at(e){var t=e.address,n=Object(V.d)((function(e){return e})),a=Object(V.c)(),c=n.txMetadata,i=n.deployedContracts[t],s=i.expanded,l=void 0!==s&&s,u=i.contractName,d=i.privateFor,f=i.loading,m=p.a.useState(d&&d.map((function(e){return{enabled:!0,key:e}}))),v=Object(y.a)(m,2),b=v[0],h=v[1],E=function(e){return i.results&&i.results[K(e)]},g=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Je()(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Could not copy to clipboard: ",t,e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return p.a.createElement("div",{style:x},p.a.createElement("div",{className:"alert alert-secondary p-2",style:w},p.a.createElement("i",{style:k,title:"Expand contract instance",className:"fa fa-caret-".concat(l?"down":"right"," methCaret"),onClick:function(e){return a(function(e,t){return{type:"EXPAND_CONTRACT",payload:{address:e,expand:!t}}}(t,l))}}),p.a.createElement("div",{className:"input-group-text",style:S},u,"(",t,")"),p.a.createElement("i",{style:k,title:"Copy contract address",className:"fa fa-clipboard",onClick:function(e){return g()}}),p.a.createElement("i",{style:k,title:"Remove contract instance",className:"fa fa-close",onClick:function(e){return a(function(e){return{type:"REMOVE_CONTRACT",payload:e}}(t))}})),l&&p.a.createElement("div",{style:C},b&&p.a.createElement("div",{style:{fontSize:10}},p.a.createElement("div",null,"Private for:"),b.map((function(e,t){var n=e.enabled,a=e.key;return p.a.createElement("label",{key:a,style:D},p.a.createElement("input",{type:"checkbox",name:a,style:{marginRight:4},checked:n,onChange:function(e){var n=Object(Y.a)(b);n[t].enabled=e.target.checked,h(n)}}),a)}))),i.abi.filter((function(e){return"function"===e.type})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return p.a.createElement(qe,{key:e.name,disabled:f,method:e,result:E(e),onSubmit:function(t){return a(function(e,t,n,a,c,i){return function(){var s=Object(o.a)(r.a.mark((function o(s){var l,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(Oe(e.address,t)),r.prev=1,r.next=4,me(a,n,t,c,i,e);case 4:l=r.sent,u=l.res,s(xe(e.address,t,u)),s(je()),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.error("Error calling contract method",r.t0),s(je(r.t0.message));case 14:case"end":return r.stop()}}),o,null,[[1,10]])})));return function(e){return s.apply(this,arguments)}}()}(i,e,t,c,d,b))}})}))))}function rt(){var e=Object(V.d)((function(e){return e})).deployedAddresses;return Object(d.useEffect)((function(){}),[]),p.a.createElement("div",{style:h},p.a.createElement("div",null,"Deployed Contracts:"),0===e.length&&p.a.createElement("div",null,"None"),e.map((function(e){return p.a.createElement(at,{key:e,address:e})})))}function ot(){var e=Object(V.c)(),t=Object(V.d)((function(e){return e.error}));return""===t?"":p.a.createElement("div",{style:M},p.a.createElement("div",{style:F},t),p.a.createElement("i",{style:T,className:"fa fa-close",onClick:function(){return e(je())}}))}function ct(){return p.a.createElement("div",{style:L},p.a.createElement("div",null,"v","0.1.0"),p.a.createElement("img",{style:I,src:"logo.png",alt:"Quorum Logo"}))}var it=function(){var e=Object(V.d)((function(e){return"Disconnected"!==e.network.status}));return p.a.createElement("div",{style:v,className:"App"},p.a.createElement(ot,null),p.a.createElement(Fe,null),e&&p.a.createElement(Ye,null),p.a.createElement("br",null),e&&p.a.createElement(nt,null),p.a.createElement("br",null),e&&p.a.createElement(rt,null),p.a.createElement("div",{style:{flexGrow:1}}),p.a.createElement(ct,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?st(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ut={error:"",network:{endpoint:"",tesseraEndpoint:"",accounts:[],editing:!0,status:"Disconnected"},txMetadata:{gasLimit:"3000000",gasPrice:"0",value:"0",valueDenomination:"wei"},compilation:{contracts:{},deploying:!1},tessera:{keysFromUser:[],keysFromServer:[]},deployedAddresses:[],deployedContracts:{}};var dt=n(38),pt=n(82),ft=n(83),mt=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),t}(u.PluginClient),yt=Object(dt.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NETWORK":return localStorage.network=JSON.stringify(t.payload),lt({},e,{network:t.payload});case"SELECT_ACCOUNT":return lt({},e,{txMetadata:lt({},e.txMetadata,{account:t.payload})});case"EDIT_NETWORK":return lt({},e,{network:lt({},e.network,{editing:t.payload})});case"SET_NETWORK_CONNECTING":return lt({},e,{network:lt({},e.network,{status:"Connecting..."})});case"CHANGE_GAS_PRICE":return lt({},e,{txMetadata:lt({},e.txMetadata,{gasPrice:t.payload})});case"CHANGE_GAS_LIMIT":return lt({},e,{txMetadata:lt({},e.txMetadata,{gasLimit:t.payload})});case"CHANGE_VALUE":return lt({},e,{txMetadata:lt({},e.txMetadata,{value:t.payload})});case"CHANGE_VALUE_DENOMINATION":return lt({},e,{txMetadata:lt({},e.txMetadata,{valueDenomination:t.payload})});case"FETCH_COMPILATION":var n=function(e){if(null===e)return{};var t={};return Object.entries(e.contracts).forEach((function(e){var n=Object(y.a)(e,2),a=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(y.a)(e,2),r=n[0],o=n[1],c="".concat(r," - ").concat(a);t[c]=lt({},o,{contractName:r,filename:a})}))})),t}(t.payload);return lt({},e,{compilation:lt({},e.compilation,{contracts:n})});case"SELECT_CONTRACT":return lt({},e,{compilation:lt({},e.compilation,{selectedContract:t.payload})});case"ADD_CONTRACT":var a=t.payload,r=Object(Y.a)(e.deployedAddresses);return-1===r.indexOf(a.address)&&r.push(a.address),lt({},e,{deployedAddresses:r,deployedContracts:lt({},e.deployedContracts,Object(z.a)({},a.address,a))});case"REMOVE_CONTRACT":var o=t.payload,c=lt({},e.deployedContracts);return delete c[o],lt({},e,{deployedAddresses:e.deployedAddresses.filter((function(e){return e!==o})),deployedContracts:c});case"UPDATE_PRIVATE_FOR":var i=t.payload&&t.payload.length>0?t.payload:void 0;return lt({},e,{txMetadata:lt({},e.txMetadata,{privateFor:i})});case"SET_CONTRACT_DEPLOYING":return lt({},e,{compilation:lt({},e.compilation,{deploying:t.payload})});case"START_METHOD_CALL":var s=e.deployedContracts[t.payload.address];return lt({},e,{deployedContracts:lt({},e.deployedContracts,Object(z.a)({},t.payload.address,lt({},s,{loading:!0})))});case"METHOD_CALL":var l=t.payload,u=l.address,d=l.methodSignature,p=l.result,f=e.deployedContracts[u];return lt({},e,{deployedContracts:lt({},e.deployedContracts,Object(z.a)({},u,lt({},f,{results:lt({},f.results,Object(z.a)({},d,p)),loading:!1})))});case"RESET_TX_RESULTS":var m=lt({},e.deployedContracts);return e.deployedAddresses.forEach((function(e){return m[e].results={}})),lt({},e,{deployedContracts:m});case"EXPAND_CONTRACT":var v=e.deployedContracts[t.payload.address];return lt({},e,{deployedContracts:lt({},e.deployedContracts,Object(z.a)({},t.payload.address,lt({},v,{expanded:t.payload.expand})))});case"SET_ERROR":return lt({},e,{error:t.payload});case"ADD_PUBLIC_KEY":var b=[].concat(Object(Y.a)(e.tessera.keysFromUser),[t.payload]);return localStorage.keysFromUser=JSON.stringify(b),lt({},e,{tessera:lt({},e.tessera,{keysFromUser:b})});case"REMOVE_PUBLIC_KEY":var h=e.tessera.keysFromUser.filter((function(e){return e.value!==t.payload}));return localStorage.keysFromUser=JSON.stringify(h),lt({},e,{tessera:lt({},e.tessera,{keysFromUser:h})});case"SET_TESSERA_OPTIONS":return lt({},e,{tessera:lt({},e.tessera,{keysFromServer:t.payload})});default:return e}}),Object(pt.composeWithDevTools)(Object(dt.applyMiddleware)(ft.a))),vt=Object(u.buildIframeClient)(new mt);function bt(e,t){return ht.apply(this,arguments)}function ht(){return(ht=Object(o.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:a=JSON.parse(localStorage.network||"{}"),n(Pe(a.endpoint,a.tesseraEndpoint)),JSON.parse(localStorage.keysFromUser||"[]").forEach((function(e){return n(Ae(e))})),n(_e(t)),t.solidity.on("compilationFinished",(function(e,a,r,o){n(_e(t))}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}vt.onload(Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.render(p.a.createElement(V.a,{store:yt},p.a.createElement(it,{client:vt})),document.getElementById("root")),bt(vt,yt.dispatch).catch((function(e){return console.error("Error initializing plugin",e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));case 3:case"end":return e.stop()}}),e)}))))},87:function(e,t,n){e.exports=n(139)},93:function(e,t,n){},94:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.5078af5e.chunk.js.map