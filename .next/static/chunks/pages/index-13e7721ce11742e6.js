(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7568),s=n(4051),a=n.n(s),i=n(5893),c=n(8295),o=n(7294),l=n(9669),u=n.n(l),d=n(2484),p=n.n(d),h=n(1838),f=n(9230);function m(){var e=(0,o.useState)([]),t=e[0],n=e[1],s=(0,o.useState)("not-loaded"),l=s[0],d=s[1];function m(){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(a().mark((function e(){var t,s,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new c.ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/225a2a053f304e48b8be1bc21f1728c2"),s=new c.ethers.Contract(h.I,f.Mt,t),e.next=4,s.fetchMarketItems();case 4:return i=e.sent,e.next=7,Promise.all(i.map(function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.tokenURI(t.tokenId);case 2:return n=e.sent,e.next=5,u().get(n);case 5:return r=e.sent,i=c.ethers.utils.formatUnits(t.price.toString(),"ether"),o={price:i,tokenId:t.tokenId.toNumber(),seller:t.seller,owner:t.owner,image:r.data.image,name:r.data.name,description:r.data.description},e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:o=e.sent,n(o),d("loaded");case 10:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r,s,i,o,l,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(p()),e.next=3,n.connect();case 3:return r=e.sent,s=new c.ethers.providers.Web3Provider(r),i=s.getSigner(),o=new c.ethers.Contract(h.I,f.Mt,i),l=c.ethers.utils.parseUnits(t.price.toString(),"ether"),e.next=10,o.createMarketSale(t.tokenId,{value:l});case 10:return u=e.sent,e.next=13,u.wait();case 13:m();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){m()}),[]),"loaded"!==l||t.length?(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("div",{className:"px-4 bg-gradient-to-r from-orange-600 via-pink-500 to-purple-500",style:{maxWidth:"1600px"},children:(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4",children:t.map((function(e,t){return(0,i.jsxs)("div",{className:"shadow rounded-2xl min-h-full bg-white overflow-hidden",children:[(0,i.jsx)("img",{className:"max-h-64 min-w-full",src:e.image}),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold",children:e.name}),(0,i.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,i.jsx)("p",{className:"text-gray-400",children:e.description})})]}),(0,i.jsxs)("div",{className:"p-4 min-h-full bg-black",children:[(0,i.jsxs)("p",{className:"text-2xl font-bold text-white",children:[e.price," MATIC"]}),(0,i.jsx)("button",{className:"mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){return v.apply(this,arguments)}(e)},children:"Buy"})]})]},t)}))})})}):(0,i.jsx)("h1",{className:"px-20 py-10 text-3xl",children:"No items in marketplace"})}}},function(e){e.O(0,[590,277,297,669,174,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);