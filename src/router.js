import Vue from 'vue';
import VueRouter from 'vue-router';
import Transactions from "@/pages/Transactions";
import Index from "@/pages/Add";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: Transactions},
        {path: '/transactions/create', component: Index},
    ]
});

export {router};