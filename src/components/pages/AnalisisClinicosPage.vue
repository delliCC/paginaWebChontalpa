<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <AnalisisClinico />
        <!-- <BuscaEstudios /> -->
        <CategoriaAnalisis />
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../AnalisisClinicos/PageTitle'
    import AnalisisClinico from '../AnalisisClinicos/Analisis'
    import CategoriaAnalisis from '../AnalisisClinicos/Overview'
    // import BuscaEstudios from '../EstudiosList/Estudio'
    import Dudas from '../Inicio/Dudas'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'AnalisisClinicosPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            AnalisisClinico,
            CategoriaAnalisis,
            // BuscaEstudios,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>