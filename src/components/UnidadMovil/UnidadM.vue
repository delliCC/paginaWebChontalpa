<template>
    <div class="about-section ptb-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div style="width: 55%; margin: auto;">
                        <div class="section-title">
                            <h2>Cuida el bienestar de tu organización</h2>
                            <h2><span> nosotros el de tus colaboradores </span> </h2>
                            <!-- <p>
                                Disminuye los tiempos de traslado y tiempos perdidos de personal con la nueva “Unidad Móvil” de Laboratorios Chontalpa. Nosotros vamos a donde tú estés.
                            </p> -->
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="services-details-video">
                        <div class="details-image">
                            <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-19-at-11.17.28-AM-1.jpeg" alt="image">
                        </div>

                        <div class="details-video">
                            <div
                                class="video-btn popup-youtube"
                                v-on:click="isPopupMethod(isPopup)"
                                style="cursor: pointer"
                            >
                                <i class="bx bx-play"></i>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="about-tab">
                        <p style="text-align: justify;">
                            Disminuye los tiempos de traslado y tiempos perdidos de personal con la nueva 
                            <span style="font-weight: bold; color: #FF6600;">Unidad Móvil</span> de Laboratorios Chontalpa. Nosotros vamos a donde tú estés.
                        </p>

                        <p style="text-align: justify;">
                            Laboratorios Chontalpa presenta las Unidades Móviles como apoyo al sector empresarial del país,
                            son unidades desarrolladas para llegar a cualquier destino y que se ajustan a las necesidades de las empresas 
                            que están comprometidas con el cumplimiento de normativas y responsabilidad empresarial con sus colaboradores.
                        </p>

                        <div class="about-list-tab">
                            <div class="tabs">
                                <ul class="tabs__header">
                                    <li 
                                        class="tabs__header-item" 
                                        v-for="tab in tabs" 
                                        v-on:click="selectTab (tab.id)" 
                                        v-bind:class="{ 'active': activeTab == tab.id }"
                                        :key="tab.id"
                                    >
                                        {{tab.name}}
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
                                            <!-- <div class="text">
                                                <h3>{{tab.title}}</h3>
                                            </div> -->

                                            <ul class="list">
                                                <li
                                                    v-for="list in tab.lists"
                                                    :key="list.id"
                                                >
                                                    <i :class="list.icon"></i>
                                                    {{list.text}}
                                                </li>
                                            </ul>

                                            <!-- <p>
                                                Laboratorios Chontalpa presenta las Unidades Móviles como apoyo al sector empresarial del país,
                                                son unidades desarrolladas para llegar a cualquier destino y que se ajustan a las necesidades de las empresas 
                                                que están comprometidas con el cumplimiento de normativas y responsabilidad empresarial con sus colaboradores.
                                            </p> -->

                                            <!-- <a class="default-btn" href="#">
                                                Discover More
                                            </a> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    class="popup-video" 
                    v-if="isPopup"
                >
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div 
                                class="popup-overlay-close"
                                v-on:click="isPopupMethod(isPopup)"
                            >
                                <div class="popup-overlay-close-line"></div>
                                <div class="popup-overlay-close-line"></div>
                            </div>
                            <div class="play-video">
                                <!-- <iframe src="https://youtu.be/aAE1SPCZNw0"></iframe> -->
                                <iframe src="https://player.vimeo.com/video/751309504?h=a454769e2e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
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
    name: 'UnidadM',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            isPopup: false,
            tabs: [
                {
                    id: 1,
                    name: '¿Qué estudios se pueden realizar en las unidades móviles?',
                    title: 'How To Generate Your Creative Idea With IT Business',
                    lists: [
                        {
                            id: 1,
                            icon: 'flaticon-tick',
                            text: '+ 900 Análisis Clínicos',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-tick',
                            text: 'Rayos X',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-tick',
                            text: 'Electrocardiograma',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-tick',
                            text: 'Audiometría',
                        },
                    ],
                    description: 'Laboratorios Chontalpa presenta las Unidades Móviles como apoyo al sector empresarial del país, son unidades desarrolladas para llegar a cualquier destino y que se ajustan a las necesidades de las empresas que están comprometidas con el cumplimiento de normativas y responsabilidad empresarial con sus colaboradores.',
                  //  btnText: 'Discover More',
                    // btnLink: '',
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
        },
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>