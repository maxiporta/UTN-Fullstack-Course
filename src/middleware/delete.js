import axios from 'axios';

export default async function handleDelete(url, okText) {
    try {
        const respuesta = await axios.delete(url);
        if(respuesta.status === 200){
            alert(okText);
        }
    } catch (err) {
        alert(err.response.data);
        console.log('Error', err.message);
    }
}