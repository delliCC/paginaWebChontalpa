<!-- estudios detalle delli -->
<template>
    <div class="project-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="project-details-image">
                        <img class="imgEstudiosDetalle" :src="`${imagen_destacada}`"  alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="project-details-image">
                        <img class="imgEstudiosDetalle" :src="`${imagen_portada}`"  alt="image">
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="projects-details-desc">
                        <h3 v-text="`${titulo}`"></h3>
                        <!-- <p v-text="`${descripcion}`"></p> -->

                        <div class="features-text">
                            <h4><i class="flaticon-tick"></i> Método</h4>
                            
                            <ul class="features-list" v-for="metodo in metodos" :key="metodo.id">
                                <li  v-text="`${metodo.metodo.metodo}`"></li>
                            </ul>
                        </div>

                        <div class="features-text">
                            <h4><i class="flaticon-tick"></i> Muestras</h4>
                            <ul class="features-list" v-for="muestra in muestras" :key="muestra.id">
                                <li  v-text="`${muestra.muestra.muestra}`"></li>
                            </ul>
                        </div>

                        <p v-text="`${descripcion}`"></p>

                        <div class="features-text">
                            <h4> Información clínica</h4>
                            <p v-text="`${informacion_clinica}`"></p>
                        </div>
                        <div class="features-text">
                            <h4> Precauciones</h4>
                            <p v-text="`${precauciones}`"></p>
                        </div>
                        <div class="project-details-info">
                            <div class="single-info-box">
                                <!-- <h4>Client</h4>
                                <span>James Anderson</span> -->
                            </div>

                            <div class="single-info-box">
                                <!-- <h4>Category</h4>
                                <span>Network, Marketing</span> -->
                            </div>

                            <div class="single-info-box">
                                <!-- <h4>Date</h4>
                                <span>February 28, 2022</span> -->
                            </div>

                            <div class="single-info-box">
                                <h4>Compartir</h4>
                                <ul class="social">
                                    <li><a href="https://www.facebook.com/LaboratoriosChontalpa/" target="_blank"><i class="flaticon-facebook"></i></a></li>
                                    <!-- <li><a href="#" target="_blank"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="flaticon-pinterest"></i></a></li> -->
                                    <li><a href="#" target="_blank"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>

                            <div class="single-info-box">
                                <!-- <a href="#" class="default-btn">Live Preview</a> -->
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
        name: 'ProjectDetails',
        data() {
            return {
                imagen_destacada:null,
                imagen_portada: null,
                titulo: null,
                fecha: null,
                informacion_clinica: null,
                precauciones: null,
                descripcion: null,
                metodos:[],
                muestras:[],
                modalShow: false,
        
            }
        },
        mounted() {
            this.aplicar()
        },
        methods:{
            aplicar(){
                var id = this.$route.params.id;
            
                this.$axios.get(`/estudios/datos/${id}`).then(response => {
                    // console.log(response)
                    var estudio = response.data.data
                    this.imagen_destacada = estudio.imagen_destacada
                    this.imagen_portada = estudio.imagen_portada
                    this.titulo = estudio.titulo
                    this.fecha = estudio.fecha
                    this.descripcion = estudio.descripcion
                    this.informacion_clinica = estudio.informacion_clinica
                    this.precauciones = estudio.precauciones
                    this.metodos = estudio.metodos
                    this.muestras = estudio.muestras
                    console.log(response)
                })
            },
        }
    }
</script>