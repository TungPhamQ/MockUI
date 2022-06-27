import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    currentStep: 1,
    totalStep: 5,
    forms:[
        {
            name: 1,
            key: 1,
        },
        {
            name: 2,
            key: 2,
        },
        {
            name: 3,
            key: 3,
        },
        {
            name: 4,
            key: 4,
        },
        {
            name: 5,
            key: 5,
        },
    ]
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    
}

const mutations = {
        nextStep(state) {
            if(state.currentStep < state.totalStep)
                state.currentStep++
        }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})