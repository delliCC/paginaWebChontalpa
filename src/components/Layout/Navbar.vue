<template>
    <div>
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="valzo-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <router-link class="navbar-brand" to="/">
                            <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/laboratorios-chontalpa-logotipo1.png" alt="avatar">
                        </router-link>

                        <div 
                            class="navbar-toggler"
                            @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                            v-bind:class="{ 'active': button_active_state }"
                            v-on:click="button_active_state = !button_active_state"
                        >
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </div>

                        <div class="collapse navbar-collapse" :class="{ show: active }" is-nav>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="/" class="nav-link">
                                        Inicio
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <router-link  to="/localiza-tu-sucursal" class="nav-link">
                                        Localiza tu sucursal
                                    </router-link>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Services 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link  to="/services-one" class="nav-link">
                                                Services
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/services-two" class="nav-link">
                                                Services Two
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/single-services" class="nav-link">
                                                Services Details
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Projects 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link  to="/projects-one" class="nav-link">
                                                Projects One
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/projects-two" class="nav-link">
                                                Projects Two
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/single-projects" class="nav-link">
                                                Projects details
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link  to="/about" class="nav-link">
                                                About
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/team" class="nav-link">
                                                Team
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/pricing" class="nav-link">
                                                Pricing
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/faq" class="nav-link">
                                                FAQ
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                User 
                                                <i class='bx bx-chevron-down'></i>
                                            </a>

                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link  to="/log-in" class="nav-link">
                                                        Log In
                                                    </router-link>
                                                </li>

                                                <li class="nav-item">
                                                    <router-link  to="/sign-up" class="nav-link">
                                                        Sign Up
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/terms-condition" class="nav-link">
                                                Terms & Conditions
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/privacy-policy" class="nav-link">
                                                Privacy Policy
                                            </router-link>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <router-link  to="/error-404" class="nav-link">
                                                404 Error
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/contact" class="nav-link">
                                                Contacto
                                            </router-link>
                                            
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link  to="/blog-one" class="nav-link">
                                                Blog Grid
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/blog-two" class="nav-link">
                                                Blog Right Sidebar
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link  to="/single-blog" class="nav-link">
                                                Blog Details
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <router-link  to="/contact" class="nav-link">
                                        Contactanos
                                    </router-link>
                                    <span class="borde-active transition-center"></span>
                                </li>
                            </ul>
                        </div>

                        <div class="others-options">
                            <div 
                                class="burger-menu"
                                v-on:click="isPopupMethod(isPopup)"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div 
            class="sidebar-modal"
            v-if="isPopup"
        >
            <div class="sidebar-modal-inner">
                <div class="sidebar-about">
                    <div class="title">
                        <h2>??Quieres que te realicemos una cotizaci??n?</h2>
                        <p>D??janos tus datos y nos pondremos en contacto.</p>
                    </div>
                    <div 
                        class="close-btn"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <i class='bx bx-x'></i>
                    </div>
                </div>

                <div class="sidebar-contact-feed">
                    <h2>Contactanos</h2>
                    <div class="contact-form">
                        <form>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" required placeholder="Nombre">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required placeholder="Correo electr??nico">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required class="form-control" placeholder="Tel??fono">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <input type="file" name="msg_subject" id="msg_subject" class="form-control" required placeholder="Subir un archivo/foto">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required placeholder="Estudios a cotizar"></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="send-btn">
                                        <button type="submit" class="send-btn-one">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+800 501 55 55">
                                    +800 501 55 55
                                </a>
                                <span>/</span>
                                <a href="mailto:atencionaclientes@laboratorioschontalpa.com.mx">
                                    atencionaclientes@laboratorioschontalpa.com.mx
                                </a>
                            </h2>

                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            isSticky: false,
            isPopup: false,
            active: false,
            button_active_state: false
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    }
}
</script>