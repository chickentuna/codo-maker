(this["webpackJsonpcodo-maker"]=this["webpackJsonpcodo-maker"]||[]).push([[0],{208:function(t,e,n){},209:function(t,e,n){},210:function(t,e,n){},375:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(12),c=n.n(o),s=(n(208),n(209),n(16)),r=(n(210),n(192)),d={Propeller:"(sin(4*theta))*20",Fuzzy:"sin(4*high*theta)",Geometric:"-abs(sin(4*theta))",Hair:" floor(theta-1.05) == 0 ? (sin((theta+0.15)*30) * high) : low",Buzz:"cos(theta*2)*sin(theta*50)*high",Star:"(sin(5*theta))*4",Sun:"-26*abs(sin(5*theta))",Screw:"(theta + 0.2) % pi/2 < pi / 16 ? low : high",Sonic:"(((theta % (pi / 5))/(pi/5))*2 - 1) * 1.5",Cotonball:"abs(cos(theta*9))*2",Artistic:"-abs(sin(4*theta)) * cos(theta*4)*5",Small:"low",Big:"high"},A=n(187),b=n.n(A),j=n(405),h=n(408),l=n(409),u=n(413),m=n(411),Z=n(414),g=n(410),p=n(7);function C(){var t=Object(i.useState)("0"),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(i.useState)(6),c=Object(s.a)(o,1)[0];return Object(i.useEffect)((function(){!function(t,e){var n=document.querySelector("#errs");try{var i=t.replaceAll("theta","(theta%(3.14*2))");b()({target:"#plot",yAxis:{domain:[-1.897959183,1.897959183]},xAxis:{domain:[-3,3]},grid:!1,annotations:[],disableZoom:!0,data:[{closed:!1,r:"R + (1/(1+E^(-( ".concat(i," ))))/Ar"),scope:{R:.5,high:4,low:-4,pi:3.14,PI:3.14,Ar:e},fnType:"polar",graphType:"polyline",range:[0,2*Math.PI],color:"black"}]}),null!=n&&(n.innerHTML="")}catch(a){null!=n&&(n.innerHTML=a.message)}}(n,c)}),[n,c]),Object(p.jsxs)(j.a,{maxWidth:"md",children:[Object(p.jsx)(h.a,{variant:"h4",component:"h4",children:"Preview"}),Object(p.jsxs)("div",{className:"preview",id:"main",children:[Object(p.jsx)("div",{className:"eyesContainer",children:Object(p.jsx)("img",{className:"eyes",src:"data:image/png;base64,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",alt:""})}),Object(p.jsx)("div",{id:"plot"})]}),Object(p.jsx)(l.a,{}),Object(p.jsxs)(u.a,{m:4,children:[Object(p.jsx)(h.a,{variant:"h4",component:"h4",children:"Shape"}),Object(p.jsx)(u.a,{display:"flex",justifyContent:"center",children:Object(p.jsx)(u.a,{m:4,width:400,children:Object(p.jsx)(m.a,{value:n,onChange:function(t){return a(t.target.value)},label:"Formula",fullWidth:!0,variant:"outlined"})})})]}),Object(p.jsx)("div",{id:"errs"}),Object(p.jsxs)(u.a,{m:4,children:[Object(p.jsx)(h.a,{variant:"h6",component:"h6",color:"primary",children:"Examples"}),Object(p.jsx)(u.a,{m:2,children:Object.entries(d).map((function(t){var e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(p.jsx)(Z.a,{variant:"contained",color:"primary",onClick:function(){return a(i)},children:n},n)}))})]}),Object(p.jsx)(u.a,{m:1,children:Object(p.jsx)(g.a,{variant:"outlined",children:Object(p.jsx)("div",{children:Object(p.jsx)(r.a,{})})})})]})}var v="Codo\nCodit\nCodoid\nCodoc\nCodee\nCodum\nCodude\nCodor\nCodim\nCodil\nCodon\nCodox\nCodux\nCodid\nCoddity".split("\n");var R=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[(t=v,t[Math.floor(Math.random()*t.length)])," Creator"]}),Object(p.jsx)(C,{})]});var t},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,417)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),o(t),c(t)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),O()}},[[375,1,2]]]);
//# sourceMappingURL=main.e686603c.chunk.js.map