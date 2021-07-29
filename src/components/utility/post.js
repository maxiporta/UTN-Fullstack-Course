import axios from 'axios';

export default async function handleSubmitPost(e, form, url, okText) {
    e.preventDefault();
    try {
        const respuesta = await axios.post(url, form);
        if(respuesta.status === 200){
            alert(okText);
        }
    } catch (err) {
        alert(err.response.data);
        console.log('Error: ', err.message);
    }
}