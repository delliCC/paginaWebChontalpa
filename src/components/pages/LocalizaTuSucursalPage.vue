<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <Mapa />
        <!-- <LocalizaSucursal /> -->
        <!-- <Team /> -->
        <Preguntas />
        <!-- <Clients /> -->
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../LocalizaTuSucursal/PageTitle'
    // import LocalizaSucursal from '../LocalizaTuSucursal/LocalizaSucursal'
    import Mapa from '../LocalizaTuSucursal/Mapas'
    import Preguntas from '../LocalizaTuSucursal/Preguntas'
    // import Team from '../HomeNine/Team'
    // import Clients from '../HomeNine/Clients'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'LocalizaTuSucursalPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            Mapa,
            // LocalizaSucursal,
            Preguntas,
            // Team,
            // Clients,
            Footer,
            CopyRight,
        }
    }
</script>