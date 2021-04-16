# Práctica 7 - Modelo de datos de un sistema que permite el diseño de menús


## Índice

1. [Introducción](#intro)
2. [Coveralls](#coveralls)
3. [Conclusión](#conclu)
4. [Bibliografía](#biblio)


---------------------

## Introducción<a name="intro"></a>
En esta practica grupal tendremos que establecer un diseño orientado a objetos para diseñar menús, creando una serie de clases como son alimento, plato y menú que nos permitiran emular la estructura. Seguiremos usando lo aprendido en las anteriores practicas como el TypeDoc y TDD, además de los principios SOLID explicados en clase. Tambien empezaremos a utilizar unas nuevas herramientas *Inquirer.js* y *Lowdb* que nos permitiran interactuar con el programa de tal forma que se podran crear nuevos platos y menús. 


---------------------

### Clase Alimento

[Clase Alimento](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/alimento.ts)


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