# nodejs-lamda

1. ejecutar npm i
2. npm run dev
3. Busca el personaje. Si no lo encuentra en la base de datos MySQL, buscará en la API de Star Wars y lo guardará en la base de datos. curl --location 'http://localhost:3000/dev/starwars-character?id=15'
4. Registra manualmente un personaje curl --location 'http://localhost:3000/dev/starwars-character' \
   --header 'Content-Type: application/json' \
   --data '{
   "id": 15,
   "nombre": "Palpatine",
   "altura": "170",
   "masa": "75",
   "color_de_cabello": "grey",
   "color_de_piel": "pale",
   "color_de_ojos": "yellow",
   "año_de_nacimiento": "82BBY",
   "genero": "male",
   "planeta_de_origen": "https://swapi.py4e.com/api/planets/8/",
   "peliculas": [
   "https://swapi.py4e.com/api/films/2/",
   "https://swapi.py4e.com/api/films/3/",
   "https://swapi.py4e.com/api/films/4/",
   "https://swapi.py4e.com/api/films/5/",
   "https://swapi.py4e.com/api/films/6/"
   ],
   "especie": [
   "https://swapi.py4e.com/api/species/1/"
   ],
   "vehiculos": [],
   "naves_espaciales": [],
   "creado": "2014-12-15T12:48:05.971000Z",
   "editado": "2014-12-20T21:17:50.347000Z",
   "URL": "https://swapi.py4e.com/api/people/21/"
   }'

5. Para desplegar sin errores en AWS con el comando deploy del framework serverless
   primero necesitas configurar serverless config credentials --provider aws --key "" --secret ""

6. npm run deploy
