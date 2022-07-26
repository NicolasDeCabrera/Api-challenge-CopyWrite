# Api Challenge CopyWrite



### Descripcion

Esta `API` centa con un `ENDPOINT` el cual invierte el texto que le enviamos por `query` en la `url` y verifica si la palabra es `palindroma` o no. la API está Desarrollada en Node y Express.

<!-- 
<p align="left">
  <img width=250 src="yoda.jpg" />
</p> -->
### ENDPOINTS

Estas son las rutas de la api:

**GET/iecho?text=palabra**:

* Recibe la query text de tipo `String` 

* Si la palabra no es `Palindroma` devuelve un json con el siguiente formato: `{'text'='palabraInvertida', 'palindrome': false}`

* Si la palabra es `Palindroma` devuelve un json con el siguiente formato: `{'text'='palabraInvertida', 'palindrome': true}`

* Si lo que le ingresamos es un numero devuelve un json con el siguiente formato: `{'error': 'no-text'}`
 
 **Ejemplos**:

GET/iecho?text=hola:
* Respuesta: `{'text'='aloh', 'palindrome': false}`
* status: `200`

GET/iecho?text=ana:
* Respuesta: `{'text'='ana', 'palindrome': true}`
* status: `200`


GET/iecho?text=123:
* Respuesta: `{'error': 'no-text'}`
* status: `400`
