# API Rutas y Ejemplos de JSON para Pruebas

## Autenticación

### Registro de usuario
- **POST** `/api/auth/register`
```json
{
  "username": "admin",
  "password": "admin123",
  "rol": "admin"
}
```

### Login de usuario
- **POST** `/api/auth/login`
```json
{
  "username": "admin",
  "password": "admin123"
}
```
Authorization: Bearer {token}
---

## Clientes

### Crear cliente
- **POST** `/api/clientes`
```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan.perez@email.com",
  "licenciaConducir": "ABC123456",
  "telefono": "0999999999"
}
```

### Obtener todos los clientes
- **GET** `/api/clientes`

### Obtener cliente por ID
- **GET** `/api/clientes/{id}`

### Actualizar cliente
- **PUT** `/api/clientes/{id}`
```json
{
  "telefono": "0988888888"
}
```

### Eliminar cliente
- **DELETE** `/api/clientes/{id}`

---

## Carros

### Crear carro (solo admin)
- **POST** `/api/carros`
```json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "año": 2022,
  "matricula": "XYZ123",
  "disponible": true
}
```

### Obtener todos los carros
- **GET** `/api/carros`

### Obtener carro por ID
- **GET** `/api/carros/{id}`

### Actualizar carro (solo admin)
- **PUT** `/api/carros/{id}`
```json
{
  "disponible": false
}
```

### Eliminar carro (solo admin)
- **DELETE** `/api/carros/{id}`

---

## Rentas

### Crear renta
- **POST** `/api/rentas`
```json
{
  "clienteId": "{id_cliente}",
  "carroId": "{id_carro}",
  "fechaInicio": "2025-08-26T00:00:00.000Z",
  "fechaFin": "2025-08-30T00:00:00.000Z",
  "costo": 100
}
```

### Obtener todas las rentas
- **GET** `/api/rentas`

### Obtener renta por ID
- **GET** `/api/rentas/{id}`

### Actualizar renta
- **PUT** `/api/rentas/{id}`
```json
{
  "costo": 120
}
```

### Finalizar renta
- **PUT** `/api/rentas/{id}/finalizar`

### Eliminar renta
- **DELETE** `/api/rentas/{id}`

---

> Todas las rutas (excepto registro/login) requieren autenticación con JWT en el header:
> `Authorization: Bearer {token}`
