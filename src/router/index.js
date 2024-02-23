import {
    createWebHistory,
    createRouter
} from "vue-router";
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import Books from  '../views/BooksView.vue'
import Detail from '../views/DetailView.vue'


const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/books',
        component: Books
    },
    {
        path: '/detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router