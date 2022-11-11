<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <!-- <BuscaEstudios /> -->
        <Tab />
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../Promociones/PageTitle'
    import ServicesDetails from '../Promociones/Promocion'
    import Tab from '../Promociones/Tab'
    // import BuscaEstudios from '../EstudiosList/Estudio'
    import Dudas from '../Inicio/Dudas'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'PromocionesPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            ServicesDetails,
            Tab,
            // BuscaEstudios,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>