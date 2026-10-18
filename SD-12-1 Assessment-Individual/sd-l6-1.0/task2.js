// Task 2: listUsers()

import { getServerURL } from "./task1.js";
import { inspect } from "node:util";


export async function listUsers() {
    const urlUsuarios = getServerURL() + "/users" //ruta de usuarios
    const response =  await fetch(urlUsuarios); //entrega toda la respuesta de la peticion incluyendo los codigos
    const data = await response.json();  //guarda el cuerpo ya convertido a objetos/arreglos de JS
    const texto = data.map(user => inspect(user)).join(",\n");
    console.log("[\n" + texto + "\n]");
      
}