import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';
export default async function handleGet(url, setdata) {
      try{
        const respuesta = await axios.get(url);
        if (respuesta.status === 200 ){
          console.log(respuesta.data);
          setdata(respuesta.data);
          return respuesta.data;
        }
      }
      catch(err){
        //alert(err.response.data);
        NotificationManager.error('Mensaje de error', "Hubo un problema al cargar los datos", 5000);
        console.log(err);        
      }
}