<template>
    <div class="protfolio-section ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Nuestros <span>estudios</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="estudios in array_estudios" :key="estudios.id">
                    <div class="single-protfolio">
                        <div class="image">
                            <router-link :to="`/estudios-detalle/${estudios.id}`">
                                <img :src="`${estudios.imagen_portada}`"  alt="image">
                            </router-link>
                        </div>

                        <div class="content">
                            <router-link :to="`/estudios-detalle/${estudios.id}`">
                                <h3>{{estudios.titulo}}</h3>
                            </router-link>
                            <router-link class="read-more" 
                            :to="`/estudios-detalle/${estudios.id}`">Leer más. . . 
                            </router-link>
                        </div>
                    </div>
                </div>
            
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <a href="#" class="prev page-numbers">
                            <i class="flaticon-left"></i>
                        </a>
                        <a href="#" class="page-numbers">1</a>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <a href="#" class="page-numbers">3</a>
                        <a href="#" class="page-numbers">4</a>
                        <a href="#" class="next page-numbers">
                            <i class="flaticon-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Protfolio',
        data() {
            return {
                array_estudios:[]
            }
        },
        mounted() {
            this.estudios()
        },
        methods:{
            estudios() {
                this.$axios.get(`http://localhost/api/estudios`).then(response => {
                    this.array_estudios = response.data.data
                    
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
    }
</script>