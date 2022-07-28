# Api Challenge CopyWrite



### Descripcion

Esta `API` cuenta con un `ENDPOINT` el cual invierte el texto que le enviamos por `query param` en la `url` y verifica si la palabra o frase es `palindroma` o no. la API está Desarrollada en Node y Express.

### ENDPOINTS

Estas son las rutas de la api:

**GET/iecho?text=palabra**:

* Recibe el parametro text de tipo `String` 

* Si la palabra no es `Palindroma` devuelve un json con el siguiente formato: `{'text':'palabraInvertida', 'palindrome': false}`

* Si la palabra es `Palindroma` devuelve un json con el siguiente formato: `{'text':'palabraInvertida', 'palindrome': true}`

* Si lo que le ingresamos es un numero, devuelve un json con el siguiente formato: `{'error': 'no-text'}`
 
 **Ejemplos**:

GET/iecho?text=hola:
* Respuesta: `{'text':'aloh', 'palindrome': false}`
* status: `200`

GET/iecho?text=ana:
* Respuesta: `{'text':'ana', 'palindrome': true}`
* status: `200`

GET/iecho?text=123:
* Respuesta: `{'error': 'no-text'}`
* status: `400`

**Instrucciones:**

Para ejecutar cualquier comando debe posicionarse en la misma carpeta donde se encuentra el archivo package.json.

* Correr la API: `npm start`
* Correr los tests: `npm test`
