import axios from 'axios'

const state = {
  candidates: [],
}
const getters = {
  allCandidates: state => state.candidates,
}
const actions = {
  async fetchCandidates({ commit }) {
    const res = await axios.get('http://localhost:3000/candidate')
    commit('setCandidates', res.data)
    console.log('test', res.data)
  },
  async addCandidate({ commit }, candidate_name) {
    const res = await axios.post('http://localhost:3000/candidate', { candidate_name})
    commit('newCandidate', res.data)
  },
}
const mutations = {
  setCandidates: (state, candidates) => (state.candidates = candidates),
  newCandidate: (state, candidate) => state.candidates.unshift(candidate),
}

export default {

  state,
  getters,
  actions,
  mutations,
}
