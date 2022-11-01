<template>
    <div>
        <div class="creative-section pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="creative-content">
                            <h3>¿Quiénes <span>somos</span>?</h3>
                            <div class="bar"></div>
                            <p>
                                En Laboratorios Chontalpa proporcionamos servicios auxiliares del diagnóstico médico que garantiza los más altos estándares de calidad para contribuir al cuidado y mejor la salud en la sociedad. Más de 40 años de experiencia respaldan nuestro trabajo.
                            </p>
                        </div>

                        <div class="progress-content">
                            <div class="progress-text">
                                <span>Development</span>
                                <p>75%</p>
                            </div>

                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-content">
                            <div class="progress-text">
                                <span>Branding Design</span>
                                <p>45%</p>
                            </div>

                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 45%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-content">
                            <div class="progress-text">
                                <span>SEO & Digital Marketing</span>
                                <p>80%</p>
                            </div>

                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="creative-image">
                            <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/nuestras+instalaciones-03.png" alt="image">

                            <div class="creative-video">
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
                        <iframe src="https://youtu.be/aAE1SPCZNw0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Creative',
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