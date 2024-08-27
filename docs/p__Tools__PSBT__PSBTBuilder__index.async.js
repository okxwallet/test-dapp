(self.webpackChunk=self.webpackChunk||[]).push([[558],{59099:function(e,t,n){"use strict";var r=n(48030),s=n(75025),a=n(10822),c=n(88667),i=n(63991),u=n(38450),o=n(17654),l=n(50151),d=n(75271),f=n(52676);t.Z=function(e){var t=e.networkSwitch,n=void 0===t?r.K6.BTC:t,p=e.params,x=void 0===p?[]:p,v=e.onError,h=(0,i.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[n],setSwitchNetwork:e.setSwitchNetwork}})),m=h.switchNetworkName,w=h.setSwitchNetwork,k=(0,i.useModel)("NetworkModel",(function(e){return{network:e.networks[m]||{},connect:e.connectNetwork}})),b=k.network,g=k.connect,j=b.address,Z=b.friendlyAddress,N=b.error;(0,d.useEffect)((function(){N&&(null==v||v(N))}),[N]),(0,d.useEffect)((function(){w(n,m),g(m,x)}),[]);var C=(0,d.useMemo)((function(){return(0,f.jsxs)(f.Fragment,{children:["".concat(m,": "),(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:j,tooltip:(0,f.jsx)(u.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:j})})]})}),[j,m]),T=(0,d.useMemo)((function(){return(0,f.jsx)(s.k,{ellipsis:!0,addressPrefix:!1,address:Z,tooltip:(0,f.jsx)(u.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:Z})})}),[Z]),I=r.k$[n],y=(0,d.useCallback)((function(e){g(e.key,x),w(n,e.key)}),[]),S=(0,d.useCallback)((function(){g(m,x),w(n,m)}),[]);return(0,f.jsxs)(f.Fragment,{children:[I.length>1?(0,f.jsx)(o.Z.Button,{menu:{items:I,onClick:y},icon:(0,f.jsx)(a.Y,{style:{fontSize:20}}),children:j?C:"Click icon to connect"}):null,1===I.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.ZP,{icon:(0,f.jsx)(c.m,{}),iconPosition:"start",onClick:S,children:(0,f.jsxs)(f.Fragment,{children:["Connect to ",j?C:m]})}),(0,f.jsx)("br",{}),Z?(0,f.jsx)(l.ZP,{icon:(0,f.jsx)(c.m,{}),iconPosition:"start",style:{marginTop:16},children:(0,f.jsxs)(f.Fragment,{children:["friendlyAddress: ",Z?T:""]})}):null]}):null]})}},28243:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(38450),s=n(75271),a=n(1434),c=n.n(a),i=n(52676),u=function(e){var t=e.title,n=void 0===t?"":t,a=e.value,u=(0,s.useCallback)((function(e){var t=e.src;"string"==typeof t&&window.navigator.clipboard.writeText(t)}),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Title,{level:4,children:n||"预览区"}),(0,i.jsx)(c(),{style:{wordBreak:"break-all"},src:a,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:u})]})},o=n(73779),l=n(14721),d=function(e){var t=e.children,n=e.previewData;return(0,i.jsxs)(o.Z,{justify:"space-between",gutter:[0,32],children:[(0,i.jsx)(l.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:t}),(0,i.jsx)(l.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,i.jsx)(u,{value:n})})]})}},76176:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(26068),s=n.n(r),a=n(59099),c=n(28243),i=n(42875),u=n(23465),o=n(92574),l=n(14721),d=n(62674),f=n(71145),p=n(21722),x=n(50151),v=n(18486),h=n(75271),m=n(15558),w=n.n(m),k=n(90228),b=n.n(k),g=n(87999),j=n.n(g),Z=n(48305),N=n.n(Z),C=n(48030),T=n(80686);function I(e){switch(e){case C.Zc.BITCOIN:return T.QW.bitcoin;case C.Zc.BITCOINTESTNET:case C.Zc.BITCOINSIGNET:return T.QW.testnet;case C.Zc.BITCOINFRACTAL:default:return T.QW.bitcoin}}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.QW.bitcoin,n=T._B.fromHex(e,{network:t}),r=n.extractTransaction().toHex();return r},S=n(7517),O=n.t(S,2),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T.QW.bitcoin;T.Wi(O);var r=new T._B({network:n});return e.forEach((function(e){r.addInput(e)})),r.setVersion(2),t.forEach((function(e){r.addOutput({address:e.address,value:e.value})})),r.toHex()},_=n(68956),B=n.n(_);function E(e){switch(e){case C.Zc.BITCOIN:return{hostname:"mempool.space"};case C.Zc.BITCOINSIGNET:return{hostname:"mempool.space",network:"signet"};case C.Zc.BITCOINTESTNET:return{hostname:"mempool.space",network:"testnet"};case C.Zc.BITCOINFRACTAL:return{hostname:"mempool.fractalbitcoin.io"};default:return{hostname:"mempool.space"}}}var M=function(){var e=j()(b()().mark((function e(t,n){var r,s,a,c;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E(t),s=B()(r),a=s.bitcoin.transactions,e.next=4,a.getTx({txid:n});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=j()(b()().mark((function e(t,n){var r,s,a,c;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E(t),s=B()(r),a=s.bitcoin.transactions,e.next=4,a.getTxHex({txid:n});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=n(55872).Buffer,L=function(){var e=j()(b()().mark((function e(t,n){var r;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[],e.next=4,Promise.all(n.map(function(){var e=j()(b()().mark((function e(n){var s,a,c;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.txid||void 0===n.vout||""===n.vout){e.next=9;break}return e.next=3,M(t,n.txid);case 3:return s=e.sent,e.next=6,F(t,n.txid);case 6:a=e.sent,c=s.vout[n.vout],r.push({hash:n.txid,index:n.vout,sequence:n.sequence,nonWitnessUtxo:W.from(a,"hex"),witnessUtxo:{script:W.from(c.scriptpubkey,"hex"),value:c.value}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.QW.bitcoin;try{return y(e,t)}catch(e){return e}},z=function(){var e=j()(b()().mark((function e(t,n){var r;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pushPsbt(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=j()(b()().mark((function e(t,n,r){var s;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signPsbt(n,r);case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Q=function(){var e=j()(b()().mark((function e(t,n,r,s){var a,c,i,u;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E(t),e.prev=1,c=B()(a),i=c.bitcoin.addresses,e.next=5,i.getAddressTxsUtxo({address:n});case 5:if(u=e.sent,!s){e.next=8;break}return e.abrupt("return",u.slice(0,s));case 8:return e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n,r,s){return e.apply(this,arguments)}}(),D=n(63991),G=function(){var e=(0,D.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[C.K6.BTC]}})).switchNetworkName,t=(0,D.useModel)("NetworkModel",(function(t){return{network:t.networks[e]}})).network,n=(0,h.useState)([]),r=N()(n,2),s=r[0],a=r[1],c=(0,h.useState)([]),i=N()(c,2),u=i[0],o=i[1],l=(0,h.useState)([]),d=N()(l,2),f=d[0],p=d[1],x=(0,h.useState)([]),v=N()(x,2),m=v[0],k=v[1],g=(0,h.useState)([]),Z=N()(g,2),y=Z[0],S=Z[1],O=(0,h.useState)(""),_=N()(O,2),B=_[0],E=_[1],M=(0,h.useState)(!1),F=N()(M,2),W=F[0],G=F[1],H=(0,h.useState)(""),q=N()(H,2),K=q[0],R=q[1],V=(0,h.useState)(""),X=N()(V,2),Y=X[0],$=X[1];(0,h.useEffect)((function(){var e=function(){var e=j()(b()().mark((function e(){var n;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.address){e.next=5;break}return e.next=3,Q(t.network,t.address);case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,h.useEffect)((function(){try{L(null==t?void 0:t.network,u.concat(f)).then((function(e){S(e)}))}catch(e){console.error(e)}}),[u,f]);var J=(0,h.useMemo)((function(){if(!(y.length>0))return"";try{return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T.QW.bitcoin,r=t.filter((function(e){return e.address&&e.value})),s=P(e,r,n);return s}(y,m,I(t.network))}catch(e){return e}}),[y,m]);(0,h.useEffect)((function(){E("")}),[J]);var ee=(0,h.useCallback)(j()(b()().mark((function e(){return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,A(null==t?void 0:t.provider,J);case 3:e.t1=e.sent,(0,e.t0)(e.t1),G(!0);case 6:case"end":return e.stop()}}),e)}))),[J,null==t?void 0:t.provider]),te=(0,h.useCallback)(j()(b()().mark((function e(){return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,A(null==t?void 0:t.provider,J,{autoFinalized:!1});case 3:e.t1=e.sent,(0,e.t0)(e.t1),G(!1);case 6:case"end":return e.stop()}}),e)}))),[J,null==t?void 0:t.provider]),ne=(0,h.useCallback)(j()(b()().mark((function e(){var n;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!B){e.next=5;break}return e.next=3,U(B,I(t.network));case 3:n=e.sent,R(n);case 5:case"end":return e.stop()}}),e)}))),[B]),re=(0,h.useCallback)(j()(b()().mark((function e(){var n;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!B){e.next=5;break}return e.next=3,z(null==t?void 0:t.provider,B);case 3:n=e.sent,$(n);case 5:case"end":return e.stop()}}),e)}))),[B]);return{utxoList:s,selectedUtxo:u,setSelectedUtxo:o,outputList:m,addedInput:f,addInput:function(e){var t=void 0===e?f.length:e+1,n=w()(f);n.splice(t,0,{key:(new Date).getTime()}),p(n)},subInput:function(e){var t=w()(f);t.splice(e,1),p(t)},updateInput:function(e,t){var n=w()(f);n[e]=t,p(n)},addOutput:function(e){var t=void 0===e?m.length-1:e,n=w()(m);n.splice(t+1,0,{key:(new Date).getTime()}),k(n)},subOutput:function(e){var t=w()(m);t.splice(e,1),k(t)},updateOutput:function(e,t){var n=w()(m);n[e]=t,k(n)},psbt:J,signedPsbt:B,getSignedPsbt:ee,rawTx:K,extractTx:ne,broadcastTx:re,getSignedPsbtWithoutFinalize:te,finalized:W,txId:Y}},H="subTitle___RQ2a4",q="input___LU35r",K="action___FPi9d",R="btnGap___VuGvY",V="error___LsMOf",X=n(52676),Y=function(e){var t=e.inputItem,n=e.updateInput,r=e.addInput,a=e.subInput,c=e.index,p=function(){if(void 0!==t.txid&&64!==t.txid.length)return"error"};return(0,X.jsxs)("div",{children:[(0,X.jsxs)(o.Z,{gap:"small",align:"center",children:[(0,X.jsx)(l.Z,{flex:"auto",children:(0,X.jsx)(d.Z,{value:t.txid,onChange:function(e){var r=e.target.value;n(c,s()(s()({},t),{},{txid:r}))},placeholder:"填写 txid",className:q,status:p()})}),(0,X.jsx)(l.Z,{flex:"30%",children:(0,X.jsx)(f.Z,{value:t.vout,onChange:function(e){n(c,s()(s()({},t),{},{vout:e}))},placeholder:"填写 vout",controls:!1,className:q})}),(0,X.jsx)(i.Z,{className:K,onClick:function(){r(c)}}),(0,X.jsx)(u.Z,{className:K,onClick:function(){a(c)}})]}),"error"===p()&&(0,X.jsx)("div",{className:V,children:"txid 长度不正确"})]})},$=function(e){var t=e.outputItem,n=e.updateOutput,r=e.index,a=e.addOutput,c=e.subOutput;return(0,X.jsxs)(o.Z,{gap:"small",children:[(0,X.jsx)(l.Z,{flex:"auto",children:(0,X.jsx)(d.Z,{value:t.address,onChange:function(e){var a=e.target.value;n(r,s()(s()({},t),{},{address:a}))},placeholder:"填写地址",className:q})}),(0,X.jsx)(l.Z,{flex:"30%",children:(0,X.jsx)(f.Z,{value:t.value,onChange:function(e){n(r,s()(s()({},t),{},{value:e}))},placeholder:"填写数量 sats",controls:!1,className:q})}),(0,X.jsx)(i.Z,{className:K,onClick:function(){a(r)}}),(0,X.jsx)(u.Z,{className:K,onClick:function(){c(r)}})]})},J=function(){var e=G(),t=e.utxoList,n=e.setSelectedUtxo,r=e.addedInput,s=e.addInput,u=e.subInput,l=e.updateInput,d=e.outputList,f=e.addOutput,m=e.subOutput,w=e.updateOutput,k=e.signedPsbt,b=e.getSignedPsbt,g=e.getSignedPsbtWithoutFinalize,j=e.finalized,Z=e.psbt,N=e.rawTx,C=e.extractTx,T=e.broadcastTx,I=e.txId,y=(0,h.useMemo)((function(){return t.map((function(e,t){return{label:"".concat((n=e.txid,"".concat(n.slice(0,4),"...").concat(n.slice(-6)))," index").concat(e.vout," ").concat(e.value,"sats"),value:t,current:e};var n}))}),[t]),S=(0,h.useCallback)((0,v.Z)(l,300),[r]),O=(0,h.useCallback)((0,v.Z)(w,300),[d]),P=!!Z,_=!!k&&j,B=_,E=(0,h.useMemo)((function(){return{psbt:Z,signedPsbt:k,rawTx:N,txId:I}}),[Z,k,I,N]);return(0,X.jsx)(c.Z,{previewData:E,children:(0,X.jsxs)(o.Z,{gap:"large",vertical:!0,children:[(0,X.jsx)(o.Z,{children:(0,X.jsx)(a.Z,{})}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsx)("div",{className:H,children:"1. 选择 UTXO"}),(0,X.jsx)(p.Z,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",onChange:function(e){var r=e.map((function(e){return t[e]}));n(r)},options:y,filterOption:function(e,t){return t.current.txid.includes(e)||t.current.value.toString().includes(e)}})]}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsxs)(o.Z,{gap:"small",children:[(0,X.jsx)("div",{className:H,children:"2. 手动选择输入(可选)"}),(0,X.jsx)(i.Z,{className:K,onClick:function(){s()}})]}),r.map((function(e,t){return(0,X.jsx)(Y,{inputItem:e,updateInput:S,index:t,addInput:s,subInput:u},e.key)}))]}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsxs)(o.Z,{gap:"small",children:[(0,X.jsx)("div",{className:H,children:"3. 设置输出 UTXO"}),(0,X.jsx)(i.Z,{className:K,onClick:function(){f()}})]}),d.map((function(e,t){return(0,X.jsx)($,{outputItem:e,updateOutput:O,addOutput:f,subOutput:m,index:t},e.key)}))]}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsx)("div",{className:H,children:"4. 签名 PSBT"}),(0,X.jsxs)("div",{children:[(0,X.jsx)(x.ZP,{onClick:b,disabled:!P,children:"签名"}),(0,X.jsx)(x.ZP,{onClick:g,disabled:!P,className:R,children:"签名(no finalized)"})]})]}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsx)("div",{className:H,children:"5. 导出tx(可选)"}),(0,X.jsx)("div",{children:(0,X.jsx)(x.ZP,{onClick:C,disabled:!_,children:"导出"})})]}),(0,X.jsxs)(o.Z,{gap:"middle",vertical:!0,children:[(0,X.jsx)("div",{className:H,children:"6. 广播 PSBT"}),(0,X.jsx)("div",{children:(0,X.jsx)(x.ZP,{onClick:T,disabled:!B,children:"广播"})})]})]})})},ee=n(62532),te=function(){return(0,X.jsx)(ee._z,{ghost:!0,children:(0,X.jsx)(J,{})})}},14911:function(){},11314:function(){},79391:function(){},81388:function(){},37801:function(){},25040:function(){},84232:function(){},14050:function(){},87942:function(){},82880:function(){},37905:function(){},99079:function(){},74286:function(){},70396:function(){}}]);