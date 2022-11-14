<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <Pricing />
        <!-- <Tab /> -->
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../PreguntasF/PageTitle'
    import Pricing from '../PreguntasF/Faq'
    // import Tab from '../PreguntasF/Tab'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'FaqPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            Pricing,
            // Tab,
            Footer,
            CopyRight,
        }
    }
</script>