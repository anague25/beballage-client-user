!function(){function e(e,t,l,a,s,r,o){try{var i=e[r](o),d=i.value}catch(e){return void l(e)}i.done?t(d):Promise.resolve(d).then(a,s)}function t(t){return function(){var l=this,a=arguments;return new Promise((function(s,r){var o=t.apply(l,a);function i(t){e(o,s,r,i,d,"next",t)}function d(t){e(o,s,r,i,d,"throw",t)}i(void 0)}))}}System.register(["./vuex-legacy-DSIE0isM.js","./index-legacy-BotjqDLp.js","./@vue-legacy-D-aloMXM.js","./vue-router-legacy-W-7WOOXA.js","./vue3-toastify-legacy-CkTXNXHT.js","./sweetalert2-legacy-Dmjdgd9K.js","./axios-legacy-aKSqV1Sc.js","./vee-validate-legacy-DreMxtEy.js","./@vee-validate-legacy-BuGAX7n2.js"],(function(e,l){"use strict";var a,s,r,o,i,d,n,p,c,u,x,m,y,g,f,b,h,v,w,k,C,j,N,I;return{setters:[e=>{a=e.u},e=>{s=e._,r=e.N,o=e.F,i=e.c,d=e.L,n=e.i,p=e.t},e=>{c=e.c,u=e.f,x=e.o,m=e.E,y=e.G,g=e.I,f=e.q,b=e.J,h=e.F,v=e.R,w=e.Q,k=e.Z,C=e.T,j=e.K,N=e.L,I=e.S},null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".non-editable-label{border:1px solid #ccc;padding:5px;display:inline-block;background-color:#f9f9f9;cursor:not-allowed}\n",document.head.appendChild(l);const M={components:{Navbar:r,Footer:o,NavCommand:i,Loader:d},setup(){const e=a(),l=c((()=>e.getters["order/shippingInfo"])),s=c((()=>e.getters["order/paymentMethod"])),r=c((()=>e.getters["order/orderCartItems"])),o=u(1e3),i=c((()=>r.value.reduce(((e,t)=>e+t.product.price*t.quantity),0))),d=c((()=>i.value+o.value)),m=c((()=>e.getters["auth/isAuthenticated"])),y=c((()=>e.getters["auth/user"])),g=u("white"),f=u("white"),b=u("white");console.log(r.value);const h=c((()=>r.value.reduce(((e,t)=>{const l=t.product.shop;if(l&&l.name){const a=l.name;e[a]||(e[a]=[]),e[a].push(t)}return e}),{})));function v(){return(v=t((function*(){const t=r.value.map((e=>{const t=parseFloat(e.product.price)*parseInt(e.quantity);return{product_id:e.product.id,price:t,quantity:parseInt(e.quantity)}}));e.dispatch("loader/setLoading",!0);try{const e=new FormData;e.append("amount",d.value),e.append("payment_method",s.value),e.append("user_id",y.value.id||null);const a=yield n.post("/api/payments",e),r=new FormData;r.append("totalAmount",d.value),r.append("payment_id",a.data.payment.id),r.append("user_id",y.value.id||null);const o=(yield n.post("/api/orders",r)).data.data.id,i=new FormData;t.forEach(((e,t)=>{i.append(`items[${t}][product_id]`,e.product_id),i.append(`items[${t}][price]`,e.price),i.append(`items[${t}][quantity]`,e.quantity)})),i.append("city",l.value.city),i.append("neighborhood",l.value.neighborhood),i.append("phone",l.value.phone),i.append("lastName",l.value.lastName),i.append("firstName",l.value.firstName),i.append("description",l.value.description),i.append("email",l.value.email),i.append("address",l.value.address);for(let[t,l]of i.entries())console.log(`${t}: ${l}`);yield n.post(`/api/order-items/${o}`,i);const c=new FormData;c.append("city",l.value.city),c.append("neighborhood",l.value.neighborhood),c.append("phone",l.value.phone),c.append("lastName",l.value.lastName),c.append("firstName",l.value.firstName),c.append("description",l.value.description),c.append("email",l.value.email),c.append("address",l.value.address),c.append("order_id",o),yield n.post("/api/deliveries",c),p.success()}catch(a){console.error("Failed to place order:",a)}finally{e.dispatch("loader/setLoading",!1)}}))).apply(this,arguments)}return x(t((function*(){m.value&&(yield e.dispatch("auth/fetchUser"))}))),{groupedCartItems:h,shippingInfo:l,paymentMethod:s,orderCartItems:r,subtotal:i,shippingCost:o,total:d,placeOrder:function(){return v.apply(this,arguments)},backgroundColor1:g,backgroundColor2:f,backgroundColor3:b,formatCurrency:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"XAF"}).format(e)}}}},F={class:"px-4"},_={class:"x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[60px] lg:py-[100px]"},q={class:"w-full"},D={class:"bg-white mt-1 lg:mt-0 py-4 px-5 rounded-md lg:rounded-none"},L={class:""},S=b("div",{class:"hidden lg:flex gap-x-4 text-left border-b-[1px] border-gray-300 py-5"},[b("span",{class:"block w-[40%] font-bold"},"Checkout Confirmation")],-1),A={class:"mb-1 blog"},O={class:"py-5 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto"},P={class:"mt-1 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"},$={class:"w-full"},E={class:"mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"},T={class:"flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 mx-5 xl:space-y-8"},Q={class:"justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-2 md:py-6 md:p-6 xl:p-8 w-full"},R=b("h3",{class:"text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 font-bold text-center"}," Customer’s Cart",-1),U={key:0,class:"px-3 pb-4 mt-4 md:mt-6 md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full border-[1px] border-green-600"},z=[I('<div class="border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8"><h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 text-center pb-4" style="color:red;">Shop &amp; Item name</h3><div class="flex justify-between items-start w-full pt-2"><p class="text-base dark:text-white xl:text-lg leading-6"> Iphone</p><p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"><span class="px-7">Quantity</span>10 </p></div></div>',1)],B={class:"px-3 pb-4 mt-4 md:mt-6 md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full border-[1px] border-green-600"},G={class:"border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8"},H={class:"text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 text-center pb-4",style:{color:"red"}},J={class:"flex justify-between items-start w-full pt-2"},K={class:"text-base dark:text-white xl:text-lg leading-6"},V={class:"text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"},X=b("span",{class:"px-7"},"Quantity",-1),Z={class:"mt-5 py-3 w-full border-[1px] border-green-600 px-4"},W=b("p",{class:"text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800",style:{color:"red"}},"Product in Cart",-1),Y={class:"border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8"},ee={class:"text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800"},te={class:"flex justify-between items-start w-full pt-2"},le={class:"text-base dark:text-white xl:text-lg leading-6"},ae={class:"px-7"},se={class:"text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"},re={key:1,class:"border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8"},oe=[I('<h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800"> Premium Quaility Dress</h3><div class="flex justify-between items-start w-full pt-2"><p class="text-base dark:text-white xl:text-lg leading-6"> $36.00 <span class="px-7">01</span></p><p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"> $36.00</p></div>',2)],ie={class:"flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"},de={class:"flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"},ne=b("h3",{class:"text-xl dark:text-white font-semibold leading-5 text-gray-800"}," Summary",-1),pe={class:"flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"},ce={class:"flex justify-between w-full"},ue=b("p",{class:"text-base dark:text-white leading-4 text-gray-800"}," Subtotal",-1),xe={class:"text-base dark:text-gray-300 leading-4 text-gray-600"},me={class:"flex justify-between items-center w-full"},ye=b("p",{class:"text-base dark:text-white leading-4 text-gray-800"}," Shipping",-1),ge={class:"text-base dark:text-gray-300 leading-4 text-gray-600"},fe={class:"flex justify-between items-center w-full"},be=b("p",{class:"text-base dark:text-white font-semibold leading-4 text-gray-800"}," Total",-1),he={class:"text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"},ve={class:"overflow-hidden bg-gray-50 dark:bg-gray-800 w-full flex justify-between items-center md:items-start px-4 py-6 mx-5 md:p-6 xl:p-8 flex-col"},we=b("h3",{class:"text-xl dark:text-white font-semibold leading-5 text-gray-800",style:{color:"red"}},"Shipping Details",-1),ke={class:"md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0"},Ce={class:"grid grid-cols-1 gap-4 w-full mt-4"},je={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},Ne={class:"w-full"},Ie=b("label",{for:"firstName"},"Nom",-1),Me={for:"shippingFirstName",class:"non-editable-label border w-full border-gray-300 rounded-md p-5",style:{"background-color":"white"}},Fe={class:"w-full"},_e=b("label",{for:"lastName"},"Prenom",-1),qe={for:"shippingLastName",class:"non-editable-label border w-full border-gray-300 rounded-md p-3",style:{"background-color":"white"}},De={class:"w-full"},Le=b("label",{for:"email"},"Email",-1),Se={for:"shippingEmail",class:"non-editable-label border w-full border-gray-300 rounded-md p-5",style:{"background-color":"white"}},Ae={class:"w-full"},Oe=b("label",{for:"phoneNUmber"},"Telephone",-1),Pe={for:"shippingPhoneNumber",class:"non-editable-label border w-full border-gray-300 rounded-md p-3",style:{"background-color":"white"}},$e=b("div",{class:"w-full"},[b("label",{for:"country"},"Pays"),b("label",{for:"shippingCountry",class:"non-editable-label border w-full border-gray-300 rounded-md p-5",style:{"background-color":"white"}},"Cameroon")],-1),Ee={class:"w-full"},Te=b("label",{for:"region"},"Ville",-1),Qe={for:"shippingTown",class:"non-editable-label border w-full border-gray-300 rounded-md p-3",style:{"background-color":"white"}},Re=b("label",{for:"address"}," Adresse ",-1),Ue={for:"shippingAddress",class:"non-editable-label border w-full border-gray-300 rounded-md p-3",style:{"background-color":"white"}},ze={class:"pt-3"},Be=b("label",{for:"field8"},"instruction utile",-1),Ge={for:"shippingSpecialNotice",class:"non-editable-label border w-full border-gray-300 rounded-md p-3",style:{"background-color":"white"}},He={key:0,class:"px-8 py-5 lg:max-w-md"},Je=[b("input",{type:"radio",value:"orangeMoney",class:"form-radio h-15 mx-5 text-indigo-500",id:"type1"},null,-1),b("h1",{class:"px-10 font-bold py-2"},"pay with Orange Money",-1),b("img",{src:"https://seeklogo.com/images/O/orange-money-logo-8F2AED308D-seeklogo.com.png",class:"h-12 w-1/2"},null,-1)],Ke={key:1,class:"px-8 py-4 lg:max-w-md"},Ve=[b("input",{type:"radio",value:"mtnMobileMoney",class:"form-radio hover:text-white h-15 w-15 mx-5 text-indigo-500",id:"type2"},null,-1),b("h1",{class:"px-10 font-bold py-2"},"pay with MTN mobile Money",-1),b("img",{src:"https://www.kindpng.com/picc/m/151-1514348_mtn-momo-logo-mobile-money-logo-png-transparent.png",class:"h-12 w-fit"},null,-1)],Xe={key:2,class:"px-8 py-4 lg:max-w-md"},Ze=[b("label",{class:"flex items-center hover:bg-red-600 hover:text-white cursor-pointer border-2 rounded-lg border-gray-300 py-5 px-5"},[b("input",{type:"radio",value:"payOnDelivery",class:"form-radio h-15 w-15 mx-5 text-indigo-500",id:"type3"}),b("h1",{class:"px-10 font-bold py-2"},"pay on delivery"),b("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/002/952/794/small/cash-on-delivery-steacker-free-vector.jpg",class:"h-12 w-fit"})],-1)],We={class:"flex justify-between items-center pt-9"},Ye={class:"text-black hidden lg:flex gap-x-2"},et=b("span",{class:"block"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-move-left"},[b("path",{d:"M6 8L2 12L6 16"}),b("path",{d:"M2 12H22"})])],-1),tt={class:"block"};e("default",s(M,[["render",function(e,t,l,a,s,r){var o,i,d,n,p,c,u;const x=m("Navbar"),I=m("Loader"),M=m("NavCommand"),lt=m("router-link"),at=m("Footer");return y(),g(h,null,[f(x),b("section",F,[b("div",_,[f(I),b("div",q,[f(M),b("div",D,[b("div",L,[S,b("div",A,[b("div",O,[b("div",P,[b("div",$,[b("div",E,[b("div",T,[b("div",Q,[R,0===Object.keys(a.groupedCartItems).length?(y(),g("div",U,z)):(y(!0),g(h,{key:1},v(a.groupedCartItems,((e,t)=>(y(),g("div",B,[b("div",G,[b("h3",H,w(t),1),(y(!0),g(h,null,v(e,(e=>(y(),g("div",J,[b("p",K,w(e.product.name),1),b("p",V,[X,N(w(e.quantity),1)])])))),256))])])))),256)),b("div",Z,[W,a.orderCartItems.length>0?(y(!0),g(h,{key:0},v(a.orderCartItems,(e=>(y(),g("div",Y,[b("h3",ee,w(e.product.name),1),b("div",te,[b("p",le,[N(w(e.product.price)+" FRCFA ",1),b("span",ae,w(e.quantity),1)]),b("p",se,w(e.product.price*e.quantity)+" FCFA",1)])])))),256)):(y(),g("div",re,oe))])]),b("div",ie,[b("div",de,[ne,b("div",pe,[b("div",ce,[ue,b("p",xe,w(a.formatCurrency(a.subtotal)),1)]),b("div",me,[ye,b("p",ge,w(a.formatCurrency(a.shippingCost)),1)])]),b("div",fe,[be,b("p",he,w(a.formatCurrency(a.total)),1)])])])]),b("div",ve,[we,b("div",ke,[b("div",Ce,[b("div",je,[b("div",Ne,[Ie,b("label",Me,w(null!==(o=a.shippingInfo.firstName)&&void 0!==o?o:"nom"),1)]),b("div",Fe,[_e,b("label",qe,w(null!==(i=a.shippingInfo.lastName)&&void 0!==i?i:"prenom"),1)]),b("div",De,[Le,b("label",Se,w(null!==(d=a.shippingInfo.email)&&void 0!==d?d:"email"),1)]),b("div",Ae,[Oe,b("label",Pe,w(null!==(n=a.shippingInfo.phone)&&void 0!==n?n:"nom"),1)]),$e,b("div",Ee,[Te,b("label",Qe,w(null!==(p=a.shippingInfo.city)&&void 0!==p?p:"nom"),1)])]),b("div",null,[b("div",null,[Re,b("label",Ue,w(null!==(c=a.shippingInfo.address)&&void 0!==c?c:"Ex:Pk17,intrancegendamerie appt 789"),1)]),b("div",ze,[Be,b("label",Ge,w(null!==(u=a.shippingInfo.description)&&void 0!==u?u:"s'il vous plait ne pas livrer apres 20h"),1)])])])]),"orangeMoney"===a.paymentMethod?(y(),g("div",He,[b("label",{style:k({backgroundColor:a.backgroundColor1}),onMouseover:t[0]||(t[0]=e=>a.backgroundColor1="rgba(239,128,49,255)"),onMouseout:t[1]||(t[1]=e=>a.backgroundColor1="white"),class:"flex justify-start hover:text-white items-center cursor-pointer border-2 border-gray-300 rounded-lg py-5 px-5"},Je,36)])):C("",!0),"mtnMobileMoney"===a.paymentMethod?(y(),g("div",Ke,[b("label",{style:k({backgroundColor:a.backgroundColor2}),onMouseover:t[2]||(t[2]=e=>a.backgroundColor2="yellow"),onMouseout:t[3]||(t[3]=e=>a.backgroundColor2="white"),class:"flex items-center cursor-pointer hover:text-white border-2 border-gray-300 rounded-lg py-5 px-5"},Ve,36)])):C("",!0),"payOnDelivery"===a.paymentMethod?(y(),g("div",Xe,Ze)):C("",!0)])])])])])]),b("div",We,[b("button",Ye,[et,b("span",tt,[f(lt,{to:"/payment"},{default:j((()=>[N("Return to payment")])),_:1})])]),b("button",{onClick:t[4]||(t[4]=(...e)=>a.placeOrder&&a.placeOrder(...e)),class:"bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold"},"Checkout")])])])])])]),f(at)],64)}]]))}}}))}();
