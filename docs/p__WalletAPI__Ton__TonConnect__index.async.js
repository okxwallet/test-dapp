(self.webpackChunk=self.webpackChunk||[]).push([[586],{61024:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(90228),s=t.n(r),a=t(87999),i=t.n(a),o=t(48305),c=t.n(o),l=t(3991),d=t(2334),u=t(38450),p=t(25585),x=t(40282),v=t(6374),f=t(75271),h=t(51709),j=t(51757),w="relative___v5wGG",g="copy___BEfhw",k=t(52676),b=function(e){var n=e.language,t=void 0===n?"typescript":n,r=e.text,a=void 0===r?"":r,o=(0,f.useState)(""),b=c()(o,2),y=b[0],Z=b[1],A=(0,l.Z)()?j.Z:void 0;return(0,f.useEffect)((function(){var e=function(){var e=i()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=3;break}return Z(""),e.abrupt("return");case 3:return e.prev=3,e.next=6,v.WU(a,{parser:"babel",plugins:[p.Z,x]});case 6:n=e.sent,Z(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn(e.t0),Z(JSON.stringify(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,k.jsxs)("div",{className:w,children:[(0,k.jsx)(h.Z,{language:t,wrapLines:!0,style:A,children:y}),(0,k.jsx)("div",{className:g,children:(0,k.jsx)(u.Z.Text,{copyable:{text:y,icon:(0,k.jsx)(d.Z,{})}})})]})}},28243:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(3991),s=t(38450),a=t(75271),i=t(1434),o=t.n(i),c=t(52676),l=function(e){var n=e.title,t=void 0===n?"":n,i=e.value,l=(0,r.Z)(),d=(0,a.useCallback)((function(e){var n=e.src;"string"==typeof n&&window.navigator.clipboard.writeText(n)}),[]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z.Title,{level:4,children:t||"Preview Zone"}),(0,c.jsx)(o(),{theme:l?"pop":"rjv-default",style:{wordBreak:"break-all"},src:i,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:d})]})},d=t(73779),u=t(14721),p=function(e){var n=e.children,t=e.previewData;return(0,c.jsxs)(d.Z,{justify:"space-between",gutter:[0,32],children:[(0,c.jsx)(u.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:n}),(0,c.jsx)(u.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,c.jsx)(l,{value:t})})]})}},73966:function(e,n,t){"use strict";t.d(n,{B:function(){return r}});var r="https://sherlockhomer.github.io/wallet-dapp-demo-release/tonconnect-manifest.json"},22745:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(73966),s=t(82092),a=t.n(s),i=t(67057),o=t(83360),c=t(38450),l=t(52676),d={eoa:"eoa",contract:"contract",strongEoa:"strongEoa"},u=a()(a()(a()({},d.eoa,"Black EOA Address"),d.contract,"Black Contract Address"),d.strongEoa,"Strong Black EOA Address");function p(e){var n=e.address,t=e.type,r=void 0===t?"eoa":t;return n?(0,l.jsx)(i.Z,{title:u[r]||"Unknown black address type",children:(0,l.jsx)(o.Z,{direction:"vertical",children:(0,l.jsx)(c.Z.Text,{copyable:!0,children:n})})}):null}p.typeMap=d;var x=p,v=t(61024),f=t(28243),h=t(59354),j=t(75271),w=t(90228),g=t.n(w),k=t(87999),b=t.n(k),y=t(48305),Z=t.n(y),A="UQDOc7wK8x2Avyet0tUQ0j-6KqbhdRN7yKQGYtI5uYMI0Gxc",m="EQA7efHQCXHRzTYI8L9SAqtRj9kSUw6avDAEN2GJ33ryVMRN",C=t(41364),U=t(50151),S=t(54934),E=t.n(S),T=new(E());var B=function(){var e=(0,h.dG)(),n=Z()(e,1)[0],t=(0,h.MW)(),r=Math.floor(Date.now()/1e3)+604800,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return b()(g()().mark((function s(){var a,i,o,c;return g()().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=new(E().token.jetton.JettonMinter)(T.provider,{address:"EQATcUc69sGSCCMSadsVUKdGwM1BMKS-HKCWGPk60xZGgwsK"}),s.next=3,a.getJettonWalletAddress(new(E().utils.Address)(t));case 3:i=s.sent.toString(!0,!0,!0,!1),o=(0,C.beginCell)().storeUint(260734629,32).storeUint(0,64).storeCoins("100000000").storeAddress(C.Address.parse(e)).storeAddress(C.Address.parse(t)).storeUint(0,1).storeCoins("1000000").storeUint(0,1).endCell(),c={validUntil:r,messages:[{address:i,amount:(0,C.toNano)("0.05").toString(),payload:o.toBoc().toString("base64")}]},n.sendTransaction(c);case 7:case"end":return s.stop()}}),s)})))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){n.sendTransaction({validUntil:r,messages:[{address:e,amount:E().utils.toNano("0.0001").toString()}]})}};return(0,l.jsx)(i.Z,{title:"SignTransaction",children:(0,l.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,l.jsx)(U.ZP,{block:!0,disabled:!t,onClick:a(),children:"sendTon"}),(0,l.jsx)(U.ZP,{block:!0,color:"danger",disabled:!t,onClick:a(m),children:"sendTon to Black Address"}),(0,l.jsx)(U.ZP,{block:!0,disabled:!t,onClick:s(),children:"sendFish"}),(0,l.jsx)(U.ZP,{block:!0,color:"danger",disabled:!t,onClick:s(m),children:"sendFish to Black Address"})]})})};var M=function(){var e=(0,h.EK)(),n=(0,j.useMemo)((function(){return"\n      // connect with okxwallet\n      // then useTonWallet() will get the wallet info\n    "}),[]);return(0,l.jsx)(f.Z,{previewData:e||{},children:(0,l.jsxs)(o.Z,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,l.jsx)(h.P6,{}),(0,l.jsx)(v.Z,{text:n}),(0,l.jsx)(B,{}),(0,l.jsx)(x,{type:x.typeMap.eoa,address:"UQBfRxtUtwehFwW54B3nY049f0pJcOpssvAXhASnjwNYInVA"}),(0,l.jsx)(x,{type:x.typeMap.strongEoa,address:"UQC6vxAEEbr7O9EOliafFwDqGdMP61jR13yDDw33dSTFTz5K"})]})})},G=t(62532),D=function(){return(0,l.jsx)(G._z,{ghost:!0,children:(0,l.jsx)(h.LD,{manifestUrl:r.B,children:(0,l.jsx)(M,{})})})}},43718:function(){},59357:function(){}}]);