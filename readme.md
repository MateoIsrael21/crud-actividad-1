Este proyecto consiste en una aplicación de gestión de tareas diseñada para ayudar a los usuarios a organizar y administrar sus tareas domésticas. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas, ofreciendo una interfaz amigable y un backend robusto.

El frontend de la aplicación está desarrollado utilizando Stencil y TypeScript, mientras que el backend está construido con Express y MySQL. La base de datos MySQL almacena las tareas de los usuarios y el backend maneja las operaciones CRUD a través de una API REST.

Estructura del Proyecto
Frontend: Desarrollado con Stencil y TypeScript, se encarga de la presentación y la interacción del usuario con la aplicación.
Backend: Construido con Express, este componente se conecta a la base de datos MySQL y gestiona las solicitudes de la API REST.
Base de Datos: MySQL se utiliza para almacenar las tareas de los usuarios, con una tabla dedicada que almacena los detalles de cada tarea.
Funcionalidades
Crear Tarea: Los usuarios pueden agregar nuevas tareas a su lista, especificando detalles como el título y la descripción de la tarea.
Leer Tareas: La aplicación muestra una lista de todas las tareas creadas, permitiendo a los usuarios ver las tareas pendientes y completadas.
Actualizar Tarea: Los usuarios pueden modificar los detalles de una tarea existente, incluyendo el título, la descripción y el estado de la tarea (completada o no).
Eliminar Tarea: Los usuarios tienen la opción de eliminar tareas que ya no son necesarias.
Requisitos Previos
Para utilizar esta aplicación, necesitarás:

Node.js: Es necesario para ejecutar el servidor Express y construir el proyecto Stencil.
npm: Utilizado para gestionar las dependencias del proyecto.
MySQL: Base de datos relacional utilizada para almacenar las tareas.
Configuración del Proyecto
Backend
Configurar MySQL: Primero, crea una base de datos MySQL y una tabla para almacenar las tareas. Esto se hace configurando la base de datos y asegurándose de que los detalles de conexión sean correctos en el archivo de configuración del backend.

Conectar el Backend a la Base de Datos: El backend Express está configurado para conectarse a la base de datos MySQL. Asegúrate de que la conexión esté correctamente configurada para que las operaciones CRUD funcionen sin problemas.

Frontend
Desarrollo de Componentes: El frontend está compuesto por componentes desarrollados en Stencil, que se encargan de manejar la interfaz de usuario y las interacciones. Los componentes se comunican con el backend a través de solicitudes HTTP para gestionar las tareas.

Integración con la API: El frontend se conecta con el backend mediante fetch u otros métodos de solicitudes HTTP, permitiendo a los usuarios interactuar con la base de datos a través de la interfaz de usuario.

Uso de la Aplicación
Una vez que la aplicación está configurada y en funcionamiento, los usuarios pueden utilizar la interfaz para gestionar sus tareas. Las operaciones CRUD son accesibles a través de botones y formularios en la interfaz de usuario, lo que facilita la adición, edición, visualización y eliminación de tareas.