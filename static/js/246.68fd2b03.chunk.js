"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[246],{729:function(e,l,a){a(791);var i=a(689),s=a(197),t=a(460),r=a(184);l.Z=function(e){var l=e.item,a=l.title,c=l.vote_average,n=l.release_date,o=l.poster_path,d=l.id,m=(0,i.s0)();return(0,r.jsxs)("div",{className:"movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none",children:[(0,r.jsx)("img",{src:s.Qo.image500(o),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5"}),(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold mb-3",children:a}),(0,r.jsxs)("div",{className:"flex items-center justify-between opacity-50 mb-10",children:[(0,r.jsx)("span",{children:new Date(n).getFullYear()}),(0,r.jsx)("span",{children:c})]}),(0,r.jsx)(t.Z,{onClick:function(){return m("/movie/".concat(d))},children:"Xem ngay"})]})]})}},246:function(e,l,a){a.r(l);a(791);var i=a(942),s=a(197),t=a(689),r=a(432),c=a(729),n=a(184);function o(){var e=(0,t.UO)().movieId,l=(0,i.ZP)(s.Qo.getMovieMeta(e,"credits"),s._i).data;if(!l)return null;var a=l.cast;return!a||a.lenght<=0?null:(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h2",{className:"text-center text-3xl mb-10",children:"Di\u1ec5n vi\xean "}),(0,n.jsx)("div",{className:"grid grid-cols-4 gap-5",children:a.slice(0,4).map((function(e){return(0,n.jsxs)("div",{className:"cast-item p-3",children:[(0,n.jsx)("img",{className:"w-full h-[350px] object-cover rounded-lg mb-3 ",src:s.Qo.imageOriginal(e.profile_path),alt:""}),(0,n.jsx)("h3",{className:" text-center text-xl font-medium",children:e.name})]},e.id)}))})]})}function d(){var e=(0,t.UO)().movieId,l=(0,i.ZP)(s.Qo.getMovieMeta(e,"videos"),s._i).data;if(!l)return null;var a=l.results;return!a||a.length<=0?null:(0,n.jsx)("div",{className:"p-10",children:(0,n.jsx)("div",{className:"flex flex-col gap-5",children:a.slice(0,1).map((function(e){return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("h3",{className:"mb-5 text-xl font-medium p-3 bg-primary inline-block",children:"Trailer Phim"}),(0,n.jsx)("div",{className:"w-full aspect-video",children:(0,n.jsx)("iframe",{width:"900",height:"506",src:"https://www.youtube.com/embed/".concat(e.key),title:"Youtube",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"w-full h-full object-fill"})},e.id)]},e.id)}))})})}function m(){var e=(0,t.UO)().movieId,l=(0,i.ZP)(s.Qo.getMovieMeta(e,"similar"),s._i).data;if(!l)return null;var a=l.results;return!a||a.length<=0?null:(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h2",{className:"text-3xl font-medium mb-5",children:"Phim c\xf9ng th\u1ec3 lo\u1ea1i "}),(0,n.jsx)("div",{className:"movie-list",children:(0,n.jsx)(r.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:a.length>0&&a.map((function(e){return(0,n.jsx)(r.o5,{children:(0,n.jsx)(c.Z,{item:e})},e.id)}))})})]})}l.default=function(){var e=(0,t.UO)().movieId,l=(0,i.ZP)(s.Qo.getMovieDetails(e),s._i).data;if(console.log(l),!l)return null;var a=l.backdrop_path,r=l.poster_path,c=l.title,x=l.genres,u=l.overview;return(0,n.jsxs)("div",{className:"pb-10",children:[(0,n.jsxs)("div",{className:"w-full h-[600px] relative ",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-70"}),(0,n.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat",style:{backgroundImage:"url(".concat(s.Qo.imageOriginal(a),")")}})]}),(0,n.jsx)("div",{className:"w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10",children:(0,n.jsx)("img",{src:s.Qo.imageOriginal(r),className:"w-full h-full object-cover rounded-xl",alt:""})}),(0,n.jsx)("h1",{className:"text-center text-4xl font-bold text-white mb-10",children:c}),x.length>0&&(0,n.jsx)("div",{className:"flex items-center justify-center gap-x-5 mb-10",children:x.map((function(e){return(0,n.jsx)("span",{className:"py-2 px-4 border-primary text-primary border rounded",children:e.name},e.id)}))}),(0,n.jsx)("p",{className:"text-center leading-relaxed max-w-[600px] mx-auto mb-10",children:u}),(0,n.jsx)(o,{}),(0,n.jsx)(d,{}),(0,n.jsx)(m,{})]})}}}]);
//# sourceMappingURL=246.68fd2b03.chunk.js.map