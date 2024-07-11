<template>
    <Navbar></Navbar>
    <link rel="stylesheet" href="/styles/pages/product-detail.css">
    <section class="px-4 md:px-6 lg:px-4 py-6">
        <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto 2xl:px-0">
            <div class="flex gap-x-2 text-[12px] items-center">
                <a class="inline-block" href="">Home &n> </a>
                <a class="inline-block py-1 px-2 font-bold transition-all rounded-full  hover:bg-red-100 text-red-500"
                    href="">All Categories ></a>
                <a class="inline-block py-1 px-2 font-bold transition-all rounded-full hover:bg-red-100 text-red-500"
                    href="">Electronics ></a>
                <a class="inline-block" href="">Olax AX9 ></a>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-start gap-x-5">
                <div class="w-full lg:w-[72%]  overflow-hidden rounded-md">
                    <div v-if="product"
                        class="productdetail flex flex-col lg:flex-row gap-x-8 py-3 lg:py-8 px-3 lg:px-8 bg-white w-full">
                        <div class="w-full lg:w-[50%] relative">
                            <div class="w-full h-[400px] lg:h-[550px] rounded overflow-hidden">
                                <img :src="path + product.image" alt="Image 1"
                                    class="w-full relative h-full object-cover">
                            </div>
                            <div class="flex w-[100%] justify-between absolute top-[50%] translate-y-[-50%]">
                                <button id="prevBtn"
                                    class="w-[60px] rounded-full h-[60px] bg-black text-white">&lt;</button>
                                <button id="nextBtn"
                                    class="w-[60px] rounded-full h-[60px] bg-black text-white">&gt;</button>
                            </div>
                        </div>
                        <div class="info w-full lg:w-[50%] py-8">
                            <h1 class="text-[24px] lg:text-[32px] font-bold">{{ product.name }}</h1>
                            <!-- <small>(0 Customer review)</small> -->
                            <!-- <div class="flex py-2">
                                <span class="bg-black px-4 text-white py-1 font-semibold">Sold by</span>
                                <span class="bg-gray-100 text-gray-600 px-4 py-1 font-semibold">CODEC</span>
                            </div> -->
                            <span class="text-[18px] pt-2 block lg:text-[24px] font-bold text-black">{{ product.price }}
                                XAF
                                <!-- / <span
                                    class="text-gray-400 text-[18px]">PC</span> -->
                            </span>
                            <div class="py-3">
                                <span class="block pb-2 font-semibold">Order Quantity</span>
                                <div class="flex w-full rounded-[6px] mt-4 overflow-hidden lg:w-fit">
                                    <button @click="decrement" id="decrement"
                                        class="py-0 px-4 bg-black text-white">-</button>
                                    <span id="quantity" class="py-2 px-4 shadow-sm w-[80%] lg:w-[200px] text-center">{{
                                        quantity }}</span>
                                    <button @click="increment" id="increment"
                                        class="py-0 px-4 bg-black text-white">+</button>
                                </div>
                            </div>
                            <!-- <div class="">
                                <span>Total payable</span>
                                <span class="text-[18px] lg:text-[28px] font-bold block">66 500 XAF</span>
                            </div> -->
                            <div class="">
                                <div class="flex flex-col text-center lg:flex-row gap-2 mt-4">
                                    <a href="#"
                                        class="inline-block py-2 px-3 border-2 rounded-lg text-[14px] lg:text-[initial] border-gray-300 text-red-600">purchase
                                        now</a>
                                    <a href="#" @click="addToCart"
                                        class="inline-block py-2 px-3 rounded-lg text-[14px] lg:text-white bg-gray-600 text-white">Ajouter
                                        au panier
                                    </a>
                                </div>
                                <div class="flex my-3">
                                    <a :href="whatsappLink"
                                        class="inline-block py-2 px-3 rounded-lg text-[14px] lg:text-white bg-green-600 text-white">Order
                                        on whatsapp </a>
                                    <span class="ml-2"><img src="/images/whatsapp-svgrepo-com.svg" alt="" width="34"
                                            height="34"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h3 class="bg-black inline-block px-3 py-2 rounded-full text-white">Loading...</h3>
                    </div>
                    <!-- <div class="">
                        <section class="">
                            <div class="w-full bg-white my-[28px] rounded-md">
                                <div class="flex items-center">
                                    <h2
                                        class="text-[20px] py-4 px-4 border-b-2 w-[100%] lg:w-[100%] font-bold uppercase">
                                        TROUVER DES PRODUITS PAR MARQUE</h2>
                                </div>
                                <div id="sliderContainer"
                                    class="whitespace-nowrap grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense px-4 py-4 gap-y-3 lg:flex lg:flex-row lg:overflow-hidden items-center gap-x-[10px]">
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Jacket + Vest + Pants)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">High-end Groom
                                                Formaluated suites</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">10 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">70 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <div>
                                            <p class="text-gray-500 text-sm">(One More Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                one more product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">3 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">30 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="">
                        <section class="">
                            <div class="w-full bg-white my-[28px] rounded-md">
                                <div class="flex items-center">
                                    <h2
                                        class="text-[20px] py-4 px-4 border-b-2 w-[100%] lg:w-[100%] font-bold uppercase">
                                        TROUVER DES PRODUITS PAR MARQUE</h2>
                                </div>
                                <div id="sliderContainer"
                                    class="whitespace-nowrap grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense px-4 py-4 gap-y-3 lg:flex lg:flex-row lg:overflow-hidden items-center gap-x-[10px]">
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Jacket + Vest + Pants)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">High-end Groom
                                                Formaluated suites</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">10 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">70 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                                                class="w-full object-cover h-full"></span>
                                        <div>
                                            <p class="text-gray-500 text-sm">(Another Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                another product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">50 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-[11.86px] rounded-md shadow-md bg-white">
                                        <div>
                                            <p class="text-gray-500 text-sm">(One More Product)</p>
                                            <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of
                                                one more product</p>
                                            <div class="flex justify-between items-center py-1">
                                                <small class="font-semibold text-[12px] text-gray-600">3 set</small>
                                                <span
                                                    class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                                            </div>
                                            <div class="flex items-center justify-between gap-x-2">
                                                <span class="block font-bold text-sm">30 000 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div> -->
                </div>
                <aside class="w-full lg:w-[28%] relative">
                    <div class="bg-white rounded-md">
                        <h2 class="py-2 px-3 border-b-[1px] font-bold border-gray-300">Delivery & return</h2>
                        <ul class="py-4 px-3">
                            <li class="flex gap-x-4 my-4">
                                <span
                                    class="w-16 h-11 rounded-[6px] border-[1px] border-gray-00 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="current"></path>
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                        <path d="M12 12l8 -4.5"></path>
                                        <path d="M12 12l0 9"></path>
                                        <path d="M12 12l-8 -4.5"></path>
                                        <path d="M16 5.25l-8 4.5"></path>
                                    </svg>
                                </span>
                                <p class="text-[14px]">Enjoy cheaper shipping fees when you select a PickUp Station at
                                    checkout</p>
                            </li>
                            <li class="flex gap-x-4 my-4">
                                <span
                                    class="w-16 h-11 rounded-[6px] border-[1px] border-gray-00 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-truck-delivery" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="current"></path>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                        <path d="M3 9l4 0"></path>
                                    </svg>
                                </span>
                                <p class="text-[14px]">Enjoy cheaper shipping fees when you select a PickUp Station at
                                    checkout</p>
                            </li>
                            <li class="flex gap-x-4 my-4">
                                <span
                                    class="w-16 h-11 rounded-[6px] border-[1px] border-gray-00 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-id-badge-2" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="current"></path>
                                        <path d="M7 12h3v4h-3z"></path>
                                        <path
                                            d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6">
                                        </path>
                                        <path
                                            d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z">
                                        </path>
                                        <path d="M14 16h2"></path>
                                        <path d="M14 12h4"></path>
                                    </svg>
                                </span>
                                <p class="text-[14px]">Enjoy cheaper shipping fees when you select a PickUp Station at
                                    checkout</p>
                            </li>
                            <li class="flex gap-x-4 my-4">
                                <span
                                    class="w-16 h-11 rounded-[6px] border-[1px] border-gray-00 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-id-badge-2" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="current"></path>
                                        <path d="M7 12h3v4h-3z"></path>
                                        <path
                                            d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6">
                                        </path>
                                        <path
                                            d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z">
                                        </path>
                                        <path d="M14 16h2"></path>
                                        <path d="M14 12h4"></path>
                                    </svg>
                                </span>
                                <p class="text-[14px]">Enjoy cheaper shipping fees when you select a PickUp Station at
                                    checkout</p>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-white my-5 rounded-md relative lg:sticky top-[10px] left-0">
                        <ul>
                            <li
                                class="py-2 px-3 border-gray-200 flex items-center gap-x-2 hover:bg-gray-100 transition-all ease-in-out  border-b-[2px]">
                                <span class="block text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-list-collapse">
                                        <path d="m3 10 2.5-2.5L3 5" />
                                        <path d="m3 19 2.5-2.5L3 14" />
                                        <path d="M10 6h11" />
                                        <path d="M10 12h11" />
                                        <path d="M10 18h11" />
                                    </svg></span>
                                <a href="#">Product details</a>
                            </li>
                            <li
                                class="py-2 px-3 border-gray-200  flex items-center gap-x-2 hover:bg-gray-100 transition-all ease-in-out  border-b-[2px]">
                                <span class="block text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-rainbow">
                                        <path d="M22 17a10 10 0 0 0-20 0" />
                                        <path d="M6 17a6 6 0 0 1 12 0" />
                                        <path d="M10 17a2 2 0 0 1 4 0" />
                                    </svg></span>
                                <a href="#">Specifications</a>
                            </li>
                            <li
                                class="py-2 px-3 border-gray-200  flex items-center gap-x-2  hover:bg-gray-100 transition-all ease-in-out border-b-[2px]">
                                <span class="block text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-images">
                                        <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                                        <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                                        <circle cx="12" cy="8" r="2" />
                                        <rect width="16" height="16" x="6" y="2" rx="2" />
                                    </svg></span>
                                <a href="#">Product showcase</a>
                            </li>
                            <li
                                class="py-2 px-3 border-gray-200  flex items-center gap-x-2 hover:bg-gray-100 transition-all ease-in-out  border-b-[2px]">
                                <span class="block text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-messages-square">
                                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                    </svg></span>
                                <a href="#">Buyers feedback</a>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-white rounded-md">
                        <h2 class="py-3 px-3 border-b-2 border-gray-300">Seller information</h2>
                        <div class="px-3 py-3">
                            <div class="">
                                <span class="block font-semibold text-[20px]">CODEC SHOP</span>
                                <span class="block text-gray-400 text-[15px]">Logbessou, Douala</span>
                            </div>
                            <div class="">
                                <div class="flex flex-col gapy-2 py-12">
                                    <ul class="flex gap-x-1 items-center justify-center">
                                        <li class="text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </li>
                                        <li class="text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </li>
                                        <li class="text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </li>
                                        <li class="text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </li>
                                        <li class="text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </li>
                                    </ul>
                                    <span class="flex  text-gray-400 justify-center items-center">0 customer
                                        reviews</span>
                                </div>
                                <div class="flex justify-between">
                                    <a class="inline-block py-2 px-8 rounded-lg text-center bg-red-100 text-red-600 font-semibold"
                                        href="#">Our shop</a>
                                    <a class="inline-block py-2 px-8 rounded-lg text-center bg-red-100 text-red-600 font-semibold"
                                        href="#">Message</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- <div class="bg-white mt-4 p-8 flex gap-x-8 rounded-md">
                        <img class="w-[100px] h-[100px]" src="/images/pngs/phone 6000.png" alt="imag of a phone">
                        <div class="flex flex-col gap-y-2">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <span class="text-red-600 font-bold">5 500 XAF</span>
                        </div>
                    </div> -->
                </aside>
            </div>
        </div>
    </section>

    <!-- <section class="px-4 lg:px-4 2xl:px-0">
        <div class="w-full bg-white my-[28px] 2xl:max-w-[1480px] mx-auto rounded-lg">
            <div class="flex items-center">
                <h2 class="text-[20px] py-4 px-4 border-b-2 w-[100%] lg:w-[100%] font-bold uppercase">TROUVER DES
                    PRODUITS PAR MARQUE</h2>
            </div>
            <div id="sliderContainer"
                class="whitespace-nowrap grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense px-4 py-4 gap-y-3 lg:flex lg:flex-row lg:overflow-hidden items-center gap-x-[10px]">
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Jacket + Vest + Pants)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">High-end Groom Formaluated suites
                        </p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">10 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">70 000 FCFA</span>
                        </div>
                    </div>
                </div>


                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img src="/images/pngs/jacket.png" alt="" width="105"
                            class="w-full object-cover h-full"></span>
                    <div>
                        <p class="text-gray-500 text-sm">(Another Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of another product</p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">5 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">50 000 FCFA</span>
                        </div>
                    </div>
                </div>

                <div class="p-[11.86px] rounded-md shadow-md bg-white">
                     <span class="block"><img src="/images/pngs/one_more_product.png" alt="" width="105"></span> 
                    <div>
                        <p class="text-gray-500 text-sm">(One More Product)</p>
                        <p class="w-full lg:w-[189px] text-xs text-gray-500 truncate">Description of one more product
                        </p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[12px] text-gray-600">3 set</small>
                            <span class="font-bold inline-block text-[12px] text-gray-600">Other</span>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block font-bold text-sm">30 000 FCFA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- <section class="px-4 lg:px-4 2xl:px-0 my-10 overflow-hidden">
        <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-lg">
            <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">A Brief about this vendor</h2>
            <p class="px-4 py-4 text-gray-500">The XYZ Smartwatch is a stylish and advanced wearable device that
                combines the functionality of a smartwatch with the elegance of a traditional timepiece. With its sleek
                design and cutting-edge features, it's the perfect companion for those who want to stay connected and
                enhance their active lifestyle.

                <span class="block"><br><strong>Key Features:</strong></span>

                <br>- Fitness Tracking: The XYZ Smartwatch comes equipped with a built-in heart rate monitor, pedometer,
                and sleep tracker. It helps you stay on top of your fitness goals by monitoring your daily activity
                levels and providing valuable insights into your health and well-being.

                <br><br>- Notifications and Connectivity: Stay connected on the go with the XYZ Smartwatch. Receive
                call, message, and social media notifications directly on your wrist, so you never miss an important
                update. It also offers Bluetooth connectivity, allowing you to sync it with your smartphone for seamless
                integration.

                <br> <br>- Customizable Watch Faces: Express your personal style with a wide range of customizable watch
                faces. Choose from various designs, colors, and complications to match your mood and outfit, ensuring
                that your XYZ Smartwatch always reflects your unique personality.

                <br><br>- Water and Dust Resistance: Designed to withstand your active lifestyle, the XYZ Smartwatch is
                water and dust resistant. Whether you're sweating it out at the gym or caught in the rain, you can wear
                it with confidence, knowing it can handle the elements.

                <br><br>- Long Battery Life: With its efficient power management system, the XYZ Smartwatch offers an
                impressive battery life. You can enjoy using it throughout the day without worrying about frequent
                recharging.

                <br><br>- Compatibility: The XYZ Smartwatch is compatible with both iOS and Android devices, making it a
                versatile option for users across different platforms. Simply download the companion app and sync it
                with your smartphone to unlock its full potential.

                Experience the future of wearable technology with the XYZ Smartwatch. Stay connected, monitor your
                health, and elevate your style with this feature-packed smartwatch.
            </p>
        </div>
    </section> -->


</template>


<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Navbar from '@/components/home/Navbar.vue';


export default {
    components: {
        Navbar,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const quantity = ref(1);
        const path = store.getters['getImagePaths/getPath'];
        const product = ref(null);
        const phoneNumber = '+237682827307';
        const whatsappLink = ref('');
        // console.log(product.value);

        const addToCart = () => {
            store.dispatch('cart/addToCart', { product: product.value, quantity: quantity.value });
        };

        const increment = () => {
            quantity.value++;
        };

        const decrement = () => {
            if (quantity.value > 1) {
                quantity.value--;
            }
        };

        const generateWhatsAppLink = () => {
            if (product.value && product.value.name && product.value.id) {
                const shop = product.value.shop?.name || 'non spécifiée';
                const message = `Je voudrais commander ${quantity.value} ${product.value.name} (Réf: ${product.value.id}), Boutique : ${shop}`;
                const encodedMessage = encodeURIComponent(message);
                whatsappLink.value = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                console.log('Produit:', product.value);
                console.log('Message:', message);
                console.log('Message encodé:', encodedMessage);
            } else {
                whatsappLink.value = '';
            }
        };


        onMounted(async () => {
            const productId = Number(route.params.id);
            let productFromState = store.getters['products/getProductById'](productId);

            if (!productFromState) {
                await store.dispatch('products/fetchProduct', productId);
                productFromState = store.getters['products/getProductById'](productId);
            }

            product.value = productFromState;
            generateWhatsAppLink();
        });

        watch(quantity, generateWhatsAppLink);

        return {
            quantity,
            increment,
            decrement,
            product,
            addToCart,
            path,
            whatsappLink,

        };
    }
};
</script>


<style></style>