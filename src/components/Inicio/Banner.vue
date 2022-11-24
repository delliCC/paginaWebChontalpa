<template>
    <div class="main-banner-area">
        <div class="home-sliders">
            <carousel 
                :autoplay="5000"
                :settings="settings"
                :wrap-around="true"
                :breakpoints="breakpoints"
            >
                <slide 
                    v-for="slide in array_slider" 
                    :key="slide.id"
                >
                    <div>
                        <router-link :to="slide.direccionar" class="default-btn">
                            <!-- :style="{ 'background': 'url(' + slide.image + ')' }" -->
                            <img :src="`${slide.imagen}`" class="banner-img" alt="image">
                            <!-- <div class="main-banner-content">
                                <h1>{{slide.heading}}</h1>
                                <p>{{slide.description}}</p>
                                <div class="banner-btn"></div>
                            </div> -->
                        </router-link>
                    </div>
                </slide>
            
                <template #addons>
                    <Pagination />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Banner',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        array_slider:[],
        // carouselItems: [
        //     {
        //         id: 1,
        //         class: 'home-item item-bg1',
        //         heading: 'aaaa',
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.',
        //         btnLink: '/promociones',
        //         btnText: 'Get Started',
        //         image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/slider/chontalpa_social.png'
        //     },
        //     {
        //         id: 2,
        //         class: 'home-item item-bg2',
        //         heading: 'eee',
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.',
        //         btnLink: '/contact',
        //         btnText: 'Get Started',
        //         image: 'https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/10/1280-delli-1.png'
        //     },
        //     {
        //         id: 3,
        //         class: 'home-item item-bg3',
        //         heading: 'Make Real-Life Connections With IT',
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.',
        //         btnLink: '/contact',
        //         btnText: 'Get Started',
        //         image: 'https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/07/resultado_linea.png'
        //     },
        // ],
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
    }),
    mounted() {
        this.slider()
    },
    methods:{
        slider() {
            this.$axios.get(`/slider`).then(response => {
                this.array_slider = response.data.data
                
            }).catch(() => {
            // this.$toast({
            // component: ToastificationContent,
            // props: {
            //     title: 'Error al cargar datos',
            //     icon: 'ThumbsDownIcon',
            //     variant: 'danger',
            // },
            // })
            })
        },
    }
})
</script>