import Vue from 'vue';
import FormatterUtil from './../util/FormatterUtil';

export default Vue.component('detalhe-tarefa', {

    template: 
    /* html */
    `
    <div>
        <h1>Detalhe Tarefa</h1>
        <h2>Título da tarefa: {{tarefaSelecionada.titulo}}</h2>
        <p>Data prazo: {{FormatterUtil.formatarData(tarefaSelecionada.prazo)}}</p>
        <p>Descrição: {{tarefaSelecionada.descricao}}</p>
        <p>Situação da tarefa: {{tarefaSelecionada.finalizado == "true" ? 'Finalizada' : 'Pendente'}}</p>
    </div>
    `,
    props: {
        tarefaSelecionada: {}
    },
    data() {
        return {
            FormatterUtil: FormatterUtil
        }
    }

})