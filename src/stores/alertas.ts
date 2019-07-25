import { Module } from 'vuex';

const module:Module<any, any> = {
    namespaced: true,
     state: {
        snackbar: {
            message: '',
            color: '',
            show: false
        }
    },
    // mutations 
    mutations:{
        mutationOpenSnackbar(state, payload){
            state.snackbar.message = payload.message;
            state.snackbar.color = payload.color;
            state.snackbar.show = true;
        },
        mutationCloseSnackbar(state) {
            state.snackbar.show = false;
        }
    },
    // methods -> actions
    actions: {
        showSnackbar(context, payload) {
            context.commit('mutationOpenSnackbar', payload)
        },
        showSuccessSnackbar(context, message) {
            context.commit('mutationOpenSnackbar', { message: message, color: 'success' } )
        },
        showErrorSnackbar(context, message) {
            context.commit('mutationOpenSnackbar', { message: message, color: 'error' } )
        },
        showWarningSnackbar(context, message) {
            context.commit('mutationOpenSnackbar', { message: message, color: 'warning' } )
        },
        showInfoSnackbar(context, message) {
            context.commit('mutationOpenSnackbar', { message: message, color: 'info' } )
        },
        closeSnackbar(context){
            context.commit('mutationCloseSnackbar')
        }
    }
}

export default module;