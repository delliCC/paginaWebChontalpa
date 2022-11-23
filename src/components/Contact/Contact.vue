<template>
    <div class="contact-section pb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="contact-text">
                        <h3>¿Quieres que te realicemos una cotización?</h3>
                        <p>Déjanos tus datos y nos pondremos en contacto.</p>
                    </div>

                    <div class="contact-form">
                        <form id="contactForm">
                            <div class="form-group">
                                <label>Nombre</label>
                                <input type="text" name="name" id="name" class="form-control" required placeholder="Nombre">
                            </div>
                            
                            <div class="form-group">
                                <label>Correo electrónico</label>
                                <input type="email" name="email" id="email" class="form-control" required placeholder="Correo electrónico">
                            </div>
                            
                            <div class="form-group">
                                <label>Archivo</label>
                                <input type="file" class="form-control" name="msg_subject" id="msg_subject" required>
                            </div>
                            
                            <div class="form-group">
                                <label>Estudios a cotizar</label>
                                <textarea name="message" class="form-control" id="message" cols="30" rows="6" required placeholder="Estudios a cotizar"></textarea>
                            </div>

                            <div class="send-btn">
                                <button type="submit" class="default-btn">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="contact-image">
                        <img src="../../assets/images/contact.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>