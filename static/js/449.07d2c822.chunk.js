"use strict";(self.webpackChunkmeduzzen_front_test=self.webpackChunkmeduzzen_front_test||[]).push([[449],{174:(n,e,t)=>{t.d(e,{y:()=>i});var s,a=t(528);const i=t(273).A.div(s||(s=(0,a.A)(["\n  margin-top: 112px;\n  flex-direction: column;\n  display: flex;\n  gap: 24px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n"])))},449:(n,e,t)=>{t.r(e),t.d(e,{default:()=>W});var s,a=t(43),i=t(174),l=t(216),d=t(3),r=t(580),c=t(892),o=t(899),p=t(540),x=t(87),g=t(998),h=t(614),m=t(528),u=t(273);const f=u.A.div(s||(s=(0,m.A)(["\n  margin-top: 24px;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"])));var j,v,A,y,w,b,I,k,N,C,F,L=t(762),M=t(538),T=t(396);const B=u.A.div(j||(j=(0,m.A)(["\n  position: relative;\n  width: fit-content;\n  padding: 12px;\n\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: start;\n\n  justify-content: space-between;\n\n  border-radius: 12px;\n  border: 1px solid ",";\n  background: ",";\n\n  @media screen and (min-width: ",") {\n    justify-content: space-between;\n    padding: 12px;\n    gap: 12px;\n  }\n\n  @media screen and (min-width: ",") {\n    justify-content: space-between;\n    padding: 16px;\n    gap: 16px;\n  }\n"])),L.T.colorLightBorder,L.T.colorWhite,L.B.tablet,L.B.desktop),z=u.A.div(v||(v=(0,m.A)(["\n  width: 300px;\n  gap: 10px;\n  display: flex;\n  align-items: start;\n  justify-content: start;\n"]))),S=u.A.div(A||(A=(0,m.A)(["\n  width: 92px;\n  height: 92px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  border: 3px solid #fbe9ba;\n  background: #fff;\n"]))),V=u.A.img(y||(y=(0,m.A)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),_=u.A.div(w||(w=(0,m.A)(["\nflex-wrap: wrap;\n  display: flex;\n  gap: 8px;\n"]))),$=(u.A.div(b||(b=(0,m.A)(["\n  display: flex;\n  justify-content: space-between;\n"]))),(0,u.A)(M.uoh)(I||(I=(0,m.A)(["\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  transform: scale(1);\n  cursor: pointer;\n  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  ",";\n  &:hover {\n    transform: scale(1.02);\n    opacity: 0.8;\n  }\n"])),(0,T.kY)("opacity")),u.A.div(k||(k=(0,m.A)(["\n  width: 300px;\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n  gap: 8px;\n"])))),D=u.A.p(N||(N=(0,m.A)(["\n  color: ",";\n  margin: 0;\n"])),L.T.colorLigthText),E=u.A.div(C||(C=(0,m.A)(["\n  /* margin-left: auto; */\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n  gap: 8px;\n"]))),H=u.A.p(F||(F=(0,m.A)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1;\n"])),L.T.colorBlack);var Y=t(579);const q=n=>{let{Message:e}=n;const t=(0,d.wA)(),{messageId:s,content:i,imgs:l,senderName:c}=e,o=(0,d.d4)((n=>{var e;return null===(e=n.chat.chat)||void 0===e?void 0:e.chatId})),p=(0,d.d4)((n=>n.chat.isLoading)),m=(0,d.d4)((n=>n.auth.id)),[u,f]=(0,a.useState)(!1),[j,v]=(0,a.useState)(i);return(0,Y.jsx)(B,{children:(0,Y.jsxs)(_,{children:[(0,Y.jsxs)($,{children:[u?(0,Y.jsx)("textarea",{value:j,onChange:n=>v(n.target.value)}):(0,Y.jsx)(H,{children:i}),(0,Y.jsxs)(D,{children:["Author: ",c]})]}),p?(0,Y.jsx)(g.a,{}):(0,Y.jsx)(z,{children:(null===l||void 0===l?void 0:l.length)>0?null===l||void 0===l?void 0:l.map((n=>(0,Y.jsx)(S,{children:(0,Y.jsx)(V,{alt:"Message Img",src:n})},n))):(0,Y.jsx)(x.HL,{className:"sendMessage",children:"no images"})}),(0,Y.jsxs)(E,{children:[u?(0,Y.jsx)(h.$n,{onClick:async()=>{if(s&&o&&m){const n={messageId:s,chatId:o,userId:m,content:j};await t((0,r.u_)(n))}f(!1)},className:"saveBtn",children:"Save"}):(0,Y.jsx)(h.$n,{onClick:()=>{f(!0)},className:"editBtn",children:"Edit"}),(0,Y.jsx)(h.$n,{onClick:async()=>{if(s&&o&&m){const n={messageId:s,chatId:o,userId:m};await t((0,r.RC)(n))}},className:"deleteBtn",children:"Delete"})]})]})})};var J=t(525),K=t(283);const U=o.Ik().shape({content:o.Yj().min(6).max(200).required("Message content is required"),imgs:o.YO()});function O(){const n=(0,c.j7)(),[e,t]=(0,a.useState)(null);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("input",{type:"file",name:"imgs",accept:".jpg, .jpeg, .png",multiple:!0,onChange:e=>{const s=e.currentTarget.files;if(s)if(s.length<=3)n.setFieldValue("imgs",Array.from(s)),t(null);else{const e="\u041c\u043e\u0436\u043d\u0430 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u0442\u0440\u044c\u043e\u0445 \u0444\u0430\u0439\u043b\u0456\u0432.";console.error(e),t(e),n.setFieldValue("imgs",Array.from(s).slice(0,3))}else e.currentTarget.value?(n.setFieldValue("imgs",[e.currentTarget.value]),t(null)):(n.setFieldValue("imgs",[]),t(null))}}),e&&(0,Y.jsx)("div",{style:{color:"red"},children:e})]})}const R=function(){var n;const e=(0,d.wA)(),t=(0,d.d4)((n=>n.auth.id)),s=(0,d.d4)((n=>n.auth.name)),a=(0,d.d4)((n=>n.chat.chat)),i=(0,d.d4)((n=>n.chat.isLoading));return(0,Y.jsxs)(p.A,{children:[i?(0,Y.jsx)(g.a,{}):(0,Y.jsx)(f,{children:a&&a.messages&&a.messages.length>0?null===(n=a.messages)||void 0===n?void 0:n.map((n=>(0,Y.jsx)(q,{Message:n},n.messageId))):(0,Y.jsx)(x.HL,{className:"sendMessage",children:"Unfortunately, no messages yet."})}),(0,Y.jsx)(J.x,{children:(0,Y.jsx)(c.l1,{initialValues:{content:"",imgs:[],sender:"",chatId:"",senderName:""},validationSchema:U,onSubmit:async(n,i)=>{let{resetForm:l}=i;if(t&&null!==a&&void 0!==a&&a.chatId&&s){const i=new FormData,l=n.imgs;if(1===l.length)i.append("imgs",l[0]);else for(let n=0;n<l.length;n++)i.append("imgs",l[n]);i.append("senderName",s),i.append("content",n.content),i.append("chatId",null===a||void 0===a?void 0:a.chatId),i.append("sender",t),await e((0,r.tj)(i))}l()},children:(0,Y.jsxs)(c.lV,{autoComplete:"off",children:[(0,Y.jsx)(x.HL,{className:"sendMessage",children:"Add message"}),(0,Y.jsxs)(J.C,{children:[(0,Y.jsxs)(K.Ux,{children:[(0,Y.jsx)(c.D0,{type:"text",name:"content",placeholder:" "}),(0,Y.jsx)("label",{htmlFor:"content",children:"Message *"}),(0,Y.jsx)(c.Kw,{className:"error",component:"div",name:"content"})]}),(0,Y.jsx)(O,{}),(0,Y.jsx)(c.Kw,{name:"imgs",component:"div"})]}),(0,Y.jsx)(x.Ef,{children:(0,Y.jsx)(h.$n,{className:"regLogbutton",type:"submit",children:"send message"})})]})})})]})},W=()=>{const n=(0,d.wA)(),{chatId:e}=(0,l.g)(),t=(0,d.d4)((n=>n.auth.isAuth));return(0,a.useEffect)((()=>{e&&n((0,r.JJ)({chatId:e}))}),[n,e]),(0,Y.jsx)(i.y,{children:t&&(0,Y.jsx)(R,{})})}}}]);
//# sourceMappingURL=449.07d2c822.chunk.js.map