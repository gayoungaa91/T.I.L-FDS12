import {useReducer, useCallback, useRef } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        
      }
    default:
      return state; 
  }
    
}
function useInputs() {
  const [form, dispatch] = useRef(reducer, initialForm)




  // const [form, setForm] = useState(initialForm)
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(form => ({...form, [name]: value}))
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;