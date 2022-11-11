<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <Mapa />
        <!-- <LocalizaSucursal /> -->
        <Team />
        <Dudas />
        <!-- <Preguntas /> -->
        <!-- <Clients /> -->
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../UnidadMovil/PageTitle'
    // import LocalizaSucursal from '../UnidadMovil/LocalizaSucursal'
    import Mapa from '../UnidadMovil/UnidadM'
    // import Preguntas from '../UnidadMovil/Preguntas'
    import Team from '../UnidadMovil/Team'
    import Dudas from '../Inicio/Dudas'
    // import Clients from '../HomeNine/Clients'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'UnidadMovilPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            Mapa,
            // LocalizaSucursal,
            // Preguntas,
            Team,
            Dudas,
            // Clients,
            Footer,
            CopyRight,
        }
    }
</script>