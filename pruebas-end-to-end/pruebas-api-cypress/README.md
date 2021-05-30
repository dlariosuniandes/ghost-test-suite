
# Instrucciones para la ejecución de pruebas usando Cypress

Para correr este repositorio es necesario contar con:
- Noode en su versión 12.1 
- Una instacia de ghost 3.3.0 0 3.42.5 instalada de manera local o remota.

## Comandos:

Cambiar en el archivo ```cypress.json```  las variables de ambiente a las utilizadas en su plataforma ghost.
Se requieren:
- nombre
- email
- password utilizado

```
{
  "env": {
    "url": "http://localhost:2368",
    "user": "d.larios@uniandes.edu.co",
    "username": "Daniel Larios",
    "password": "uniandestest"
  },
  "chromeWebSecurity": false
}
```

Ejecutar

> npm install

>./node_modules/.bin/cypress open 

Para correr las pruebas en interfaz de Cypress o
> ./node_modules/.bin/cypress run 

para correr las pruebas desde terminal en modo headless

## Notas

