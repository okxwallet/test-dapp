"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[770],{32770:function(e,t,a){a.d(t,{Z:function(){return F}});var n=a(75271),s=a(82187),l=a.n(s),i=a(7149),r=a(30454);var o=e=>{const{prefixCls:t,className:a,style:s,size:i,shape:r}=e,o=l()({[`${t}-lg`]:"large"===i,[`${t}-sm`]:"small"===i}),c=l()({[`${t}-circle`]:"circle"===r,[`${t}-square`]:"square"===r,[`${t}-round`]:"round"===r}),g=n.useMemo((()=>"number"==typeof i?{width:i,height:i,lineHeight:`${i}px`}:{}),[i]);return n.createElement("span",{className:l()(t,o,c,a),style:Object.assign(Object.assign({},g),s)})},c=a(13222),g=a(58447),d=a(37990);const u=new c.Keyframes("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),m=e=>({height:e,lineHeight:(0,c.unit)(e)}),$=e=>Object.assign({width:e},m(e)),b=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:u,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),h=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},m(e)),p=e=>{const{skeletonAvatarCls:t,gradientFromColor:a,controlHeight:n,controlHeightLG:s,controlHeightSM:l}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},$(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},$(s)),[`${t}${t}-sm`]:Object.assign({},$(l))}},C=e=>{const{controlHeight:t,borderRadiusSM:a,skeletonInputCls:n,controlHeightLG:s,controlHeightSM:l,gradientFromColor:i,calc:r}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:a},h(t,r)),[`${n}-lg`]:Object.assign({},h(s,r)),[`${n}-sm`]:Object.assign({},h(l,r))}},k=e=>Object.assign({width:e},m(e)),v=e=>{const{skeletonImageCls:t,imageSizeBase:a,gradientFromColor:n,borderRadiusSM:s,calc:l}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:s},k(l(a).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},k(a)),{maxWidth:l(a).mul(4).equal(),maxHeight:l(a).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},f=(e,t,a)=>{const{skeletonButtonCls:n}=e;return{[`${a}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${a}${n}-round`]:{borderRadius:t}}},j=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},m(e)),O=e=>{const{borderRadiusSM:t,skeletonButtonCls:a,controlHeight:n,controlHeightLG:s,controlHeightSM:l,gradientFromColor:i,calc:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:r(n).mul(2).equal(),minWidth:r(n).mul(2).equal()},j(n,r))},f(e,n,a)),{[`${a}-lg`]:Object.assign({},j(s,r))}),f(e,s,`${a}-lg`)),{[`${a}-sm`]:Object.assign({},j(l,r))}),f(e,l,`${a}-sm`))},w=e=>{const{componentCls:t,skeletonAvatarCls:a,skeletonTitleCls:n,skeletonParagraphCls:s,skeletonButtonCls:l,skeletonInputCls:i,skeletonImageCls:r,controlHeight:o,controlHeightLG:c,controlHeightSM:g,gradientFromColor:d,padding:u,marginSM:m,borderRadius:h,titleHeight:k,blockRadius:f,paragraphLiHeight:j,controlHeightXS:w,paragraphMarginTop:x}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:u,verticalAlign:"top",[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},$(o)),[`${a}-circle`]:{borderRadius:"50%"},[`${a}-lg`]:Object.assign({},$(c)),[`${a}-sm`]:Object.assign({},$(g))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:k,background:d,borderRadius:f,[`+ ${s}`]:{marginBlockStart:g}},[`${s}`]:{padding:0,"> li":{width:"100%",height:j,listStyle:"none",background:d,borderRadius:f,"+ li":{marginBlockStart:w}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${s} > li`]:{borderRadius:h}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:m,[`+ ${s}`]:{marginBlockStart:x}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},O(e)),p(e)),C(e)),v(e)),[`${t}${t}-block`]:{width:"100%",[`${l}`]:{width:"100%"},[`${i}`]:{width:"100%"}},[`${t}${t}-active`]:{[`\n        ${n},\n        ${s} > li,\n        ${a},\n        ${l},\n        ${i},\n        ${r}\n      `]:Object.assign({},b(e))}}};var x=(0,g.I$)("Skeleton",(e=>{const{componentCls:t,calc:a}=e,n=(0,d.mergeToken)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:a(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[w(n)]}),(e=>{const{colorFillContent:t,colorFill:a}=e;return{color:t,colorGradientEnd:a,gradientFromColor:t,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]});var N=e=>{const{prefixCls:t,className:a,rootClassName:s,active:c,shape:g="circle",size:d="default"}=e,{getPrefixCls:u}=n.useContext(i.E_),m=u("skeleton",t),[$,b,h]=x(m),p=(0,r.Z)(e,["prefixCls","className"]),C=l()(m,`${m}-element`,{[`${m}-active`]:c},a,s,b,h);return $(n.createElement("div",{className:C},n.createElement(o,Object.assign({prefixCls:`${m}-avatar`,shape:g,size:d},p))))};var E=e=>{const{prefixCls:t,className:a,rootClassName:s,active:c,block:g=!1,size:d="default"}=e,{getPrefixCls:u}=n.useContext(i.E_),m=u("skeleton",t),[$,b,h]=x(m),p=(0,r.Z)(e,["prefixCls"]),C=l()(m,`${m}-element`,{[`${m}-active`]:c,[`${m}-block`]:g},a,s,b,h);return $(n.createElement("div",{className:C},n.createElement(o,Object.assign({prefixCls:`${m}-button`,size:d},p))))};var y=e=>{const{prefixCls:t,className:a,rootClassName:s,style:r,active:o}=e,{getPrefixCls:c}=n.useContext(i.E_),g=c("skeleton",t),[d,u,m]=x(g),$=l()(g,`${g}-element`,{[`${g}-active`]:o},a,s,u,m);return d(n.createElement("div",{className:$},n.createElement("div",{className:l()(`${g}-image`,a),style:r},n.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${g}-image-svg`},n.createElement("title",null,"Image placeholder"),n.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${g}-image-path`})))))};var H=e=>{const{prefixCls:t,className:a,rootClassName:s,active:c,block:g,size:d="default"}=e,{getPrefixCls:u}=n.useContext(i.E_),m=u("skeleton",t),[$,b,h]=x(m),p=(0,r.Z)(e,["prefixCls"]),C=l()(m,`${m}-element`,{[`${m}-active`]:c,[`${m}-block`]:g},a,s,b,h);return $(n.createElement("div",{className:C},n.createElement(o,Object.assign({prefixCls:`${m}-input`,size:d},p))))},q=a(88355);var R=e=>{const{prefixCls:t,className:a,rootClassName:s,style:r,active:o,children:c}=e,{getPrefixCls:g}=n.useContext(i.E_),d=g("skeleton",t),[u,m,$]=x(d),b=l()(d,`${d}-element`,{[`${d}-active`]:o},m,a,s,$),h=null!=c?c:n.createElement(q.Z,null);return u(n.createElement("div",{className:b},n.createElement("div",{className:l()(`${d}-image`,a),style:r},h)))},S=a(40665);const M=(e,t)=>{const{width:a,rows:n=2}=t;return Array.isArray(a)?a[e]:n-1===e?a:void 0};var z=e=>{const{prefixCls:t,className:a,style:s,rows:i}=e,r=(0,S.Z)(Array(i)).map(((t,a)=>n.createElement("li",{key:a,style:{width:M(a,e)}})));return n.createElement("ul",{className:l()(t,a),style:s},r)};var A=e=>{let{prefixCls:t,className:a,width:s,style:i}=e;return n.createElement("h3",{className:l()(t,a),style:Object.assign({width:s},i)})};function B(e){return e&&"object"==typeof e?e:{}}const I=e=>{const{prefixCls:t,loading:a,className:s,rootClassName:r,style:c,children:g,avatar:d=!1,title:u=!0,paragraph:m=!0,active:$,round:b}=e,{getPrefixCls:h,direction:p,skeleton:C}=n.useContext(i.E_),k=h("skeleton",t),[v,f,j]=x(k);if(a||!("loading"in e)){const e=!!d,t=!!u,a=!!m;let i,g;if(e){const e=Object.assign(Object.assign({prefixCls:`${k}-avatar`},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(t,a)),B(d));i=n.createElement("div",{className:`${k}-header`},n.createElement(o,Object.assign({},e)))}if(t||a){let s,l;if(t){const t=Object.assign(Object.assign({prefixCls:`${k}-title`},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(e,a)),B(u));s=n.createElement(A,Object.assign({},t))}if(a){const a=Object.assign(Object.assign({prefixCls:`${k}-paragraph`},function(e,t){const a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(e,t)),B(m));l=n.createElement(z,Object.assign({},a))}g=n.createElement("div",{className:`${k}-content`},s,l)}const h=l()(k,{[`${k}-with-avatar`]:e,[`${k}-active`]:$,[`${k}-rtl`]:"rtl"===p,[`${k}-round`]:b},null==C?void 0:C.className,s,r,f,j);return v(n.createElement("div",{className:h,style:Object.assign(Object.assign({},null==C?void 0:C.style),c)},i,g))}return null!=g?g:null};I.Button=E,I.Avatar=N,I.Input=H,I.Image=y,I.Node=R;var F=I}}]);