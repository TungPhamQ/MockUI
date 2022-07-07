import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentStep: 1,
  totalStep: 5,
  errorBag: [],
  //   forms: [
  //     Form1,
  //     Form2,
  //     Form3,
  //     {
  //       name: "FORM 4",
  //       key: 4,
  //     },
  //     {
  //       name: "FORM 5",
  //       key: 5,
  //     },
  //   ],
};

//to handle state
const getters = {};

//to handle actions
const actions = {};

const mutations = {
  nextStep(state) {
    if (state.currentStep < state.totalStep) state.currentStep++;
  },
  PUSH_TO_ERROR_BAG(state, error) {
    const index = state.errorBag.indexOf(error);
    console.log(index);
    if (index !== -1) {
      state.errorBag.splice(error, 1);
      return;
    }
    state.errorBag.push(error);

    console.log(state.errorBag);
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
