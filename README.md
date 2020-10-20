# Redux & Redux-Saga

Como has podido ver, redux saga es un middleware que se implementa en redux para manejar acciones asincronas.

La estructura básica de un sistema de front usando Redux, en general es:

````
src/
|----redux/
|      |---user/
|      |     |---reducer.js
|      |     |---actions.js
|      |     |---saga.js
|      |
|      |---reducers.js
|      |---actions.js
|      |---sagas.js
|      |---types.js

````

Básicamente, la carpeta `src/redux/`contiene una carpeta por cada "entidad" que quieras guardar en el estado (store), y 4 archivos en los que unificaremos todos los elementos de las carpetas.

Dejo en el repo una pequeña app con la estructura similar a la que manejamos en los proyectos.
