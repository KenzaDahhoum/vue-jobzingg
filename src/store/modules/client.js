import axios from 'axios'

const state = {
  clients: [],
}
const getters = {
}
const actions = {

  // eslint-disable-next-line camelcase
  async addClient({ commit }, client_name) {
    const res = await axios.post('http://localhost:3005/client', { client_name })
    commit('newClient', res.data)
    console.log('test', res.data)
  },
  async deleteClient({ commit }, id) {
    await axios.delete(`http://localhost:3005/client/${id}`)
    commit('removeClient', id)
  },
}
const mutation = {
  // eslint-disable-next-line no-return-assign
  newClient: (state, client) => state.clients = state.client.concat(client),
  removeClient: (state, id) => state.clients.filters(client => client.id !== id),

}
export default {
  state,
  getters,
  actions,
  mutation,

}
