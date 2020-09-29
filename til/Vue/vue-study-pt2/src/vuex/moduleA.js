const moduleA = {
  state: () => { // 상태 그 자체로 존재
    return {
      countA: 0
    }
  },
  mutations: { //comiit 으로 호출 -state 자체를 바꾼다
    increment (state) {
        state.countA++;
    }
  },
  actions: { // store.dispatch로 호출 -state를 바꾸진 않는다
    incrementAction ({state, commit, rootState}) {
      console.log(state)
      console.log(commit)
      console.log(rootState)

      console.log('incrementAction')

      setTimeout( () => {
        commit('increment');
      }, 3000)
    }

  }
}

export default moduleA;

