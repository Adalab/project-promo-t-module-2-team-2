
# Proyecto 2. Awesome profile-cards
En este proyecto vamos a realizar una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. Lo bueno de este proyecto es que será una herramienta de la que os podréis beneficiar. Será una aplicación web interactiva creada por vosotras y que podéis usar para crear vuestras propias tarjetas de visita profesionales.

## Especificaciones
En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:
Uso avanzado de formularios HTML
Maquetación usando CSS avanzado, como flex y grid
Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first
Gestión de eventos en el navegador (al hacer click, pasa x, etc.)
Acceso y envío de datos a un servidor
Almacenamiento en local usando LocalStorage
Uso de git para el control de versiones del proyecto
Publicación del resultado en Internet usando GitHub Pages
El proyecto consta de 2 páginas:
 - Una página landing de bienvenida
 -  Una página con la aplicación de crear tarjetas
La aplicación funciona siguiendo estos pasos:
 - Permitir al usuario elegir el estilo de la tarjeta, eligiendo paleta de colores
 - Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que será la muestra del resultado final
 - Permitir que el usuario pueda crear una web con su tarjeta y compartirla por Twitter
 - 
La tarjeta de visita deberá tener los siguientes campos (entre paréntesis el nombre del campo a usar):

Nombre completo (full_name)
Profesión (desarrolladora front-end ;) (job)
Datos personales
Teléfono (phone)
Correo electrónico (email)
RRSS
LinkedIn (linkedin)
GitHub (github)

Respecto a la interacción con la web:
- Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta
- Las 3 partes del proceso de creación serán elementos colapsables, que al hacer clic en el título se mostrará/ocultará solo mostrando una sección a la vez
- Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página siga disponible y podamos borrarla con un botón de Reset. Para esto, debemos definir una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador
Para compartir en Twitter seguiremos 2 pasos:
- Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena
- Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta

## Diseño

El diseño de este proyecto está en zeplin <https://app.zeplin.io/project/5c94ca7ad58aef056fdd6a67>.



## Creatividad

Aunque el diseño del proyecto está cerrado, hemos dejado algunos aspectos que podéis personalizar:
- Usar un logo personalizado del equipo (o nombre del equipo) en el pie de página, tras la información de copyright
- Utilizar un fondo personalizado en la previsualización de la tarjeta
- Añadir más paletas a las definidas en el diseño, pero no eliminar las que os proponemos 

