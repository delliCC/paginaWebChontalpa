<template>
    <div class="blog-section pt-50 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Casos <span>Clinicos</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="blog in array_blog" :key="blog.id">
                    <div class="single-blog">
                        <div class="image">
                            <router-link :to="`/blog-detalle/${blog.id}`">
                                <img :src="`${blog.imagen_portada}`"  alt="image">
                            </router-link>
                        </div>

                        <div class="content">
                            <span>{{blog.fecha}}</span>
                            <h3>
                                <router-link :to="`/blog-detalle/${blog.id}`">
                                    {{blog.titulo}}
                                </router-link>
                            </h3>
                            <p>{{blog.descripcion_portada}}</p>
                            <router-link class="read-more" :to="`/blog-detalle/${blog.id}`">Leer más...</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // name: 'Blog',
        data() {
            return {
                name: 'Blog',
                array_blog:[]
            }
        },
        mounted() {
            this.blog()
        },
        methods:{
            blog() {
                this.$axios.post(`http://localhost/api/blog`).then(response => {
                    this.array_blog = response.data.data
                    console.log(this.array_blog)
                    
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