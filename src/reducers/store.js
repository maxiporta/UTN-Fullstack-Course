import { createStore } from 'redux';
import handleGet from '../middleware/get';


const estadoInicial  = {
    persona: [],
    categoria: [],
    libro: []
};


function reducer(state = estadoInicial, action) {
    switch (action.type) {
        case 'ADDPERSON':
            return{
                persona: {...action.data}
            }
        case 'DECREMENTAR':
            return {
            };
        case 'RESET':
            return {
            }
        default:
            return state;
    }
}
export default createStore(reducer);