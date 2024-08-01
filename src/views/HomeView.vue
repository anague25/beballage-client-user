<template>
    <div>
        <header>
            <Navbar></Navbar>
            <Hero v-if="isHomePage" />
        </header>
        <main>
            <!-- Section categories -->
            <section class="px-4 lg:px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2">
                    <div v-if="firstProducts?.length > 0" class="arrivals bg-white p-3 rounded-md text-red">

                        <div class="flex items-center gap-x-2">
                            <span
                                class="w-[32px] rounded-full h-[32px] flex justify-center items-center bg-gray-200"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48">
                                    <defs>
                                        <mask id="ipTGreenNewEnergy0">
                                            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="4">
                                                <path
                                                    d="M42.336 16C39.249 8.936 32.2 4 24 4C15.799 4 8.75 8.936 5.664 16">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M24 14a19.94 19.94 0 0 0-6 14.283c0 .5.018.996.055 1.488A19.938 19.938 0 0 1 24 44a19.938 19.938 0 0 1 5.945-14.23A19.94 19.94 0 0 0 24 14">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M4 24c0 11.046 8.954 20 20 20a19.938 19.938 0 0 0-5.945-14.23A19.936 19.936 0 0 0 4 24">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M44 24c0 11.046-8.954 20-20 20a19.938 19.938 0 0 1 5.945-14.23A19.936 19.936 0 0 1 44 24">
                                                </path>
                                            </g>
                                        </mask>
                                    </defs>
                                    <path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipTGreenNewEnergy0)"></path>
                                </svg></span>
                            <p class="font-bold">Nouveaux arrivant</p>
                        </div>
                        <div class="flex lg:flex-nowrap pt-4 gap-x-2">
                            <div v-for="product in firstProducts.slice(0, 3)"
                                class="flex flex-col items-center w-[33.3%] ">
                                <router-link :to="'/product-details/' + product.id"
                                    class="block w-full lg:w-[100%]  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        :src="path + product.image" class="w-full h-full object-cover object-center"
                                        alt="black hoodie"></router-link>
                                <span class="">
                                    <!-- <p class="text-center">Other</p> -->
                                    <h6 class="font-semibold">{{ product.price }} FCFA</h6>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div v-else class="arrivals bg-white p-3 rounded-md text-red">
                        <div class="flex items-center gap-x-2">
                            <span
                                class="w-[32px] rounded-full h-[32px] flex justify-center items-center bg-gray-200"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48">
                                    <defs>
                                        <mask id="ipTGreenNewEnergy0">
                                            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="4">
                                                <path
                                                    d="M42.336 16C39.249 8.936 32.2 4 24 4C15.799 4 8.75 8.936 5.664 16">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M24 14a19.94 19.94 0 0 0-6 14.283c0 .5.018.996.055 1.488A19.938 19.938 0 0 1 24 44a19.938 19.938 0 0 1 5.945-14.23A19.94 19.94 0 0 0 24 14">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M4 24c0 11.046 8.954 20 20 20a19.938 19.938 0 0 0-5.945-14.23A19.936 19.936 0 0 0 4 24">
                                                </path>
                                                <path fill="#dc2626"
                                                    d="M44 24c0 11.046-8.954 20-20 20a19.938 19.938 0 0 1 5.945-14.23A19.936 19.936 0 0 1 44 24">
                                                </path>
                                            </g>
                                        </mask>
                                    </defs>
                                    <path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipTGreenNewEnergy0)"></path>
                                </svg></span>
                            <p class="font-bold">Nouveaux arrivant</p>
                        </div>
                        <div class="flex lg:flex-nowrap pt-4 gap-x-2">
                            <div class="flex flex-col items-center w-[33.3%] ">
                                <span class="block w-full lg:w-[100%]  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/black-hoodie.jpeg"
                                        class="w-full h-full object-cover object-center" alt="black hoodie"></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">1 000 FCFA</h6>
                                </span>
                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/beirge-tshirt.jpeg"
                                        class="w-full h-full object-cover object-center" alt="beirge tshirt"></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">3 000 FCFA</h6>
                                </span>
                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/black-shirts.jpeg"
                                        class="w-full h-full object-cover object-center" alt="black tshirt"></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">17 000 FCFA</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-if="secondProducts?.length > 0" class="arrivals bg-white p-3 rounded-md">
                        <div class="flex items-center gap-x-2">
                            <span class="flex justify-center items-center w-[32px] rounded-full h-[32px] bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1200 1200">
                                    <path fill="#de4437"
                                        d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z">
                                    </path>
                                </svg>
                            </span>
                            <p class="font-bold">Offres du jours</p>
                        </div>
                        <div class="flex lg:flex-nowrap gap-x-2 pt-4">
                            <div v-for="product in secondProducts.slice(0, 3)"
                                class="flex flex-col items-center w-[33.3%]">
                                <router-link :to="'/product-details/' + product.id"> <span
                                        class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                            :src="path + product.image"
                                            class=" w-full h-full object-cover object-center"
                                            alt="image of short collection"></span>
                                    <span class="">
                                        <!-- <p class="text-center">Other</p> -->
                                        <h6 class="font-semibold">{{ product.price }} FCFA</h6>
                                    </span></router-link>

                            </div>
                        </div>
                    </div>
                    <div v-else class="arrivals bg-white p-3 rounded-md">
                        <div class="flex items-center gap-x-2">
                            <span class="flex justify-center items-center w-[32px] rounded-full h-[32px] bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1200 1200">
                                    <path fill="#de4437"
                                        d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z">
                                    </path>
                                </svg>
                            </span>
                            <p class="font-bold">Offres du jours</p>
                        </div>
                        <div class="flex lg:flex-nowrap gap-x-2 pt-4">
                            <div class="flex flex-col items-center w-[33.3%]">
                                <a href="#"> <span
                                        class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                            src="/images/jpgs/short-collection.jpeg"
                                            class=" w-full h-full object-cover object-center"
                                            alt="image of short collection"></span>
                                    <span class="">
                                        <p class="text-center">Other</p>
                                        <h6 class="font-semibold">1 000 FCFA</h6>
                                    </span></a>

                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/short-green.jpeg"
                                        class="w-full h-full object-cover object-center"
                                        alt="imaga of short collection"></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">3 000 FCFA</h6>
                                </span>
                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/boy-with-short-and-shirt.jpeg"
                                        class=" w-full h-full object-cover object-center" alt=""></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">17 000 FCFA</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-if="thirdProducts?.length > 0" class="arrivals bg-white p-3 rounded-md">
                        <div class="flex items-center gap-x-2">
                            <span class="flex justify-center items-center w-[32px] rounded-full h-[32px] bg-gray-200"><i
                                    class="fal fa-tags" style="color: #de4545;"></i></span>
                            <p class="font-bold">Produits ci-dessous </p>
                        </div>
                        <div class="flex lg:flex-nowrap pt-4 gap-x-2">
                            <router-link v-for="product in thirdProducts.slice(0, 3)"
                                :to="'/product-details/' + product.id" class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        :src="path + product.image" class=" w-full h-full object-cover object-center"
                                        alt=""></span>
                                <span class="">
                                    <!-- <p class="text-center">Other</p> -->
                                    <h6 class="font-semibold">{{ product.price }} FCFA</h6>
                                </span>
                            </router-link>
                        </div>
                    </div>
                    <div v-else class="arrivals bg-white p-3 rounded-md">
                        <div class="flex items-center gap-x-2">
                            <span class="flex justify-center items-center w-[32px] rounded-full h-[32px] bg-gray-200"><i
                                    class="fal fa-tags" style="color: #de4545;"></i></span>
                            <p class="font-bold">Produits ci-dessous </p>
                        </div>
                        <div class="flex lg:flex-nowrap pt-4 gap-x-2">
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/hoodie-brown.jpeg"
                                        class=" w-full h-full object-cover object-center" alt=""></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">1 000 FCFA</h6>
                                </span>
                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        src="/images/jpgs/hoodie-three-colors.jpeg" alt=""
                                        class="w-full h-full object-cover object-center"></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">3 000 FCFA</h6>
                                </span>
                            </div>
                            <div class="flex flex-col items-center w-[33.3%]">
                                <span class="inline-block w-full lg:w-full  2xl:w-[148px] h-[210px] bg-gray-200"><img
                                        class=" w-full h-full object-cover object-center"
                                        src="/images/jpgs/men-hoodie-blue-white.jpeg" alt=""></span>
                                <span class="">
                                    <p class="text-center">Other</p>
                                    <h6 class="font-semibold">17 000 FCFA</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Categories section ends here -->

            <!-- Section categories principal -->
            <section v-if="parentCategories.length > 0" class="mt-4 px-4 lg:px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-md px-[16px] pb-4">
                    <div class="flex w-full items-center">
                        <h2 class="text-[20px] w-[50%] lg:w-[30%] font-bold py-4">PRINCIPALES CATÉGORIES CE MOIS-CI
                        </h2>
                        <span class="block bg-gray-300 h-[6px] w-[50%] lg:w-[70%] rounded-full"></span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-[22px]">
                        <div v-for="category in parentCategories.slice(0, 6)"
                            class="p-[28px] rounded hero-category flex">
                            <div class="img"><router-link :to="'/category-details/' + category.id"><img
                                        :src="path + category.image" alt=""
                                        style="height: 133px;width:101;"></router-link>
                            </div>
                            <div class="content ml-1">
                                <h4 class="font-bold pb-1"> <router-link :to="'/category-details/' + category.id">{{
                                    category.name }}</router-link> </h4>
                                <ul v-if="category.children?.length > 0" class="text-gray-600">
                                    <li v-for="subCat in category.children"> <router-link
                                            :to="'/category-details/' + subCat.id"> {{ truncateText(subCat.name, 18)
                                            }}</router-link></li>
                                </ul>
                                <ul v-else class="text-gray-600">
                                    <li>{{ truncateText(category.description, 18) }}</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section v-else class="mt-4 px-4 lg:px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-md px-[16px] pb-4">
                    <div class="flex w-full items-center">
                        <h2 class="text-[20px] w-[50%] lg:w-[30%] font-bold py-4">PRINCIPALES CATÉGORIES CE MOIS-CI</h2>
                        <span class="block bg-gray-300 h-[6px] w-[50%] lg:w-[70%] rounded-full"></span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-[22px]">
                        <div class="md:grid md:grid-cols-2 md:gap-3 lg:block">
                            <div class="p-[28px] rounded hero-category flex">
                                <div class="img"><img src="/images/pngs/ipad.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Smartphone & Tablets</h4>
                                    <ul class="text-gray-600">
                                        <li>Telephone Mobiles</li>
                                        <li>Tablets</li>
                                        <li>Mobile Phones Parts</li>
                                        <li>Deballage official stores</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="p-[28px] rounded hero-category flex mt-3">
                                <div class="img"><img src="/images/pngs/Beverages.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Bevrages</h4>
                                    <ul class=" text-gray-600">
                                        <li>Carbonated Soft Drinks</li>
                                        <li>Non-Carbonated Drinks</li>
                                        <li>Alcoholic Bevarages</li>
                                        <li>Other Beverages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-3 lg:block">
                            <div class="p-[28px] rounded hero-category flex">
                                <div class="img"><img src="/images/pngs/woman.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Woamn Fashion</h4>
                                    <ul class="text-gray-600">
                                        <li>Blouses & shirts</li>
                                        <li>Jackets * Coats</li>
                                        <li>Wedding & Events</li>
                                        <li>Underwear & Sleepwears</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="p-[28px] rounded hero-category flex mt-3">
                                <div class="img"><img src="/images/pngs/laptop.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Consumer Electronics</h4>
                                    <ul class=" text-gray-600">
                                        <li>Camera, Photo & Accessories</li>
                                        <li>Chargers, Batteries</li>
                                        <li>Computer, Hardwares & Softwares</li>
                                        <li>Earphones & Headphones</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-3 lg:block">
                            <div class="p-[28px] rounded hero-category flex">
                                <div class="img"><img src="/images/pngs/dress.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Men's Fashion</h4>
                                    <ul class="text-gray-600">
                                        <li>Coats & Jackets</li>
                                        <li>Hoodies & Sweartshirts</li>
                                        <li>Suits & Blazers</li>
                                        <li>Tops & Tees Collection</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="p-[28px] rounded hero-category flex mt-3">
                                <div class="img"><img src="/images/pngs/Beverages.png" alt=""></div>
                                <div class="content">
                                    <h4 class="font-bold pb-1">Smartphone & Tablets</h4>
                                    <ul class=" text-gray-600">
                                        <li>Telephone Mobiles</li>
                                        <li>Tablets</li>
                                        <li>Mobile Phones Parts</li>
                                        <li>Deballage official stores</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section categorie -->

            <!-- Section Offres du jour -->
            <section v-if="products.length > 0" class="mt-4 lg:my-4 px-4 lg:px-4">

                <div class="2xl:max-w-[1480px] mx-auto px-[16px] pb-4 bg-white rounded-md">
                    <div class="flex items-center">
                        <h2 class="text-[20px] w-[40%] lg:w-[15%] font-bold py-4 uppercase">Offres du jour</h2>
                        <span class="block bg-gray-300 h-[6px] w-[60%] lg:w-[90%] rounded-full"></span>
                    </div>
                    <div
                        class="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-y-3 lg:flex lg:flex-row items-center gap-x-[10px]">
                        <router-link v-for="product in products.slice(0, 6)" :to="'/product-details/' + product.id"
                            class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img :src="path + product.image" alt="" style="width: 201px; height: 201px"></span>
                            <div class="">
                                <p class=" text-gray-500">{{product.name}}</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">{{ product.description }}
                                </p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity }}
                                        Qte</small>
                                    <!-- <span class="font-bold inline-block text-[14px] text-gray-600">Other</span> -->
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">{{ product.price }} FCFA</span>
                                    <!-- <span class="text-[12px] font-bold line-through">100 000 FCFA</span> -->
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">{{ product.category?.name
                                        }}</span>
                                    <!-- <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span> -->
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </section>
            <section v-else class="mt-4 lg:my-4 px-4 lg:px-4">
                <div class="2xl:max-w-[1480px] mx-auto px-[16px] pb-4 bg-white rounded-md">
                    <div class="flex items-center">
                        <h2 class="text-[20px] w-[40%] lg:w-[15%] font-bold py-4 uppercase">Offres du jour</h2>
                        <span class="block bg-gray-300 h-[6px] w-[60%] lg:w-[90%] rounded-full"></span>
                    </div>
                    <div
                        class="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-y-3 lg:flex lg:flex-row items-center gap-x-[10px]">
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/jacket.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center  justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Mechanic Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/earpiece.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Mechanic Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/watch.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Mechanic Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/modem.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Mechanic Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/multimedia.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between  gap-x-2">
                                    <span class="block font-bold text-[14px]">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500"> Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/multimedia.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SEction offres du jours ends here -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->
            <!--===================================================================================================================================== -->

            <section class="my-[20px] px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-[10.5px]">
                    <div
                        class="py-[42.57px] px-8 lg:px-[90px] flex flex-col md:flex-row lg:justify-between items-center">
                        <div class="md:w-[60%]">
                            <h2 class="text-[20px] lg:text-[38.5px] font-bold text-[#333333] w-full lg:w-[569px]">
                                Créez Votre Boutique sur Déballage !
                            </h2>
                            <p class="text-[14px] font-thin lg:font-normal text-gray-500 w-full lg:w-[569px]">
                                Déballage est la plateforme idéale pour vendre vos produits uniques. Créez votre
                                boutique en ligne dès aujourd'hui et atteignez des milliers de clients dès maintenant!
                                Avec notre interface conviviale et nos outils de gestion avancés, vous pouvez commencer
                                à vendre rapidement et efficacement. Profitez de notre support clientèle dédié pour
                                optimiser votre expérience de vente en ligne.</p>

                            <router-link to="/create-shop"
                                class="inline-block mt-8 rounded-full py-[10px]  px-[32.23px] bg-red-700 text-white">Devenir
                                Vendeur</router-link>
                        </div>

                        <div class="">
                            <img width="600" src="/images/pngs/cta-img 1.png" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section recmondez pour vous -->
            <section class="px-4 lg:px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto">
                    <h2 class="text-[20px] font-bold py-4">RECOMMANDÉ POUR VOUS</h2>
                    <div v-if="searchResults.length > 0 || products.length > 0"
                        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">


                        <router-link v-if="searchResults.length > 0" :to="'/product-details/' + product.id"
                            v-for="product in searchResults" :key="'search_' + product.id"
                            class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img :src="path + product.image" alt=""
                                    style="width: 201px; height: 201px"></span>
                            <div class="">
                                <p class=" text-gray-500">{{ product.name }}</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">
                                    {{ product.description }}</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity }}
                                        Qte</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600"></span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">{{ product.price }}</span>
                                    <span class="text-[12px] font-bold line-through"></span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                        }}</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-0 text-red-500"></span>
                                </div>
                            </div>
                        </router-link>
                        <router-link v-else :to="'/product-details/' + product.id" v-for="product in products"
                            :key="product.id" class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img :src="path + product.image" alt=""
                                    style="width: 201px; height: 201px"></span>
                            <div class="">
                                <p class=" text-gray-500">{{ product.name }}</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">
                                    {{ product.description }}</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity }}
                                        Qte</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600"></span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">{{ product.price }}</span>
                                    <span class="text-[12px] font-bold line-through"></span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                        }}</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-0 text-red-500"></span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div v-else
                        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/paradon-3.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/paradon.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/paradon-2.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/phone-inifiniz.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center gap-x-2">
                                    <span class="block text-[14px] justify-between font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/pop5.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/phone-1.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/phone-big.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/phone 6000.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/hot2.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/Link.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-[11.86px] rounded-md shadow-md bg-white">
                            <span class="block"><img src="/images/pngs/samsung.png" alt=""></span>
                            <div class="">
                                <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                    Formaluated
                                    suites</p>
                                <div class="flex justify-between items-center py-1">
                                    <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                    <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                </div>
                                <div class="flex items-center justify-between gap-x-2">
                                    <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                    <span class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                        off</span>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div class="">
                        <button class="my-2 bg-green-700 text-white inline-block rounded-full py-2 px-2"
                            v-if="isMoreProducts && !isLoading" @click="loadMore">Charger plus</button>
                        <p class="my-3 bg-red-700 text-white inline-block rounded-full py-2 px-2"
                            v-if="!isMoreProducts && !isLoading">Il n'y a plus d'éléments.</p>
                        <p class="bg-green-700 text-white inline-block rounded-full py-2 px-2" v-if="isLoading">
                            Chargement...</p>
                    </div>
                </div>
            </section>

            <!-- Section produit par marque -->
            <section class="px-4 lg:px-4 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto bg-white p-[7px] my-[28px] rounded-md">
                    <div class="flex items-center">
                        <h2 class="text-[20px] w-[50%] lg:w-[35%] font-bold py-4 uppercase">TROUVER DES PRODUITS PAR
                            MARQUE</h2>
                        <span class="block bg-gray-300 h-[6px] w-[50%] lg:w-[90%] rounded-full"></span>
                    </div>
                    <div class="px">
                        <ul class="grid grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2">
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/samsung copy.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/tecno.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/oppo.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/infinix.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/nivea.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/apc.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/xiaomi.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/pr.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/oraimo.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/huawei.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/remax.png" alt=""></a></li>
                            <li class="px-[14px] border-[1px] border-slate-500"><a href=""><img
                                        src="/images/pngs/hisense.png" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Section blog -->
            <section class="bg-white px-4 lg:px-6 2xl:px-0">
                <div class="2xl:max-w-[1480px] mx-auto">
                    <h2 class="text-[20px] font-bold pt-4 pb-2">NOS SERVICES COMMERCIAUX SONT LÀ POUR VOUS</h2>
                    <p class="text-[14px] text-gray-400 font-thin">Les services commerciaux d'deballage.com aident à
                        garantir la protection de vos achats.</p>

                    <div
                        class="py-6 flex flex-col md:grid md:grid-cols-2 gap-y-3 lg:gap-y-0 lg:flex lg:flex-row gap-x-3">
                        <div class="rounded-md shadow-md py-2">
                            <div class="img w-full"><img class="w-full" src="/images/jpgs/deballage1.jpg" alt=""></div>
                            <div class="content px-3 py-3">
                                <h4 class="w-[247px] text-black font-bold">Diversifiez vos Fournisseurs : Un Coup de
                                    Boost pour Vos Ventes !
                                </h4>
                                <p class="w-[300px] text-[16px] text-gray-700 font-thin"><em
                                        class="text-black font-bold">Diversifiez Vos Fournisseurs :</em> Dépendre d'un
                                    seul fournisseur pose des risques de retards, problèmes de qualité et ruptures de
                                    stock. Deballage offre plusieurs fournisseurs, réduisant ces risques et augmentant
                                    flexibilité et compétitivité.</p>
                                <router-link to="/create-shop"
                                    class="px-3 mt-3 inline-block py-1 rounded-full bg-red-300 text-[#333333] font-bold">Devenir
                                    Vendeur</router-link>
                            </div>
                        </div>
                        <div class="rounded-md shadow-md">
                            <div class="img w-full"><img class="w-full" src="/images/jpgs/deballage2.jpg" alt=""></div>
                            <div class="content py-3 px-3">
                                <h4 class="w-[247px] text-black font-bold">Comment Vous Perdez des Clients Sans le
                                    Savoir‼
                                </h4>
                                <p class="w-[300px] text-[16px] text-gray-700 font-thin"> <em
                                        class="text-black font-bold">Choisir le Bon Emplacement :</em> Vendre au mauvais
                                    endroit peut nuire à votre entreprise en limitant la visibilité et les opportunités.
                                    Ajustez votre stratégie marketing pour atteindre efficacement votre public cible et
                                    optimiser vos résultats.</p>
                                <router-link to="/create-shop"
                                    class="px-3 mt-3 inline-block py-1 rounded-full bg-red-300 text-[#333333] font-bold">Devenir
                                    Vendeur</router-link>
                            </div>
                        </div>
                        <div class="rounded-md shadow-md">
                            <div class="img w-full"><img class="w-full" src="/images/jpgs/deballage3.jpg" alt=""></div>
                            <div class="content p-3">
                                <h4 class="w-[247px] text-black font-bold">TU ES UN VENDEUR</h4>
                                <p class="w-[300px] text-[16px] text-gray-700 font-thin "> <em
                                        class="text-black font-bold">Découvrez Deballage :</em> Votre allié pour booster
                                    vos ventes en ligne au Cameroun, bénéficiez d'une visibilité accrue, de puissants
                                    outils et de conseils stratégiques en marketing digital pour maximiser votre succès
                                    commercial.</p>
                                <router-link to="/create-shop"
                                    class="px-3 mt-3 inline-block py-1 rounded-full bg-red-300 text-[#333333] font-bold">Devenir
                                    Vendeur</router-link>

                            </div>
                        </div>
                        <div class="rounded-md shadow-md">
                            <div class="img w-full"><img class="w-full" src="/images/jpgs/deballage4.jpg" alt=""></div>
                            <div class="content p-3">
                                <h4 class="w-[247px] text-black font-bold">🛍 Pourquoi avoir une boutique sur Deballage?
                                    🛍</h4>
                                <p class="w-[300px] text-[16px] text-gray-700 font-thin"><em
                                        class="text-black font-bold">Vendez sur Deballage :</em>
                                    augmentez votre visibilité, profitez d'une plateforme facile à utiliser et
                                    sécurisée, et soutenez l'économie locale avec nos outils de marketing.</p>
                                <router-link to="/create-shop"
                                    class="px-3 mt-3 inline-block py-1 rounded-full bg-red-300 text-[#333333] font-bold">Devenir
                                    Vendeur</router-link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>

</template>


<script>
import Navbar from '@/components/home/Navbar.vue';
import Hero from '@/components/home/Hero.vue';
import Footer from '@/components/home/Footer.vue';
import {
    useRoute
} from 'vue-router';
import {
    computed,
    onMounted, ref, watch
} from 'vue';
import {
    useStore
} from 'vuex';
import { app } from '@/assets/js/app.js'

export default {
    components: {
        Navbar,
        Hero,
        Footer,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const isHomePage = computed(() => route.name === 'Home');
        const products = computed(() => store.getters['products/allProducts']);
        const isMoreProducts = computed(() => store.getters['products/isMoreProducts']);
        const isLoading = computed(() => store.getters['products/isLoading']);
        const path = store.getters['getImagePaths/getPath'];
        const recentProducts = computed(() => store.getters['products/recentProducts']);
        const searchResults = computed(() => store.getters['products/searchResults']);
        const parentCategories = computed(() => store.getters['categories/parentCategories']);
        const firstProducts = computed(() => parentCategories.value[0]?.products);
        const secondProducts = computed(() => parentCategories.value[1]?.products);
        const thirdProducts = computed(() => parentCategories.value[2]?.products);




        const loadMore = () => {
            store.dispatch('products/fetchProducts');
        };


        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };


        // secondProducts.value = parentCategories.value[1]?.products;
        // thirdProducts.value = parentCategories.value[2]?.products;

        watch(firstProducts, (newval, oldval) => {
            console.log(newval);
        });

        onMounted(() => {
            store.dispatch('products/fetchProducts');
            store.dispatch('products/fetchAllProductsWithoutPaginate');
            store.dispatch('categories/fetchAllCategories');
            app();
        });

        return {
            products,
            isMoreProducts,
            isLoading,
            loadMore,
            isHomePage,
            path,
            recentProducts,
            searchResults,
            parentCategories,
            firstProducts,
            secondProducts,
            thirdProducts,
            truncateText



        };
    }

}
</script>



<style></style>
