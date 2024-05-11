!function(){"use strict";var t=ReactDOM,n=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=t||{},a=c.type,i=void 0===a?"solid":a,r=c.color,l=void 0===r?"#000000b3":r,d=c.gradient,s=void 0===d?"linear-gradient(135deg, #4527a4, #8344c5)":d,u=c.image,p=void 0===u?{}:u,f=c.position,v=void 0===f?"center center":f,g=c.attachment,y=void 0===g?"initial":g,x=c.repeat,m=void 0===x?"no-repeat":x,b=c.size,h=void 0===b?"cover":b,T=c.overlayColor,k=void 0===T?"#000000b3":T;return"gradient"===i&&e?"background: ".concat(s,";"):"image"===i&&o?"background: url(".concat(null==p?void 0:p.url,");\n\t\t\t\tbackground-color: ").concat(k,";\n\t\t\t\tbackground-position: ").concat(v,";\n\t\t\t\tbackground-size: ").concat(h,";\n\t\t\t\tbackground-repeat: ").concat(m,";\n\t\t\t\tbackground-attachment: ").concat(y,";\n\t\t\t\tbackground-blend-mode: overlay;"):n&&"background: ".concat(l,";")},e=function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=n||{},c=o.fontFamily,a=void 0===c?"Default":c,i=o.fontCategory,r=void 0===i?"sans-serif":i,l=o.fontVariant,d=void 0===l?400:l,s=o.fontWeight,u=void 0===s?400:s,p=o.isUploadFont,f=void 0===p||p,v=o.fontSize,g=void 0===v?{desktop:15,tablet:15,mobile:15}:v,y=o.fontStyle,x=void 0===y?"normal":y,m=o.textTransform,b=void 0===m?"none":m,h=o.textDecoration,T=void 0===h?"auto":h,k=o.lineHeight,C=void 0===k?"135%":k,R=o.letterSpace,S=void 0===R?"0px":R,E=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},D=!e||!a||"Default"===a,L=(null==g?void 0:g.desktop)||g,w=(null==g?void 0:g.tablet)||L,F=(null==g?void 0:g.mobile)||w,I="\n\t\t".concat(D?"":"font-family: '".concat(a,"', ").concat(r,";"),"\n\t\t").concat(E(u,"font-weight"),"\n\t\t","font-size: ".concat(L,"px;"),"\n\t\t").concat(E(x,"font-style"),"\n\t\t").concat(E(b,"text-transform"),"\n\t\t").concat(E(T,"text-decoration"),"\n\t\t").concat(E(C,"line-height"),"\n\t\t").concat(E(S,"letter-spacing"),"\n\t"),O=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",z=D?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(O.replace(/ /g,""),"&display=swap");return{googleFontLink:!f||D?"":"@import url(".concat(z,");"),styles:"".concat(t,"{\n\t\t\t").concat(I,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(w,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(F,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},o=function(t){var o,c,a,i,r,l,d,s,u,p,f,v,g,y,x,m,b,h,T,k,C,R,S=t.attributes,E=t.clientId,D=S.textAlign,L=S.background,w=S.padding,F=S.prefixTypo,I=S.prefixColor,O=S.typingContentsTypo,z=S.suffixTypo,_=S.suffixColor,M="#ttbTextTyping-".concat(E," .ttbTextTyping");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(o=e("",F))||void 0===o?void 0:o.googleFontLink,"\n\t\t").concat(null===(c=e("",O))||void 0===c?void 0:c.googleFontLink,"\n\t\t").concat(null===(a=e("",z))||void 0===a?void 0:a.googleFontLink,"\n\t\t").concat(null===(i=e("".concat(M," .prefixText"),F))||void 0===i?void 0:i.styles,"\n\t\t").concat(null===(r=e("".concat(M," .typingContents, ").concat(M," .typed-cursor"),O))||void 0===r?void 0:r.styles,"\n\t\t").concat(null===(l=e("".concat(M," .suffixText"),z))||void 0===l?void 0:l.styles,"\n\n\t\t").concat(M,"{\n\t\t\ttext-align: ").concat(D,";\n\t\t\t").concat(n(L),"\n\t\t\tpadding: ").concat((d=w,s=d||{},u=s.side,p=void 0===u?2:u,f=s.vertical,v=void 0===f?"0px":f,g=s.horizontal,y=void 0===g?"0px":g,x=s.top,m=void 0===x?"0px":x,b=s.right,h=void 0===b?"0px":b,T=s.bottom,k=void 0===T?"0px":T,C=s.left,R=void 0===C?"0px":C,2===p?"".concat(v," ").concat(y):"".concat(m," ").concat(h," ").concat(k," ").concat(R)),";\n\t\t}\n\t\t").concat(M," .prefixText{\n\t\t\tcolor: ").concat(I,";\n\t\t}\n\t\t").concat(M," .suffixText{\n\t\t\tcolor: ").concat(_,";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},c=React,a=function(t){var n=t.attributes,e=n.prefixText,o=n.typingContents,a=n.suffixText,i=n.typeSpeed,r=n.startDelay,l=n.backSpeed,d=n.backDelay,s=n.isShuffle,u=n.isFadeOut,p=n.fadeOutDelay,f=n.isLoop,v=n.loopCount,g=n.isCursor,y=n.cursorChar,x=(0,c.useRef)(null),m=(0,c.useRef)(null);return(0,c.useEffect)((function(){var t={strings:o.map((function(t){return t.text})),stringsElement:null,typeSpeed:i,startDelay:r,backSpeed:l,backDelay:d,smartBackspace:!1,shuffle:s,fadeOut:u,fadeOutClass:"typed-fade-out",fadeOutDelay:p,loop:f,loopCount:0===v?1/0:v,showCursor:g,cursorChar:y,autoInsertCss:!1,attr:null,bindInputFocusEvents:!1,contentType:"html",preStringTyped:function(t,n){n&&o[n.sequence[t]]&&(n.el.style.color=o[n.sequence[t]].color||"#333",g&&(n.cursor.style.color=o[n.sequence[t]].color||"#333"))}};return m.current=new Typed(x.current,t),function(){return m.current.destroy()}}),[x.current,o,i,r,l,d,s,u,p,f,v,g,y]),React.createElement("div",{className:"ttbTextTyping"},React.createElement("span",{className:"prefixText",dangerouslySetInnerHTML:{__html:e}}),React.createElement("span",{className:"typingContents",ref:x}),React.createElement("span",{className:"suffixText",dangerouslySetInnerHTML:{__html:a}}))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-ttb-text-typing").forEach((function(n){var e=JSON.parse(n.dataset.attributes);(0,t.createRoot)(n).render(React.createElement(React.Fragment,null,React.createElement(o,{attributes:e,clientId:e.cId}),React.createElement(a,{attributes:e}))),null==n||n.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map