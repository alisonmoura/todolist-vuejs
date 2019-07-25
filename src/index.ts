import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins/vee-validate';

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    computed: {
        snackbar() {
            return this.$store.state.alertas.snackbar;
        }
    }
})