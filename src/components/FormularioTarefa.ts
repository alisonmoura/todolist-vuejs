import Vue from 'vue';
import TarefaService from '../service/TarefaService';

export default Vue.component('form-tarefa', {
    template:
    /* html */
    `
    <form>
        <v-container grid-list-md>
            <h2>{{ indiceEdicao != null ? 'Editar tarefa' : 'Nova tarefa' }}</h2>
            <v-layout row wrap>
                <v-flex xs12 sm4>
                    <v-text-field
                        filled
                        :loading="carregando"
                        :disabled="carregando"
                        name="titulo"
                        v-validate="'required'"
                        type="text" 
                        label="Título da tarefa" 
                        v-model="task.titulo"
                        hint="Ex: Tomar café da manhã"
                        :error-messages="errors.collect('titulo')"
                        >
                    </v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field 
                        filled
                        :loading="carregando"
                        :disabled="carregando"
                        name="descricao"
                        v-validate="'required'"
                        type="text" 
                        label="Descrição da tarefa" 
                        v-model="task.descricao"
                        hint="Ex: Preparar café da manhã e depois tomá-lo etc..."
                        :error-messages="errors.collect('descricao')"
                        >
                    </v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-menu
                        v-model="datepicker"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                        >
                        <template v-slot:activator="{on}">
                            <v-text-field 
                                filled
                                :loading="carregando"
                                :disabled="carregando"
                                name="data"
                                v-validate="'required'"
                                type="date" 
                                label="Prazo de conclusão" 
                                v-model="task.prazo"
                                hint="Ex: 25/12/2019"
                                :error-messages="errors.collect('data')"
                                v-on="on"
                                readonly
                                >                    
                            </v-text-field>
                        </template>
                        <v-date-picker 
                            v-model="task.prazo"
                            @input="datepicker = false"
                            >
                        </v-date-picker>
                    </v-menu>
                    
                </v-flex>
            </v-layout>
            <v-layout justify-end>
                <v-btn :loading="carregando" color="success" type="button" @click="salvar">Salvar</v-btn>
                <v-btn :loading="carregando" text color="error" type="button" @click="cancelar">Cancelar</v-btn>
            </v-layout>
        </v-container>
    </form>
    `,
    data() {
        return {
            datepicker: false,
            carregando: false,
        }
    },
    methods: {
        async salvar() {
            this.carregando = true;
            if(await this.$validator.validate()){
                this.$store.dispatch('tarefas/salvarTarefa', this.task);
                this.$store.dispatch('alertas/showSuccessSnackbar', 'Tarefa salva com sucesso!');
                this.cancelar(); 
                this.carregando = false;
            } else {
                this.carregando = false;
                this.$store.dispatch('alertas/showErrorSnackbar', 'Preencha todos os campos obrigatórios');
            }

        },
        cancelar() {
            this.task = {};
            this.$store.dispatch('tarefas/limparEdicao');
            this.$emit('voltar');
        }
    },
    computed: {
        indiceEdicao() {
            return this.$store.state.tarefas.indiceEdicao;
        },
        task: {
            get() {
                return this.$store.getters['tarefas/getTarefaEdicao'];
            },
            set(taskAlterada) {
                // this.$store.state.tarefas.tarefas[this.$store.state.indiceEdicao] = taskAlterada;
            }
        }
    }
})