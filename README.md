# AdminAgendaMujerBonita
Este proyecto es un ejemplo de una aplicación completa que consta de un backend construido con Node.js y una API segura que utiliza autenticación JWT (JSON Web Tokens), un frontend desarrollado con Angular y una base de datos MySQL para el almacenamiento de datos.

## Estructura del Proyecto

El proyecto está organizado en tres componentes principales:

- **backend**: Contiene el código relacionado con el servidor Node.js, la autenticación JWT y la comunicación con la base de datos MySQL.
- **frontend**: Contiene la aplicación Angular que interactúa con el backend y presenta la interfaz de usuario.
- **bd_mysql**: Incluye los scripts y archivos de configuración relacionados con la base de datos MySQL.

## Instrucciones de Uso

### Configuración

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/vadelgado/AdminAgendaMujerBonita

Configura la base de datos MySQL:

Asegúrate de tener un servidor MySQL en funcionamiento.
Ejecuta los scripts SQL en el directorio bd_mysql para crear las tablas necesarias y los datos iniciales.
Configura el backend:

Ve al directorio backend.
Crea un archivo .env basado en .env.example y configura las variables de entorno, como la conexión a la base de datos y la clave secreta JWT.
Configura el frontend:

Ve al directorio frontend.
Ejecuta npm install para instalar las dependencias.
Edita src/environments/environment.ts y configura la URL de la API backend.
Ejecución
Inicia el backend:

Ve al directorio backend.
Ejecuta npm start para iniciar el servidor Node.js.
Inicia el frontend:

Ve al directorio frontend.
Ejecuta ng serve para iniciar la aplicación Angular.
Abre tu navegador y visita http://localhost:4200 para ver la aplicación en funcionamiento.

Contribución
Si deseas contribuir al proyecto, ¡te damos la bienvenida! Puedes enviar pull requests para corregir errores, agregar nuevas características o mejorar la documentación.

Licencia
Este proyecto está bajo la Licencia MIT.

npm install en cada proyecto

Terminal 1 bakend: npm run typescript
Terminal 2 bakend: npm run dev
Terminal 3 Front: ng serve --o
