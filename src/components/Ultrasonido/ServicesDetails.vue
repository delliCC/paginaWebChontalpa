<template>
    <div>
        <div class="services-details-area ptb-70">
            <div class="container">
                <!-- <div class="services-details-video">
                    <div class="details-image">
                        <img src="../../assets/images/services-details-bg.jpg" alt="image">
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

                    <div class="text">
                        <h3>We Provide Useful Services</h3>
                        <p>El Ultrasonido es un método de imagen realizado por medio de ondas sonoras que nos ayuda a determinar una conclusión diagnóstica clara y específica.</p>
                    </div>
                </div> -->

                <!-- <div class="services-details-overview">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-desc">
                                <h3>Exceptional Best Products</h3>
                                <p>
                                    En Laboratorios Chontalpa contamos con una amplia gama de estudios de ultrasonido realizado por personal altamente capacitado, con equipos de alta resolución y tecnología.
                                </p>

                                <div class="features-text">
                                    <h4>Reasons to Go with vegetables</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                </div>

                                <div class="features-text">
                                    <h4>Summer Vegetables Fruits Collection</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                </div> 
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-image">
                                <img src="../../assets/images/services-details-1.jpg" alt="image">
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="ultrasonido-title ptb-70">
                    <p>El Ultrasonido es un método de imagen realizado por medio de ondas sonoras que nos ayuda a determinar una conclusión diagnóstica clara y específica.</p>
                </div>

                <div class="services-details-overview">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-image">
                                <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/07/usg.png" alt="image">
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-desc">
                                <!-- <h3>We Provide Useful Services</h3> -->
                                <p>
                                    En Laboratorios Chontalpa contamos con una amplia gama de estudios de ultrasonido realizado por personal altamente capacitado, con equipos de alta resolución y tecnología.
                                </p>

                                <div class="services-details-accordion">
                                    <ServicesAccordion />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services-details-video">
                    <!-- <div class="details-image">
                        <img src="../../assets/images/services-details-bg.jpg" alt="image">
                    </div> -->

                    <!-- <div class="details-video">
                        <div
                            class="video-btn popup-youtube"
                            v-on:click="isPopupMethod(isPopup)"
                            style="cursor: pointer"
                        >
                            <i class="bx bx-play"></i>
                        </div>
                    </div> -->

                    <div class="tienesDudas">
                        <h3>¿Tienes alguna duda?</h3>
                        <a class="btnLLamanos" href="tel:8005015555"><span class="fusion-button-text">LLAME AL: 800 501 55 55</span></a>
                    </div>
                    <div style="width: 100%; display: flex; margin-bottom: 40px;">
                        <div style="width: 33%; height: 5px; background: #00944C;"></div>
                        <div style="width: 33%; height: 5px; background: #FF6600;"></div>
                        <div style="width: 33%; height: 5px; background: #0071B6;"></div>
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
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesAccordion from '../Ultrasonido/ServicesAccordion'

export default {
    name: 'ServicesDetails',
    components: { 
        ServicesAccordion
    },
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>