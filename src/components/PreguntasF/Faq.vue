<template>
    <div class="faq-section ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Preguntas <span>Frecuentes</span></h2>
                <!-- <p></p> -->
                <div class="bar"></div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="faq-accordion">
                        <accordion>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Cómo puedo consultar el catálogo de estudios disponibles?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Estamos trabajando en un catálogo virtual donde desde la página web podrá acceder a todos nuestros 
                                        estudios y su información.
                                    </p>
                                    <p>
                                        Mientras tanto puede llamarnos al teléfono <span style="color:#FF6600;">800 501 5555 </span>
                                        donde podremos darle toda la información necesaria sobre sus estudios.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Cómo debo ir preparado para mis exámenes?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p> 
                                        Depende del tipo de estudio a realizar existen indicaciones muy puntuales (ayuno, evitar algunos medicamentos,
                                        abstinencia sexual, entre otros) que habrá que seguir, para ello es importante que durante la solicitud 
                                        de dichos exámenes usted reciba la información adecuada por parte de nuestro representante.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Puedo agendar una cita en sucursal para hacer mis estudios?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Para la gran mayoría de nuestros estudios no es necesario agendar cita, solamente presentarse con las 
                                        condiciones adecuadas y nuestro personal en sucursal le hará la toma o recolección de muestra.
                                    </p>
                                    <p>
                                        Sin embargo, hay algunos estudios que sí requieren cita, por lo que le recomendamos asesorarse, 
                                        puede llamarnos al teléfono <span style="color:#FF6600;">800 501 5555</span> donde podremos darte toda la información
                                        necesaria sobre sus estudios.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Dónde puedo ver la clínica más cercana a mi domicilio?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Contamos con más de 90 sucursales en el sureste de México, para poder encontrar su sucursal más
                                        cercana puede ingresar a este enlace: <span style="color:#FF6600;"> https://www.laboratorioschontalpa.com.mx/sucursales</span>
                                    </p>
                                    <p>
                                        También puede llamarnos al teléfono <span style="color:#FF6600;">800 501 5555</span> donde estaremos atendiendo todas sus dudas.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Cuáles son los horarios de las sucursales?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Nuestro horario de atención en sucursales es de 6:30 a 12:00 hrs, para tomas de muestra 
                                        el horario depende de cada sucursal, le sugerimos comunicarse directamente al Contact Center.
                                    </p>
                                    <p>
                                        En Laboratorios Centrales de Villahermosa y Coatzacoalcos contamos con servicio las 24 horas los 365 días del año.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Cómo puedo agendar mis estudios a domicilio?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        ¡Es muy sencillo! Comuníquese con nosotros al teléfono <span style="color:#FF6600;">800 501 55 55</span> donde nuestros 
                                        representantes le guiarán en el proceso de agenda de toma de domicilio.
                                    </p>
                                    <p>
                                        Recuerde que este servicio es especial para adultos mayores, mujeres embarazadas, pacientes con alguna 
                                        limitación de movimiento.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Cómo puedo solicitar la entrega de mis resultados digitales?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        <ul>
                                            <li style="color: #666666">
                                                Al momento de registrarse usted da un correo electrónico, al cual le llegarán sus 
                                                resultados en formato PDF de manera automática una vez que estén listos.
                                            </li>
                                            <li style="color: #666666">
                                                Desde la página WEB en nuestra sección de <span style="color:#FF6600;">"Consulta tus resultados"</span>, 
                                                usted puede ingresar su Número de Paciente y Clave WEB (las cuales puede encontrar en su 
                                                ticket de venta).
                                            </li>
                                        </ul>
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Dónde puedo encontrar mi "Número de Paciente" y "Clave Web"?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Dentro de su Ticket de Venta puede encontrar, entre otros datos, en la parte superior derecha un número
                                        único de paciente y una clave WEB.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Tienen convenio con empresas?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Tenemos convenios con distintas empresas para dar precios especiales a sus colaboradores
                                        o clientes.
                                    </p>
                                    <p>
                                        Si quiere que su empresa tenga estos beneficios, puede comunicarse con nosotros.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Por qué no me han llegado los resultados de mis estudios?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        La mayoría de nuestros estudios se procesan y se entregan los resultados el mismo día, sin 
                                        embargo hay algunos que requieren mayor tiempo de proceso, y se enviarán en cuanto este haya 
                                        finalizado.
                                    </p>
                                    <p>
                                        Es importante que nuestro representante le informe acerca del tiempo de entrega al momento
                                        de realizar su solicitud de estudios.
                                    </p>
                                    <p>
                                        En caso de que no se cumpla el tiempo de entrega, le pedimos se comunique con nosotros para dar seguimiento.
                                    </p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        ¿Dónde puedo ver sus promociones?
                                        <span></span>
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>
                                        Puede encontrar nuestras promociones en: 
                                        <span style="color:#FF6600;">https://www.laboratorioschontalpa.com.mx/promociones/</span>
                                    </p>
                                    <p>
                                        También puede seguirnos en nuestras redes sociales donde podrá enterarse de las novedades.
                                    </p>
                                </template>
                            </accordion-item>
                        </accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    }
}
</script>