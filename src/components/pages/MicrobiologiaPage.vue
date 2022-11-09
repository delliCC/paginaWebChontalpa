<template>
    <div>
        <Navbar />
        <PageTitle />
        <ServicesDetails />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../Microbiologia/PageTitle'
    import ServicesDetails from '../Microbiologia/ServicesDetails'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'MicrobiologiaPage',
        components: {
            Navbar,
            PageTitle,
            ServicesDetails,
            Footer,
            CopyRight,
        }
    }
</script>