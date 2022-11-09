<template>
    <accordion>
        <accordion-item>
            <template v-slot:accordion-trigger>
                <button class="accordion-title">
                    <i class="bx bx-plus"></i>
                    Análisis microbiológicos ambientales
                </button>
            </template>
            <template v-slot:accordion-content>
                <ul>
                    <li>Abdominal</li>
                    <li>Obstétrico</li>
                    <li>Pélvico</li>
                    <li>Tiroides</li>
                    <li>Prostático</li>
                    <li>De mama</li>
                </ul>
            </template>
        </accordion-item>
        <accordion-item>
            <template v-slot:accordion-trigger>
                <button class="accordion-title">
                    <i class="bx bx-plus"></i>
                    Análisis microbiológicos en alimentos
                </button>
            </template>
            <template v-slot:accordion-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </template>
        </accordion-item>
        <accordion-item>
            <template v-slot:accordion-trigger>
                <button class="accordion-title">
                    <i class="bx bx-plus"></i>
                    Análisis en superficies inertes
                </button>
            </template>
            <template v-slot:accordion-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </template>
        </accordion-item>
    </accordion>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'ServicesAccordion',
    components: {
        Accordion,
        AccordionItem
    }
}
</script>