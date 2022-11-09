<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../Ultrasonido/PageTitle'
    import ServicesDetails from '../Ultrasonido/ServicesDetails'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'UltrasonidoPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            ServicesDetails,
            Footer,
            CopyRight,
        }
    }
</script>