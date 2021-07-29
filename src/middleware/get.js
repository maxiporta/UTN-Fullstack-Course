import axios from 'axios';

export default async function handleGet(url, setdata) {
        const respuesta = await axios.get(url);
        if (respuesta.status === 200) {
          setdata(respuesta.data);
        }
}