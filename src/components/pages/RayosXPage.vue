<template>
    <div>
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <!-- <BuscaEstudios /> -->
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../RayosX/PageTitle'
    import ServicesDetails from '../RayosX/ServicesDetails'
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
            // BuscaEstudios,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>