const moduleA = {
  state: () => {
    return {
      countA: 0
    }
  },
  mutations: {
    incremen  (state) {
        state.coutA++;
    }
  }
}

export default moduleA;