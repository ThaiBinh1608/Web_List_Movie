"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[408],{729:function(e,t,s){s(791);var a=s(689),l=s(197),n=s(460),r=s(184);t.Z=function(e){var t=e.item,s=t.title,i=t.vote_average,o=t.release_date,c=t.poster_path,u=t.id,d=(0,a.s0)();return(0,r.jsxs)("div",{className:"movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none",children:[(0,r.jsx)("img",{src:l.Qo.image500(c),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5"}),(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold mb-3",children:s}),(0,r.jsxs)("div",{className:"flex items-center justify-between opacity-50 mb-10",children:[(0,r.jsx)("span",{children:new Date(o).getFullYear()}),(0,r.jsx)("span",{children:i})]}),(0,r.jsx)(n.Z,{onClick:function(){return d("/movie/".concat(u))},children:"Xem ngay"})]})]})}},408:function(e,t,s){s.r(t);var a=s(439),l=s(791),n=s(942),r=s(197),i=s(729),o=s(112),c=s(48),u=s.n(c),d=s(184);t.default=function(){var e=(0,l.useState)(1),t=(0,a.Z)(e,2),s=t[0],c=t[1],x=(0,l.useState)(""),m=(0,a.Z)(x,2),h=m[0],p=m[1],v=(0,l.useState)(r.Qo.getMovieList("popular",s)),f=(0,a.Z)(v,2),g=f[0],j=f[1],b=(0,o.Z)(h,500),w=(0,l.useState)(0),N=(0,a.Z)(w,2),Z=N[0],k=N[1],y=(0,l.useState)(0),C=(0,a.Z)(y,2),L=C[0],S=C[1],_=(0,n.ZP)(g,r._i),M=_.data,Q=_.error,P=(null===M||void 0===M?void 0:M.results)||[];(0,l.useEffect)((function(){M&&M.total_results&&k(Math.ceil(M.total_results/20))}),[M,L]);var D=!M&&!Q;return(0,l.useEffect)((function(){j(b?r.Qo.getMovieSearch(b,s):r.Qo.getMovieList("popular",s))}),[b,s]),(0,d.jsxs)("div",{className:"py-10 page-container",children:[(0,d.jsxs)("div",{className:"flex mb-10",children:[(0,d.jsx)("div",{className:"flex-1",children:(0,d.jsx)("input",{type:"text",className:"w-full p-4 bg-slate-700 text-white outline-none",placeholder:"Search movie...",onChange:function(e){p(e.target.value)}})}),(0,d.jsx)("button",{className:"p-4 bg-primary text-white",children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]}),D&&(0,d.jsx)("div",{className:"w-10 h-10 rounded-full border-primary border-t-transparent border-t-4\r mx-auto animate-spin"}),(0,d.jsx)("div",{className:"grid grid-cols-4 gap-10",children:!D&&P.length>0&&P.map((function(e){return(0,d.jsx)(i.Z,{item:e},e.id)}))}),(0,d.jsx)("div",{className:"mt-10",children:(0,d.jsx)(u(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var t=20*e.selected%M.total_results;S(t),c(e.selected+1)},pageRangeDisplayed:5,pageCount:Z,previousLabel:"< previous",renderOnZeroPageCount:null,className:"pagination"})})]})}}}]);
//# sourceMappingURL=408.36278128.chunk.js.map