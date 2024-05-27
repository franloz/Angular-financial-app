
## Pasos

1. Clonar el .env.template y renombrarlo a .env
2. Llenar las variables de entorno acorde
3. Crear environments/environments.ts ejecutando npm run envs
4. ejecutar docker-compose.yml con docker compose up -d







////dudas
3. Crear environments/environments.ts o ejecutar dockerfile y ya crea las variavles ??? no creo q no, tengo q hacerlo tanto en el proyecto del ordena como en el dockerfile

```
npm run envs
```

4. construir dockerfile, la imagen, no es necesario porque he puesto que use el dockerfile del proyecto en si
    docker build -t franloz/angular-financial-app:v1 .
5. Ejecutar docker-compose build
            docker-compose up
    para trabajar en local

Ver curso docker lo de construir imagenes
Haver docker compose

/como usar angular developing de chrome
