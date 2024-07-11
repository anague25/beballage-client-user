!function(){function e(e,l,o,r,a,t,n){try{var i=e[t](n),s=i.value}catch(e){return void o(e)}i.done?l(s):Promise.resolve(s).then(r,a)}function l(l){return function(){var o=this,r=arguments;return new Promise((function(a,t){var n=l.apply(o,r);function i(l){e(n,a,t,i,s,"next",l)}function s(l){e(n,a,t,i,s,"throw",l)}i(void 0)}))}}System.register(["./@vue-legacy-vaimB8pj.js","./vuex-legacy-9wZeYOjE.js","./vue-router-legacy-BmwCzqEk.js","./index-legacy-D6uDRELn.js","./vue3-toastify-legacy-CkWO1oIC.js","./sweetalert2-legacy-Dmjdgd9K.js","./axios-legacy-aKSqV1Sc.js"],(function(e,o){"use strict";var r,a,t,n,i,s,d,u,p,c,f,m,g,h,b,v,y,w,x,k,N;return{setters:[e=>{r=e.r,a=e.c,t=e.w,n=e.o,i=e.x,s=e.y,d=e.A,u=e.e,p=e.B,c=e.G,f=e.C,m=e.D,g=e.I,h=e.F,b=e.H},e=>{v=e.u},e=>{y=e.a},e=>{w=e._,x=e.N,k=e.F,N=e.c},null,null,null],execute:function(){const o={components:{Navbar:x,Footer:k,NavCommand:N},setup(){const e=v(),o=y(),i=r({firstName:"",lastName:"",email:"",phone:"",city:"",description:"",address:"",neighborhood:"",order_id:""}),s=a((()=>e.getters["auth/isAuthenticated"])),d=a((()=>e.getters["auth/user"]));return t(d,((e,l)=>{s&&e.id&&(i.firstName=e.firstName||"",i.lastName=e.lastName||"",i.email=e.email||"",i.phone=e.phone||"")})),n(l((function*(){s.value&&(yield e.dispatch("auth/fetchUser"))}))),{shippingInfo:i,proceedToPayment:function(){e.dispatch("order/setShippingInfo",i),o.push("/payment")},authUser:d,token:s}}},I={class:"x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[50px] px-4 lg:px-0"},U={class:"w-full"},j={class:"w-full mx-auto py-10 lg:py-20 lg:px-10 px-6 rounded-md lg:rounded-none bg-white mt-4 lg:mt-0"},V={class:"max-w-[700px] mx-auto"},P=p("div",{class:""},[p("h2",{class:"capitalize font-bold text-[32px] text-gray-700"},"Shipping & Delivery information"),p("p",null,"Kindly fill the form below with your shipping/delivery information.")],-1),C={class:"w-full"},E={class:"grid grid-cols-1 gap-4 w-full mt-4"},F={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},S={class:"w-full"},T=p("label",{for:"firstName"},"Nom",-1),q={class:"w-full"},A=p("label",{for:"lastName"},"Prenom",-1),_={class:"w-full"},B=p("label",{for:"email"},"email",-1),D={class:"w-full"},H=p("label",{for:"phoneNumber"},"Telephone",-1),L={class:"w-full"},M=p("label",{for:"town"},"Ville",-1),z={class:"w-full"},G=p("label",{for:"quater"},"Quartier",-1),K=p("label",{for:"address"},"Adresse",-1),Q={class:"pt-3"},R=p("label",{for:"shortNote"},"instruction utile",-1),J={class:"flex justify-between items-center pt-9"},O={class:"text-black hidden lg:flex gap-x-2"},W=p("span",{class:"block"},[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-move-left"},[p("path",{d:"M6 8L2 12L6 16"}),p("path",{d:"M2 12H22"})])],-1),X={class:"block"},Y=p("button",{type:"submit",class:"bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold"},"Continue to payment",-1);e("default",w(o,[["render",function(e,l,o,r,a,t){const n=i("Navbar"),v=i("NavCommand"),y=i("router-link"),w=i("Footer");return s(),d(h,null,[u(n),p("section",null,[p("div",I,[p("div",U,[u(v)]),p("div",j,[p("div",V,[P,p("form",{onSubmit:l[8]||(l[8]=c(((...e)=>r.proceedToPayment&&r.proceedToPayment(...e)),["prevent"]))},[p("div",C,[p("div",E,[p("div",F,[p("div",S,[T,f(p("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>r.shippingInfo.firstName=e),id:"field1",placeholder:"first name",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.firstName]])]),p("div",q,[A,f(p("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=e=>r.shippingInfo.lastName=e),id:"lastName",placeholder:"last name",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.lastName]])]),p("div",_,[B,f(p("input",{type:"email","onUpdate:modelValue":l[2]||(l[2]=e=>r.shippingInfo.email=e),id:"email",placeholder:"deballage237@gmail.com",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.email]])]),p("div",D,[H,f(p("input",{type:"tel","onUpdate:modelValue":l[3]||(l[3]=e=>r.shippingInfo.phone=e),id:"phoneNumber",placeholder:"697245689",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.phone]])]),p("div",L,[M,f(p("input",{type:"text",id:"town","onUpdate:modelValue":l[4]||(l[4]=e=>r.shippingInfo.city=e),placeholder:"Entrer votre ville",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.city]])]),p("div",z,[G,f(p("input",{type:"text",id:"quater","onUpdate:modelValue":l[5]||(l[5]=e=>r.shippingInfo.neighborhood=e),placeholder:"Entrer votre quartier",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.neighborhood]])])]),p("div",null,[p("div",null,[K,f(p("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=e=>r.shippingInfo.address=e),id:"address",placeholder:"Ex:Pk17,intrancegendamerie appt 789",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.address]])]),p("div",Q,[R,f(p("textarea",{id:"field8","onUpdate:modelValue":l[7]||(l[7]=e=>r.shippingInfo.description=e),placeholder:"Ex:plus de details sur le lieu de livraison, Ex:s'il vous plait ne pas livrer apres 20h",class:"border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"},null,512),[[m,r.shippingInfo.description]])])])]),p("div",J,[p("button",O,[W,p("span",X,[u(y,{to:"/cart"},{default:g((()=>[b("Return to cart")])),_:1})])]),Y])])],32)])])])]),u(w)],64)}]]))}}}))}();