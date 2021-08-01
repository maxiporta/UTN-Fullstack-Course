import { createStore, applyMiddleware } from 'redux';
import handleGet from '../middleware/get';
import handlePut from '../middleware/put';
import thunk from 'redux-thunk';
import libro from '../components/libro/libro';
import { urlroot,urlpersona,urlcategoria,urllibro,port } from '../urls';

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
        const rl = await handleGet(urlroot+port+urllibro,aux);
        const rc = await handleGet(urlroot+port+urlcategoria,aux);
        const rp = await handleGet(urlroot+port+urlpersona,aux);
        dispatch({ type: 'UPDATE', libro: rl, persona: rp, categoria: rc })
    }
}
export function puttyl(text, form,id){
    return async function putyl(dispatch, getState) {
        handlePut(urlroot+port+urllibro+id, text, form);
        dispatch({ type: 'ADDL', libro: form})
    }
}
const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
export default store;