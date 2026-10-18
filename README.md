## Laboratorio: Web API con json-server

En este laboratorio hice 4 funciones en JavaScript que se comunican con una API. La API es un servidor hecho con json-server que guarda los datos en db.json.

Cómo lo corrí
En la carpeta del servidor instalé el paquete y lo arranqué:
   npm install json-server@0.17.4 -> versión mas viejita
   node index.js

El servidor queda en http://localhost:3000. 

Para las pruebas reinicié el servidor y corrí: python -m pytest test.py -v

Las funciones
getServerURL(): devuelve la dirección del servidor
listUsers(): pide los usuarios al servidor, convierte cada uno en texto por separado y los imprime entre corchetes con una coma entre cada usuario. Lo hice así para que coincida con el formato que espera el test
addUser(first_name, last_name, email): busca el id más alto y crea un usuario nuevo con ese id + 1
delUser(id): borra el usuario que tiene ese id


Lo que aprendí
.json() convierte la respuesta en datos de JavaScript y JSON.stringify() hace lo contrario
Para leer se usa GET 
Para crear POST
Para borrar DELETE
