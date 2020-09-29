import {createStore} from 'vuex';

import moduleA from './moduleA';

const store = createStore({
  modules: {
    moduleA
  }
})

export default store;