/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import axios from 'axios'
const state = {
  candidates: [],
}
const getters = {
  allCandidates: state => state.candidates,
}
const actions = {

  async fetchCandidates({ commit }) {
    const res = await axios.get('http://localhost:3005/candidate')
    commit('setCandidates', res.data)
    console.log('afficher', res.candidate)
  },
  async addCandidate({ commit }, candidate) {
    const res = await axios.post('http://localhost:3005/candidate', { candidate })
    commit('newCandidate', res.data)
    console.log('test', res.data)
    console.log('addd', candidate)
  },
  async deleteCandidate({ commit }, id) {
    await axios.delete(`http://localhost:3005/candidate/${id}`)
    commit('removeCandidate', id)
  },
}
const mutations = {
  setCandidates: (state, candidates) => (state.candidates = candidates),
  newCandidate: (state, candidate) => state.candidates = state.candidates.concat(candidate),
  removeCandidate: (state, id) => state.candidates.filters(candidate => candidate.id !== id),
}

export default {

  state,
  getters,
  actions,
  mutations,
}
