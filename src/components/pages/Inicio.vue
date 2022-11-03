<template>
    <div>
        <Cintillo />
        <Navbar />
        <Banner />
        <DatosChontalpa />
        <QuieneSomos />
        <Servicios />
        <ProcesoChontalpa />
        <!-- <Choose /> -->
        <Blog />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
import Cintillo from '../Inicio/Cintillo'
import Navbar from '../Layout/Navbar'
import Banner from '../Inicio/Banner'
import DatosChontalpa from '../Common/DatosChontalpa'
import QuieneSomos from '../Common/QuieneSomos'
import Servicios from '../Inicio/Servicios'
import ProcesoChontalpa from '../Inicio/ProcesoChontalpa'
// import Choose from '../Inicio/Choose'
import Blog from '../Common/Blog'
import Footer from '../Layout/Footer'
import CopyRight from '../Layout/CopyRight'

export default {
    name: 'Inicio',
    components: {
        Cintillo,
        Navbar,
        Banner,
        DatosChontalpa,
        QuieneSomos,
        Servicios,
        ProcesoChontalpa,
        // Choose,
        Blog,
        Footer,
        CopyRight,
    }
}
</script>
