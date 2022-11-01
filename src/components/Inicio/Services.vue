<template>
    <div class="services-section bg-color pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Conoce nuestros estudios</h2>
                <p>
                    Contamos con uno de los catálogos más resolutivos del mercado de servicios auxiliares del diagnóstico médico, nuestros más de 1,200 estudios permiten que nuestros pacientes y socios empresariales encuentren la solución a su necesidad.
                </p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-services">
                        <div class="icon">
                            <i class="flaticon-it"></i>
                        </div>
                        <h3>IT Consultancy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                        <router-link to="/single-services" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services">
                        <div class="icon">
                            <i class="flaticon-setting"></i>
                        </div>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                        <router-link to="/single-services" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services">
                        <div class="icon">
                            <i class="flaticon-promotion"></i>
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                        <router-link to="/single-services" class="read-btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="default-shape">
            <div class="shape-1">
                <img src="../../assets/images/shapes/shape-4.png" alt="image">
            </div>

            <div class="shape-2 rotateme">
                <img src="../../assets/images/shapes/shape-5.svg" alt="image">
            </div>

            <div class="shape-3">
                <img src="../../assets/images/shapes/shape-6.svg" alt="image">
            </div>

            <div class="shape-4">
                <img src="../../assets/images/shapes/shape-7.png" alt="image">
            </div>

            <div class="shape-5">
                <img src="../../assets/images/shapes/shape-8.png" alt="image">
            </div>
        </div>

        <div class="services-shape">
            <img src="../../assets/images/cloud.png" alt="image">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Services'
    }
</script>