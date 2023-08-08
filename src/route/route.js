import { createWebHistory, createRouter } from "vue-router";
import ProductDetail from "../components/detail/detail.vue"
import AppHome from "../components/home/home.vue"
import Login from '../components/login/login.vue'
import Signup from '../components/signup/signup.vue'
const routes = [
    {
        path: "/",
        name : "Home",
        component: AppHome
    },
    {
        path: "/detail/:id",
        name : "Detail",
        component: ProductDetail
    },
    {
        path: "/login",
        name : "Login",
        component: Login
    },
    {
        path: "/signup",
        name : "Signup",
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;