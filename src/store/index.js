import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estudiantes: [],
  },
  mutations: {
    agregarEstudiante(state, estudiante) {
      state.estudiantes.push({...estudiante})
    }
  },
  actions: {},
  modules: {}
});
