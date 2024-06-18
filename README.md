
## Pasos

1. Clonar el .env.template y renombrarlo a .env y añadir los datos de dev o prod segun corresponda
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


<p>portfolio-layout works!</p>
//esto sera un navbar con el total de dinero de la cartera(se podra ocultar con un comando de teclas) Wallet y transacciones y dentro de wallet estara existencias y asignacion,

//////////
en portfolio seran dos paginas con sus urls:

/portfolio                               /portfolio/transacciones
Existencias y asignacion                 transacciones



en market seran dos paginas con dos urls:

/list-activos                                 /watchlist



/////la page del activo en si donde la meto????????????? puede que en market






hacer paginacion en el market, y lo de elegir moneda e idioma en header

paginas seran:
/portfolio
/watchlist
/   --sera el market
/activos/apple


header con buscador, idioma, moneda, y market, portfolio, watchlist , modo oscuro, ventanilla para cerrar sesion y estos ajustes en movil, terminos de uso , politica de privacidad

poner cookies del user y redes sociales en footer no se




el user tiene q iniciar sesion o registrarse antes de poder usar la app porque necesito su apikey, el apikey lo guardo en local o en firebase encriptado?, cuando se registre que salga una pantalla que estara en shared q diga que tiene que meter el apikey


npm install -g firebase-tools
firebase init
ng add @angular/fire




Firebase de forma local con Firebase Local Emulator Suite
