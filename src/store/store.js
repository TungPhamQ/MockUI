import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { Form1 } from "./form-1.js"
import { Form2 } from "./form-2.js"
import { Form3 } from "./form-3.js"

const state = {
    currentStep: 1,
    totalStep: 5,
    forms:[
        Form1,
        Form2,
        Form3,
        {
            name: 'FORM 4',
            key: 4,
        },
        {
            name: 'FORM 5',
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