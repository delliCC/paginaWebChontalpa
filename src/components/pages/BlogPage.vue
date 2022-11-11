<template>
    <div>
        <Cintillo />
        <Navbar />
        <PageTitle />
        <Blog />
        <Footer />
        <CopyRight />
    </div>
</template>

<script>
    import Cintillo from '../Inicio/Cintillo'
    import Navbar from '../Layout/Navbar'
    import PageTitle from '../Blog/PageTitle'
    import Blog from '../Blog/Blog'
    import Footer from '../Layout/Footer'
    import CopyRight from '../Layout/CopyRight'

    export default {
        name: 'BlogPage',
        components: {
            Cintillo,
            Navbar,
            PageTitle,
            Blog,
            Footer,
            CopyRight,
        }
    }
</script>