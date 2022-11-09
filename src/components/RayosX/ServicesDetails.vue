<template>
    <div>
        <div class="services-details-area ptb-70">
            <div class="container">
                <div class="ultrasonido-title ptb-70">
                    <p>
                        Los Rayos X son un método de imagen a través de radiaciones para diagnosticar y dar tratamiento oportuno a condiciones específicas de cualquier parte del cuerpo.                                
                    </p>
                </div>
                <div class="services-details-overview">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12">
                            <div class="services-details-image">
                                <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/rayosx.png" alt="image">
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
    name: 'ServicesDetails',
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