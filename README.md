# Patrones-Arquitecturales

## Emily Noreña Cardozo
## Arquitecturas Empresariales

### Descripción

Este sistema de gestión de propiedades es una aplicación web, diseñada para gestionar listados de propiedades inmobiliarias. El sistema permite a los usuarios crear, ver, actualizar y eliminar registros de propiedades.

Cada propiedad incluye detalles como dirección, precio, tamaño y descripción, con un ID único generado automáticamente. El frontend, desarrollado con HTML, CSS y JavaScript, proporciona formularios para capturar datos de las propiedades, lista todas las propiedades y permite la interacción con los servicios backend mediante la API Fetch.

El backend, desarrollado con la API REST de Spring Boot, expone puntos finales RESTful para operaciones CRUD y se integra con una base de datos MySQL mediante JPA/Hibernate para la persistencia de datos. La base de datos almacena de forma segura toda la información de las propiedades. Tanto el backend como la base de datos están implementados en AWS, lo que garantiza la escalabilidad y la accesibilidad.

### Arquitectura

### ¿Cómo desplegar en AWS?
mvn clean package

<img width="1865" height="742" alt="image" src="https://github.com/user-attachments/assets/f08f3277-3321-4f07-93f9-2857eeeae078" />

<img width="856" height="139" alt="image" src="https://github.com/user-attachments/assets/85fa144b-8def-41e5-8a81-5b0e125f3186" />


<img width="1866" height="713" alt="image" src="https://github.com/user-attachments/assets/81f89e34-9413-41c5-922e-dff3ff72643f" />

<img width="918" height="121" alt="image" src="https://github.com/user-attachments/assets/728544f4-cf8a-40df-bf9d-026461cc1a61" />




1. 
