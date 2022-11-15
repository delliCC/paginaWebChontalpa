<template>
    <div class="blog-section pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
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
                
                <div class="col-lg-4 col-md-12">
                    <Sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../Common/Sidebar'

    // export default {
    //     name: 'Blog',
    //     components: { 
    //         Sidebar
    //     }
    // }
    export default {
        // name: 'Blog',
        components: { 
            Sidebar
        },
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