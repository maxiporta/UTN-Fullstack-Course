import { createStore } from 'redux';
import handleGet from '../middleware/get';


const estadoInicial  = {
    persona: [],
    categoria: [],
    libro: []
};


function reducer(state = estadoInicial, action, url, data) {
    switch (action.type) {
        case 'GET':
            handleGet(url, data);
        case 'DECREMENTAR':
            return {
                numero: state.numero - 1,
            };
        case 'RESET':
            return {
                numero: 0
            }
        default:
            return state;
    }
}
export default createStore(reducer);