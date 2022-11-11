<template>
    <div class="cintillo-area">
        <div class="container">
            <div class="cintillo-area-content">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" style="display:flex; align-items: center;">
                        <p>
                            LLÁMENOS AL: 800 501 55 55
                        </p>
                        <div class="redes-widget">
                            <ul class="redes-social">
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

                    <div class="col-lg-6 col-md-6">
                        <ul>
                            <li>
                                <router-link to="#">Bolsa de Trabajo</router-link>
                            </li>
                            <li>
                                <router-link to="/preguntas-frecuentes">Preguntas Frecuentes</router-link>
                            </li>
                            <li>
                                <router-link to="https://www.laboratorioschontalpa.com.mx/consulta-tus-resultados/">Consulta tus resultados</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CopyRight',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>