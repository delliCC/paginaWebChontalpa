<template>
    <div>
        <div class="creative-section pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="creative-content">
                            <h3>¿Quiénes <span>somos</span>?</h3>
                            <div class="bar"></div>
                            <p style="text-align: justify;">
                                En Laboratorios Chontalpa proporcionamos servicios auxiliares del diagnóstico médico que garantiza los más altos estándares de calidad para contribuir al cuidado y mejor la salud en la sociedad. Más de 40 años de experiencia respaldan nuestro trabajo.
                            </p>
                            <p style="text-align: justify;">
                                Contamos con 4 laboratorios equipados con la más alta tecnología a nivel mundial y más de 90 sucursales se encuentran distribuidas en las principales ciudades y municipios de los estados de Yucatán, Quintana Roo, Veracruz, Tabasco, Campeche y Chiapas.
                            </p>
                        </div>

                        <div class="quienes-somos-content">
                            <div class="quienes-somos-text">
                                <span>La prevención es la mejor medicina.</span>
                            </div>
                            <!-- <div style="width: 40%; display: flex;">
                                <div style="width: 33%; height: 5px; background: #00944C;"></div>
                                <div style="width: 33%; height: 5px; background: #FF6600;"></div>
                                <div style="width: 33%; height: 5px; background: #0071B6;"></div>
                            </div> -->
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="creative-image">
                            <img src="https://youtu.be/aAE1SPCZNw0" alt="image">

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
    name: 'QuieneSomos',
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