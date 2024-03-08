"use strict";(self.webpackChunkmeduzzen_front_test=self.webpackChunkmeduzzen_front_test||[]).push([[449],{174:(n,e,s)=>{s.d(e,{y:()=>i});var t,a=s(528);const i=s(273).A.div(t||(t=(0,a.A)(["\n  margin-top: 112px;\n  flex-direction: column;\n  display: flex;\n  gap: 24px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n"])))},449:(n,e,s)=>{s.r(e),s.d(e,{default:()=>K});var t,a=s(43),i=s(174),l=s(216),d=s(3),r=s(580),c=s(892),o=s(899),p=s(540),g=s(87),h=s(998),x=s(614),m=s(528),u=s(273);const f=u.A.div(t||(t=(0,m.A)(["\n  margin-top: 24px;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"])));var j,v,y,A,w,b,I,k,N,C=s(762),F=s(538),M=s(396);const T=u.A.div(j||(j=(0,m.A)(["\n  position: relative;\n  width: 100%;\n  padding: 12px;\n\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: start;\n\n  justify-content: space-between;\n\n  border-radius: 24px;\n  background: ",";\n\n  @media screen and (min-width: ",") {\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 12px;\n    gap: 30px;\n  }\n\n  @media screen and (min-width: ",") {\n    justify-content: space-between;\n    padding: 16px;\n    gap: 40px;\n  }\n"])),C.T.colorWhite,C.B.tablet,C.B.desktop),L=u.A.div(v||(v=(0,m.A)(["\n  height: 150px;\n  gap: 10px;\n  display: flex;\n  align-items: start;\n  justify-content: center;\n"]))),z=u.A.div(y||(y=(0,m.A)(["\n  width: 120px;\n  height: 120px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  border: 3px solid #fbe9ba;\n  background: #fff;\n"]))),S=u.A.img(A||(A=(0,m.A)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),V=u.A.div(w||(w=(0,m.A)(["\ndisplay: flex;\ngap: 8px;\n"]))),B=(u.A.div(b||(b=(0,m.A)(["\n  display: flex;\n  justify-content: space-between;\n"]))),(0,u.A)(F.uoh)(I||(I=(0,m.A)(["\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  transform: scale(1);\n  cursor: pointer;\n  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  ",";\n  &:hover {\n    transform: scale(1.02);\n    opacity: 0.8;\n  }\n"])),(0,M.kY)("opacity")),u.A.div(k||(k=(0,m.A)(["\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n  gap: 8px;\n  & p {\n    color: ",";\n    margin: 0;\n  }\n"])),C.T.colorLigthText)),_=u.A.h3(N||(N=(0,m.A)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n"])),C.T.colorText);var $=s(579);const D=n=>{let{Message:e}=n;const s=(0,d.wA)(),{messageId:t,content:i,imgs:l,senderName:c}=e,o=(0,d.d4)((n=>{var e;return null===(e=n.chat.chat)||void 0===e?void 0:e.chatId})),p=(0,d.d4)((n=>n.chat.isLoading)),m=(0,d.d4)((n=>n.auth.id)),[u,f]=(0,a.useState)(!1),[j,v]=(0,a.useState)(i);return(0,$.jsx)(T,{children:(0,$.jsxs)(V,{children:[(0,$.jsxs)(B,{children:[u?(0,$.jsx)("textarea",{value:j,onChange:n=>v(n.target.value)}):(0,$.jsx)(_,{children:i}),(0,$.jsx)("p",{children:c})]}),p?(0,$.jsx)(h.a,{}):(0,$.jsx)(L,{children:(null===l||void 0===l?void 0:l.length)>0?null===l||void 0===l?void 0:l.map((n=>(0,$.jsx)(z,{children:(0,$.jsx)(S,{alt:"Message Img",src:n})},n))):(0,$.jsx)(g.HL,{className:"sendMessage",children:"no images"})}),(0,$.jsxs)(B,{children:[u?(0,$.jsx)(x.$n,{onClick:async()=>{if(t&&o&&m){const n={messageId:t,chatId:o,userId:m,content:j};await s((0,r.u_)(n))}f(!1)},className:"saveBtn",children:"Save"}):(0,$.jsx)(x.$n,{onClick:()=>{f(!0)},className:"editBtn",children:"Edit"}),(0,$.jsx)(x.$n,{onClick:async()=>{if(t&&o&&m){const n={messageId:t,chatId:o,userId:m};await s((0,r.RC)(n))}},className:"deleteBtn",children:"Delete"})]})]})})};var E=s(525),H=s(283);const Y=o.Ik().shape({content:o.Yj().min(6).max(200).required("Message content is required"),imgs:o.YO()});function q(){const n=(0,c.j7)(),[e,s]=(0,a.useState)(null);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("input",{type:"file",name:"imgs",accept:".jpg, .jpeg, .png",multiple:!0,onChange:e=>{const t=e.currentTarget.files;if(t)if(t.length<=3)n.setFieldValue("imgs",Array.from(t)),s(null);else{const e="\u041c\u043e\u0436\u043d\u0430 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u0442\u0440\u044c\u043e\u0445 \u0444\u0430\u0439\u043b\u0456\u0432.";console.error(e),s(e),n.setFieldValue("imgs",Array.from(t).slice(0,3))}else e.currentTarget.value?(n.setFieldValue("imgs",[e.currentTarget.value]),s(null)):(n.setFieldValue("imgs",[]),s(null))}}),e&&(0,$.jsx)("div",{style:{color:"red"},children:e})]})}const J=function(){var n;const e=(0,d.wA)(),s=(0,d.d4)((n=>n.auth.id)),t=(0,d.d4)((n=>n.auth.name)),a=(0,d.d4)((n=>n.chat.chat)),i=(0,d.d4)((n=>n.chat.isLoading));return(0,$.jsxs)(p.A,{children:[i?(0,$.jsx)(h.a,{}):(0,$.jsx)(f,{children:a&&a.messages&&a.messages.length>0?null===(n=a.messages)||void 0===n?void 0:n.map((n=>(0,$.jsx)(D,{Message:n},n.messageId))):(0,$.jsx)(g.HL,{className:"sendMessage",children:"Unfortunately, no messages yet."})}),(0,$.jsx)(E.x,{children:(0,$.jsx)(c.l1,{initialValues:{content:"",imgs:[],sender:"",chatId:"",senderName:""},validationSchema:Y,onSubmit:async(n,i)=>{let{resetForm:l}=i;if(s&&null!==a&&void 0!==a&&a.chatId&&t){const i=new FormData,l=n.imgs;if(1===l.length)i.append("imgs",l[0]);else for(let n=0;n<l.length;n++)i.append("imgs",l[n]);i.append("senderName",t),i.append("content",n.content),i.append("chatId",null===a||void 0===a?void 0:a.chatId),i.append("sender",s),await e((0,r.tj)(i))}l()},children:(0,$.jsxs)(c.lV,{autoComplete:"off",children:[(0,$.jsx)(g.HL,{className:"sendMessage",children:"Add message"}),(0,$.jsxs)(E.C,{children:[(0,$.jsxs)(H.Ux,{children:[(0,$.jsx)(c.D0,{type:"text",name:"content",placeholder:" "}),(0,$.jsx)("label",{htmlFor:"content",children:"Message *"}),(0,$.jsx)(c.Kw,{className:"error",component:"div",name:"content"})]}),(0,$.jsx)(q,{}),(0,$.jsx)(c.Kw,{name:"imgs",component:"div"})]}),(0,$.jsx)(g.Ef,{children:(0,$.jsx)(x.$n,{className:"regLogbutton",type:"submit",children:"send message"})})]})})})]})},K=()=>{const n=(0,d.wA)(),{chatId:e}=(0,l.g)(),s=(0,d.d4)((n=>n.auth.isAuth));return(0,a.useEffect)((()=>{e&&n((0,r.JJ)({chatId:e}))}),[n,e]),(0,$.jsx)(i.y,{children:s&&(0,$.jsx)(J,{})})}}}]);
//# sourceMappingURL=449.6389edcf.chunk.js.map