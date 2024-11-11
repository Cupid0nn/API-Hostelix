# API-Hostelix
Creacion de una Api de hosteleria


🏁🏃🏻‍♀️ Dia 1 =
Configuración inicial: Configuramos NestJS y TypeORM para conectarnos a una base de datos PostgreSQL usando variables de entorno.
Modelo Hotel: Creamos la entidad Hotel con atributos como name, description, location, stars, y phone, y relacionamos las habitaciones con la entidad Room.
Módulo y Rutas para Hoteles: Implementamos un servicio y controlador para gestionar las operaciones CRUD de hoteles (GET, POST, PUT, DELETE).
Modelo Room: Creamos la entidad Room, que tiene atributos como number, type, price, availability, y la relación con Hotel.
Módulo y Rutas para Habitaciones: Implementamos un servicio y controlador para gestionar las habitaciones, vinculándolas con un hotel específico mediante una relación ManyToOne.
