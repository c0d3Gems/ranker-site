import{S as se,i as re,s as ne,l as ee,f as G,e as h,t as m,c as p,a as _,g as v,d as c,b,D as o,h as ie,J as fe,k as E,n as g,E as ae}from"../../chunks/vendor-e9a62dbe.js";function te(f,a,r){const t=f.slice();return t[1]=a[r],t}function le(f){let a,r=Object.keys(f[0]),t=[];for(let l=0;l<r.length;l+=1)t[l]=oe(te(f,r,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();a=ee()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);a=ee()},m(l,s){for(let e=0;e<t.length;e+=1)t[e].m(l,s);G(l,a,s)},p(l,s){if(s&1){r=Object.keys(l[0]);let e;for(e=0;e<r.length;e+=1){const d=te(l,r,e);t[e]?t[e].p(d,s):(t[e]=oe(d),t[e].c(),t[e].m(a.parentNode,a))}for(;e<t.length;e+=1)t[e].d(1);t.length=r.length}},d(l){fe(t,l),l&&c(a)}}}function oe(f){let a,r=f[0][f[1]]+"",t,l;return{c(){a=h("a"),t=m(r),this.h()},l(s){a=p(s,"A",{href:!0});var e=_(a);t=v(e,r),e.forEach(c),this.h()},h(){b(a,"href",l="/profesori/top/"+f[1])},m(s,e){G(s,a,e),o(a,t)},p(s,e){e&1&&r!==(r=s[0][s[1]]+"")&&ie(t,r),e&1&&l!==(l="/profesori/top/"+s[1])&&b(a,"href",l)},d(s){s&&c(a)}}}function ce(f){let a,r,t,l,s,e,d,O,P,k,N,S,L,w,D,T,F,I,j,V,q,y,B,H,J,M,C,R,z,i=f[0]&&le(f);return{c(){a=h("main"),r=h("h1"),t=m("Profesori (list\u0103 complet\u0103)"),l=E(),s=h("div"),e=h("nav"),d=h("a"),O=m("Profesori"),P=E(),k=h("a"),N=m("Ordine alfabetic\u0103"),S=E(),L=h("a"),w=m("Clasament na\u021Bional"),D=E(),T=h("a"),F=m("Top 50 na\u021Bional"),I=E(),j=h("a"),V=m("Top 100 na\u021Bional"),q=E(),y=h("a"),B=m("Top 500 na\u021Bional"),H=E(),J=h("br"),M=E(),C=h("span"),R=m("Clasamentul profesorilor:"),z=E(),i&&i.c(),this.h()},l(u){a=p(u,"MAIN",{});var A=_(a);r=p(A,"H1",{});var K=_(r);t=v(K,"Profesori (list\u0103 complet\u0103)"),K.forEach(c),l=g(A),s=p(A,"DIV",{class:!0});var Q=_(s);e=p(Q,"NAV",{});var n=_(e);d=p(n,"A",{href:!0});var U=_(d);O=v(U,"Profesori"),U.forEach(c),P=g(n),k=p(n,"A",{href:!0});var W=_(k);N=v(W,"Ordine alfabetic\u0103"),W.forEach(c),S=g(n),L=p(n,"A",{href:!0});var X=_(L);w=v(X,"Clasament na\u021Bional"),X.forEach(c),D=g(n),T=p(n,"A",{href:!0});var Y=_(T);F=v(Y,"Top 50 na\u021Bional"),Y.forEach(c),I=g(n),j=p(n,"A",{href:!0});var Z=_(j);V=v(Z,"Top 100 na\u021Bional"),Z.forEach(c),q=g(n),y=p(n,"A",{href:!0});var $=_(y);B=v($,"Top 500 na\u021Bional"),$.forEach(c),H=g(n),J=p(n,"BR",{}),M=g(n),C=p(n,"SPAN",{});var x=_(C);R=v(x,"Clasamentul profesorilor:"),x.forEach(c),z=g(n),i&&i.l(n),n.forEach(c),Q.forEach(c),A.forEach(c),this.h()},h(){b(d,"href","/profesori"),b(k,"href","/profesori/ordine-alfabetica"),b(L,"href","/profesori/top-national"),b(T,"href","/profesori/top-50-national"),b(j,"href","/profesori/top-100-national"),b(y,"href","/profesori/top-500-national"),b(s,"class","contextual")},m(u,A){G(u,a,A),o(a,r),o(r,t),o(a,l),o(a,s),o(s,e),o(e,d),o(d,O),o(e,P),o(e,k),o(k,N),o(e,S),o(e,L),o(L,w),o(e,D),o(e,T),o(T,F),o(e,I),o(e,j),o(j,V),o(e,q),o(e,y),o(y,B),o(e,H),o(e,J),o(e,M),o(e,C),o(C,R),o(e,z),i&&i.m(e,null)},p(u,[A]){u[0]?i?i.p(u,A):(i=le(u),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:ae,o:ae,d(u){u&&c(a),i&&i.d()}}}async function _e({page:f,fetch:a}){return{props:{classList:await(await a("http://localhost:3000/classes.json")).json()}}}function he(f,a,r){let{classList:t}=a;return f.$$set=l=>{"classList"in l&&r(0,t=l.classList)},[t]}class de extends se{constructor(a){super();re(this,a,he,ce,ne,{classList:0})}}export{de as default,_e as load};
