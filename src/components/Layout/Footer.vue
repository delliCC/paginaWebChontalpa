<template>
    <div class="footer-section pt-70 pb-60">
        <div class="container">
         

            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="footer-heading">
                            <h3>About Us</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        <ul class="footer-social">
                            <li>
                                <a href="#" target="_blank">
                                    <i class="flaticon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class="flaticon-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="footer-heading">
                            <h3>Important Links</h3>
                        </div>

                        <ul class="footer-quick-links">
                            <li>
                                <router-link to="/about">About Us</router-link>
                            </li>
                            <li>
                                <router-link to="/projects">Project</router-link>
                            </li>
                            <li>
                                <router-link to="/services">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/blog">Blog</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>    
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="footer-heading">
                            <h3>Featured Service</h3>
                        </div>
                        <ul class="footer-quick-links">
                            <li>
                                <a href="#">IT Management</a>
                            </li>
                            <li>
                                <a href="#">Development</a>
                            </li>
                            <li>
                                <router-link to="/services">Services</router-link>
                            </li>
                            <li>
                                <a href="#">UI/UX Design</a>
                            </li>
                            <li>
                                <a href="#">Support Engineer</a>
                            </li>
                        </ul>
                    </div>    
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="footer-heading">
                            <h3>Contact</h3>
                        </div>

                        <div class="footer-info-contact">
                            <i class="flaticon-phone-call"></i>
                            <h3>Phone</h3>
                            <span><a href="tel:+882-569-756">+123(456)123</a></span>
                        </div>

                        <div class="footer-info-contact">
                            <i class="flaticon-envelope"></i>
                            <h3>Email</h3>
                            <span><a href="mailto:hello@valzo.com">hello@valzo.com</a></span>
                        </div>

                        <div class="footer-info-contact">
                            <i class="flaticon-pin"></i>
                            <h3>Address</h3>
                            <span>32 st Kilda Road, Melbourne VIC, 3004 Australia</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>