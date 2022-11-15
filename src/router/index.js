import { createWebHistory, createRouter } from "vue-router";

// All Pages
import InicioPageOne from '../components/pages/Inicio'
import HomePageTwo from '../components/pages/HomePageTwo'
import HomePageThree from '../components/pages/HomePageThree'
import HomePageFour from '../components/pages/HomePageFour'
import HomePageFive from '../components/pages/HomePageFive'
import HomePageSix from '../components/pages/HomePageSix'
import HomePageSeven from '../components/pages/HomePageSeven'
import HomePageEight from '../components/pages/HomePageEight' 
import HomePageNine from '../components/pages/HomePageNine'
import AboutPage from '../components/pages/AboutPage'
import LocalizaTuSucursalPage from '../components/pages/LocalizaTuSucursalPage'
import UnidadMovilPage from '../components/pages/UnidadMovilPage'
import MedicinaLaboralPage from '../components/pages/MedicinaLaboralPage'
import ServicesTwoPage from '../components/pages/ServicesTwoPage'
import Covid from '../components/pages/CovidPage'
import MicrobiologiaPage from '../components/pages/MicrobiologiaPage'
import UltrasonidoPage from '../components/pages/UltrasonidoPage'
import RayosXPage from '../components/pages/RayosXPage'
import AnalisisClinicosPage from '../components/pages/AnalisisClinicosPage' 
import PromocionesPage from '../components/pages/PromocionesPage'
import ProjectsPageOne from '../components/pages/ProjectsPageOne'
// import SingleProjectsPage from '../components/pages/SingleProjectsPage'
import BlogOnePage from '../components/pages/BlogOnePage'
import BlogPage from '../components/pages/BlogPage'
import BlogDetallePage from '../components/pages/BlogDetallePage'
import ContactPage from '../components/pages/ContactPage'
import TeamPage from '../components/pages/TeamPage'
import PricingPage from '../components/pages/PricingPage'
import PreguntasFrecuentesPage from '../components/pages/PreguntasFrecuentesPage'
import LogInPage from '../components/pages/LogInPage'
import SignUpPage from '../components/pages/SignUpPage'
import TermsConditionsPage from '../components/pages/TermsConditionsPage'
import PrivacyPolicyPage from '../components/pages/PrivacyPolicyPage'
import ErrorPage from '../components/pages/ErrorPage'

const routes = [
    {path: '/', component: InicioPageOne},
    {path: '/home-two', component: HomePageTwo},
    {path: '/home-three', component: HomePageThree},
    {path: '/home-four', component: HomePageFour},
    {path: '/home-five', component: HomePageFive},
    {path: '/home-six', component: HomePageSix},
    {path: '/home-seven', component: HomePageSeven},
    {path: '/home-eight', component: HomePageEight},
    {path: '/home-nine', component: HomePageNine},
    {path: '/about', component: AboutPage},
    {path: '/localiza-tu-sucursal', component: LocalizaTuSucursalPage},
    {path: '/unidad-movil', component: UnidadMovilPage},
    {path: '/medicina-laboral', component: MedicinaLaboralPage},
    {path: '/services-two', component: ServicesTwoPage},
    {path: '/pruebas-de-covid', component: Covid},
    {path: '/microbiologia', component: MicrobiologiaPage},
    {path: '/ultrasonido', component: UltrasonidoPage},
    {path: '/analisis-clinicos', component: AnalisisClinicosPage},
    {path: '/rayos-x', component: RayosXPage},
    {path: '/promociones', component: PromocionesPage},
    {path: '/projects-one', component: ProjectsPageOne},
    // {path: '/estudios-detalle/:id', component: SingleProjectsPage},
    {path: '/blog-one', component: BlogOnePage},
    {path: '/blog', component: BlogPage},
    {path: '/blog-detalle/:id', component: BlogDetallePage},
    {path: '/contact', component: ContactPage},
    {path: '/team', component: TeamPage},
    {path: '/pricing', component: PricingPage},
    {path: '/preguntas-frecuentes', component: PreguntasFrecuentesPage},
    {path: '/log-in', component: LogInPage},
    {path: '/sign-up', component: SignUpPage},
    {path: '/terms-condition', component: TermsConditionsPage},
    {path: '/privacy-policy', component: PrivacyPolicyPage},
    {path: '/error-404', component: ErrorPage},
]
    
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,
    scrollBehavior() {
      return { top: 0 };
    },
  });
  
export default router;