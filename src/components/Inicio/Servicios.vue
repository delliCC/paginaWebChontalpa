<template>
    <div class="services-section bg-color pt-70 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Conoce nuestros <span>servicios</span> </h2>
                <p>
                    Contamos con uno de los catálogos más resolutivos del mercado de servicios auxiliares del diagnóstico médico,
                    nuestros más de 1,200 estudios permiten que nuestros pacientes y socios empresariales encuentren la solución
                    a su necesidad.                
                </p>
                <div class="bar"></div>
            </div>

            <div class="row" style="display: flex;justify-content: center;">
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/analisis-clinicos-icon-300x297.png" width="100" height="99" alt="analisis clinicos icon" title="Laboratorios Chontalpa 3">
                        <h3>Análisis Clínicos</h3>
                        <p style="font-size: 14px;">
                            Serie de estudios que ayudan en la detección, prevención y diagnóstico temprano de factores de riesgo.
                        </p>
                        <br>
                        <router-link to="/analisis-clinicos" class="read-btn">Más información</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/biologia-icon.png" width="100" height="99" alt="biologia icon" title="Laboratorios Chontalpa 4">
                        <h3>Biología Molecular</h3>
                        <p style="font-size: 14px;">
                            Estudio e identificación de material genético en los seres vivos desde un punto de vista molecular.
                        </p>
                        <br>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/microbiologia-icon.png" width="100" height="99" alt="microbiologia icon" title="Laboratorios Chontalpa 5">
                        <h3>Microbiología</h3>
                        <p style="font-size: 14px;">
                            Ciencia encargada del estudio y análisis de los microorganismos, seres vivos no visibles al ojo humano, causantes de diversas enfermedades.
                        </p>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/covid-02-icon.png" width="100" height="99" alt="covid 02 icon" title="Laboratorios Chontalpa 6">
                        <h3>Pruebas de COVID-19</h3>
                        <p style="font-size: 14px;">
                            Laboratorio avalado y autorizado por InDRE para procesar pruebas COVID. Más de 100,000 pruebas realizadas.
                        </p>
                        <br>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/usg-icon.png" width="100" height="99" alt="usg icon" title="Laboratorios Chontalpa 7">                        
                        <h3>Ultrasonido</h3>
                        <p style="font-size: 14px;">
                            Método de apoyo para un diagnóstico preciso a través de ondas sonoras ofreciendo una imagen eficiente.
                        </p>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/rayos-x-icon.png" width="100" height="99" alt="rayos x icon" title="Laboratorios Chontalpa 8">
                        <h3>Rayos X</h3>
                        <p style="font-size: 14px;">
                            Detecta lesiones y/o alteraciones en huesos y cavidades del cuerpo humano, apto en distintos diagnósticos de médula osea.
                        </p>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://www.laboratorioschontalpa.com.mx/wp-content/uploads/2022/02/m-laboral-icon.png" width="100" height="99" alt="m laboral icon" title="Laboratorios Chontalpa 9">
                        <h3>Medicina Laboral</h3>
                        <p style="font-size: 14px;">
                            Garantiza que el personal de tu empresa está en condiciones de salud óptimas para desempeñarse de la mejor manera.
                        </p>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-services">
                        <img src="https://laboratorios-chontalpa-file.s3.amazonaws.com/assets/CAMIONSFD.png" width="100" height="99" alt="m laboral icon" title="Laboratorios Chontalpa 9">
                        <h3>Unidad móvil</h3>
                        <p style="font-size: 14px;">
                            Garantiza que el personal de tu empresa está en condiciones de salud óptimas para desempeñarse de la mejor manera.
                        </p>
                        <router-link to="/single-services" class="read-btn">Más información</router-link>
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
        name: 'Servicios'
    }
</script>