import axios from 'axios';

export default async function handleGet(url, data, setdata) {
        const respuesta = await axios.get(url);
        if (respuesta.status === 200) {
          setdata(respuesta.data);
          data = [...data, respuesta.data];
        }
}