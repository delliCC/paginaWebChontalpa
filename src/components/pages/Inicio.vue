<template>
    <div>
        <Cintillo />
        <Navbar />
        <Banner />
        <Features />
        <Creative />
        <Services />
        <Development />
        <Choose />
        <Blog />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
import Cintillo from '../Inicio/Cintillo'
import Navbar from '../Layout/Navbar'
import Banner from '../Inicio/Banner'
import Features from '../Common/Features'
import Creative from '../Common/Creative'
import Services from '../Inicio/Services'
import Development from '../Inicio/Development'
import Choose from '../Inicio/Choose'
import Blog from '../Common/Blog'
import Footer from '../Layout/Footer'
import CopyRight from '../Layout/CopyRight'

export default {
    name: 'Inicio',
    components: {
        Cintillo,
        Navbar,
        Banner,
        Features,
        Creative,
        Services,
        Development,
        Choose,
        Blog,
        Footer,
        CopyRight,
    }
}
</script>
