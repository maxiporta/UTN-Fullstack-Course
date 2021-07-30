import { createStore, applyMiddleware } from 'redux';
import handleGet from '../middleware/get';
import handlePut from '../middleware/put';
import thunk from 'redux-thunk';
import libro from '../components/libro/libro';

const estadoInicial  = {
    persona: [],
    categoria: [],
    libro: []
}
function aux(){    
}
function reducer(state = estadoInicial, action) {
    switch (action.type) {
        case 'UPDATE': {
            // Replace the existing state entirely by returning the new value
            return {
                libro: action.libro,
                categoria: action.categoria,
                persona: action.persona
            }
          }
        case 'ADDL':
            return {
                libro: [...state.libro, libro],
                categoria: state.categoria,
                persona: state.persona
            }
        case 'RESET':
            return {
                state
            };
        default:
            return state;
    }
}
export function getty(text){
    return async function gety(dispatch, getState) {
        const inirtial = {text};//example
        const rl = await handleGet("http://localhost:3000/libro/",aux);
        const rc = await handleGet("http://localhost:3000/categoria/",aux);
        const rp = await handleGet("http://localhost:3000/persona/",aux);
        dispatch({ type: 'UPDATE', libro: rl, persona: rp, categoria: rc })
    }
}
export function puttyl(text, form,id){
    return async function putyl(dispatch, getState) {
        handlePut("http://localhost:3000/libro/"+id, text, form);
        dispatch({ type: 'ADDL', libro: form})
    }
}
const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
export default store;