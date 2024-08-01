!function(){function e(e,a,r,t,l,o,s){try{var n=e[o](s),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(t,l)}function a(a){return function(){var r=this,t=arguments;return new Promise((function(l,o){var s=a.apply(r,t);function n(a){e(s,l,o,n,i,"next",a)}function i(a){e(s,l,o,n,i,"throw",a)}n(void 0)}))}}System.register(["./@vue-legacy-D-aloMXM.js","./vuex-legacy-DSIE0isM.js","./vue-router-legacy-W-7WOOXA.js","./index-legacy-BotjqDLp.js","./sweetalert2-legacy-Dmjdgd9K.js","./GreetingUser-legacy-Bjan3sdG.js","./vue3-toastify-legacy-CkTXNXHT.js","./axios-legacy-aKSqV1Sc.js","./vee-validate-legacy-DreMxtEy.js","./@vee-validate-legacy-BuGAX7n2.js"],(function(e,r){"use strict";var t,l,o,s,n,i,d,p,u,c,m,f,g,x,y,b,v,h,w,U,N,k,P,j,_;return{setters:[e=>{t=e.c,l=e.f,o=e.o,s=e.E,n=e.G,i=e.I,d=e.q,p=e.J,u=e.K,c=e.L,m=e.Q,f=e.P,g=e.M,x=e.N,y=e.T,b=e.X,v=e.S},e=>{h=e.u},e=>{w=e.u},e=>{U=e._,N=e.d,k=e.L,P=e.T,j=e.t},null,e=>{_=e.G},null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".table-container{width:100%;max-height:400px;overflow-x:auto}.table-fixed{table-layout:fixed}\n",document.head.appendChild(r);const E={components:{Navbar:N,Loader:k,TopNavbar:P,GreetingUser:_},setup(){w();const e=h(),r=e.getters["getImagePaths/getPath"],s=t((()=>e.getters["auth/user"])),n=l(""),i=l(""),d=l(""),p=l(""),u=l(""),c=l(""),m=l(""),f=l(""),g=l(""),x=l({}),y=function(){var r=a((function*(){x.value={},e.dispatch("loader/setLoading",!0);try{const a=new FormData;a.append("id",s.value.id),a.append("firstName",n.value),a.append("lastName",i.value),a.append("email",u.value),a.append("gender",f.value),a.append("phone",c.value),d.value&&(a.append("password",d.value),a.append("password_confirmation",p.value)),m.value&&a.append("profile",m.value),yield e.dispatch("users/updateUser",a),j.success(),g.value="",yield e.dispatch("auth/fetchUser")}catch(a){x.value=a}finally{e.dispatch("loader/setLoading",!1)}}));return function(){return r.apply(this,arguments)}}();return o(a((function*(){e.dispatch("loader/setLoading",!0);try{yield e.dispatch("auth/fetchUser"),n.value=s.value.firstName,i.value=s.value.lastName,u.value=s.value.email,c.value=s.value.phone,f.value=s.value.gender,g.value=r+s.value.profile}catch(a){console.log(a)}finally{e.dispatch("loader/setLoading",!1)}}))),{truncateText:(e,a)=>e.length<=a?e:e.substring(0,a)+"...",authUser:s,firstName:n,lastName:i,password:d,password_confirmation:p,email:u,phone:c,gender:f,imageUrlProfile:g,onFileChangeProfile:e=>{const a=e.target.files;if(a.length>0){m.value=a[0];const e=new FileReader;e.onload=e=>{g.value=e.target.result},e.readAsDataURL(m.value)}},errors:x,updateUser:y}}},L={class:"flex"},C={class:"flex flex-col w-ful lg:px-0 lg:w-[80%]"},F={class:"w-full dash-content"},z={class:"py-5 px-6 lg:px-[25px]"},G={class:"flex justify-between items-center"},M={class:""},V=p("span",{class:"text-gray-600 text-base"},"Gérez votre compte d'acheteur personnalisé ici",-1),S={class:"pt-6 lg:pt-16 w-full px-5"},T={class:"flex w-full flex-col lg:flex-row gap-8 items-start"},D=p("div",{class:"w-[80px] lg:w-[220px] h-[80px] lg:h-[180px] rounded-full flex justify-center items-center bg-gray-200"},[p("img",{class:"w-[40px] lg:w-[80px]",src:"/images/svgs/icon_user.svg",alt:"avatar icon for a user"})],-1),I={class:"w-full"},A={class:"font-bold"},R=p("span",{class:"ml-3 inline-block p-1 rounded-sm text-[10px] font-medium bg-red-100 text-red-800"},"Premium user",-1),q={class:"space-y-2 mt-3"},B={class:"flex items-center gap-2 text-gray-700"},H=p("i",{class:"fa fa-phone","aria-hidden":"true"},null,-1),J={class:"font-light"},K={class:"flex items-center gap-2 text-gray-700"},Q=p("i",{class:"fa fa-envelope","aria-hidden":"true"},null,-1),W={class:"font-light"},X=v('<div class="flex flex-col w-full lg:flex-row gap-6 mt-6 text-center lg:w-[50%]"><div class="p-2 w-full border-[1px] rounded"><span class="font-light text-gray-600">Solde du portefeuille</span><span class="mt-2 block text-[16px] font-bold text-gray-800">0 FCFA</span></div><div class="p-2 w-full border-[1px] rounded"><span class="font-light text-gray-600">Commandes</span><span class="mt-2 block text-[16px] font-bold text-gray-800">0</span></div><div class="p-2 w-full border-[1px] rounded"><span class="block font-light text-gray-600">Livré</span><span class="text-[16px] font-bold text-gray-800 mt-2">0</span></div></div>',1),O={class:"mt-10"},Y=p("div",{class:"flex justify-between items-center"},[p("h3",{class:"text-[20px] font-bold text-gray-800"},"Détails du profil")],-1),Z={class:"max-w-screen-lg mx-auto"},$={class:"bg-white p-4 rounded shadow"},ee=p("h2",{class:"text-lg font-semibold mb-4"},"Editer le profil",-1),ae={class:"mb-4"},re=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"productName"},"Modifiez votre nom",-1),te={key:0,class:"text-red-500 m-1"},le={class:"mb-4"},oe=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"productPrenom"},"Modifiez votre prenom",-1),se={key:0,class:"text-red-500 m-1"},ne={class:"mb-4"},ie=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"phone"},"Modifiez votre numéro de téléphone",-1),de={key:0,class:"text-red-500 m-1"},pe={class:"mb-4"},ue=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"email"},"Modifiez votre email",-1),ce={key:0,class:"text-red-500 m-1"},me={class:"mb-4"},fe=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"password"},"Modifiez votre mot de passe",-1),ge={key:0,class:"text-red-500 m-1"},xe={class:"mb-4"},ye=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"password_confirmation"},"mot de passe de confirmation",-1),be={key:0,class:"text-red-500 m-1"},ve={class:"mb-4"},he=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"gender"},"Genre",-1),we=[p("option",{value:"M"},"Homme",-1),p("option",{value:"W"},"Femme",-1)],Ue={key:0,class:"text-red-500 m-1"},Ne={class:"mb-4"},ke=p("label",{class:"block text-gray-600 text-[16px] font-medium mb-2",for:"imageUrlProfile"},"Téléchargez une photo de profil.",-1),Pe=["src"],je={key:1,class:"text-red-500 m-1"},_e=p("div",null,[p("button",{type:"submit",class:"bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Sauvegarder les modifications")],-1);e("default",U(E,[["render",function(e,a,r,t,l,o){const v=s("Navbar"),h=s("TopNavbar"),w=s("Loader"),U=s("GreetingUser");return n(),i("main",L,[d(v),p("section",C,[p("div",F,[d(h),d(w),p("div",z,[p("div",G,[p("div",M,[d(U,null,{greeting:u((()=>[c("Bonne journée, "+m(t.authUser.firstName)+" "+m(t.authUser.lastName),1)])),_:1}),V])]),p("div",S,[p("div",T,[D,p("div",I,[p("p",A,[c(m(t.authUser.firstName)+" "+m(t.authUser.lastName)+" ",1),R]),p("ul",q,[p("li",B,[H,p("span",J,m(t.authUser.phone),1)]),p("li",K,[Q,p("span",W,m(t.authUser.email),1)])]),X])]),p("div",O,[Y,p("div",Z,[p("div",$,[ee,p("form",{onSubmit:a[8]||(a[8]=f(((...e)=>t.updateUser&&t.updateUser(...e)),["prevent"])),enctype:"multipart/form-data"},[p("div",ae,[re,g(p("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.firstName=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"productName",type:"text",placeholder:"Enter your  first name"},null,512),[[x,t.firstName]]),t.errors.firstName?(n(),i("span",te,m(t.errors.firstName[0]),1)):y("",!0)]),p("div",le,[oe,g(p("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>t.lastName=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"productPrenom",type:"text",placeholder:"Enter your  last name"},null,512),[[x,t.lastName]]),t.errors.lastName?(n(),i("span",se,m(t.errors.lastName[0]),1)):y("",!0)]),p("div",ne,[ie,g(p("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>t.phone=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"phone",type:"number",placeholder:"Enter your number"},null,512),[[x,t.phone]]),t.errors.phone?(n(),i("span",de,m(t.errors.phone[0]),1)):y("",!0)]),p("div",pe,[ue,g(p("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>t.email=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"email",type:"email",placeholder:"Enter your email"},null,512),[[x,t.email]]),t.errors.email?(n(),i("span",ce,m(t.errors.email[0]),1)):y("",!0)]),p("div",me,[fe,g(p("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>t.password=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"password",type:"password",placeholder:"Enter your email"},null,512),[[x,t.password]]),t.errors.password?(n(),i("span",ge,m(t.errors.password[0]),1)):y("",!0)]),p("div",xe,[ye,g(p("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>t.password_confirmation=e),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"password_confirmation",type:"password",placeholder:"Enter your email"},null,512),[[x,t.password_confirmation]]),t.errors.password_confirmation?(n(),i("span",be,m(t.errors.password_confirmation[0]),1)):y("",!0)]),p("div",ve,[he,g(p("select",{class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline","onUpdate:modelValue":a[6]||(a[6]=e=>t.gender=e),id:"gender"},we,512),[[b,t.gender]]),t.errors.gender?(n(),i("span",Ue,m(t.errors.gender[0]),1)):y("",!0)]),p("div",Ne,[ke,p("input",{onChange:a[7]||(a[7]=(...e)=>t.onFileChangeProfile&&t.onFileChangeProfile(...e)),class:"border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline",id:"imageUrlProfile",type:"file",placeholder:"Enter your profile image"},null,32),t.imageUrlProfile?(n(),i("img",{key:0,src:t.imageUrlProfile,alt:"Selected Image",class:"mt-2",width:"50",height:"50"},null,8,Pe)):y("",!0),t.errors.profile?(n(),i("span",je,m(t.errors.profile[0]),1)):y("",!0)]),_e],32)])])])])])])])])}]]))}}}))}();