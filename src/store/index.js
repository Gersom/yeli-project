export const state = () => ({
  counter: 0
})

export const getters = {
  doneTodos: (state) => {
    return state.counter
  }
}

export const mutations = {
  increment (state, newValue) {
    state.counter = newValue
  }
}

export const actions = {
  sumerDies: ({ commit }, newValue) => {
    commit('increment', newValue)
  }
}
