"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[8264],{28264:(e,l,n)=>{n.r(l),n.d(l,{default:()=>k});var a=n(89526),t=n(92070),o=n(65092),c=n(16743),r=n(72757),i=n(25385),u=n(14710),m=n(32165),s=n(50563),d=n(68621),v=n(71529),p=n(57170),h=n(59324),f=n.n(h),x=n(21447),g=n(87961);function b(e,l,n,a,t,o,c){try{var r=e[o](c),i=r.value}catch(e){return void n(e)}r.done?l(i):Promise.resolve(i).then(a,t)}var E=(0,d.Z)({root:{border:"1px solid rgba(0, 0, 0, .25)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(c.Z),y=(0,v.Z)((function(e){return{contact:{"&::before":{background:"transparent !important"},background:e.palette.secondary.dark,"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},paper:{background:e.palette.secondary.dark},expandoContainer:{textAlign:"center",fontSize:30},expandoItem:{"&:hover":{color:e.palette.primary.main,transition:"color ease-in 0.15s"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},contactName:{fontSize:18,color:e.palette.text.light},contactNumber:{fontSize:16,color:e.palette.text.main},expanded:{margin:0},missedIcon:{height:16,width:16,color:e.palette.error.main},incomingIcon:{height:16,width:16,color:"#5ec750"},outgoingIcon:{height:16,width:16,color:"#50a2c7"},callDate:{textAlign:"right",fontSize:12}}}));const k=function(e){var l,n,c,d,v,h,k,N,w,Z,C,P,I,G,S,A,z,U,F,_,D,R,T=y(),j=(0,o.k6)(),B=(0,g.VY)(),V=(0,t.v9)((function(e){return e.data.data.contacts})),Y=(0,t.v9)((function(e){return e.call.call})),$=((0,t.v9)((function(e){return e.data.data.player})),V.filter((function(l){return l.number===e.call.number}))[0]),q=function(){var l,n=(l=regeneratorRuntime.mark((function l(){var n,a;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(null!=Y||null!=e&&null!==(n=e.call)&&void 0!==n&&n.limited||null!=e&&null!==(a=e.call)&&void 0!==a&&a.anonymous){l.next=14;break}return l.prev=1,l.next=4,x.Z.send("CreateCall",{number:e.call.number,isAnon:!1});case 4:return l.next=6,l.sent.json();case 6:l.sent?j.push("/apps/phone/call/".concat(e.call.number)):B("Unable To Start Call"),l.next=14;break;case 10:l.prev=10,l.t0=l.catch(1),console.log(l.t0),B("Unable To Start Call");case 14:case"end":return l.stop()}}),l,null,[[1,10]])})),function(){var e=this,n=arguments;return new Promise((function(a,t){var o=l.apply(e,n);function c(e){b(o,a,t,c,r,"next",e)}function r(e){b(o,a,t,c,r,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return null!=e&&null!==(l=e.call)&&void 0!==l&&l.limited&&null!=e&&null!==(n=e.call)&&void 0!==n&&n.method?null:a.createElement(r.Z,{className:T.paper},a.createElement(E,{className:T.contact,expanded:!(e.expanded!=e.index||null!=e&&null!==(c=e.call)&&void 0!==c&&c.limited||null!=e&&null!==(d=e.call)&&void 0!==d&&d.anonymous),onChange:e.onClick},a.createElement(i.Z,{expandIcon:null!=e&&null!==(v=e.call)&&void 0!==v&&v.limited||null!=e&&null!==(h=e.call)&&void 0!==h&&h.anonymous?null:a.createElement(p.G,{icon:["fas","chevron-down"]})},a.createElement(u.ZP,{container:!0},a.createElement(u.ZP,{item:!0,xs:2},null!=e&&null!==(k=e.call)&&void 0!==k&&k.limited||null!=e&&null!==(N=e.call)&&void 0!==N&&N.anonymous||null==$||null==$.avatar||""===$.avatar?a.createElement(m.Z,{className:null!=e&&null!==(w=e.call)&&void 0!==w&&w.limited||null!=e&&null!==(Z=e.call)&&void 0!==Z&&Z.anonymous||null==$||!$.favorite?T.avatar:T.avatarFav,style:{background:null!=e&&null!==(C=e.call)&&void 0!==C&&C.limited||null!=e&&null!==(P=e.call)&&void 0!==P&&P.anonymous||null==$||!$.color?"#333":$.color}},null!=e&&null!==(I=e.call)&&void 0!==I&&I.limited||null!=e&&null!==(G=e.call)&&void 0!==G&&G.anonymous||null==$?null!=e&&null!==(S=e.call)&&void 0!==S&&S.limited?"?":"#":$.name.charAt(0)):a.createElement(m.Z,{className:$.favorite?T.avatarFav:T.avatar,src:$.avatar,alt:$.name.charAt(0)})),a.createElement(u.ZP,{item:!0,xs:10},a.createElement("div",{className:T.contactName},null!=e&&null!==(A=e.call)&&void 0!==A&&A.limited||null!=e&&null!==(z=e.call)&&void 0!==z&&z.anonymous||null==$?"Unknown Caller":$.name),a.createElement(u.ZP,{container:!0,className:T.contactNumber},a.createElement(u.ZP,{item:!0,xs:6},(R=e.call).duration<-1?R.method?a.createElement(p.G,{icon:["fas","phone-arrow-up-right"],className:T.outgoingIcon}):a.createElement(p.G,{icon:["fas","phone-arrow-down-left"],className:T.incomingIcon}):R.method?a.createElement(p.G,{icon:["fas","phone-arrow-up-right"],className:T.missedIcon}):a.createElement(p.G,{icon:["fas","phone-missed"],className:T.missedIcon})," ",null!=e&&null!==(U=e.call)&&void 0!==U&&U.limited||null!=e&&null!==(F=e.call)&&void 0!==F&&F.anonymous?"Unknown Number":e.call.number),a.createElement(u.ZP,{item:!0,xs:6,className:T.callDate},a.createElement(f(),{fromNow:!0},+e.call.time)))))),a.createElement(s.Z,null,!(null!=e&&null!==(_=e.call)&&void 0!==_&&_.limited)&&!(null!=e&&null!==(D=e.call)&&void 0!==D&&D.anonymous)&&a.createElement(u.ZP,{container:!0,className:T.expandoContainer},a.createElement(u.ZP,{item:!0,xs:4,className:T.expandoItem,onClick:q},a.createElement(p.G,{icon:"phone"})),a.createElement(u.ZP,{item:!0,xs:4,className:T.expandoItem,onClick:function(){var l,n;null!=e&&null!==(l=e.call)&&void 0!==l&&l.limited||null!=e&&null!==(n=e.call)&&void 0!==n&&n.anonymous||j.push("/apps/messages/convo/".concat(e.call.number))}},a.createElement(p.G,{icon:"message-sms"})),null!=$?a.createElement(u.ZP,{item:!0,xs:4,onClick:function(){var l,n;null!=e&&null!==(l=e.call)&&void 0!==l&&l.limited||null!=e&&null!==(n=e.call)&&void 0!==n&&n.anonymous||j.push("/apps/contacts/edit/".concat($._id))}},a.createElement(p.G,{icon:"user-pen"})):a.createElement(u.ZP,{item:!0,xs:4,className:T.expandoItem,onClick:function(){var l,n;null!=e&&null!==(l=e.call)&&void 0!==l&&l.limited||null!=e&&null!==(n=e.call)&&void 0!==n&&n.anonymous||j.push("/apps/contacts/add/".concat(e.call.number))}},a.createElement(p.G,{icon:"user-plus"}))))))}}}]);