<template>
    <div>
        <Navbar />
        <PageTitle />
        <Protfolio />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../AnalisisClinico/PageTitle'
    import Protfolio from '../AnalisisClinico/Analisis'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'AnalisisClinicoPage',
        components: {
            Navbar,
            PageTitle,
            Protfolio,
            Footer,
            CopyRight,
        }
    }
</script>