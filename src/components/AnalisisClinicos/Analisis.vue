<template>
    <div>
        <div class="services-details-area ptb-70">
            <div class="container">
                <div class="ultrasonido-title ptb-70">
                    <p>
                        Los análisis clínicos consisten en el estudio de los componentes de muestras biológicas que se toman 
                        del cuerpo, tales como la sangre, la orina, el tejido, etc. Los resultados de los análisis clínicos 
                        son de valiosa utilidad para el médico ya que le permiten confirmar o descartar un determinado 
                        diagnóstico.
                    </p>
                    <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/analisis_clinicos/5.png" alt="image">

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
// import ServicesAccordion from '../Ultrasonido/ServicesAccordion'

export default {
    name: 'Analisis',
    components: { 
        // ServicesAccordion
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