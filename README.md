# Patrones-Arquitecturales

## Emily Noreña Cardozo
## Arquitecturas Empresariales

### Descripción

Este sistema de gestión de propiedades es una aplicación web, diseñada para gestionar listados de propiedades inmobiliarias. El sistema permite a los usuarios crear, ver, actualizar y eliminar registros de propiedades.

Cada propiedad incluye detalles como dirección, precio, tamaño y descripción, con un ID único generado automáticamente. El frontend, desarrollado con HTML, CSS y JavaScript, proporciona formularios para capturar datos de las propiedades, lista todas las propiedades y permite la interacción con los servicios backend mediante la API Fetch.

El backend, desarrollado con la API REST de Spring Boot, expone puntos finales RESTful para operaciones CRUD y se integra con una base de datos MySQL mediante JPA/Hibernate para la persistencia de datos. La base de datos almacena de forma segura toda la información de las propiedades. Tanto el backend como la base de datos están implementados en AWS, lo que garantiza la escalabilidad y la accesibilidad.

### Arquitectura

<img width="889" height="654" alt="image" src="https://github.com/user-attachments/assets/3cac7179-3c8e-4269-b3be-abd3d842884a" />

**Frontend (Capa de Cliente)**
- Desarrollado con HTML, CSS y JavaScript.
- Proporciona una interfaz de usuario con formularios para crear nuevas propiedades y un panel para ver, actualizar o eliminar propiedades.
- Utiliza API Fetch para enviar solicitudes HTTP a la API REST del backend.
- Implementa la validación del lado del cliente para garantizar la correcta entrada de datos (p. ej., el precio debe ser numérico y los campos obligatorios no deben estar vacíos).

**Backend (Capa de Aplicación)**
- Desarrollado con Spring Boot para exponer API RESTful.
- Maneja operaciones CRUD:
  - POST /products → Crear una nuevo producto.
  - GET /products → Recuperar todas los productos.
  - GET /products/search?id={id} → Recuperar un producto por ID.
  - PUT /properties/{id} → Actualizar un producto existente.
  - DELETE /products/{id} → Elimina un producto por ID.
- Gestiona la validación de entrada, la gestión de errores y la lógica de negocio.
- Se comunica con la base de datos a través de JPA/Hibernate ORM para la persistencia y recuperación de datos.

**Base de datos (Capa de datos)**
Una base de datos MySQL almacena la información de los productos en una tabla de productos con las siguientes columnas: id (Clave principal, generada automáticamente), dirección, precio, tamaño, descripción.

- Garantiza la persistencia, integridad y escalabilidad de los datos.
- Flujo de interacción
- El frontend envía solicitudes HTTP a la API REST del backend.
- El backend procesa la solicitud, ejecuta la lógica de negocio e interactúa con la base de datos MySQL mediante JPA.
- La base de datos responde con los datos solicitados o la confirmación de una operación.
- El backend devuelve respuestas JSON al frontend, que actualiza dinámicamente la interfaz de usuario.

### Diseño de clases

<img width="1005" height="679" alt="image" src="https://github.com/user-attachments/assets/1d2ec640-536c-46be-862c-b37cac38a18c" />


### ¿Cómo desplegar en AWS?

1. Crear instancia EC2 en AWS y crear un par de llaves.
2. Configurar un grupo de seguridad que permita trafico HTTP y SSH.
   
<img width="1865" height="742" alt="image" src="https://github.com/user-attachments/assets/f08f3277-3321-4f07-93f9-2857eeeae078" />

3. Conectarnos a la instancia por medio de SSH

<img width="1866" height="713" alt="image" src="https://github.com/user-attachments/assets/81f89e34-9413-41c5-922e-dff3ff72643f" />

4. Instalar Java en la instancia

<img width="856" height="139" alt="image" src="https://github.com/user-attachments/assets/85fa144b-8def-41e5-8a81-5b0e125f3186" />
  
5. Generar el archivo .jar `mvn clean package`
6. Copiar el .jar a EC2

<img width="817" height="145" alt="image" src="https://github.com/user-attachments/assets/b0336b8c-bf05-48b3-aa3a-3db4b8cd3f5f" />

7. Ejecutar el JAR en la instancia.

<img width="782" height="233" alt="image" src="https://github.com/user-attachments/assets/5aa848c7-b07a-41f7-a625-50c09b368ed8" />

8. Comprobamos que funciona correctamente.

<img width="1531" height="689" alt="image" src="https://github.com/user-attachments/assets/2a22d210-1866-4da5-9b7f-67ec3be6435c" />

<img width="948" height="215" alt="image" src="https://github.com/user-attachments/assets/c5a94058-8fe1-4caf-b273-48908da71e45" />


