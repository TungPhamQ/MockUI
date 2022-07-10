import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentStep: 1,
  totalStep: 6,
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
  PUSH_TO_ERROR_BAG(state, item) {
    const index = state.errorBag.indexOf(item.error);

    if (index === -1) {
      state.errorBag.push(item.error);
      console.log("dont have err in bag");
    } else if (index !== -1 && !item.value) {
      console.log("have err in bag but still wrong");
      return;
    } else {
      state.errorBag.splice(item.error, 1);
      console.log("err fixed");
    }
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
