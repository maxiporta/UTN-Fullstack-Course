import axios from 'axios';
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default async function handleSubmitPost(e, form, url, okText) {
    e.preventDefault();
    try {
        const respuesta = await axios.post(url, form);
        if(respuesta.status === 200){
            NotificationManager.success('Mensaje exitoso', okText);
        }
    } catch (err) {
        NotificationManager.error('Mensaje de error', "Hubo un problema al cargar el dato", 5000);
        console.log(err);
    }
}