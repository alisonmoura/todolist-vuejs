import Vue from 'vue';

export default Vue.component('not-found', {
    template: 
    /* html */`
    <div>
        <h1>Ops, página não encontrada</h1>
        <p>
            A página que você está procurando não existe, 
            volte para a página inicial <router-link to="/">aqui</router-link>
        </p>
    </div>
    `  
})