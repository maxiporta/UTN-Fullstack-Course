import axios from 'axios';
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default async function handlePut(url, okText, form) {
    try {
        const respuesta = await axios.put(url, form);
        if(respuesta.status === 200){
            NotificationManager.success('Mensaje exitoso', okText);
        }
    } catch (err) {
        NotificationManager.error('Mensaje de error', "Hubo un problema al tratar de editar el dato", 5000);
        console.log('Error: ', err.message);
    }
}