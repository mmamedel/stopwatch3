(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{6:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),o=c(2),s=c(5);const i=e=>e<10?"0".concat(e):"".concat(e),d=e=>{const t=(e=>Math.floor(e/36e4))(e),c=Math.floor(e/6e3)-60*t,a=Math.floor(e/100)-3600*t-60*c,n=e-100*a-6e3*c-36e4*t;return"".concat(i(t),":").concat(i(c),":").concat(i(a),":").concat(i(n))};var l=c(9),b=c(8);const[r,u]=Object(n.h)({time:0,paused:!0}),j=r,O=()=>u("time",l.a),p=()=>u("time",0),v=()=>d(r.time),w=()=>u("paused",b.a),m=()=>(Object(n.c)(()=>{document.onkeydown=e=>{"Space"===e.code&&w(),"Backspace"===e.code&&j.paused&&p()}}),null),h=()=>(Object(n.c)(()=>{const e=j.paused?void 0:setInterval(O,10);Object(n.j)(()=>e&&clearInterval(e))}),null),f=Object(a.i)("<div><div></div><button>Reset</button></div>",6),g=Object(o.a)({fontFamily:"Arial, Helvetica, sans-serif",textAlign:"center"}),k=Object(o.a)({fontSize:"16vw",fontWeight:"bold"}),N=Object(o.a)({width:"".concat(20,"vw"),height:"".concat(20,"vw"),borderRadius:"".concat(10,"vw"),fontSize:"".concat(4,"vw")}),S=Object(s.a)("button")(e=>({background:e.paused?"green":"yellow"}));Object(a.b)(["click"]),Object(a.e)(()=>(()=>{const e=f.cloneNode(!0),t=e.firstChild,c=t.nextSibling;return e.className=g,Object(a.c)(e,Object(n.a)(m,{}),t),Object(a.c)(e,Object(n.a)(h,{}),t),t.className=k,Object(a.c)(t,()=>v()),Object(a.a)(c,"click",p,!0),c.className=N,Object(a.c)(e,Object(n.a)(S,{className:N,get paused(){return j.paused},get onClick(){return w},get children(){return j.paused?"Start":"Pause"}}),null),Object(n.e)(()=>c.disabled=!j.paused),e})(),document.getElementById("root"))}},[[6,1,2]]]);