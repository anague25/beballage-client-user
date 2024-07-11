<template>
    <!-- Navbar starts here -->
    <nav class="relative">
        <!-- secondary navbar -->
        <!-- <div class="bg-slate-800 py-3 hidden md:block px-6 2xl:px-0">
            <div class="2xl:max-w-[1480px] mx-auto flex justify-between text-sm">
                <div class="flex text-white md:gap-x-3 lg:gap-7">
                    <a href="#">English</a>
                    <a href="#">French</a>
                </div>
                <div class="second-nav-items text-slate-50 flex md:gap-x-4 lg:gap-7 lg:text-sm">
                    <a href="" class="block">Shop grocery</a>
                    <a href="" class="block">Merchant Center</a>
                    <a href="" class="block">Source Suppliers</a>
                    <a href="" class="block">Order tracking</a>
                    <span class="block"><a href="./pages/registration.html">Register</a> or <a
                            href="./pages/login.html">Login</a></span>
                </div>
            </div>
        </div> -->
        <!-- Primary navbar -->
        <div class="bg-black py-[7px] hidden lg:block">
            <div class="2xl:max-w-[1480px] mx-auto flex  justify-center items-center">
                <div class="logo w-[12.5%] flex justify-center">
                    <a href="https://deballage.cm"><img src="/images/pngs/deballage-logo.png"
                            alt="deballage logo" /></a>
                </div>
                <div class="search-bar flex w-[75%] px-[15px]">
                    <div class="search w-full mr-2">
                        <input v-model="searchTerm" @keydown.enter="performSearch"
                            class="block caret-red-800 pl-7 py-[10px] w-full h-full rounded-[3.56px] " type="search"
                            placeholder='Rechercher des produits, des marques, des catégories sur deballage.com' />
                    </div>
                    <a href='#' @click.prevent="performSearch"
                        class=" hover:bg-red-600 transition-all w-[15%] flex items-center h-[inherit] px-[14px] py-[5.43px] gap-1 bg-red-700 text-white rounded-[3.56px]"><span
                            class='inline-block'>CHERCHER</span> <img src="/images/svgs/search.svg"
                            alt="search an item" /></a>
                </div>
                <div class="icons-set flex gap-2 w-[12.5%]">
                    <a href="" class="block"><img src="/images/svgs/fillter.svg" alt="filtrer vos produits" /></a>
                    <a href="" class="block"><img src=/images/svgs/favorite.svg alt="consulter vos favoris" /></a>
                    <router-link to="/cart" class="block flex"><img src=/images/svgs/cart.svg
                            alt="regarder votre panier" />
                        <span class="bg-red-700 text-white inline-block p-1 rounded-full text-small">{{ countCartitems
                            }}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- mobile navbar -->
        <div class="p-4 lg:px-0 bg-black lg:hidden">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <button class="menuToggle"><img id="openIcon" src="/images/svgs/icon_menu.svg" alt=""></button>
                    <div class="w-[120px] h-auto"><a href="https://deballage.cm"><img
                                src="/images/pngs/deballage-logo.png" alt=""></a></div>
                </div>
                <div class="cart"><img src="/images/svgs/cart.svg" alt=""></div>
            </div>
            <div class="flex py-3">
                <input class="p-2 rounded-[3.95px] rounded-tr-none rounded-br-none w-[87%]"
                    placeholder="Rechercher des produits, des marques" type="search" name="" id="">
                <button
                    class="bg-red-700 w-[13%] flex justify-center items-center rounded-[3.95px] rounded-tl-none rounded-bl-none p-2"><img
                        src="/images/svgs/search.svg" alt=""></button>
            </div>

            <div id="menuItems"
                class="h-screen w-full bg-black bg-opacity-40 absolute top-0 left-0 menu shadow-lg translate-x-[-100%]">

                <ul v-if="parentCategories && parentCategories.length > 0"
                    class="w-[65%] h-screen bg-white p-[21px] flex flex-col gap-y-[20px] ">
                    <div class="flex items-center justify-between pb-4">
                        <span class="block"><img src="/images/pngs/logo-white.png" alt=""></span>
                        <button class="menuToggle block"><img id="closeIcon" src="/images/svgs/icon-close.svg"
                                alt=""></button>
                    </div>
                    <li v-for="category in parentCategories" class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">{{ category.name }}</a>
                        </span>

                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>

                </ul>
                <ul v-else class="w-[65%] h-screen bg-white p-[21px] flex flex-col gap-y-[20px] ">
                    <div class="flex items-center justify-between pb-4">
                        <span class="block"><img src="/images/pngs/logo-white.png" alt=""></span>
                        <button class="menuToggle block"><img id="closeIcon" src="/images/svgs/icon-close.svg"
                                alt=""></button>
                    </div>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="./" class="text-gray-600 truncate w-[168px]">Men's & Women Fashion</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="./pages/category.html" class="text-gray-600 truncate w-[168px]">Laptops and
                                Phone</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Beauty & Personal Care</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Lugage, Bags & Cases</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Toys, Kids & Babies</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Electrical Equipments</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Health & Medical supplies</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                    <li class="flex justify-between items-center gap-[6px]">
                        <span class="flex gap-1 items-center">
                            <span class="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            <a href="#" class="text-gray-600 truncate w-[168px]">Agriculture / Food & Bevarages</a>
                        </span>
                        <img src="/images/svgs/caret-right.svg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- Primary navbar ends here -->

        <!-- category navbar -->
        <div class="bg-white overflow-x-scroll">
            <ul v-if="parentCategories && parentCategories.length > 0"
                class='2xl:max-w-[1480px]  md:py-2 lg:py-0 h-fit mx-auto flex md:gap-x-1 lg:gap-x-3 md:justify-center lg:items-center'>
                <li v-for="category in parentCategories" class="flex items-center">
                    <a data-dropdown="dropdown1"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">{{ category.name }}</a>
                    <div id="dropdown1" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul v-else
                class='2xl:max-w-[1480px]  md:py-2 lg:py-0 h-fit mx-auto flex md:gap-x-1 lg:gap-x-3 md:justify-center lg:items-center'>
                <li class="flex items-center">
                    <a data-dropdown="dropdown1"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Chaussures</a>
                    <div id="dropdown1" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown2"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Hoodie</a>

                    <div id="dropdown2" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown3"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Chapeau</a>
                    <div id="dropdown3" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown4"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Cullotes</a>

                    <div id="dropdown4" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown5"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Over-sized</a>

                    <div id="dropdown5" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown6"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">T-shirt</a>

                    <div id="dropdown6" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown7"
                        class='dropdown-toggle px-[12px] relative primary-btn-sub-link text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block'
                        href="#">Sweaters</a>

                    <div id="dropdown7" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center">
                    <a data-dropdown="dropdown8"
                        class="dropdown-toggle px-[12px] relative text-[12px] lg:px-[20.39px] lg:hover:bg-gray-600 lg:hover:text-white transition-all ease-in-out py-[4px] lg:py-[12.32px] block"
                        href="#">Jogging</a>

                    <div id="dropdown8" class="dropdown absolute z-10 bg-white shadow-lg rounded mt-2">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                            <div>
                                <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Men's Underwear</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                    <li><a href="#">Pull overs</a></li>
                                    <li><a href="#">Zip upHoodies</a></li>
                                    <li><a href="#">Fitted Hoodie</a></li>
                                    <li><a href="#">Sleeveless hoodie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Navbar ends here -->
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { app } from '@/assets/js/app.js';
import { toast } from 'vue3-toastify';




export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const parentCategories = computed(() => store.getters['categories/parentCategories']);
        const countCartitems = computed(() => store.getters['cart/countCartitems']);
        const searchTerm = ref('');


        const performSearch = () => {
            if (searchTerm.value.trim()) {
                router.push({ path: '/search', query: { q: searchTerm.value } });
            }
        };




        const initializeScripts = () => {
            setTimeout(() => {
                app(); // Call your imported app function to initialize the scripts
            }, 0);
        };


        onMounted(() => {
            store.dispatch('categories/fetchAllCategories');
            initializeScripts(); // Initialize scripts on mount

        });

        watch(parentCategories, (newVal, oldVal) => {
            if (newVal !== oldVal) {
                initializeScripts(); // Re-initialize scripts when parentCategories changes
            }
        });

        watch(countCartitems, (newVal, oldVal) => {
            console.log(newVal, oldVal);
        });



        return {
            path,
            parentCategories,
            searchTerm,
            countCartitems,
            performSearch,

        };
    }

}

</script>

<style></style>