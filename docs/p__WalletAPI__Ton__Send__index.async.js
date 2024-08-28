"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[649],{42593:function(e,n,t){var r=t(90228),s=t.n(r),o=t(15558),a=t.n(o),i=t(87999),c=t.n(i),l=t(48030),u=t(58749),d=t(2419),f=t(38450),x=t(50151),m=t(75271),h=t(52676);n.Z=function(e){var n=e.networkSwitch,t=void 0===n?l.K6.BTC:n,r=e.apiName,o=e.title,i=e.onClick,p=e.onCallback,j=e.params,k=void 0===j?[]:j,w=(0,d.useModel)("SwitchNetworkModel",(function(e){return{network:e.networkSwitches[t]}})).network,v=(0,m.useCallback)(c()(s()().mark((function e(){var n,t,o;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=3;break}return i(),e.abrupt("return");case 3:return e.prev=3,n=(0,l.fn)(w),e.next=7,n[r].apply(n,a()(k));case 7:t=e.sent,"[object Object]"===Object.prototype.toString.call(t)?p(t):p({"API method only returns":t}),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(3),!(e.t0 instanceof TypeError)){e.next=17;break}return o=JSON.stringify(e.t0,Object.getOwnPropertyNames(e.t0)),p({error:o}),e.abrupt("return");case 17:p({error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[3,11]])}))),[p,i]);return(0,h.jsxs)(h.Fragment,{children:[o?(0,h.jsx)(f.Z.Title,{level:4,children:o}):null,(0,h.jsxs)(x.ZP,{title:r,onClick:v,icon:(0,h.jsx)(u.Z,{}),children:["Test ",r]})]})}},61024:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(90228),s=t.n(r),o=t(87999),a=t.n(o),i=t(48305),c=t.n(i),l=t(3991),u=t(2334),d=t(38450),f=t(25585),x=t(40282),m=t(6374),h=t(75271),p=t(51709),j=t(51757),k="relative___v5wGG",w="copy___BEfhw",v=t(52676),g=function(e){var n=e.language,t=void 0===n?"typescript":n,r=e.text,o=void 0===r?"":r,i=(0,h.useState)(""),g=c()(i,2),Z=g[0],y=g[1],b=(0,l.Z)()?j.Z:void 0;return(0,h.useEffect)((function(){var e=function(){var e=a()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}return y(""),e.abrupt("return");case 3:return e.prev=3,e.next=6,m.WU(o,{parser:"babel",plugins:[f.Z,x]});case 6:n=e.sent,y(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn(e.t0),y(JSON.stringify(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),(0,v.jsxs)("div",{className:k,children:[(0,v.jsx)(p.Z,{language:t,wrapLines:!0,style:b,children:Z}),(0,v.jsx)("div",{className:w,children:(0,v.jsx)(d.Z.Text,{copyable:{text:Z,icon:(0,v.jsx)(u.Z,{})}})})]})}},59099:function(e,n,t){var r=t(48030),s=t(75025),o=t(10822),a=t(88667),i=t(2419),c=t(38450),l=t(17654),u=t(50151),d=t(75271),f=t(52676);n.Z=function(e){var n=e.networkSwitch,t=void 0===n?r.K6.BTC:n,x=e.params,m=void 0===x?[]:x,h=e.onError,p=(0,i.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[t],setSwitchNetwork:e.setSwitchNetwork}})),j=p.switchNetworkName,k=p.setSwitchNetwork,w=(0,i.useModel)("NetworkModel",(function(e){return{network:e.networks[j]||{},connect:e.connectNetwork}})),v=w.network,g=w.connect,Z=v.address,y=v.friendlyAddress,b=v.error;(0,d.useEffect)((function(){b&&(null==h||h(b))}),[b]),(0,d.useEffect)((function(){k(t,j),g(j,m)}),[]);var N=(0,d.useMemo)((function(){return(0,f.jsxs)(f.Fragment,{children:["".concat(j,": "),(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:Z,tooltip:(0,f.jsx)(c.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:Z})})]})}),[Z,j]),C=(0,d.useMemo)((function(){return(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:y,tooltip:(0,f.jsx)(c.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:y})})}),[y]),S=r.k$[t],M=(0,d.useCallback)((function(e){g(e.key,m),k(t,e.key)}),[]),T=(0,d.useCallback)((function(){g(j,m),k(t,j)}),[]);return(0,f.jsxs)(f.Fragment,{children:[S.length>1?(0,f.jsx)(l.Z.Button,{menu:{items:S,onClick:M},icon:(0,f.jsx)(o.Y,{style:{fontSize:20}}),children:Z?N:"Click icon to connect"}):null,1===S.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(a.m,{}),iconPosition:"start",onClick:T,children:(0,f.jsxs)(f.Fragment,{children:["Connect to ",Z?N:j]})}),(0,f.jsx)("br",{}),y?(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(a.m,{}),iconPosition:"start",style:{marginTop:16},children:(0,f.jsxs)(f.Fragment,{children:["friendlyAddress: ",y?C:""]})}):null]}):null]})}},28243:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3991),s=t(38450),o=t(75271),a=t(1434),i=t.n(a),c=t(52676),l=function(e){var n=e.title,t=void 0===n?"":n,a=e.value,l=(0,r.Z)(),u=(0,o.useCallback)((function(e){var n=e.src;"string"==typeof n&&window.navigator.clipboard.writeText(n)}),[]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z.Title,{level:4,children:t||"Preview Zone"}),(0,c.jsx)(i(),{theme:l?"pop":"rjv-default",style:{wordBreak:"break-all"},src:a,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:u})]})},u=t(73779),d=t(14721),f=function(e){var n=e.children,t=e.previewData;return(0,c.jsxs)(u.Z,{justify:"space-between",gutter:[0,32],children:[(0,c.jsx)(d.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:n}),(0,c.jsx)(d.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,c.jsx)(l,{value:t})})]})}},73966:function(e,n,t){t.d(n,{B:function(){return r}});var r="https://okxwallet.github.io/test-dapp/tonconnect-manifest.json"},79:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(73966),s=t(26068),o=t.n(s),a=t(67825),i=t.n(a),c=t(48305),l=t.n(c),u=t(42593),d=t(61024),f=t(59099),x=t(28243),m=t(48030),h=t(23465),p=t(42875),j=t(2419),k=t(570),w=t(83360),v=t(92574),g=t(62674),Z=t(50151),y=t(75271),b=t(52676),N=["key","name"];function C(){var e=(0,y.useState)({}),n=l()(e,2),t=n[0],s=n[1],a=k.Z.useForm(),c=l()(a,1)[0],C=k.Z.useWatch([],c);console.log(C);var S=(0,j.useModel)("NetworkModel",(function(e){return{network:e.networks[m.Zc.TON]}})).network,M=Math.floor(Date.now()/1e3)+604800,T=function(e){s(e)},P=(0,y.useMemo)((function(){return{method:"sendTransaction",params:[{valid_until:M,network:"-239",from:null==S?void 0:S.address,messages:null==C?void 0:C.messages}],id:1}}),[C,S,M]),O=(0,y.useMemo)((function(){return"\n    try {\n      let res = await ".concat((0,m.ri)(m.Zc.TON),".tonconnect.send(").concat(JSON.stringify(P),");\n      console.log(res)\n    } catch (e) {\n      console.log(e);\n    }")}),[P]);return(0,b.jsx)(x.Z,{previewData:t,children:(0,b.jsxs)(w.Z,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,b.jsx)(f.Z,{networkSwitch:m.K6.TON,onError:T,params:[2,{manifestUrl:r.B,items:[{name:"ton_addr"}]}]}),(0,b.jsx)(k.Z,{form:c,name:"dynamic_form",autoComplete:"off",children:(0,b.jsx)(k.Z.List,{name:"messages",children:function(e,n){var t=n.add,r=n.remove;return(0,b.jsxs)(b.Fragment,{children:[e.map((function(e){var n=e.key,t=e.name,s=i()(e,N);return(0,b.jsxs)(v.Z,{gap:"small",align:"baseline",children:[(0,b.jsx)(k.Z.Item,o()(o()({},s),{},{name:[t,"address"],rules:[{required:!0,message:"Missing address"}],children:(0,b.jsx)(g.Z,{placeholder:"address"})})),(0,b.jsx)(k.Z.Item,o()(o()({},s),{},{name:[t,"amount"],rules:[{required:!0,message:"Missing amount"}],children:(0,b.jsx)(g.Z,{placeholder:"amount"})})),(0,b.jsx)(k.Z.Item,o()(o()({},s),{},{name:[t,"payload"],rules:[{message:"Missing payload"}],children:(0,b.jsx)(g.Z,{placeholder:"payload (option)"})})),(0,b.jsx)(k.Z.Item,o()(o()({},s),{},{name:[t,"stateInit"],rules:[{message:"Missing stateInit"}],children:(0,b.jsx)(g.Z,{placeholder:"stateInit (option)"})})),(0,b.jsx)(h.Z,{onClick:function(){return r(t)}})]},n)})),(0,b.jsx)(k.Z.Item,{children:(0,b.jsx)(Z.ZP,{onClick:function(){return t()},block:!0,icon:(0,b.jsx)(p.Z,{}),children:"Add Params"})})]})}})}),(0,b.jsx)(u.Z,{apiName:"send",networkSwitch:m.K6.TON,onCallback:T,params:[P]}),(0,b.jsx)(d.Z,{text:O})]})})}var S=t(62532),M=t(59354),T=function(){return(0,b.jsx)(S._z,{ghost:!0,children:(0,b.jsx)(M.LD,{manifestUrl:r.B,children:(0,b.jsx)(C,{})})})}}}]);