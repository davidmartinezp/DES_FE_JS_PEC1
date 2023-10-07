# La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.
## ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica almenos 3 de estas ventajas.

El uso de etiquetas semánticas en HTML5 proporciona varias ventajas:

1. **Mejora la Accesibilidad:** Las etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, entre otras, proporcionan un significado claro y estructura al contenido, lo que beneficia a las personas que utilizan lectores de pantalla.

2. **Facilita el SEO:** Los motores de búsqueda se basan en las etiquetas (entre otras cosas) para comprender el contenido de una página web, lo que puede mejorar el posicionamiento en los resultados de búsqueda.

3. **Facilita la escalabilidad:** El uso de etiquetas semánticas hace que el código HTML sea más legible y escalable, ya que proporciona una estructura lógica y organizada.

## Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

Algunos ejemplos de APIs HTML5 son:

1. **API de Geolocalización:** Permite a las aplicaciones web acceder a la ubicación del usuario.

2. **API de Almacenamiento Web (localStorage y sessionStorage):** Permite almacenar datos en el navegador del usuario de manera persistente (localStorage) o de sesión (sessionStorage).

3. **API de Canvas:** Proporciona una forma de dibujar gráficos y animaciones en el navegador utilizando JavaScript.

## Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

CSS3 ofrece la funcionalidad de "Media Queries" que permite aplicar diferentes estilos CSS según las características del dispositivo, como el tamaño de pantalla.

```css
@media screen and (max-width: 768px) {
  /* Estilos para pantallas con un ancho máximo de 768px */
}
```

## Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

1. **Tipado Estático:** TypeScript permite definir tipos de datos para variables, lo que ayuda a atrapar errores en tiempo de compilación y a mejorar la robustez del código.

2. **Interfaces:** Facilita la definición de interfaces y estructuras de datos complejas, lo que hace que el código sea más claro y mantenible.

3. **Compilación:** TypeScript se compila a JavaScript, lo que significa que es compatible con todos los navegadores y entornos JavaScript.

4. **Ecosistema Amplio:** TypeScript es compatible con muchas bibliotecas y frameworks populares, lo que lo convierte en una elección sólida para proyectos grandes y pequeños.

# El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

## Cita al menos 2 de estos preprocesadores.

Sass

Less

## Cita al menos 4 ventajas que ofrecen estos preprocesadores.

1. **Variables:** Los preprocesadores permiten definir variables que facilitan la reutilización de valores y futuras modificaciones.

2. **Anidamiento:** Puedes anidar reglas CSS dentro de otras reglas, lo que hace que el código sea más legible.

3. **Mixins:** Los mixins permiten definir bloques de código CSS reutilizables que se pueden incluir en múltiples reglas.

4. **Operaciones Matemáticas:** Los preprocesadores permiten realizar operaciones matemáticas en valores CSS.

## Explica brevemente en qué consisten los sourcemaps.

Los sourcemaps son archivos que vinculan el código CSS generado a partir de un preprocesador con el código fuente original del preprocesador.

## Explica qué es un transpilador.

Un transpilador es una herramienta que toma código fuente escrito en un lenguaje y lo transforma en código fuente equivalente en otro lenguaje. En el contexto de los preprocesadores CSS, un transpilador toma el código escrito en Sass, Less u otro preprocesador y lo convierte en código CSS válido que los navegadores pueden entender.

# El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

## Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

### Sistemas de control de versiones

Git

Subversion (SVN) 

### Herramientas de Gestión de Módulos

npm (Node Package Manager)

Yarn

## Cita y explica al menos 3 comandos de Git.

1. **`git init`:** Inicializa un nuevo repositorio Git en un directorio vacío.

2. **`git clone <URL>`:** Clona un repositorio Git existente desde una URL remota a tu directorio local.

3. **`git add <archivo>`:** Agrega archivos al área de preparación (staging) para que se incluyan en el próximo commit.

## Cita y explica brevemente las características más definitorias de WebPack.

1. **Módulos:** Webpack permite gestionar módulos JavaScript, CSS y otros tipos de archivos, facilitando la organización del código y la gestión de dependencias.

2. **Bundler:** Empaqueta múltiples archivos y sus dependencias en uno o varios archivos de salida, reduciendo el número de solicitudes al servidor y mejorando el rendimiento.

3. **Carga Diferida:** Permite la carga diferida (lazy) de módulos, lo que acelera la carga inicial de la página.

4. **Ecosistema Extensible:** Webpack es altamente personalizable y se puede extender mediante complementos (plugins).
