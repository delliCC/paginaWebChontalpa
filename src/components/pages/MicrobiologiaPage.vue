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
    import PageTitle from '../Microbiologia/PageTitle'
    import ServicesDetails from '../Microbiologia/ServicesDetails'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'MicrobiologiaPage',
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