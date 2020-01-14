EVALUACIÓN FINAL MÓDULO 3:
El ejercicio consiste en realizar una llamada a una API (en este caso de Rick & Morty) y obtener una lista de personajes de esta para que aparezca en la pantalla. Adems, tenemos un buscador para poder filtrar por nombre del personaje y si hacemos click en alguno de ellos, nos aparece más información.

El proyecto ha sido elaborado usando la librería React de JavaScript.

1.- Pintar la lista.
2.- Filtrar por nombre del personaje.
3.- Obtener la información detalla del personaje que seleccionamos.
4.- Añadir la navegación entre las páginas con React Router.

Los componenetes del proyecto son:
✓	APP: En este componente de clase controlaremos los estados y ejecutaremos nuestros métodos que posteriormente pasaremos por props hasta el resto de componentes. El componentDidMount ejecutará al cargar la página la información que recogeremos de la API.
✓	FILTER: Componente dummy donde manejamos el evento que realiza el usuario cuando escribe el nombre del personaje. Esta información le llega por props desde el componente APP.
✓	CHARACTERLIST: Componente de dummy que recibe por props la información que le llega de la API y donde mapeamos para que pinte el listado de los personajes. Este componente es intermedio entre APP y CHARACTERITEM.
✓	CHARACTERITEM: En este componente detallamos la información del listado de personajes. En él le hemos pasado por props la información para que pinte la imagen, el nombre y la especie de cada uno.
✓	CHARACTERDETAIL: Otro componente dummy donde nos aparece la información más detallada de cada personaje si hacemos click. En él vemos además del nombre, la imagen y el origen; si el personaje es humano o alien y si está vivo o muerto.
