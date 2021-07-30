import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default async function handleDelete(url, okText) {
    try {
        const respuesta = await axios.delete(url);
        if(respuesta.status === 200){
            NotificationManager.success('Mensaje exitoso', okText);
        }
    } catch (err) {
        //alert(err.response.data);
        NotificationManager.error('Mensaje de error', "Hubo un problema al borrar el dato", 5000);
        console.log(err);

    }
}