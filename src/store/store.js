import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentStep: 1,
  totalStep: 6,
  errorBag: [],
  isDisabled: false,
};

//to handle state
const getters = {};

//to handle actions
const actions = {};

const mutations = {
  nextStep(state) {
    if (state.currentStep < state.totalStep) state.currentStep++;
  },
  prevStep(state) {
    if (state.currentStep > 1) state.currentStep--;
  },
  PUSH_TO_ERROR_BAG(state, item) {
    const index = state.errorBag.indexOf(item.error);

    if (index === -1 && !item.value) {
      state.errorBag.push(item.error);
      console.log("dont have err in bag");
      return;
    } else if (index !== -1 && !item.value) {
      console.log("have err in bag but still wrong");
      return;
    } else {
      state.errorBag.splice(item.error, 1);
      console.log("err fixed");
    }
  },
  DISABLING_INPUT(state) {
    state.isDisabled = !state.isDisabled;
  },
  BACK_TO_STEP_ONE(state) {
    state.currentStep = 1;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
