import{S as ne,i as se,s as re,l as ee,f as G,e as h,t as v,c as p,a as _,g as m,d as c,b,D as o,h as ie,J as fe,k as E,n as g,E as ae}from"../../chunks/vendor-e9a62dbe.js";function te(f,a,s){const t=f.slice();return t[1]=a[s],t}function le(f){let a,s=Object.keys(f[0]),t=[];for(let l=0;l<s.length;l+=1)t[l]=oe(te(f,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();a=ee()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);a=ee()},m(l,n){for(let e=0;e<t.length;e+=1)t[e].m(l,n);G(l,a,n)},p(l,n){if(n&1){s=Object.keys(l[0]);let e;for(e=0;e<s.length;e+=1){const d=te(l,s,e);t[e]?t[e].p(d,n):(t[e]=oe(d),t[e].c(),t[e].m(a.parentNode,a))}for(;e<t.length;e+=1)t[e].d(1);t.length=s.length}},d(l){fe(t,l),l&&c(a)}}}function oe(f){let a,s=f[0][f[1]]+"",t,l;return{c(){a=h("a"),t=v(s),this.h()},l(n){a=p(n,"A",{href:!0});var e=_(a);t=m(e,s),e.forEach(c),this.h()},h(){b(a,"href",l="/profesori/top/"+f[1])},m(n,e){G(n,a,e),o(a,t)},p(n,e){e&1&&s!==(s=n[0][n[1]]+"")&&ie(t,s),e&1&&l!==(l="/profesori/top/"+n[1])&&b(a,"href",l)},d(n){n&&c(a)}}}function ce(f){let a,s,t,l,n,e,d,P,N,k,O,S,L,w,D,T,F,I,j,V,q,y,B,H,J,M,C,R,z,i=f[0]&&le(f);return{c(){a=h("main"),s=h("h1"),t=v("Profesori (top 500 la nivel na\u021Bional)"),l=E(),n=h("div"),e=h("nav"),d=h("a"),P=v("Profesori"),N=E(),k=h("a"),O=v("Ordine alfabetic\u0103"),S=E(),L=h("a"),w=v("Clasament na\u021Bional"),D=E(),T=h("a"),F=v("Top 50 na\u021Bional"),I=E(),j=h("a"),V=v("Top 100 na\u021Bional"),q=E(),y=h("a"),B=v("Top 500 na\u021Bional"),H=E(),J=h("br"),M=E(),C=h("span"),R=v("Clasamentul profesorilor:"),z=E(),i&&i.c(),this.h()},l(u){a=p(u,"MAIN",{});var A=_(a);s=p(A,"H1",{});var K=_(s);t=m(K,"Profesori (top 500 la nivel na\u021Bional)"),K.forEach(c),l=g(A),n=p(A,"DIV",{class:!0});var Q=_(n);e=p(Q,"NAV",{});var r=_(e);d=p(r,"A",{href:!0});var U=_(d);P=m(U,"Profesori"),U.forEach(c),N=g(r),k=p(r,"A",{href:!0});var W=_(k);O=m(W,"Ordine alfabetic\u0103"),W.forEach(c),S=g(r),L=p(r,"A",{href:!0});var X=_(L);w=m(X,"Clasament na\u021Bional"),X.forEach(c),D=g(r),T=p(r,"A",{href:!0});var Y=_(T);F=m(Y,"Top 50 na\u021Bional"),Y.forEach(c),I=g(r),j=p(r,"A",{href:!0});var Z=_(j);V=m(Z,"Top 100 na\u021Bional"),Z.forEach(c),q=g(r),y=p(r,"A",{href:!0});var $=_(y);B=m($,"Top 500 na\u021Bional"),$.forEach(c),H=g(r),J=p(r,"BR",{}),M=g(r),C=p(r,"SPAN",{});var x=_(C);R=m(x,"Clasamentul profesorilor:"),x.forEach(c),z=g(r),i&&i.l(r),r.forEach(c),Q.forEach(c),A.forEach(c),this.h()},h(){b(d,"href","/profesori"),b(k,"href","/profesori/ordine-alfabetica"),b(L,"href","/profesori/top-national"),b(T,"href","/profesori/top-50-national"),b(j,"href","/profesori/top-100-national"),b(y,"href","/profesori/top-500-national"),b(n,"class","contextual")},m(u,A){G(u,a,A),o(a,s),o(s,t),o(a,l),o(a,n),o(n,e),o(e,d),o(d,P),o(e,N),o(e,k),o(k,O),o(e,S),o(e,L),o(L,w),o(e,D),o(e,T),o(T,F),o(e,I),o(e,j),o(j,V),o(e,q),o(e,y),o(y,B),o(e,H),o(e,J),o(e,M),o(e,C),o(C,R),o(e,z),i&&i.m(e,null)},p(u,[A]){u[0]?i?i.p(u,A):(i=le(u),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:ae,o:ae,d(u){u&&c(a),i&&i.d()}}}async function _e({page:f,fetch:a}){return{props:{classList:await(await a("http://localhost:3000/classes.json")).json()}}}function he(f,a,s){let{classList:t}=a;return f.$$set=l=>{"classList"in l&&s(0,t=l.classList)},[t]}class de extends ne{constructor(a){super();se(this,a,he,ce,re,{classList:0})}}export{de as default,_e as load};
