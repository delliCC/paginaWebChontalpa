<template>
    <div class="tab-section ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Rayos X</h2>
                <div class="bar"></div>
            </div>

            <div class="schedule-list-tab">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            {{tab.title}}
                        </li>
                    </ul>
                </div>
                <div class="tabs__container">
                    <div 
                        class="tabs__list"
                        ref='tabsList'
                    >
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <div class="tabs_item">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="tab-content">
                                            <h3>{{tab.title}}</h3>
                                            <p>{{tab.description}}</p>
                                            <br>
                                            <p>{{tab.description2}}</p>
                                            <!-- <div 
                                                class="tab-inner-content"
                                                v-for="inner in tab.inners"
                                                :key="inner.id"
                                            >
                                                <div class="icon">
                                                    <i :class="inner.icon"></i>
                                                    <h3>{{inner.title}}</h3>
                                                    <p>{{inner.desc}}</p>
                                                    <p>{{inner.desc2}}</p>
                                                </div>
                                            </div> -->                                        
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="tab-image">
                                            <img :src="tab.image" alt="image">
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-6">
                                        <div class="tab-image">
                                            <img src="../../assets/images/tab.png" alt="image">
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,

            tabs: [
                {
                    id: 1,
                    icon: 'bx bx-flag',
                    title: 'RX de Tórax',
                    description: 'Los rayos X, o radiografía, del tórax utilizan una dosis muy pequeña de radiación ionizante para producir imágenes del interior del tórax. Se utiliza para evaluar los pulmones, el corazón y la pared del pecho, y se puede utilizar para diagnosticar la falta de aliento, una tos persistente, fiebre, dolor de pecho o lesiones.',
                    description2:'También se puede utilizar para ayudar a diagnosticar y monitorear el tratamiento de una variedad de condiciones de los pulmones tales como la neumonía, el enfisema y el cáncer. Debido a que los rayos X del tórax son rápidos y fáciles, resultan particularmente útiles para diagnósticos y tratamientos de emergencia.',
                    inners: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            title: 'Super Responsive',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                    ],
                    image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                },
                {
                    id: 2,
                    icon: 'bx bx-flag',
                    title: 'RX de Columna',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
                    inners: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            title: 'Super Responsive',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 2,
                            icon: 'flaticon-tick',
                            title: 'High Security',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 3,
                            icon: 'flaticon-tick',
                            title: 'Optimal Choice',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                    ],
                    image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                },
                {
                    id: 3,
                    icon: 'bx bx-flag',
                    title: 'RX de Rodilla',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
                    inners: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            title: 'Super Responsive',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 2,
                            icon: 'flaticon-tick',
                            title: 'High Security',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 3,
                            icon: 'flaticon-tick',
                            title: 'Optimal Choice',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                    ],
                    image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                },
                {
                    id: 4,
                    icon: 'bx bx-flag',
                    title: 'RX de Mano',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
                    inners: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            title: 'Super Responsive',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 2,
                            icon: 'flaticon-tick',
                            title: 'High Security',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 3,
                            icon: 'flaticon-tick',
                            title: 'Optimal Choice',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                    ],
                    image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                },
                {
                    id: 5,
                    icon: 'bx bx-flag',
                    title: 'RX de Pie',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
                    inners: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            title: 'Super Responsive',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 2,
                            icon: 'flaticon-tick',
                            title: 'High Security',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            id: 3,
                            icon: 'flaticon-tick',
                            title: 'Optimal Choice',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                    ],
                    image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>