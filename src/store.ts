import Vue from 'vue';
import Vuex from 'vuex';
import tarefas from './stores/tarefas';
import alertas from './stores/alertas';

Vue.use(Vuex); // $store

export default new Vuex.Store({
   modules: {
       tarefas, 
       // $store.state.tarefas.tarefas
       // $store.getters.tarefas.getTarefaEdicao
       // $store.commit('tarefas/mutationTarefas')
       // $store.dispatch('tarefas/carregarTarefas')
       alertas // $store.state.alertas.snackbar
   }
})