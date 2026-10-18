// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

 export async function  addUser(first_name, last_name, email) {
    const urlUsuarios = getServerURL() + "/users";
    const response = await fetch(urlUsuarios);
    const Usuarios = await response.json()
    
    //encontramos el id maximo para asignarlo al nuevo usuario

    let maxID = 0; 
    for (const Usuario of Usuarios){ //recorremos la lista comparando cada id
        if(Usuario.id > maxID){
            maxID = Usuario.id; // guarda el id mas alto  de Usuarios
        }
    }


    const nuevoUsuario = { //estructura de nuevo usuario que se enviara con metodo POST
        id: maxID+1, 
        first_name: first_name,
        last_name: last_name,
        email:email
    }

    await fetch (urlUsuarios, {
        method:"POST",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(nuevoUsuario)
    });

 }