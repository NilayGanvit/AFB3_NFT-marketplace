(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{1702:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-nft",function(){return t(8818)}])},8818:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(7568),s=t(4051),c=t.n(s),i=t(5893),o=t(8295),a=t(7294),u=t(1163),l=t(9669),d=t.n(l),f=t(2484),p=t.n(f),h=t(1838),x=t(9230);function m(){var e=(0,a.useState)([]),n=e[0],t=e[1],s=(0,a.useState)("not-loaded"),l=s[0],f=s[1],m=(0,u.useRouter)();function w(){return w=(0,r.Z)(c().mark((function e(){var n,s,i,a,u,l,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(p())({network:"Mumbai",cacheProvider:!0}),e.next=3,n.connect();case 3:return s=e.sent,i=new o.ethers.providers.Web3Provider(s),a=i.getSigner(),u=new o.ethers.Contract(h.I,x.Mt,a),e.next=9,u.fetchMyNFTs();case 9:return l=e.sent,e.next=12,Promise.all(l.map(function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,d().get(t);case 5:return r=e.sent,s=o.ethers.utils.formatUnits(n.price.toString(),"ether"),i={price:s,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image,tokenURI:t},e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 12:m=e.sent,t(m),f("loaded");case 15:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}return(0,a.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),"loaded"!==l||n.length?(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("div",{className:"p-4",children:(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,i.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,i.jsx)("img",{src:e.image,className:"max-h-64 min-w-full rounded"}),(0,i.jsxs)("div",{className:"p-4 min-h-full bg-black",children:[(0,i.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," Matic"]}),(0,i.jsx)("button",{className:"mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){m.push("/resell-nft?id=".concat(e.tokenId,"&tokenURI=").concat(e.tokenURI))}(e)},children:"List"})]})]},n)}))})})}):(0,i.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No NFTs owned"})}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[590,277,297,669,174,774,888,179],(function(){return n=1702,e(e.s=n);var n}));var n=e.O();_N_E=n}]);