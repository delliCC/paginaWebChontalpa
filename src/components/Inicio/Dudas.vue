<template>
        <div class="container">
            <div class="col-lg-12 col-md-12" style="display:flex; align-items: center;">
                <div class="tienesDudas">
                    <h3>¿Tienes alguna duda?</h3>
                    <a class="btnLLamanos" href="tel:8005015555"><span class="fusion-button-text">LLAME AL: 800 501 55 55</span></a>
                </div>
            </div>
            <div class="col-lg-12 col-md-12" style="display:flex; align-items: center;">
                <div style="width: 100%; display: flex; margin-bottom: 40px;">
                    <div style="width: 33%; height: 5px; background: #00944C;"></div>
                    <div style="width: 33%; height: 5px; background: #FF6600;"></div>
                    <div style="width: 33%; height: 5px; background: #0071B6;"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Dudas',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>