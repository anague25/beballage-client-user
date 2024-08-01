<template>
    <main>
        <Navbar></Navbar>
        <header id="aboutHeader" class="relative bg-black h-[600px] flex items-center justify-center px-4 lg:px-0">
            <div id="headerContent" class="text-white text-center">
                <h1 class="text-[32px] lg:text-[48px] w-full lg:w-[900px] font-bold mb-4">Atteignez des millions
                    d'acheteurs B2B et B2C dans le monde entier grâce à Deballage</h1>
                <p class="text-lg">Obtenez les outils et le savoir-faire pour créer une présence en ligne réussie pour
                    votre entreprise
                </p>
                <div class="mt-5 about-act-btns flex md:flex-row flex-col px-6 md:justify-center">
                    <a href="#"
                        class="py-[14px] font-bold px-7 text-[#333333] bg-white inline-block m-0 lg:mr-1 rounded-full">Rejoindre
                        Deballage</a>
                    <a href="/#"
                        class="py-[14px] mt-2 inline-block lg:m-0 font-bold px-7 bg-red-700 text-white rounded-full">Parlez
                        a un consultant</a>
                </div>
            </div>
            <div id="sliderNav" class="mt-4"></div>
        </header>

        <section class="bg-white py-10 lg:py-[100px] ">
            <div
                class="2xl:max-w-[1480px] xl:max-w-[1300px] mx-auto flex flex-col items-start gap-x-[100px] lg:px-6 2xl:px-0 md:flex-row">
                <div class="md:w-[50%] lg:w-[40%] w-full">
                    <h2 class="text-[#333333] font-bold w-full lg:w-[491px] md:text-[32px] text-[42px]">Connectez,
                        faites évoluer et développez votre entreprise en ligne sans effort</h2>
                    <p class="text-gray-500 py-2">Aleigro.com vous permet de développer votre activité en ligne en toute
                        simplicité et sans stress. Nous offrons aux petites entreprises une place de marché numérique de
                        nouvelle génération et l'infrastructure technologique nécessaire pour se connecter de manière
                        transparente avec les acheteurs, exploiter et développer leurs activités à travers l'Afrique et
                        créer une expérience client significative à l'ère de la technologie d'aujourd'hui.</p>
                    <router-link to="/register"
                        class="mt-5 inline-block px-[52px] py-[12px] bg-red-700 text-white rounded-full font-bold">Inscription
                        gratuite</router-link>
                </div>
                <div
                    class="md:w-[50%] lg:w-[60%] md:pt-0 pt-8 lg:mt-0 grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 lg:gap-y-8 gap-7  lg:gap-3">
                    <div class="">
                        <h4 class="text-[20px] font-bold">Faites-vous découvrir en ligne</h4>
                        <p class="pt-1 text-sm text-gray-500">Exploitez la puissance des outils numériques intelligents
                            pour
                            augmenter les revenus de votre entreprise avec
                            Aleigro</p>
                    </div>
                    <div class="">
                        <h4 class="text-[20px] font-bold">Débloquez votre succès</h4>
                        <p class="pt-1 text-sm text-gray-500">Notre équipe d'experts vous guide à chaque étape
                            de votre processus d'intégration et vous aide
                            à définir une feuille de route claire vers le succès.</p>
                    </div>
                    <div class="">
                        <h4 class="text-[20px] font-bold">Touchez des millions d'acheteurs à travers l'Afrique</h4>
                        <p class="pt-1 text-sm text-gray-500">Présentez vos produits aux acheteurs qui
                            effectuent plus de 280 000 demandes de renseignements par jour dans plus de 190
                            pays et régions.</p>
                    </div>
                    <div class="">
                        <h4 class="text-[20px] font-bold">Déballage Intelligence Artificielle</h4>
                        <p class="pt-1 text-sm text-gray-500">Utilisez notre support d'IA générative pour faire preuve
                            de créativité
                            en créant un contenu sur mesure pour
                            votre marque qui engage les acheteurs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#F7F9FB] py-[20px]">
            <div class="2xl:max-w-[1480px] xl:max-w-[1300px] mx-auto py-[80px] lg:px-6 2xl:px-0">
                <div class="xl:w-[994px] mx-auto w-full text-center md:w-[600px]">
                    <h2 class="text-[42.2px] font-bold">Rationaliser le commerce informel grâce à de puissants
                        outils commerciaux.</h2>
                    <p class="text-slate-700 mt-3 font-normal">Nous comprenons l'importance de professionnaliser
                        le commerce informel et, pour y parvenir, nous avons développé une
                        suite complète d'outils commerciaux robustes adaptés à des besoins spécifiques. Nos outils sont
                        conçus pour rationaliser
                        les processus et améliorer l'efficacité de nos précieux clients au sein de notre écosystème.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-[80px]">
                    <div class="px-6 py-3 rounded shadow-sm bg-white">
                        <span class="icon"><img src="/images/svgs/marketplace.svg" alt=""></span>
                        <h4 class="font-bold text-lg">Un marché numérique</h4>
                        <p class="text-gray-500 pr-[20px] lg:pr-[80px] mt-2">Une plateforme permettant aux entreprises
                            de se connecter avec
                            des distributeurs
                            et des producteurs pour acheter ou vendre leurs produits ou services
                            en ligne.</p>
                    </div>
                    <div class="px-6 pr-[80px] py-6 rounded shadow-sm bg-white">
                        <span class="icon"><img src="/images/svgs/payment.svg" alt=""></span>
                        <h4 class="font-bold text-lg">Paiement sans frontières</h4>
                        <p class="text-gray-500 pr-[20px] lg:pr-[80px] mt-2">Une plateforme permettant aux entreprises
                            de se connecter avec
                            des distributeurs
                            et des producteurs pour acheter ou vendre leurs produits ou services
                            en ligne.</p>
                    </div>
                    <div class="px-6 py-6 rounded shadow-sm bg-white">
                        <span class="icon"><img src="/images/svgs/Management.svg" alt=""></span>
                        <h4 class="font-bold text-lg">Gestion de la logistique</h4>
                        <p class="text-gray-500 pr-[20px] lg:pr-[80px] mt-2">Une plateforme permettant aux entreprises
                            de se connecter avec
                            des distributeurs
                            et des producteurs pour acheter ou vendre leurs produits ou services
                            en ligne.</p>
                    </div>
                    <div class="px-6 py-6 rounded shadow-sm bg-white">
                        <span class="icon"><img src="/images/svgs/marketplace.svg" alt=""></span>
                        <h4 class="font-bold text-lg">Costumes d'affaires IA</h4>
                        <p class="text-gray-500 pr-[20px] lg:pr-[80px] mt-2">Une plateforme permettant aux entreprises
                            de se connecter avec
                            des distributeurs
                            et des producteurs pour acheter ou vendre leurs produits ou services
                            en ligne.</p>
                    </div>
                    <div class="px-6 py-6 rounded shadow-sm bg-white">
                        <span class="icon"><img src="/images/svgs/marketplace.svg" alt=""></span>
                        <h4 class="font-bold text-lg capitalize">Assistance au point de vente (POS)</h4>
                        <p class="text-gray-500 pr-[20px] lg:pr-[80px] mt-2">Une plateforme permettant aux entreprises
                            de se connecter avec
                            des distributeurs
                            et des producteurs pour acheter ou vendre leurs produits ou services
                            en ligne.</p>
                    </div>
                </div>
                <div class="flex justify-center"><router-link to="/register"
                        class="mt:2 lg:mt-5 inline-block px-[52px] py-[12px] bg-red-700 text-white rounded-full font-bold">Inscription
                        gratuite</router-link></div>
            </div>
        </section>

        <section
            class="w-full h-full relative lg:h-[918.28px] after:block after:w-full after:h-[inherit] after:absolute after:bg-opacity-70 after:left-0 after:top-0 after:bg-black py-[100px] about-spec-hero bg-no-repeat bg-cover bg-cente">
            <div class="2xl:max-w-[1480px] xl:max-w-[1300px] mx-auto lg:px-6 2xl:px-0 relative z-10">
                <div class="flex  flex-col md:flex-row justify-between gap-x-8 items-center">
                    <div class="text w-full md:w-[40%]">
                        <h2 class="text-[32px] lg:text-[48.2px] leading-tight font-bold text-white">Créez une boutique
                            numérique qui
                            met en valeur votre marque</h2>
                        <p class="text-white pt-8">Différenciez-vous de la concurrence avec une boutique complète
                            dédiée à vos
                            produits - aucune compétence en codage ou en conception n'est nécessaire ! Rejoignez dès
                            aujourd'hui la communauté des vendeurs Aleigro
                            et regardez votre entreprise se développer comme par magie.</p>
                    </div>
                    <div class="w-full md:w-[60%] mt-8 lg:my-0"><img width="720" class="block"
                            src="/images/pngs/about-mockups.png" alt=""></div>
                </div>
                <div class="text-white w-full py-8 ">
                    <h2 class="text-[32px] font-thin">Notre cible</h2>
                    <div class="grid grid-cols-2  gap-y-5 lg:gap-y-0 lg:grid-cols-12 mt-10 pb-10">
                        <div class="lg:col-span-3">
                            <h3 class="text-[32px] font-bold">15 millions</h3>
                            <p class="font-light">African SMEs</p>
                        </div>
                        <div class="lg:col-span-3">
                            <h3 class="text-[32px]">25 Nations</h3>
                            <p class="font-light -mt-2">À travers l'Afrique</p>
                        </div>
                        <div class="lg:col-span-3">
                            <h3 class="text-[32px]">330 Millions</h3>
                            <p class="font-light -mt-2">Acheteurs en ligne</p>
                        </div>
                        <div class="lg:col-span-3">
                            <h3 class="text-[32px]">10k - 30k</h3>
                            <p class="font-light -mt-2">Demandes mensuelles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="2xl:max-w-[1480px] xl:max-w-[1200px] mx-auto lg:px-0 py-[80px]">
                <div class="md:max-w-[750px] md:mx-auto lg:max-w-full">
                    <h2 class="text-[28px] lg:text-[31.6px] font-bold mb-[15.3px] text-center lg:w-[848px] mx-auto">
                        Deballage – Construire un écosystème de commerce numérique robuste en Afrique</h2>
                    <p class="text-[17.5px] text-gray-500 font-medium text-center lg:w-[848px] mx-auto">Deballage est
                        une
                        plateforme de commerce numérique de nouvelle génération qui permet aux petites et moyennes
                        entreprises de gérer facilement leurs activités de manière durable dans l'espace numérique en
                        les exposant
                        à des outils et en leur fournissant l'infrastructure technologique nécessaire pour se connecter
                        avec les acheteurs
                        du monde entier.</p>
                </div>
                <div class="flex flex-col md:flex-row pt-[60px] lg:max-w-full lg:pt-[120px] gap-x-8">
                    <div class="w-full md:w-[60%] lg:w-[60%]">
                        <div class="">
                            <h3 class="text-[24px] mb-5 font-bold lg:text-[26.6px]">Questions fréquemment posées par le
                                vendeur
                            </h3>
                            <div class="flex flex-col gap-y-3">
                                <div class="py-3 px-6 border-2 rounded-lg accordion-item">
                                    <div class="flex items-center accordion-header justify-between">
                                        <h4 class="text-[18px] font-bold">Tous les produits de Deballage sont-ils
                                            authentiques ?</h4>
                                        <div class="flex items-center">
                                            <span class="inline-block"><img src="/images/svgs/ic_twotone-minus.svg"
                                                    alt=""></span>
                                        </div>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="py-3 px-3 text-gray-500 font-base">Oui. Nous nous engageons à proposer
                                            à
                                            nos
                                            clients uniquement des produits 100% authentiques et originaux. Nous prenons
                                            également toutes
                                            les mesures nécessaires pour garantir que tout vendeur qui vend des
                                            produits non authentiques soit immédiatement radié d'Aleigro.</p>
                                    </div>
                                </div>
                                <div class="py-3 px-6 border-2 rounded-lg accordion-item">
                                    <div class="flex items-center accordion-header justify-between">
                                        <h4 class="text-[18px] font-bold">Tous les produits de Deballage sont-ils
                                            authentiques ?</h4>
                                        <div class="flex items-center">
                                            <span class="inline-block"><img src="/images/svgs/ic_twotone-minus.svg"
                                                    alt=""></span>
                                        </div>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="py-3 text-gray-500 font-base">Oui. Nous nous engageons à proposer à
                                            nos
                                            clients uniquement des produits 100% authentiques et originaux. Nous prenons
                                            également toutes
                                            les mesures nécessaires pour garantir que tout vendeur qui vend des
                                            produits non authentiques soit immédiatement radié d'Aleigro.</p>
                                    </div>
                                </div>
                                <div class="py-3 px-6 border-2 rounded-lg accordion-item">
                                    <div class="flex items-center accordion-header justify-between">
                                        <h4 class="text-[18px] font-bold">Tous les produits de Deballage sont-ils
                                            authentiques ?</h4>
                                        <div class="flex items-center">
                                            <span class="inline-block"><img src="/images/svgs/ic_twotone-minus.svg"
                                                    alt=""></span>
                                        </div>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="py-3 text-gray-500 font-base">Oui. Nous nous engageons à proposer à
                                            nos
                                            clients uniquement des produits 100% authentiques et originaux. Nous prenons
                                            également toutes
                                            les mesures nécessaires pour garantir que tout vendeur qui vend des
                                            produits non authentiques soit immédiatement radié d'Aleigro.</p>
                                    </div>
                                </div>
                                <div class="py-3 px-6 border-2 rounded-lg accordion-item">
                                    <div class="flex items-center accordion-header justify-between">
                                        <h4 class="text-[18px] font-bold">Tous les produits de Deballage sont-ils
                                            authentiques ?</h4>
                                        <div class="flex items-center">
                                            <span class="inline-block"><img src="/images/svgs/ic_twotone-minus.svg"
                                                    alt=""></span>
                                        </div>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="py-3 text-gray-500 font-base">Oui. Nous nous engageons à proposer à
                                            nos
                                            clients uniquement des produits 100% authentiques et originaux. Nous prenons
                                            également toutes
                                            les mesures nécessaires pour garantir que tout vendeur qui vend des
                                            produits non authentiques soit immédiatement radié d'Aleigro.</p>
                                    </div>
                                </div>
                                <div class="py-3 px-6 border-2 rounded-lg accordion-item">
                                    <div class="flex items-center accordion-header justify-between">
                                        <h4 class="text-[18px] font-bold">Tous les produits de Deballage sont-ils
                                            authentiques ?</h4>
                                        <div class="flex items-center">
                                            <span class="inline-block"><img src="/images/svgs/ic_twotone-minus.svg"
                                                    alt=""></span>
                                        </div>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="py-3 text-gray-500 font-base">Oui. Nous nous engageons à proposer à
                                            nos
                                            clients uniquement des produits 100% authentiques et originaux. Nous prenons
                                            également toutes
                                            les mesures nécessaires pour garantir que tout vendeur qui vend des
                                            produits non authentiques soit immédiatement radié d'Aleigro.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="">

                        </div>
                    </div>
                    <div class="w-full md:w-[40%] lg:w-[40%] my-[20px] lg:mt-0">
                        <h3 class="text-[24px] mb-6 font-bold lg:text-[26.6px]">Questions fréquemment posées par le
                            vendeur</h3>
                        <div class="flex flex-col gap-y-5">
                            <div class="flex gap-x-3">
                                <div class="img h-[96px] shadow-sm w-[135px] rounded-md overflow-hidden">
                                    <img class="object-cover h-full" src="/images/jpgs/img-blog.jpg" alt="">
                                </div>
                                <div class="txt">
                                    <p class="text-[14.7px] font-semibold">La révolution verte : exploiter l'agriculture
                                        biologique pour un environnement plus sain</p>
                                    <div class="flex gap-x-1 items-center">
                                        <img src="/images/svgs/tdesign_time.svg" alt="">
                                        <p>23 Oct, 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-x-3">
                                <div class="img h-[96px] shadow-sm w-[135px] rounded-md overflow-hidden">
                                    <img class="object-cover h-full" src="/images/jpgs/image-slider-home-2.webp" alt="">
                                </div>
                                <div class="txt">
                                    <p class="text-[14.7px] font-semibold">La révolution verte : exploiter l'agriculture
                                        biologique pour un environnement plus sain</p>
                                    <div class="flex gap-x-1 items-center">
                                        <img src="/images/svgs/tdesign_time.svg" alt="">
                                        <p>23 Oct, 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-x-3">
                                <div class="img h-[96px] shadow-sm w-[135px] rounded-md overflow-hidden">
                                    <img class="object-cover h-full" src="/images/jpgs/bg-hd-image.jpg" alt="">
                                </div>
                                <div class="txt">
                                    <p class="text-[14.7px] font-semibold">La révolution verte : exploiter l'agriculture
                                        biologique pour un environnement plus sain</p>
                                    <div class="flex gap-x-1 items-center">
                                        <img src="/images/svgs/tdesign_time.svg" alt="">
                                        <p>23 Oct, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#F3F4F6]">
            <div class="px-4 py-8 2xl:max-w-[1480px] xl:max-w-[1200px] mx-auto lg:px-0 lg:py-[80px]">
                <h2 class="text-[24px] md:text-[32px] font-bold">Contactez-nous</h2>
                <div
                    class="py-6 px-4 lg:px-6 lg:py-8 lg:mt-4 w-full bg-white grid grid-cols-1 gap-y-5 lg:gap-y-0 md:grid-cols-3 md:gap-x-4 border-2">
                    <div class="flex gap-x-4">
                        <div class=""><img width="100" src="/images/svgs/icon-contact.svg" alt="icon of a noted book">
                        </div>
                        <div class="">
                            <h4 class="text-[20px] font-bold mb-1">Commencez à vendre sur Deballage</h4>
                            <p>Créez un compte gratuit, répertoriez vos articles et commencez à
                                vendre dès aujourd'hui.</p>
                        </div>
                    </div>
                    <div class="flex gap-x-4">
                        <div class=""><img width="100" src="/images/svgs/icon-information.svg"
                                alt="icon of note book for information"></div>
                        <div class="">
                            <h4 class="text-[20px] font-bold mb-1">Besoin de plus d'informations ?</h4>
                            <p>Demandez un appel pour une aide plus personnalisée de la part d'un
                                expert Deballage.</p>
                        </div>
                    </div>
                    <div class="flex gap-x-4">
                        <div class=""><img width="100" src="/images/svgs/icon-messenger.svg" alt="icon of messenger">
                        </div>
                        <div class="">
                            <h4 class="text-[20px] font-bold mb-1">Impossible de s'inscrire ?</h4>
                            <p>Cliquez ici pour obtenir de l'aide via notre service client.
                            </p>
                            <router-link to="/contacts"
                                class="inline-block lg:m-0 font-bold hover:text-red-700">Contactez-nous</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>


    </main>

</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Footer from '@/components/home/Footer.vue';
import Navbar from '@/components/home/Navbar.vue';
import NavCommand from '@/components/home/NavCommand.vue';
import { about } from '@/assets/js/about';

export default {
    components: { Navbar, Footer, NavCommand },

    setup() {




        onMounted(() => {
            about();
        })

        return {

        }

    }

}

</script>