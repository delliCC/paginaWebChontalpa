<template>
    <div class="blog-section pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="`${imagen_destacada}`"  alt="image">
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li>
                                        <span>Publicado el: </span>
                                        <span v-text="`${fecha}`"></span>
                                    </li>
                                </ul>
                            </div>

                            <h3 v-text="`${titulo}`"></h3>
                            <p v-text="`${descripcion_portada}`"></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <blockquote class="wp-block-quote">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <cite>Tom Cruise</cite>
                            </blockquote>
                            <p v-text="`${descripcion}`"></p>
                            <ul class="wp-block-gallery columns-3">
                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-details-4.jpg" alt="image">
                                    </figure>
                                </li>

                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-details-2.jpg" alt="image">
                                    </figure>
                                </li>

                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-details-3.jpg" alt="image">
                                    </figure>
                                </li>
                            </ul>
                            <h3>Four major elements that we offer:</h3>
                            <ul class="features-list">
                                <li>
                                    <i class="flaticon-tick"></i> 
                                    Scientific Skills For getting a better result
                                </li>
                                <li>
                                    <i class="flaticon-tick"></i> 
                                    Communication Skills to getting in touch
                                </li>
                                <li>
                                    <i class="flaticon-tick"></i> 
                                    A Career Overview opportunity Available
                                </li>
                                <li>
                                    <i class="flaticon-tick"></i> 
                                    A good Work Environment For work
                                </li>
                            </ul>
                            <div style="text-align: center;">
                                <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/laboratorios-chontalpa-logotipo1.png" alt="avatar">
                                <p style="color: #FF6600;">www.laboratorioschontalpa.com.mx</p>
                                <h4 style="margin: 0px;"> Dra. Adriana Arellano Toriz</h4>
                                <p style="margin: 0px;">Médico especialista en Patología Clínica</p>
                                <p style="margin: 0px;">Cédula de Especialidad: 11507374</p>
                                <p style="margin: 0px;">Jefe de Vinculación Médica Laboratorios Chontalpa</p>
                            </div>
                        </div>

                        <div class="article-footer">
                            <div class="article-tags">
                                <span>
                                    <i class="bx bx-home"></i>
                                </span>
                                <router-link to="/">Inicio</router-link>
                                <!-- <router-link to="/">Travel</router-link> -->
                            </div>

                            <div class="article-share">
                                <ul class="social">
                                    <li><span>compartir:</span></li>
                                    <li>
                                        <a href="https://www.facebook.com/LaboratoriosChontalpa/" target="_blank">
                                            <i class="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="post-navigation">
                            <div class="navigation-links">
                                <div class="nav-previous">
                                    <router-link to="/">
                                        <i class="flaticon-left"></i> 
                                        Anterior Post
                                    </router-link>
                                </div>
                                <div class="nav-next">
                                    <router-link to="/">
                                        Siguiente Post 
                                        <i class="flaticon-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="comments-area">
                            <h3 class="comments-title">4 Comments:</h3>
                            <ol class="comment-list">
                                <li class="comment">
                                    <article class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="../../assets/images/clients/client-1.jpg" class="avatar" alt="image">
                                                <b class="fn">John Jones</b>
                                                <span class="says">says:</span>
                                            </div>
                                            <div class="comment-metadata">
                                                <router-link to="/">
                                                    <time>April 24, 2022 at 10:59 am</time>
                                                </router-link>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </article>

                                    <ol class="children">
                                        <li class="comment">
                                            <article class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="../../assets/images/clients/client-2.jpg" class="avatar" alt="image">
                                                        <b class="fn">Steven Smith</b>
                                                        <span class="says">says:</span>
                                                    </div>
                                                    <div class="comment-metadata">
                                                        <router-link to="/">
                                                            <time>April 24, 2022 at 10:59 am</time>
                                                        </router-link>
                                                    </div>
                                                </footer>
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">Reply</a>
                                                </div>
                                            </article>
                                        </li>

                                        <ol class="children">
                                            <li class="comment">
                                                <article class="comment-body">
                                                    <footer class="comment-meta">
                                                        <div class="comment-author vcard">
                                                            <img src="../../assets/images/clients/client-3.jpg" class="avatar" alt="image">
                                                            <b class="fn">Sarah Taylor</b>
                                                            <span class="says">says:</span>
                                                        </div>
                                                        <div class="comment-metadata">
                                                            <router-link to="/">
                                                                <time>April 24, 2022 at 10:59 am</time>
                                                            </router-link>
                                                        </div>
                                                    </footer>
                                                    <div class="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
                                                    <div class="reply">
                                                        <a href="#" class="comment-reply-link">Reply</a>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>
                                    </ol>
                                </li>

                                <li class="comment">
                                    <article class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="../../assets/images/clients/client-4.jpg" class="avatar" alt="image">
                                                <b class="fn">James Anderson</b>
                                                <span class="says">says:</span>
                                            </div>
                                            <div class="comment-metadata">
                                                <router-link to="/">
                                                    <time>April 24, 2022 at 10:59 am</time>
                                                </router-link>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </article>
                                </li>
                            </ol>

                            <div class="comment-respond">
                                <h3 class="comment-reply-title">Leave a Reply</h3>
                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked 
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post A Comment">
                                    </p>
                                </form>
                            </div>
                        </div> -->
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

export default {
        name: 'Blog',
        components: { 
            Sidebar
        },
        data() {
            return {
                imagen_destacada:null,
                titulo: null,
                fecha: null,
                descripcion_portada: null,
                descripcion: null,
                modalShow: false,
        
            }
        },
        mounted() {
            this.aplicar()
        },
        methods:{
            aplicar(){
                var id = this.$route.params.id;
            
                this.$axios.get(`/blog/datos/${id}`).then(response => {
                    // console.log(response)
                    var blog = response.data.data
                    this.imagen_destacada = blog.imagen_destacada
                    this.titulo = blog.titulo
                    this.fecha = blog.fecha
                    this.descripcion_portada = blog.descripcion_portada
                    this.descripcion = blog.descripcion
                    console.log(this.imagen_destacada )
                //     this.datosPostulante.puesto_id = vacante.puesto_id
                //     this.datosPostulante.sucursal_id = vacante.sucursal_id
                    
                //     this.datosPostulante.puesto_solicitado = vacante.puesto.puesto
                //     this.datosPostulante.sucursal = vacante.sucursal.sucursal
                })
            },
        }
    }
</script>