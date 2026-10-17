// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export async function listUsers() {
    const URL = getServerURL() + "/users" //ruta de usuarios
    const response =  await fetch(URL);
    const data = await response.json();
    console.log(data);
      
}