<template>
    <!-- Hero section -->
    <div
        class="2xl:max-w-[1480px] mx-auto flex flex-col md:flex-row lg:flex-row gap-x-4 pt-4 pb-8 px-4 lg:px-4 2xl:px-0">
        <div class="w-[23%] rounded-[6.13px] bg-white hidden lg:block relative">
            <ul v-if="parentCategories && parentCategories.length > 0"
                class="p-[21px] flex flex-col gap-y-[20px] w-full main-container">
                <li v-for="category in parentCategories" class="flex justify-between items-center gap-[6px]">
                    <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full overflow-hidden block bg-cover bg-center">
                                    <img class="w-full h-full object-cover" :src="path + category.image"
                                        alt="woman in a yellow gown">
                                </span>
                                <a href="#" aria-label="see more products on Men's category"
                                    class="text-gray-600 truncate w-[168px]">{{ category.name }}</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg" alt="caret icon pointing to the right">
                        </span>
                        <!-- <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </li>
            </ul>
            <ul v-else class="p-[21px] flex flex-col gap-y-[20px] w-full main-container">
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full overflow-hidden block bg-cover bg-center">
                                    <img class="w-full h-full object-cover" src="/images/pngs/woman.png"
                                        alt="woman in a yellow gown">
                                </span>
                                <a href="#" aria-label="see more products on Men's category"
                                    class="text-gray-600 truncate w-[168px]">Men's & Women Fashion</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg" alt="caret icon pointing to the right">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover" src="/images/pngs/multimedia.png"
                                        alt="Multimedia images in PNG format showcasing various visual elements and content.">
                                </span>
                                <a href="./pages/category.html" class="text-gray-600 truncate w-[168px]">Laptops and
                                    phones</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] xl:left-[315px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full"
                                        src="/images/jpgs/beauty-care.jpeg"
                                        alt="Image of a variety of beauty care products for women">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Beauty & Personal Combination</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] xl:left-[315px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full"
                                        src="/images/jpgs/luggage-bag.jpeg"
                                        alt="Images of luggage equipment including suitcases">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Lugage, Bags & Cases</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] xl:left-[330px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">leeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full"
                                        src="/images/jpgs/luggage-bag.jpeg"
                                        alt="Images of luggage equipment including suitcases">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Toys, Kids & Babies</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">leeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies cate">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between items-center gap-[6px]"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full"
                                        src="/images/pngs/electrical-equipement.jpg"
                                        alt="Images of electrical equipment including power cables">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Electrical Equipments</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex  items-center gap-[6px] w-full"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 relative items-center w-full toggle-button">
                            <div class="flex items-center gap-1">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full" src="/images/jpgs/health.jpeg"
                                        alt="Images of health products including vitamins">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Health & Medical supplies</a>
                            </div>
                            <img class="block absolute right-0 top-[50%] translate-y-[-50%]"
                                src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center gap-[6px] w-full"> <!--main container-->
                    <div class="w-full sidebar-trigger"> <!--sidebar trigger-->
                        <span class="flex gap-1 justify-between items-center w-full toggle-button">
                            <div class="flex items-center gap-1 w-full">
                                <span class="w-8 h-8 bg-gray-200 rounded-full block overflow-hidden bg-cover bg-center">
                                    <img class="w-full h-full object-cover rounded-full"
                                        src="/images/pngs/agriculture.webp"
                                        alt="Images of agricultural products including crops">
                                </span>
                                <a href="#" class="text-gray-600 truncate w-[168px]">Agriculture/Food & Nutrition</a>
                            </div>
                            <img src="/images/svgs/caret-right.svg"
                                alt="Right-pointing caret icon indicating navigation or direction to the right.">
                        </span>
                        <div
                            class="sidebar-menu absolute xl:w-[700px] 2xl:w-[700px] z-10 bg-white shadow-lg rounded mt-2">
                            <div class="">
                                <div class="">
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 dropdown-animation">
                                        <div>
                                            <h2 class="font-bold mb-3">Caots and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-3">Coats and Jackets</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Men's Underwear</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 class="font-bold mb-4">Top & Tees Collection</h2>
                                            <ul class="text-[14px] mt-0 flex flex-col gap-y-1">
                                                <li><a href="#"
                                                        aria-label="visit more items within the pull overs category">Pull
                                                        overs</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the zipup hoodies category">Zip
                                                        upHoodies</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Fitted hoodies category">Fitted
                                                        Hoodie</a></li>
                                                <li><a href="#"
                                                        aria-label="visit more items within the Sleeveless hoodies category">Sleeveless
                                                        hoodie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-[70%] lg:w-[55%]">
            <!-- <div class="h-[200px] md:h-[226px] lg:h-[346.83px] bg-white rounded-[8px] overflow-hidden">
                    <img class="w-full object-fill lg:object-cover h-full" src="images/jpgs/deballage.jpg" alt="">
                </div> -->
            <div class="slider w-full h-[200px] md:h-[226px] lg:h-[346.83px] bg-white rounded-[8px] overflow-hidden">
                <div class="slide-container h-full">
                    <div class="slide"><img src="/images/jpgs/deballage.jpg"
                            alt="Promotional slide featuring the unveiling of new sweatshirts and hoodies collection.">
                    </div>
                    <div class="slide"><img src="/images/jpgs/image-slider-home-2.webp"
                            alt="Promotional slide featuring the unveiling of new sweatshirts and hoodies collection.">
                    </div>
                    <div class="slide"><img src="/images/jpgs/deballage.jpg"
                            alt="Promotional slide featuring the unveiling of new sweatshirts and hoodies collection.">
                    </div>
                </div>
                <div class="slider-controls hidden">
                    <button class="prev-btn hidden" aria-label="Previous Slide">&lt;</button>
                    <button class="next-btn hidden" aria-label="Next Slide">&gt;</button>
                </div>
            </div>

            <div
                class="py-[21px] bg-white rounded-[6.13px] flex md:flex-wrap lg:flex-nowrap lg:flex-row flex-col gap-y-5 lg:items-center mt-2">
                <div class="px-4  lg:px-[25px] flex gap-x-2 items-center">
                    <span><img width="43" src="/images/svgs/discount.svg" alt="Icon representing a discount"></span>
                    <span>
                        <h4 class="text-[#333333] font-semibold text-[14px] text-ellipsis truncate w-full lg:w-[160px]">
                            Trouver des fournisseur</h4>
                        <p class="font-thin text-[14px]">Trouver des fournisseur</p>
                    </span>
                </div>
                <div
                    class="px-4  lg:px-[25px] lg:border-l-2border-none lg:border-r-2border-none border-gray-200 flex gap-x-2 items-center text-ellipsis">
                    <span><img width="43" src="/images/svgs/logistic.svg" alt="Icon representing logistic"></span>
                    <span>
                        <h4 class="text-[#333333] font-semibold text-[14px] truncate w-full lg:w-[160px]">Services
                            Logistiques</h4>
                        <p class="font-thin text-[14px] text-ellipsis w-full lg:w-[160px] truncate">Reliable shipping
                            across the globe</p>
                    </span>
                </div>
                <div class="px-4  lg:px-[25px] flex gap-x-2 items-center">
                    <span><img width="43" src="/images/svgs/gem.svg"
                            alt="Icon representing gem and prestige features"></span>
                    <span>
                        <h4 class="text-[#333333] font-semibold text-[14px] truncate w-full lg:w-[160px]">Avantages du
                            club des sapeur</h4>
                        <p class="font-thin text-[14px]">Decouvres plus de swag</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full mt-2 lg:mt-0 md:w-[50%] lg:w-[25%] rounded-[6.13px]">
            <div class="rounded-[6.13px] bg-white p-[21px]">
                <div v-if="authUser.firstName" class="flex gap-x-[17.5px]">
                    <span class="inline-block p-2 bg-gray-400 rounded-full"><img :src="path + authUser.profile" alt=""
                            width="50" height="50" class="rounded-full inline-block"></span>
                    <span class="block ">
                        <p class="font-thin text-gray-500">Bienvenue</p>
                        <span class="text-[17.5px] font-bold">{{ authUser.firstName }} {{ authUser.lastName }}</span>
                    </span>
                </div>
                <div v-else class="flex gap-x-[17.5px]">
                    <span class="inline-block p-4 bg-gray-400 rounded-full"><img src="/images/svgs/account.svg"
                            alt=""></span>
                    <span class="block ">
                        <p class="font-thin text-gray-500">Bienvenue</p>
                        <span class="text-[17.5px] font-bold">Compte Acheteur</span>
                    </span>
                </div>
                <div v-if="token" class="pt-[18px]">
                    <router-link class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white"
                        to="/user-dashboard">Dashboard</router-link>
                </div>
                <div v-if="token" class="pt-[18px]">
                    <a href="#" @click="confirmLogout" aria-label="link to login"
                        class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white">Se Deconnecter</a>

                    <router-link v-if="!authUser.cniRecto"
                        class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white"
                        :to="'/seller/register/' + authUser.id">Devenir vendeur</router-link>
                </div>
                <div v-else class="pt-[18px]">
                    <router-link to="/register" aria-label="link to register"
                        class="inline-block py-3 px-4 rounded-full bg-red-700 text-white">S'enregistrer</router-link>
                    <router-link to="/login" aria-label="link to login"
                        class="inline-block py-3 px-4 rounded-full bg-red-700 text-white">Se connecter </router-link>
                </div>
            </div>
            <div class="rounded-[6.13px] bg-white mt-2 p-[21px]">
                <h5 class="font-bold">Offres spéciales aujourd’hui </h5>
                <p class="w-[231px] truncate text-gray-500 font-thin">Trouvez des produits sur les promotion speciale
                    sur deballage</p>
                <div v-if="recentProducts.length > 0" class="py-[18px] flex flex-col gap-y-[21px]">
                    <div v-for="product in recentProducts" :key="product.id" class="flex items-center gap-x-3">
                        <span class="block w-[60px] h-[60px] overflow-hidden bg-gray-200 rounded-[10.5px]">
                            <img class="object-cover w-full h-full object-center" :src="path + product.image"
                                alt=""></span>
                        <span>
                            <p class="text-[9px] font-thin">{{ product.quantity }}</p>
                            <span class="text-[14px] font-bold text-red-500">{{ product.price }} FCFA</span>
                        </span>
                    </div>
                </div>
                <div v-else class="py-[18px] flex flex-col gap-y-[21px]">
                    <div class="flex items-center gap-x-3">
                        <span class="block w-[60px] h-[60px] overflow-hidden bg-gray-200 rounded-[10.5px]"><img
                                class="object-cover w-full h-full object-center"
                                src="/images/jpgs/men-women-fashion.jpg" alt=""></span>
                        <span>
                            <p class="text-[9px] font-thin">0 stock</p>
                            <span class="text-[14px] font-bold text-red-500">17 000 FCFA</span>
                        </span>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <span class="block w-[60px] h-[60px] overflow-hidden bg-gray-200 rounded-[10.5px]"><img
                                class="object-cover object-center w-full h-full" src="/images/jpgs/man-shopping.jpg"
                                alt=""></span>
                        <span>
                            <p class="text-[9px] font-thin">0 stock</p>
                            <span class="text-[14px] font-bold text-red-500">17 000 FCFA</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script>
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const recentProducts = computed(() => store.getters['products/recentProducts']);
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        onMounted(() => {
            if (token.value) {
                // console.log('le token exist');
                store.dispatch('auth/fetchUser');
            }
            store.dispatch('products/fetchAllProductsWithoutPaginate');
            store.dispatch('categories/fetchAllCategories');
        });

        const parentCategories = computed(() => store.getters['categories/parentCategories']);


        const confirmLogout = async () => {
            const confirmed = await Swal.fire({
                title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Oui, déconnectez-moi',
                cancelButtonText: 'Annuler'
            });

            if (confirmed.isConfirmed) {
                console.log('le logout ');
                await store.dispatch('auth/logout');

                Swal.fire('Déconnexion réussie', '', 'success');
            }
        };



        return {
            path,
            recentProducts,
            parentCategories,
            token,
            authUser,
            confirmLogout,

        };
    }

}

</script>


<style></style>