<template>
    <div>
        <Navbar />
        <PageTitle />
        <Blog />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../BlogDetalles/PageTitle'
    import Blog from '../BlogDetalles/Blog'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'BlogDetallePage',
        components: {
            Navbar,
            PageTitle,
            Blog,
            Footer,
            CopyRight,
        }
    }
</script>