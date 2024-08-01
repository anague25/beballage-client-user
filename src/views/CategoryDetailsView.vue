<template>
    <main>
        <Navbar></Navbar>
        <Loader></Loader>
        <div class="hero px-4 2xl:p-0 2xl:mt-7 lg:mt-0 py-7 2xl:max-w-[1480px] mx-auto lg:flex lg:gap-x-3 h-full">
            <div v-if="category?.id" class="bg-white px-4 py-5 rounded-[6px] lg:w-[20%]">
                <h2 class="text-[24px] font-bold lg:text-[28px]">{{ category.name }}</h2>
                <ul v-if="category.children.length > 0" class="flex lg:flex-col mt-5 items-center lg:items-start justify-center lg:justify-normal
                    text-center gap-x-4">
                    <li v-for="subCat in category.children.slice(0, 4)"
                        class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <router-link :to="'/category-details/' + subCat.id"
                            class="text-[10px] font-bold lg:text-[16px]">{{ subCat.name }}</router-link>
                    </li>

                </ul>
                <ul v-else
                    class="flex lg:flex-col mt-5 items-center lg:items-start  justify-center lg:justify-normal text-center gap-x-4">
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Short Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Long Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Hoodies Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] lg:text-[16px] capitalize font-bold">official stores</a>
                    </li>
                </ul>
            </div>
            <div v-else class="bg-white px-4 py-5 rounded-[6px] lg:w-[20%]">
                <h2 class="text-[24px] font-bold lg:text-[28px]">T-shirts</h2>
                <ul
                    class="flex lg:flex-col mt-5 items-center lg:items-start  justify-center lg:justify-normal text-center gap-x-4">
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Short Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Long Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center lg:mb-6">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] font-bold lg:text-[16px]">Hoodies Sleeve</a>
                    </li>
                    <li class="flex items-center flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center">
                        <span class="w-[60px] h-[60px] rounded-full bg-gray-400"></span>
                        <a href="#" class="text-[10px] lg:text-[16px] capitalize font-bold">official stores</a>
                    </li>
                </ul>
            </div>
            <div class="mt-4 lg:mt-0 lg:w-[55%]">
                <div v-if="category?.id" class="bg-white w-full  rounded-[6px] overflow-hidden h-full lg:h-[350px]">
                    <img class="lg:hidden w-full" :src="path + category.image" alt="">
                    <img class="object-cover w-full hidden lg:block h-full " :src="path + category.image" alt="">
                </div>
                <div v-else class="bg-white w-full  rounded-[6px] overflow-hidden h-full lg:h-[350px]">
                    <img class="lg:hidden w-full" src="/images/pngs/mobile-responsive..png" alt="">
                    <img class="object-cover hidden lg:block h-full " src="/images/pngs/desktop-responsive.jpg" alt="">
                </div>
                <div
                    class="py-[21px] bg-white rounded-[6.13px] flex md:flex-wrap md:grid md:grid-cols-3 xl:flex xl:flex-row flex-col gap-y-5 xl:items-center xl:justify-between mt-2">
                    <div class="px-4  lg:px-[15px] flex gap-x-2 items-center">
                        <span class="w-[25px]"><img class="w-full" width="200" src="/images/svgs/discount.svg"
                                alt=""></span>
                        <span>
                            <h5
                                class="text-[#333333] font-semibold text-[14px] text-ellipsis truncate w-full lg:w-[160px]">
                                Trouver des fournisseur</h5>
                            <p class="font-thin text-[14px]">Trouver des fournisseur</p>
                        </span>
                    </div>
                    <div
                        class="px-4  lg:px-[15px] lg:border-l-2border-none lg:border-r-2border-none border-gray-200 flex gap-x-2 items-center text-ellipsis">
                        <span class="w-[25px]"><img class="w-full" width="200" src="/images/svgs/logistic.svg"
                                alt=""></span>
                        <span>
                            <h5 class="text-[#333333] font-semibold text-[14px] truncate w-full lg:w-[160px]">Services
                                Logistiques</h5>
                            <p class="font-thin text-[14px] text-ellipsis w-full lg:w-[160px] truncate">Reliable
                                shipping across the globe</p>
                        </span>
                    </div>
                    <div class="px-4  lg:px-[15px] flex gap-x-2 items-center">
                        <span class="w-[25px]"><img class="w-full" width="200" src="/images/svgs/gem.svg" alt=""></span>
                        <span>
                            <h5 class="text-[#333333] font-semibold text-[14px] truncate w-full lg:w-[160px]">Avantages
                                du club des sapeur</h5>
                            <p class="font-thin text-[14px]">Decouvres plus de swag</p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bg-white px-4 py-6 mt-4 lg:mt-0 lg:w-[25%]  rounded-md">
                <h2 class="text-[20px] font-bold">Tendances des ventes</h2>
                <div v-if="products.length > 0"
                    class="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-2 lg:gap-y-3 xl:gap-y-5 mt-5">
                    <div v-for="product in products.slice(0, 6)" class="flex flex-col items-center w-full">
                        <router-link :to="'/product-details/' + product.id"
                            class="block  w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"><img
                                :src="path + product.image" alt=""
                                class="w-full lg:w-[100px] h-[80px] xl:h-[120px]"></router-link>

                        <span class="">
                            <h6 class="font-semibold">{{ product.price }} FCFA</h6>
                        </span>
                    </div>
                </div>
                <div v-else
                    class="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-2 lg:gap-y-3 xl:gap-y-5 mt-5">
                    <div class="flex flex-col items-center w-full">
                        <span class="block w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-300"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <span class="block  w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <span class="block  w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <span class="block w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <span class="block w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <span class="block  w-full lg:w-[100px] h-[80px] xl:h-[120px] bg-gray-200"></span>
                        <span class="">
                            <h6 class="font-semibold">10 000 FCFA</h6>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar and product category -->
        <section class="px-4 lg:px mt-0 lg:mt-9 mb-[40px] lg:px-0 relative">
            <div class="2xl:max-w-[1480px] px-0 2xl:p-0 mx-auto flex lg:flex-row flex-col mt-0 lg:mt-6">
                <aside class=" flex gap-x-2 lg:w-[20%]">
                    <div class="bg-white w-full px-5 py-4 rounded-[6px] sidebar hidden lg:block">
                        <h3 class="text-[22px] font-bold">Catégories de marché</h3>
                        <div class="mt-4 ">
                            <h4 class="text-[18px] font-bold"><router-link to="/categories">Toutes
                                    catégories</router-link></h4>
                            <ul v-if="category.children?.length > 0" class="mt-2 space-y-1">
                                <li v-for="cat in category.children"><router-link :to="'/category-details/' + cat.id">{{
                                    cat.name }}</router-link></li>

                            </ul>
                            <ul v-else class="mt-2 space-y-1">
                                <li><a href="#">Short Sleeve</a></li>
                                <li><a href="#">Short Sleeve</a></li>
                                <li><a href="#">Long Sleeves</a></li>
                                <li><a href="#">Sweaters</a></li>
                            </ul>
                        </div>
                        <div class="my-4" v-if="allAttributes.length > 0" v-for="attribute in allAttributes">
                            <h3 v-if="attribute.properties.length > 0" class="text-[16px] font-bold">Filtrer par
                                {{ attribute.name }}</h3>
                            <ul v-if="attribute.properties.length > 0" class="pl-2 mt-2">
                                <li v-for="property in attribute.properties" class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600"
                                            v-model="selectedProperties" :value="property.id">
                                        <span class="ml-2">{{ property.name }}</span>
                                    </label>
                                </li>

                                <!-- More color options... -->
                            </ul>
                        </div>
                        <div v-else class="my-4">
                            <h3 class="text-[16px] font-bold">Filtrer par Size</h3>
                            <ul class="pl-2 mt-2">
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">L</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">XL</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">XXL</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">BBW</span>
                                    </label>
                                </li>
                                <!-- More color options... -->
                            </ul>
                        </div>
                    </div>
                </aside>
                <div class=" prduct-list lg:w-[80%]">
                    <div
                        class="flex justify-between items-center py-3 px-4 bg-white shadow-lg rounded-md mt-4 lg:hidden mb-5">
                        <span class="inline-block font-bold">All Products</span>
                        <button class="inline-block toggle-button"><img width="30" src="/images/svgs/icon-filter.svg"
                                alt="icon of a filter"></button>
                    </div>

                    <div class="sidebar-container h-screen w-full">
                        <div class="bg-white lg:hidden px-5 py-7 rounded-[6px] block lg:w-[22%]">
                            <!-- Sidebar content goes here -->
                            <aside class=" flex flex-col gap-x-2 ">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-[20px] font-bold">Market place categories</h3>
                                    <img class="icon-close" src="/images/svgs/icon-close.svg" alt="">
                                </div>
                                <div class="mt-4 ">
                                    <h4 class="text-[18px] font-bold">All categories</h4>
                                    <ul class="mt-2 space-y-1">
                                        <li><a href="#">Short Sleeve</a></li>
                                        <li><a href="#">Short Sleeve</a></li>
                                        <li><a href="#">Long Sleeves</a></li>
                                        <li><a href="#">Sweaters</a></li>
                                    </ul>
                                </div>
                                <div class="my-4">
                                    <h3 class="text-[16px] font-bold">Filter by Color</h3>
                                    <ul class="pl-2 mt-2">
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">Red</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">Blue</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">Blue</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">Blue</span>
                                            </label>
                                        </li>
                                        <!-- More color options... -->
                                    </ul>
                                </div>
                                <div class="my-4">
                                    <h3 class="text-[16px] font-bold">Filter by Size</h3>
                                    <ul class="pl-2 mt-2">
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">L</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">XL</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">XXL</span>
                                            </label>
                                        </li>
                                        <li class="my-1">
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-red-600">
                                                <span class="ml-2">BBW</span>
                                            </label>
                                        </li>
                                        <!-- More color options... -->
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="px-0 lg:px-4 2xl:px-">
                        <div class="">
                            <h2 class="text-[20px] font-bold pb-4">RECOMMANDÉ POUR VOUS</h2>
                            <div v-if="products.length > 0"
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">

                                <router-link :to="'/product-details/' + product.id" v-for="product in products"
                                    class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img :src="path + product.image"
                                            style="width: 217px;height: 201px;" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">{{ product.name }}</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">{{
                                            product.description }}</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity
                                                }} qty</small>
                                            <!-- <span class="font-bold inline-block text-[14px] text-gray-600">Other</span> -->
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">{{ product.price }} FCFA</span>
                                            <!-- <span class="text-[12px] font-bold line-through">100 000 FCFA</span> -->
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                                }}</span>
                                            <!-- <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span> -->
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!-- <div v-else
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">
                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div v-if="products.length > 0" class="flex justify-center w-full lg:justify-normal">
                        <div class="pagination flex gap-x-4 mt-5 lg:ml-4">
                            <span @click="currentPage > 1 && goToPage(currentPage - 1)"
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&lt;
                            </span>
                            <span v-for="page in paginationPages" :key="page" @click="page !== '...' && goToPage(page)"
                                class="w-8 h-8 p-6 rounded-md flex items-center font-bold cursor-pointer justify-center"
                                :class="page === currentPage ? 'bg-red-700 text-white' : 'bg-white'">{{ page }}</span>
                            <span @click="currentPage < meta.last_page && goToPage(currentPage + 1)"
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&gt;</span>
                        </div>
                    </div>
                    <!-- <div v-else class="flex justify-center w-full lg:justify-normal">
                        <div class="pagination flex gap-x-4 mt-5 lg:ml-4">
                            <span
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">
                            </span>
                            <span
                                class="w-8 h-8 p-6 bg-red-700 text-white rounded-md flex items-center font-bold cursor-pointer justify-center">1</span>
                            <span
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">2</span>
                            <span
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">3</span>
                            <span
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">4</span>
                            <span
                                class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">></span>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <Footer></Footer>
    </main>
</template>

<script>
import Navbar from '@/components/home/Navbar.vue';
import Footer from '@/components/home/Footer.vue';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Loader from '@/components/loader/Loader.vue';
import axios from '@/plugins/axios';
export default {
    components: {
        Navbar,
        Footer,
        Loader,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const categories = computed(() => store.getters['categories/categories']);;
        const allCategories = computed(() => store.getters['categories/allCategories']);;
        const category = ref({});
        const meta = ref({}); // Stocke les métadonnées de pagination
        const currentPage = ref(1);
        const products = ref([]);
        const id = ref(route.params.id);
        const allAttributes = computed(() => store.getters['attributes/allAttributes']);
        const selectedProperties = ref([]);

        const getCategories = async (page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await store.dispatch('categories/fetchCategories', { page, search: '' });
                console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

        }

        const productsByCategory = async (id, page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.get(`/api/productsByCategory/${id}`, {
                    params: {
                        page: page,
                        properties: selectedProperties.value,
                    }
                });
                meta.value = response.data.meta;
                products.value = response.data.data;
                console.log(response);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

        }



        const Category = async (id) => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.get(`/api/categories/${id}`);
                category.value = response.data.data;
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

        }


        const goToPage = (pageValue) => {

            if (pageValue !== currentPage.value) {
                currentPage.value = pageValue;
                productsByCategory(id.value, pageValue);
            }
        };

        const getPaginationPages = (currentPage, totalPages) => {
            const pages = [];
            if (totalPages <= 10) {
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                if (currentPage > 4) {
                    pages.push('...');
                }
                for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
                    pages.push(i);
                }
                if (currentPage < totalPages - 3) {
                    pages.push('...');
                }
                pages.push(totalPages);
            }
            return pages;
        };

        const paginationPages = computed(() => getPaginationPages(currentPage.value, meta.value.last_page || 1));
        // watch(paginationPages, (newVal, oldVal) => {
        //     console.log(newVal);
        // });

        // watch(category, (newVal, oldVal) => {
        //     console.log(newVal);
        // });


        watch(selectedProperties, () => {
            productsByCategory(id.value, currentPage.value);
        });



        onMounted(async () => {
            getCategories();
            productsByCategory(route.params.id, 1);
            Category(route.params.id);
            await store.dispatch('attributes/fetchAllAttributes');
        });

        // watch(route.params.id, async () => {
        //     await productsByCategory(route.params.id, 1);
        //     await Category(route.params.id);
        // });

        watch(
            () => route.params.id,
            async (newId) => {
                id.value = newId;
                currentPage.value = 1;
                products.value = [];
                category.value = {};
                await productsByCategory(newId, 1);
                await Category(newId);
            }
        );




        return {
            categories,
            path,
            allCategories,
            currentPage,
            goToPage,
            meta,
            paginationPages,
            category,
            products,
            allAttributes,
            selectedProperties,

        }
    }
}

</script>