<template>
    <div class="tab-section ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Promociones Vigentes</h2>
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
                                            <br>                                      
                                        </div>
                                    </div>
                                    <div class="col-lg-12" style="display: flex; justify-content: center; flex-wrap: wrap;">
                                        <div class="bodyPromociones" v-for="promocion in tab.promociones" :key="promocion.id">
                                            <div class="tab-image">
                                                <img :src="promocion.image" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12"><br><br>
                                        <div class="tab-content">
                                            <p>{{tab.description}}</p>                                  
                                        </div>
                                    </div>
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
                    title: 'Tabasco, Veracruz, Campeche y Chiapas',
                    promociones: [
                        {
                            id: 1,
                            image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/promociones/REDES.png'
                        },
                        // {
                        //     id: 2,
                        //     image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/RXTorax.png'
                        // },
                    ],
                    description: 'Promociones válidas del 1 al 31 de agosto de 2022 en todas nuestras sucursales en los estados de Yucatán y Quintana Roo.',
                },
                {
                    id: 2,
                    icon: 'bx bx-flag',
                    title: 'Yucatán, Quintana Roo',
                    promociones: [
                        {
                            id: 1,
                            image: 'https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/promociones/REDES.png'
                        }
                    ],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
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