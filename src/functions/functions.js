export function nameToID(prop, key, name){//devuelve el valor igual a un valor de una propiedad pasada de un vector(deberia cambair nombre)
    for(var i in prop) {
        if(prop[i][key]===name)
        {
            console.log(prop[i].email);

            return prop[i]['id'];
        }
    }
    return null;
}
export function propName(prop, value){//convierte en un string de objetos en un string de una propiedad
    let string = [];
    for(var i in prop) {
        string.push(prop[i][value]);
    }
    return string;
}
export function nameToX(prop, key, name, X){//simiilar a nametoid pero para una key dada
    for(var i in prop) {
        if(prop[i][key]===name)
        {
            return prop[i][X];
        }
    }
    return null;
}
export const changeFlagArray = (callback, value, array, index)=>{
    const aux = [...array];
    aux[index] = value;
    callback([...aux])
}