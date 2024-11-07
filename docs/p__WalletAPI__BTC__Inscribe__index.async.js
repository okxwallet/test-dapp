"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[936],{42593:function(e,n,r){var t=r(90228),s=r.n(t),c=r(15558),i=r.n(c),o=r(87999),a=r.n(o),l=r(48030),u=r(58749),d=r(2419),f=r(38450),h=r(50151),x=r(75271),p=r(52676);n.Z=function(e){var n=e.networkSwitch,r=void 0===n?l.K6.BTC:n,t=e.apiName,c=e.title,o=e.onClick,k=e.onCallback,w=e.params,j=void 0===w?[]:w,v=(0,d.useModel)("SwitchNetworkModel",(function(e){return{network:e.networkSwitches[r]}})).network,m=(0,x.useCallback)(a()(s()().mark((function e(){var n,r,c;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=3;break}return o(),e.abrupt("return");case 3:return e.prev=3,n=(0,l.fn)(v),e.next=7,n[t].apply(n,i()(j));case 7:r=e.sent,"[object Object]"===Object.prototype.toString.call(r)?k(r):k({"API method only returns":r}),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(3),!(e.t0 instanceof TypeError)){e.next=17;break}return c=JSON.stringify(e.t0,Object.getOwnPropertyNames(e.t0)),k({error:c}),e.abrupt("return");case 17:k({error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[3,11]])}))),[k,o]);return(0,p.jsxs)(p.Fragment,{children:[c?(0,p.jsx)(f.Z.Title,{level:4,children:c}):null,(0,p.jsxs)(h.ZP,{title:t,onClick:m,icon:(0,p.jsx)(u.Z,{}),children:["Test ",t]})]})}},61024:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(90228),s=r.n(t),c=r(87999),i=r.n(c),o=r(48305),a=r.n(o),l=r(2334),u=r(38450),d=r(5632),f=r(30597),h=(r(28999),r(25585)),x=r(40282),p=r(6374),k=r(75271),w="relative___v5wGG",j="copy___BEfhw",v=r(52676);d.Z.registerLanguage("typescript",f.Z);var m=function(e){var n=e.language,r=void 0===n?"typescript":n,t=e.text,c=void 0===t?"":t,o=(0,k.useState)(""),f=a()(o,2),m=f[0],g=f[1],Z=(0,k.useState)(""),b=a()(Z,2),y=b[0],S=b[1];return(0,k.useEffect)((function(){var e=function(){var e=i()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=3;break}return g(""),e.abrupt("return");case 3:return e.prev=3,e.next=6,p.WU(c,{parser:"babel",plugins:[h.Z,x]});case 6:n=e.sent,g(n),S(d.Z.highlight(n,{language:r}).value),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.warn(e.t0),g(JSON.stringify(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("pre",{children:(0,v.jsx)("code",{dangerouslySetInnerHTML:{__html:y}})}),(0,v.jsx)("div",{className:j,children:(0,v.jsx)(u.Z.Text,{copyable:{text:m,icon:(0,v.jsx)(l.Z,{})}})})]})}},59099:function(e,n,r){var t=r(48030),s=r(75025),c=r(10822),i=r(88667),o=r(2419),a=r(38450),l=r(17654),u=r(50151),d=r(75271),f=r(52676);n.Z=function(e){var n=e.networkSwitch,r=void 0===n?t.K6.BTC:n,h=e.params,x=void 0===h?[]:h,p=e.onError,k=(0,o.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[r],setSwitchNetwork:e.setSwitchNetwork}})),w=k.switchNetworkName,j=k.setSwitchNetwork,v=(0,o.useModel)("NetworkModel",(function(e){return{network:e.networks[w]||{},connect:e.connectNetwork}})),m=v.network,g=v.connect,Z=m.address,b=m.friendlyAddress,y=m.error;(0,d.useEffect)((function(){y&&(null==p||p(y))}),[y]),(0,d.useEffect)((function(){j(r,w),g(w,x)}),[]);var S=(0,d.useMemo)((function(){return(0,f.jsxs)(f.Fragment,{children:["".concat(w,": "),(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:Z,tooltip:(0,f.jsx)(a.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:Z})})]})}),[Z,w]),C=(0,d.useMemo)((function(){return(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:b,tooltip:(0,f.jsx)(a.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:b})})}),[b]),N=t.k$[r],P=(0,d.useCallback)((function(e){g(e.key,x),j(r,e.key)}),[]),_=(0,d.useCallback)((function(){g(w,x),j(r,w)}),[]);return(0,f.jsxs)(f.Fragment,{children:[N.length>1?(0,f.jsx)(l.Z.Button,{menu:{items:N,onClick:P},icon:(0,f.jsx)(c.Y,{style:{fontSize:20}}),children:Z?S:"Click icon to connect"}):null,1===N.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(i.m,{}),iconPosition:"start",onClick:_,children:(0,f.jsxs)(f.Fragment,{children:["Connect to ",Z?S:w]})}),(0,f.jsx)("br",{}),b?(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(i.m,{}),iconPosition:"start",style:{marginTop:16},children:(0,f.jsxs)(f.Fragment,{children:["friendlyAddress: ",b?C:""]})}):null]}):null]})}},28243:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(3991),s=r(38450),c=r(75271),i=r(1434),o=r.n(i),a=r(52676),l=function(e){var n=e.title,r=void 0===n?"":n,i=e.value,l=(0,t.Z)(),u=(0,c.useCallback)((function(e){var n=e.src;"string"==typeof n&&window.navigator.clipboard.writeText(n)}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z.Title,{level:4,children:r||"Preview Zone"}),(0,a.jsx)(o(),{theme:l?"pop":"rjv-default",style:{wordBreak:"break-all"},src:i,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:u})]})},u=r(73779),d=r(14721),f=function(e){var n=e.children,r=e.previewData;return(0,a.jsxs)(u.Z,{justify:"space-between",gutter:[0,32],children:[(0,a.jsx)(d.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:n}),(0,a.jsx)(d.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,a.jsx)(l,{value:r})})]})}},20350:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(90228),s=r.n(t),c=r(87999),i=r.n(c),o=r(48305),a=r.n(o),l=r(42593),u=r(61024),d=r(59099),f=r(28243),h=r(48030),x=r(2419),p=r(92574),k=r(62674),w=r(570),j=r(75271),v=r(52676),m=function(){var e=(0,j.useState)({}),n=a()(e,2),r=n[0],t=n[1],c=w.Z.useForm(),o=a()(c,1)[0],m=w.Z.useWatch([],o),g=function(){var e=i()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=(0,x.useModel)("SwitchNetworkModel",(function(e){return{network:e.networkSwitches[h.K6.BTC_API_ALL]}})).network,b=(0,j.useMemo)((function(){return[m]}),[m]),y=(0,j.useMemo)((function(){return"try {\n      const txid = await ".concat((0,h.ri)(Z),".inscribe(\n        {\n          from: '").concat((null==m?void 0:m.from)||"bc1pkrym02ck30phct287l0rktjjjnapavkl2qhsy78aeeeuk3qaaulqh90v6s","',\n          tick: '").concat((null==m?void 0:m.tick)||"ordi","',\n        }\n      );\n      console.log(txid);\n    } catch (e) {\n      console.log(e);\n    }")}),[Z,m]);return(0,v.jsx)(f.Z,{previewData:r,children:(0,v.jsxs)(p.Z,{vertical:!0,gap:"middle",children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(d.Z,{onError:g,networkSwitch:h.K6.BTC_API_ALL})}),(0,v.jsxs)(w.Z,{form:o,children:[(0,v.jsx)(w.Z.Item,{name:"from",label:"from",rules:[{required:!0}],children:(0,v.jsx)(k.Z,{})}),(0,v.jsx)(w.Z.Item,{name:"tick",label:"tick",rules:[{required:!0}],children:(0,v.jsx)(k.Z,{})})]}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(l.Z,{apiName:"inscribe",onCallback:g,params:b,networkSwitch:h.K6.BTC_API_ALL})}),(0,v.jsx)(u.Z,{text:y})]})})},g=r(62532),Z=function(){return(0,v.jsx)(g._z,{ghost:!0,children:(0,v.jsx)(m,{})})}}}]);