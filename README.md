<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tner Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrarlo __.env__

6. Llenar las variables definidas en ```.env```

7. Ejecutar la aplicacion en entorno de desarrollo:
```
yarn start:dev
```

8. Cargar Seeds
```
http://localhost:3000/api/v2/seed
```


## Stack usado

* MongoDB
* Nest


# Production Build 
1. Crear el archivo ```
.env.production```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
