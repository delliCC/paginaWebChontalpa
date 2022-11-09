<template>
    <div>
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <!-- <BuscaEstudios /> -->
        <RXIndicaciones />
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../RayosX/PageTitle'
    import ServicesDetails from '../RayosX/ServicesDetails'
    import RXIndicaciones from '../RayosXIndicaciones/Tab'
    // import BuscaEstudios from '../EstudiosList/Estudio'
    import Dudas from '../Inicio/Dudas'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'RayosXPage',
        components: {
            Navbar,
            PageTitle,
            ServicesDetails,
            RXIndicaciones,
            // BuscaEstudios,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>