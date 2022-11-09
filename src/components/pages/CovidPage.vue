<template>
    <div>
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <Pricing />
        <!-- <BuscaEstudios /> -->
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../PruebasCovid/PageTitle'
    import ServicesDetails from '../PruebasCovid/SliderCovid'
    // import BuscaEstudios from '../EstudiosList/Estudio'
    import Pricing from '../PruebasCovid/Pricing'
    import Dudas from '../Inicio/Dudas'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'RayosXPage',
        components: {
            Navbar,
            PageTitle,
            Pricing,
            ServicesDetails,
            // BuscaEstudios,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>