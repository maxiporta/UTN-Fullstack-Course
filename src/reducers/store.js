import { createStore } from 'redux';
import handleGet from '../middleware/get';


const estadoInicial  = {
    persona: [],
    categoria: [],
    libro: []
};

function reducer(state = estadoInicial, action) {
    switch (action.type) {
        case 'UPDATEDB':
            return{
                persona: [...action.dato]
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