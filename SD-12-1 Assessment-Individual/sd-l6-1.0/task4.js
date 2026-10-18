// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export async function delUser(id) {
    const urlUsuarioID = getServerURL() + "/users/" + id;
    await fetch(urlUsuarioID, {method:"DELETE"}); //no se necesita post porque ya esta este metodo que elimina directamente la direccion que guardamos 
    
}