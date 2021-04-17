# Práctica 7 - Modelo de datos de un sistema que permite el diseño de menús

## Índice

1. [Introducción](#intro)
2. [Desarrollo](#desarrollo)
3. [Coveralls](#coveralls)
4. [Conclusión](#conclu)
5. [Bibliografía](#biblio)

---------------------

## Introducción<a name="intro"></a>

En esta practica grupal tendremos que establecer un diseño orientado a objetos para diseñar menús, creando una serie de clases como son alimento, plato y menú que nos permitiran emular la estructura. Seguiremos usando lo aprendido en las anteriores practicas como el TypeDoc y TDD, además de los principios SOLID explicados en clase. Tambien empezaremos a utilizar unas nuevas herramientas *Inquirer.js* y *Lowdb* que nos permitiran interactuar con el programa de tal forma que se podran crear nuevos platos y menús.

---------------------

## Desarrollo<a name="desarrollo"></a>

### Clase Alimento### Clase Terminal

Aqui se indican los enlaces para ver el contenido de la clase Terminal y sus respectivas pruebas.

[Clase Terminal](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/terminal.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/plato.spec.ts)

En esta clase vamos a modelar un alimento/ingrediente que sera la clase básica que necesitaremos. La clase es muy simple teniendo solo el constructor y los getters para cada atributo de la clase. Además esta clase tendra un tipo de dato que nos permetira determinar el grupo al que pertenece el alimento.

Aqui se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[Clase Alimento](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/alimento.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)

### Clase Plato

Esta clase representa a los platos que podemos ver en los menus, esta compuesta por alimentos y tendra diferentes categorias. Tendremos un tipo de dato que nos permitira determinar la categoria del plato. La clase tendra los siguientes metodos:

- *composition*: con el cual determinaremos la composición del plato respeto a los alimentos que lo compone, para esto recorremos los nutrientes de cada alimento y lo vamos agregando a los nutrientes respectivos del plato.
- *foodPredominante*: este nos indica que grupo de alimento es el mas abundate en el plato, simplemente vamos contando cada grupo de alimento y el mayor es el que va a determinar el alimento predominante.
- *addPrice*: nos dara el precio total del plato, respeto a los precios de cada alimento.
- *getInfo*: nos permitira visualizar la información del plato.

Por ultimo tenemos los respectivos getters de la clase para cada atributo.

Aqui se indican los enlaces para ver el contenido de la clase Plato y sus respectivas pruebas.

[Clase Plato](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/plato.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/plato.spec.ts)

### Clase Menu

Con esta clase modelamos los menus que estaran compuestos por platos (minimo 3 platos). Determinaremos la cantidad de platos mediante un tipo de dato. Esta clase contendra los siguientes metodos:

- *comprobarMenu*: que nos permitira determinar si el menu cumple la regla de tener al menos 3 categorias diferentes, para esto vemos en cada plato su categoria y si hay mas de 3 entre todos los platos, pues se cumple la regla.
- *composicionNutricionalMenu*: es el mismo principio que en la clase plato, donde por cada plato tenemos una composición que la sumaremos a la composición nutricional del menu.
- *listadoGruposAliments*: gracias a este método podremos saber que el grupo predominante de cada plato del menu.
- *precioTotal*: es el mismo que las anteriores clases, simplemente vamos agregando el precio de cada plato al menu.
- *write*: lo usaremos para visualizar el menu de manera clara.

Por ultimo tenemos los respectivos getters de la clase para cada atributo.

Aqui se indican los enlaces para ver el contenido de la clase Menu y sus respectivas pruebas.

[Clase Menu](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/menu.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/menu.spec.ts)

### Clase Carta

Esta clase estara compuesta por Menus y Platos. Simplemente tendra sus respectivos getters para los atributos y un *write* para visualizar cada menu o plato de la carta.

Aqui se indican los enlaces para ver el contenido de la clase Carta y sus respectivas pruebas.

[Clase Carta](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/carta.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/carta.spec.ts)

### Clase Comanda

Aqui se indican los enlaces para ver el contenido de la clase Comanda y sus respectivas pruebas.

[Clase Comanda](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/comanda.ts)
[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/comanda.spec.ts)



## Coveralls<a name="coveralls"></a>

Lo primero que tenemos que hacer es instalar las dependencias que se encesitan para integrar los informes que genera *Istanbul* sobre el cubrimiento del codigo a partir de las pruebas llevadas a cabo con *Mocha* y *Chai* con la herramienta *Coveralls* para eso usamos el siguiente comando `$ npm install --save-dev nyc coveralls` y seguidamente nos vamos al fichero *package.json* y agregamos el script *"coverage":"nyc npm test"*. Hecho esto ahora creamos el fichero *.coveralls.yml* y añadimos el token que nos da coveralls en su pagina.

Resultados del Coveralls:

```bash

```

---------------------

## Conclusión<a name="conclu"></a>

---------------------

## Bibliografía <a name="biblio"></a>

- [TypeDoc](https://typedoc.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Istanbul](https://istanbul.js.org/)
- [Coveralls](https://coveralls.io/)
- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)
