import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './views/HomePage.vue';
import Bibliotheque from "@/views/Bibliotheque.vue";
import Magasin from "@/views/Magasin.vue";
import Profil from "@/views/Profil.vue";
import Panier from "@/views/Panier.vue";
import GameComponent from "@/components/pages/GameComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/bibliotheque',
            name: 'bibliotheque',
            component: Bibliotheque,
        },
        {
            path: '/magasin',
            name: 'magasin',
            component: Magasin,
        },
        {
            path: '/profil',
            name: 'profil',
            component: Profil,
        },
        {
            path: '/panier',
            name: 'panier',
            component: Panier,
        },
        {
            path: '/jeu/:id',
            name: '/jeu/:id',
            component: GameComponent,
        }
    ]
}) ;

export default router;