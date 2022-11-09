<template>
    <div>
        <Navbar />
        <PageTitle />
        <InformacionLaboral />
        <Services />
        <Dudas />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../MedicinaLaboral/PageTitle'
    import InformacionLaboral from '../MedicinaLaboral/InformacionLaboral'
    import Services from '../MedicinaLaboral/Services'
    import Dudas from '../Inicio/Dudas'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'MedicinaLaboralPage',
        components: {
            Navbar,
            PageTitle,
            InformacionLaboral,
            Services,
            Dudas,
            Footer,
            CopyRight,
        }
    }
</script>