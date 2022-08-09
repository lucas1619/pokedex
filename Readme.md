# Pokedex
## Arquitectura
- La arquitectura usada es la llamada "Clean Architecture" aplicada al front-end la cual consta de las siguientes capas:
  1. **Servicios Externos**: es la capa donde estaran todos los servicios de terceros que alimentaran de información a mi aplicación de React, en este caso es la API publica [PokeApi](https://pokeapi.co/). En el proyecto esta capa esta representada por la carpeta **Services** la cual contiene 2 clases: **Api** y **PokemonApi**.
     1.  **Clase Api:** Es la clase padre de todos mis servicios, la cual va a tener la URL base de mi API y los 4 métodos basicos para realizar consultas 
     2.  **Clase PokemonApi**: Es una clase hija de Api, la cual va a llamar a los distintos endpoints de [PokeApi](https://pokeapi.co/). A esta clase se le agrego el patrón **Singleton**, el cual me va a permitir tener una sola instancia de esta clase en toda mi aplicación para optimizar el uso de la memoria.

   2. **Adaptadores**: es la capa donde voy a filtrar toda la informacion que me llegue de mi capa de servicios externos, ya que no toda la informacion voy a necesitar usar en mi aplicación. Esta capa esta representada  en la carpeta **Adapters**
   
   3. **Componentes**: es la capa donde se va a realizar la lógica de negocio. Para el presente proyecto se eligio usar React + Typescript para la elaboración de los componentes. Esta capa esta representada por las carpetas **Components** y **Pages**
   
   4. **Dominio**: es el core de mi aplicacion, es la representacion logica de mi solución. Esta capa esta represesentada por las carpetas **Models** y **Store**
## Librerias y Frameworks
   - Vite
   - React
   - React Router
   - React Intersection Observer
   - Axios
   - Tailwind
   - Redux
## Enlaces
- [Vercel](https://pokedex-lucas1619.vercel.app/)
- [Repositorio en GitHub](https://github.com/lucas1619/pokedex)