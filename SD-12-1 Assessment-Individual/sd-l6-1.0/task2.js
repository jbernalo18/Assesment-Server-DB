// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export function listUsers() {
    const URL = getServerURL() + "/users" //ruta de usuarios
    console.log(URL);
    
}