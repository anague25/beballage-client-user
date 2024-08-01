import{_ as L,N,F as A,L as V,a as S}from"./index-BCmC1QR8.js";import{u as T}from"./vue-router-BY3fkmSn.js";import{u as M}from"./vuex-j54FugZL.js";import{_ as B}from"./icon-filter-UYkcP1Gu.js";import{c as C,f as P,w as E,o as H,E as b,G as a,I as l,q as p,J as t,L as _,K as x,F as w,R as y,T as G,H as F,Q as f,W as I,S as J}from"./@vue-CRjAt1GK.js";import"./vue3-toastify-CEi4-HDi.js";import"./sweetalert2-BCK3Sqif.js";import"./axios-1jJeUhjj.js";import"./vee-validate-BE89hST2.js";import"./@vee-validate-BMb1-Yqj.js";const R="/images/pngs/tesoro.png",q={components:{Navbar:N,Footer:A,Loader:V},setup(){T();const i=M(),g=i.getters["getImagePaths/getPath"],j=C(()=>i.getters["categories/categories"]),s=C(()=>i.getters["categories/allCategories"]),h=P({}),m=P(1),u=async(o=1)=>{i.dispatch("loader/setLoading",!0);try{const n=await i.dispatch("categories/fetchCategories",{page:o,search:""});h.value=n.data.meta,console.log(n.data)}catch(n){console.log(n)}finally{i.dispatch("loader/setLoading",!1)}},v=async()=>{i.dispatch("loader/setLoading",!0);try{await i.dispatch("categories/fetchAllCategories")}catch(o){console.log(o)}finally{i.dispatch("loader/setLoading",!1)}},c=o=>{o!==m.value&&(m.value=o,u(o))},k=(o,n)=>{const r=[];if(n<=10)for(let d=1;d<=n;d++)r.push(d);else{r.push(1),o>4&&r.push("...");for(let d=Math.max(2,o-2);d<=Math.min(n-1,o+2);d++)r.push(d);o<n-3&&r.push("..."),r.push(n)}return r},e=C(()=>k(m.value,h.value.last_page||1));return E(e,(o,n)=>{console.log(o),console.log(h.value.last_page)}),H(async()=>{u(),v()}),{categories:j,path:g,allCategories:s,currentPage:m,goToPage:c,meta:h,paginationPages:e}}},z={class:"px-4 lg:px-6 xl:px-0"},D={class:"2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0"},K={class:"badcrub py-[20px] hidden lg:block"},O=t("a",{class:"text-gray-500 text-[13px] font-semibold",href:"https://deballage.cm/"},"Home",-1),Q=t("div",{class:"flex justify-between items-center py-3 px-4 bg-white shadow-lg rounded-md mt-4 lg:hidden"},[t("span",{class:"inline-block font-bold"},"All Products"),t("button",{class:"inline-block toggle-button"},[t("img",{width:"30",src:B,alt:"icon of a filter"})])],-1),W={class:"sidebar-container h-screen w-full"},U={class:"bg-white lg:hidden px-5 py-7 rounded-[6px] block lg:w-[22%]"},X={class:"flex flex-col gap-x-2"},Y=t("div",{class:"flex items-center justify-between"},[t("h3",{class:"text-[20px] font-bold"},"Market place categories"),t("img",{class:"icon-close",src:S,alt:""})],-1),Z={class:"mt-4"},$=t("h4",{class:"text-[18px] font-bold"},"All categories",-1),tt={key:0,class:"mt-2 space-y-1"},et={key:1,class:"mt-2 space-y-1"},st={class:"2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0 flex pt-3 lg:pt-6 pb-10"},ot={class:"bg-white px-5 py-7 rounded-[6px] sidebar hidden lg:block lg:w-[22%]"},at={class:"flex flex-col gap-x-2"},lt=t("h3",{class:"text-[20px] font-bold"},"Market place categories",-1),nt={class:"mt-4"},it=t("h4",{class:"text-[18px] font-bold"},"All categories",-1),ct={key:0,class:"mt-2 space-y-1"},rt={class:"prduct-list lg:w-[78%] w-full px-4 lg:px-0"},dt={class:"px-0 lg:px-4 2xl:px-4"},pt={class:"2xl:max-w-[1480px] mx-auto"},gt={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2"},xt={class:"block"},ht=["src"],mt={class:""},_t={class:"text-gray-500"},ft={class:"w-full lg:w-[189px] text-sm text-gray-500 truncate"},ut=t("span",{class:"block"},[t("img",{src:R,alt:""})],-1),bt=t("div",{class:""},[t("p",{class:"text-gray-500"},"( Jacket + Vest + Pants )"),t("p",{class:"w-full lg:w-[189px] text-sm text-gray-500 truncate"},"High-end Groom Formaluated suites"),t("div",{class:"flex justify-between items-center py-1"},[t("small",{class:"font-semibold text-[14px] text-gray-600"},"10 set"),t("span",{class:"font-bold inline-block text-[14px] text-gray-600"},"Other")]),t("div",{class:"flex items-center gap-x-2"},[t("span",{class:"block text-[14px] font-bold"},"70 000 FCFA"),t("span",{class:"text-[12px] font-bold line-through"},"100 000 FCFA")]),t("div",{class:"flex items-center justify-between"},[t("span",{class:"text-[12px] font-bold text-gray-500"},"Electronics"),t("span",{class:"text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500"},"30% off")])],-1),wt={key:0,class:"pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4"},yt=["onClick"],vt={key:1,class:"pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4"},kt=J('<span class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer"> &lt; </span><span class="w-8 h-8 p-6 bg-red-700 text-white rounded-md flex items-center font-bold cursor-pointer justify-center">1</span><span class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">2</span><span class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">3</span><span class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">4</span><span class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&gt;</span>',6),Ct=[kt];function jt(i,g,j,s,h,m){const u=b("Navbar"),v=b("Loader"),c=b("router-link"),k=b("Footer");return a(),l("main",null,[p(u),p(v),t("section",z,[t("div",D,[t("div",K,[O,_(" > "),p(c,{to:"/categories",class:"text-red-600 text-[14px] font-semibold"},{default:x(()=>[_("All Categories")]),_:1})]),Q,t("div",W,[t("div",U,[t("aside",X,[Y,t("div",Z,[$,s.allCategories.length>0?(a(),l("ul",tt,[(a(!0),l(w,null,y(s.allCategories,e=>(a(),l("li",null,[p(c,{to:"/category-details/"+e.id},{default:x(()=>[_(f(e.name),1)]),_:2},1032,["to"])]))),256))])):(a(),l("ul",et,[t("li",null,[p(c,{to:"#"},{default:x(()=>[_("Short Sleeve")]),_:1})])]))])])])])])]),t("section",null,[t("div",st,[t("div",ot,[t("aside",at,[lt,t("div",nt,[it,s.allCategories.length>0?(a(),l("ul",ct,[(a(!0),l(w,null,y(s.allCategories,e=>(a(),l("li",null,[p(c,{to:"/category-details/"+e.id},{default:x(()=>[_(f(e.name),1)]),_:2},1032,["to"])]))),256))])):G("",!0)])])]),t("div",rt,[t("div",dt,[t("div",pt,[t("div",gt,[s.categories.length>0?(a(!0),l(w,{key:0},y(s.categories,e=>(a(),F(c,{key:e.id,to:"/category-details/"+e.id,class:"p-[11.86px] rounded-md shadow-md bg-white"},{default:x(()=>[t("span",xt,[t("img",{src:s.path+e.image,alt:""},null,8,ht)]),t("div",mt,[t("p",_t,f(e.name),1),t("p",ft,f(e.description),1)])]),_:2},1032,["to"]))),128)):(a(),F(c,{key:1,class:"p-[11.86px] rounded-md shadow-md bg-white"},{default:x(()=>[ut,bt]),_:1}))])])]),s.paginationPages.length>0?(a(),l("div",wt,[t("span",{onClick:g[0]||(g[0]=e=>s.currentPage>1&&s.goToPage(s.currentPage-1)),class:"w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer"}," < "),(a(!0),l(w,null,y(s.paginationPages,e=>(a(),l("span",{key:e,onClick:o=>e!=="..."&&s.goToPage(e),class:I(["w-8 h-8 p-6 rounded-md flex items-center font-bold cursor-pointer justify-center",e===s.currentPage?"bg-red-700 text-white":"bg-white"])},f(e),11,yt))),128)),t("span",{onClick:g[1]||(g[1]=e=>s.currentPage<s.meta.last_page&&s.goToPage(s.currentPage+1)),class:"w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer"},">")])):(a(),l("div",vt,Ct))])])]),p(k)])}const Et=L(q,[["render",jt]]);export{Et as default};
