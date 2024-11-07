"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[201],{59099:function(e,t,n){var r=n(48030),i=n(75025),s=n(10822),a=n(88667),c=n(2419),o=n(38450),u=n(17654),l=n(50151),p=n(75271),d=n(52676);t.Z=function(e){var t=e.networkSwitch,n=void 0===t?r.K6.BTC:t,h=e.params,f=void 0===h?[]:h,x=e.onError,g=(0,c.useModel)("SwitchNetworkModel",(function(e){return{switchNetworkName:e.networkSwitches[n],setSwitchNetwork:e.setSwitchNetwork}})),v=g.switchNetworkName,w=g.setSwitchNetwork,m=(0,c.useModel)("NetworkModel",(function(e){return{network:e.networks[v]||{},connect:e.connectNetwork}})),j=m.network,k=m.connect,y=j.address,S=j.friendlyAddress,b=j.error;(0,p.useEffect)((function(){b&&(null==x||x(b))}),[b]),(0,p.useEffect)((function(){w(n,v),k(v,f)}),[]);var Z=(0,p.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:["".concat(v,": "),(0,d.jsx)(i.k,{ellipsis:!0,addressPrefix:!1,address:y,tooltip:(0,d.jsx)(o.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:y})})]})}),[y,v]),C=(0,p.useMemo)((function(){return(0,d.jsx)(i.k,{ellipsis:!0,addressPrefix:!1,address:S,tooltip:(0,d.jsx)(o.Z.Paragraph,{style:{color:"#fff"},copyable:!0,children:S})})}),[S]),T=r.k$[n],N=(0,p.useCallback)((function(e){k(e.key,f),w(n,e.key)}),[]),P=(0,p.useCallback)((function(){k(v,f),w(n,v)}),[]);return(0,d.jsxs)(d.Fragment,{children:[T.length>1?(0,d.jsx)(u.Z.Button,{menu:{items:T,onClick:N},icon:(0,d.jsx)(s.Y,{style:{fontSize:20}}),children:y?Z:"Click icon to connect"}):null,1===T.length?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.ZP,{icon:(0,d.jsx)(a.m,{}),iconPosition:"start",onClick:P,children:(0,d.jsxs)(d.Fragment,{children:["Connect to ",y?Z:v]})}),(0,d.jsx)("br",{}),S?(0,d.jsx)(l.ZP,{icon:(0,d.jsx)(a.m,{}),iconPosition:"start",style:{marginTop:16},children:(0,d.jsxs)(d.Fragment,{children:["friendlyAddress: ",S?C:""]})}):null]}):null]})}},28243:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3991),i=n(38450),s=n(75271),a=n(1434),c=n.n(a),o=n(52676),u=function(e){var t=e.title,n=void 0===t?"":t,a=e.value,u=(0,r.Z)(),l=(0,s.useCallback)((function(e){var t=e.src;"string"==typeof t&&window.navigator.clipboard.writeText(t)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z.Title,{level:4,children:n||"Preview Zone"}),(0,o.jsx)(c(),{theme:u?"pop":"rjv-default",style:{wordBreak:"break-all"},src:a,quotesOnKeys:!1,displayDataTypes:!1,collapseStringsAfterLength:20,enableClipboard:l})]})},l=n(73779),p=n(14721),d=function(e){var t=e.children,n=e.previewData;return(0,o.jsxs)(l.Z,{justify:"space-between",gutter:[0,32],children:[(0,o.jsx)(p.Z,{span:10,xs:24,sm:24,md:10,lg:10,xl:10,children:t}),(0,o.jsx)(p.Z,{span:12,xs:24,sm:24,md:12,lg:12,xl:12,children:(0,o.jsx)(u,{value:n})})]})}},49034:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(48305),i=n.n(r),s=n(59099),a=n(28243),c=n(55872).Buffer;function o(e){if(e.length<1)return e;for(var t=e.length-1,n=0,r=0;r<e.length/2;r++)n=e[r],e[r]=e[t],e[t]=n,t--;return e}var u=n(92574),l=n(62674),p=n(50151),d=n(75271),h=n(80686),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.QW.bitcoin,n=h._B.fromHex(e,{network:t});return n},x="subTitle___OJKLw",g=n(52676),v=function(){var e=(0,d.useState)(""),t=i()(e,2),n=t[0],r=t[1],h=(0,d.useState)({}),v=i()(h,2),w=v[0],m=v[1];return(0,g.jsx)(a.Z,{previewData:w,children:(0,g.jsxs)(u.Z,{gap:"large",vertical:!0,children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)(s.Z,{})}),(0,g.jsxs)(u.Z,{gap:"middle",vertical:!0,children:[(0,g.jsx)("div",{className:x,children:"1. 输入PSBT (HEX)"}),(0,g.jsx)(l.Z.TextArea,{rows:18,value:n,onChange:function(e){r(e.target.value)}})]}),(0,g.jsxs)(u.Z,{gap:"middle",vertical:!0,children:[(0,g.jsx)("div",{className:x,children:"2. 解析PSBT"}),(0,g.jsx)(p.ZP,{type:"primary",onClick:function(){try{var e=function(e){if(e){var t=function(e){try{return e.extractTransaction(!0)}catch(e){}}(e),n=(e.txInputs||[]).map((function(n,r){var i=(e.data.inputs[r]||{}).nonWitnessUtxo,s=(e.data.inputs[r]||{}).witnessScript,a=(e.data.inputs[r]||{}).witnessUtxo,u=(e.data.inputs[r]||{}).redeemScript,l=(e.data.inputs[r]||{}).tapLeafScript,p=(e.data.inputs[r]||{}).sighashType,d=(e.data.inputs[r]||{}).bip32Derivation,h=(e.data.inputs[r]||{}).finalScriptSig,f=(e.data.inputs[r]||{}).finalScriptWitness,x={};u&&(x.redeem={output:u}),a&&(x.value=a.value,x.script=a.script,x.witnessScript=s);var g=f?t&&t.ins[r].witness:null,v=(d||[]).map((function(e){return{fingerprint:e.masterFingerprint?e.masterFingerprint.toString("hex"):"",publicKey:e.pubkey?e.pubkey.toString("hex"):"",path:e.path}}));return{sequence:n.sequence,index:n.index,hash:n.hash?o(c.from(n.hash,"hex")).toString("hex"):"",previousTxHex:i?i.toString("hex"):"",utxo:x,script:h,tapLeafScript:l,redeemScript:u,witnessScript:s,witness:g,sighashType:p,publicKeysList:v}}));return{inputs:n,outputs:(e.txOutputs||[]).map((function(t,n){var r=((e.data.outputs[n]||{}).bip32Derivation||[]).map((function(e){return{fingerprint:e.masterFingerprint?e.masterFingerprint.toString("hex"):"",publicKey:e.pubkey?e.pubkey.toString("hex"):"",path:e.path}}));return{value:t.value,script:t.script,address:e.txOutputs[n].address||"",publicKeysList:r}}))}}}(f(n));m(e)}catch(e){m({error:e.toString()})}},children:"解析"})]})]})})},w=n(62532),m=function(){return(0,g.jsx)(w._z,{ghost:!0,children:(0,g.jsx)(v,{})})}}}]);