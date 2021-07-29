import axios from 'axios';

export default async function handlePut(url, okText, form) {
    try {
        const respuesta = await axios.put(url, form);
        if(respuesta.status === 200){
            alert(okText);
        }
    } catch (err) {
        alert(err.response.data);
        console.log('Error: ', err.message);
    }
}