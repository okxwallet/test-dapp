"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[758],{42593:function(e,n,t){var r=t(90228),s=t.n(r),c=t(15558),i=t.n(c),o=t(87999),a=t.n(o),l=t(48030),u=t(58749),d=t(63991),f=t(38450),x=t(50151),h=t(75271),p=t(52676);n.Z=function(e){var n=e.networkSwitch,t=void 0===n?l.K6.BTC:n,r=e.apiName,c=e.title,o=e.onClick,w=e.onCallback,k=e.params,j=void 0===k?[]:k,v=(0,d.useModel)("SwitchNetworkModel",(function(e){return{network:e.networkSwitches[t]}})).network,m=(0,h.useCallback)(a()(s()().mark((function e(){var n,t,c;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=3;break}return o(),e.abrupt("return");case 3:return e.prev=3,n=(0,l.fn)(v),e.next=7,n[r].apply(n,i()(j));case 7:t=e.sent,"[object Object]"===Object.prototype.toString.call(t)?w(t):w({"API method only returns":t}),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(3),!(e.t0 instanceof TypeError)){e.next=17;break}return c=JSON.stringify(e.t0,Object.getOwnPropertyNames(e.t0)),w({error:c}),e.abrupt("return");case 17:w({error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[3,11]])}))),[w,o]);return(0,p.jsxs)(p.Fragment,{children:[c?(0,p.jsx)(f.Z.Title,{level:4,children:c}):null,(0,p.jsxs)(x.ZP,{title:r,onClick:m,icon:(0,p.jsx)(u.Z,{}),children:["Test ",r]})]})}},61024:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(90228),s=t.n(r),c=t(87999),i=t.n(c),o=t(48305),a=t.n(o),l=t(2334),u=t(38450),d=t(25585),f=t(40282),x=t(6374),h=t(75271),p=t(51709),w="relative___v5wGG",k="copy___BEfhw",j=t(52676),v=function(e){var n=e.language,t=void 0===n?"typescript":n,r=e.text,c=void 0===r?"":r,o=(0,h.useState)(""),v=a()(o,2),m=v[0],g=v[1];return(0,h.useEffect)((function(){var e=function(){var e=i()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=3;break}return g(""),e.abrupt("return");case 3:return e.prev=3,e.next=6,x.WU(c,{parser:"babel",plugins:[d.Z,f]});case 6:n=e.sent,g(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn(e.t0),g(JSON.stringify(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),(0,j.jsxs)("div",{className:w,children:[(0,j.jsx)(p.Z,{language:t,wrapLines:!0,children:m}),(0,j.jsx)("div",{className:k,children:(0,j.jsx)(u.Z.Text,{copyable:{text:m,icon:(0,j.jsx)(l.Z,{})}})})]})}},59099:function(e,n,t){var r=t(48030),s=t(65379),c=t(75025),i=t(88667),o=t(63991),a=t(38450),l=t(17654),u=t(50151),d=t(75271),f=t(52676);n.Z=function(e){var n=e.networkSwitch,t=void 0===n?r.K6.BTC:n,x=e.params,h=void 0===x?[]:x,p=e.onError,w=(0,o.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[t],setSwitchNetwork:e.setSwitchNetwork}})),k=w.switchNetworkName,j=w.setSwitchNetwork,v=(0,o.useModel)("NetworkModel",(function(e){return{network:e.networks[k]||{},connect:e.connectNetwork}})),m=v.network,g=v.connect,b=m.address,y=m.friendlyAddress,Z=m.error;(0,d.useEffect)((function(){Z&&(null==p||p(Z))}),[Z]),(0,d.useEffect)((function(){j(t,k),g(k,h)}),[]);var N=(0,d.useMemo)((function(){return(0,f.jsxs)(f.Fragment,{children:["".concat(k,": "),(0,f.jsx)(c.k,{ellipsis:!0,addressPrefix:!1,address:b,tooltip:(0,f.jsx)(a.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:b})})]})}),[b,k]),C=(0,d.useMemo)((function(){return(0,f.jsx)(c.k,{ellipsis:!0,addressPrefix:!1,address:y,tooltip:(0,f.jsx)(a.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:y})})}),[y]),S=r.k$[t],P=(0,d.useCallback)((function(e){g(e.key,h),j(t,e.key)}),[]),T=(0,d.useCallback)((function(){g(k,h),j(t,k)}),[]);return(0,f.jsxs)(f.Fragment,{children:[S.length>1?(0,f.jsx)(l.Z,{menu:{items:S,onClick:P},children:(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(i.m,{}),iconPosition:"start",children:(0,f.jsxs)(f.Fragment,{children:["Connect to ",b?N:"",(0,f.jsx)(s.Z,{})]})})}):null,1===S.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(i.m,{}),iconPosition:"start",onClick:T,children:(0,f.jsxs)(f.Fragment,{children:["Connect to ",b?N:k]})}),(0,f.jsx)("br",{}),y?(0,f.jsx)(u.ZP,{icon:(0,f.jsx)(i.m,{}),iconPosition:"start",style:{marginTop:16},children:(0,f.jsxs)(f.Fragment,{children:["friendlyAddress: ",y?C:""]})}):null]}):null]})}},28243:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(38450),s=t(75271),c=t(1434),i=t.n(c),o=t(52676),a=function(e){var n=e.title,t=void 0===n?"":n,c=e.value,a=(0,s.useCallback)((function(e){var n=e.src;"string"==typeof n&&window.navigator.clipboard.writeText(n)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z.Title,{level:4,children:t||"预览区"}),(0,o.jsx)(i(),{style:{wordBreak:"break-all"},src:c,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:a})]})},l=t(73779),u=t(14721),d=function(e){var n=e.children,t=e.previewData;return(0,o.jsxs)(l.Z,{justify:"space-between",gutter:[0,32],children:[(0,o.jsx)(u.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:n}),(0,o.jsx)(u.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,o.jsx)(a,{value:t})})]})}},70906:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(48305),s=t.n(r),c=t(42593),i=t(61024),o=t(59099),a=t(28243),l=t(48030),u=t(63991),d=t(82031),f=t(75271),x=t(52676),h=function(){var e=(0,f.useState)({}),n=s()(e,2),t=n[0],r=n[1],h=function(e){r(e)},p=(0,u.useModel)("SwitchNetworkModel",(function(e){return{network:e.networkSwitches[l.K6.BTC]}})).network,w=(0,f.useMemo)((function(){return"try {\n      let res = await ".concat((0,l.ri)(p),".connect();\n      console.log(res)\n    } catch (e) {\n      console.log(e);\n    }")}),[p]);return(0,x.jsx)(a.Z,{previewData:t,children:(0,x.jsxs)(d.T,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,x.jsx)(o.Z,{onError:h}),(0,x.jsx)(c.Z,{apiName:"connect",onCallback:h}),(0,x.jsx)(i.Z,{text:w})]})})},p=t(62532),w=function(){return(0,x.jsx)(p._z,{ghost:!0,children:(0,x.jsx)(h,{})})}}}]);