# Test de Suite de Pruebas para Ghost en su version 3.42.5

Este repositorio contiene un suite de pruebas y herramientas para probar la aplicación web de Ghost. Dentro de Cada carpeta se encuentra el archivo readme que le indicara cómo ejecutar correctamente cada suite.

## Integrantes equipo

- Clayderman Josue Rojas Jimenez - cjrojas1@uniandes.edu.co
- Daniel Alberto Larios Torres - dlarios@uniandes.edu.co
- Hector Fabio Varón Bonilla - h.varon@uniandes.edu.co
- Rafael David Matiz Cortes - r.matiz@uniandes.edu.co

## Escenarios probados

| Id  | Escenario                                               | Tipo de Prueba      | Método de generación de datos |
| :-- | :------------------------------------------------------ | :------------------ | ----------------------------- |
| 001 | Crear Post                                              | E2E -API            | Aleatorio                     |
| 002 | Create Tag                                              | E2E -API            | Aleatorio                     |
| 003 | Delete Post                                             | E2E -API            | Aleatorio                     |
| 004 | Create Page                                             | E2E -API            | Aleatorio                     |
| 005 | Delete Page                                             | E2E -API            | Aleatorio                     |
| 006 | Delete Tag                                              | E2E -API            | Aleatorio                     |
| 007 | Change Password                                         | API                 | Aleatorio                     |
| 008 | Modify Page                                             | E2E -API            | Aleatorio                     |
| 009 | Modify Post                                             | E2E-API             | Aleatorio                     |
| 010 | Modify Tag                                              | E2E-API             | Aleatorio                     |
| 011 | Create Post with Tag                                    | E2E -API            | Aleatorio                     |
| 012 | Un-publish Post                                         | E2E -API            | Aleatorio                     |
| 013 | Change Page Name                                        | E2E -API            | Aleatorio                     |
| 014 | Search                                                  | E2E -API            | Aleatorio                     |
| 015 | Search Page                                             | E2E -API            | Aleatorio                     |
| 016 | Search Tag                                              | E2E -API            | Aleatorio                     |
| 017 | Code Injection                                          | E2E -API            | Aleatorio                     |
| 018 | Change Password Same Password                           | E2E -API            | Aleatorio                     |
| 019 | Associate Tag                                           | E2E -API            | Aleatorio                     |
| 020 | Create Post 255 Title                                   | E2E -API            | A priori                      |
| 021 | Create Post Naughty                                     | E2E -API            | A priori                      |
| 022 | Create Post 256                                         | E2E -API            | A priori                      |
| 023 | Create Post 254                                         | E2E -API            | A priori                      |
| 024 | Create Post 1999                                        | E2E -API            | A priori                      |
| 025 | Create Post 2000                                        | E2E -API            | A priori                      |
| 026 | Create Post 2001                                        | E2E -API            | A priori                      |
| 027 | Create Tag 190                                          | E2E -API            | A priori                      |
| 028 | Create Tag 191                                          | E2E -API            | A priori                      |
| 029 | Create Tag 192                                          | E2E -API            | A priori                      |
| 030 | Create Tag Naughty                                      | E2E -API            | A priori                      |
| 031 | Create Page 254                                         | E2E -API            | A priori                      |
| 032 | Create Page 255                                         | E2E -API            | A priori                      |
| 033 | Create Page 256                                         | E2E -API            | A priori                      |
| 034 | Create Page Naughty                                     | E2E -API            | A priori                      |
| 035 | Create Page 1999                                        | E2E -API            | A priori                      |
| 036 | Create Page 2000                                        | E2E -API            | A priori                      |
| 037 | Create Page 2001                                        | E2E -API            | A priori                      |
| 038 | Change Page Name 150                                    | E2E -API            | A priori                      |
| 039 | Change Page Name 151                                    | E2E -API            | A priori                      |
| 040 | Change Page Name 152                                    | E2E -API            | A priori                      |
| 041 | Use bad email password recover                          | E2E -API            | A priori                      |
| 042 | Use 64@190 email                                        | E2E -API            | Aleatorio                     |
| 043 | Use 65@190 email                                        | E2E -API            | Aleatorio                     |
| 044 | Use 64@191 email                                        | E2E -API            | Aleatorio                     |
| 045 | Use non valid change email                              | E2E -API            | Aleatorio                     |
| 046 | Use 64@190 change email                                 | E2E -API            | Aleatorio                     |
| 047 | Use 65@ 190 change email                                | E2E -API            | Aleatorio                     |
| 048 | Use 64@191 change email                                 | E2E -API            | Aleatorio                     |
| 049 | Use short standard email                                | E2E -API            | Pool dinámico                 |
| 050 | Use short standard email relogin                        | E2E -API            | Pool dinámico                 |
| 051 | Change password long                                    | E2E -API            | Aleatorio                     |
| 052 | Change password short                                   | E2E -API            | Aleatorio                     |
| 053 | Change password space                                   | E2E -API            | Aleatorio                     |
| 054 | Change password relogin long                            | E2E -API            | Aleatorio                     |
| 055 | Write minimum reject password                           | E2E -API            | Aleatorio                     |
| 056 | Write minimum approve password                          | E2E -API            | Aleatorio                     |
| 057 | Relogin long password                                   | E2E -API            | Aleatorio                     |
| 058 | Relogin minimum approve password                        | E2E -API            | Aleatorio                     |
| 059 | Invite Staff Invalid email                              | E2E -API            | Aleatorio                     |
| 060 | Invite Staff 64@190                                     | E2E -API            | Aleatorio                     |
| 061 | Invite Staff 65@190                                     | E2E -API            | Aleatorio                     |
| 062 | Invite Staff 64@191                                     | E2E -API            | Aleatorio                     |
| 063 | Invite Staff duplicate email                            | E2E -API            | Aleatorio                     |
| 064 | Invite Staff valid email                                | E2E -API            | Pool dinámico                 |
| 065 | Revoke Invite                                           | E2E -API            | Aleatorio                     |
| 066 | Change page name naughty                                | E2E -API            | Pool dinámico                 |
| 067 | Login search post title 39                              | E2E -API            | Pool dinámico                 |
| 068 | Login search post title 40                              | E2E -API            | Pool dinámico                 |
| 069 | Login search post title 41                              | E2E -API            | Pool dinámico                 |
| 070 | Login search post title naughty                         | E2E -API            | Pool dinámico                 |
| 071 | Login search post title naughty                         | E2E -API            | Pool dinámico                 |
| 072 | User profile,user-slug,slug,190,none,pass               | E2E- Estructurado   | Data Pool Escenario Aleatorio |
| 073 | User profile,user-slug,slug,191,none,pass               | E2E- Estructurado   | Data Pool Escenario Aleatorio |
| 074 | User profile,user-slug,slug,192,none,fail               | E2E- Estructurado   | Escenario Aleatorio           |
| 075 | User profile,user-slug,slug,-1,only spaces,fail         | E2E- Estructurado   | Escenario Aleatorio           |
| 076 | User profile,user-slug,slug,-1,none,pass                | E2E- Estructurado   | Escenario Aleatorio           |
| 077 | User profile,user-email,email,190,none,pass             | E2E- Estructurado   | Escenario Aleatorio           |
| 078 | User profile,user-email,email,191,none,pass             | E2E- Estructurado   | Escenario Aleatorio           |
| 079 | User profile,user-email,email,192,none,fail             | E2E- Estructurado   | Escenario Aleatorio           |
| 080 | User profile,user-email,email,-1,only spaces,fail       | E2E- Estructurado   | Escenario Aleatorio           |
| 081 | User profile,user-email,email,-1,bad formed,fail        | E2E- Estructurado   | Escenario Aleatorio           |
| 082 | User profile,user-email,email,-1,none,pass              | E2E- Estructurado   | Escenario Aleatorio           |
| 083 | User profile,user-location,sentence,-1,none,pass        | E2E- Estructurado   | Escenario Aleatorio           |
| 084 | User profile,user-website,url,1999,none,pass            | E2E- Estructurado   | Escenario Aleatorio           |
| 086 | User profile,user-website,url,2001,none,fail            | E2E- Estructurado   | Escenario Aleatorio           |
| 087 | User profile,user-website,url,-1,only spaces,fail       | E2E- Estructurado   | Escenario Aleatorio           |
| 088 | User profile,user-website,url,-1,bad formed,fail        | E2E- Estructurado   | Escenario Aleatorio           |
| 089 | User profile,user-website,url,-1,none,pass              | E2E- Estructurado   | Escenario Aleatorio           |
| 090 | User profile,user-facebook,facebook,1999,none,pass      | E2E- Estructurado   | Escenario Aleatorio           |
| 091 | User profile,user-facebook,facebook,2000,none,pass      | E2E- Estructurado   | Escenario Aleatorio           |
| 092 | User profile,user-facebook,facebook,2001,none,fail      | E2E- Estructurado   | Escenario Aleatorio           |
| 093 | User profile,user-facebook,facebook,-1,only spaces,fail | E2E- Estructurado   | Escenario Aleatorio           |
| 094 | User profile,user-facebook,facebook,-1,bad formed,fail  | Escenario Aleatorio |
| 095 | User profile,user-facebook,facebook,-1,none,pass        | E2E- Estructurado   | Escenario Aleatorio           |
| 096 | User profile,user-twitter,twitter,1999,none,pass        | E2E- Estructurado   | Escenario Aleatorio           |
| 097 | User profile,user-twitter,twitter,2000,none,pass        | E2E- Estructurado   | Escenario Aleatorio           |
| 098 | User profile,user-twitter,twitter,2001,none,fail        | E2E- Estructurado   | Escenario Aleatorio           |
| 099 | User profile,user-twitter,twitter,-1,only spaces,fail   | E2E- Estructurado   | Escenario Aleatorio           |
| 100 | User profile,user-twitter,twitter,-1,bad formed,fail    | E2E- Estructurado   | Escenario Aleatorio           |
| 101 | User profile,user-twitter,twitter,-1,none,pass          | E2E- Estructurado   | Escenario Aleatorio           |
| 102 | User profile,user-bio,sentence,199,none,pass            | E2E- Estructurado   | Escenario Aleatorio           |
| 103 | User profile,user-bio,sentence,200,none,pass            | E2E- Estructurado   | Escenario Aleatorio           |
| 104 | User profile,user-bio,sentence,201,none,fail            | E2E- Estructurado   | Escenario Aleatorio           |
| 105 | User profile,user-bio,sentence,-1,none,pass             | E2E- Estructurado   | Escenario Aleatorio           |
| 106 | Create Post                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 107 | Create Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |
| 108 | Remove Post                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 109 | Create Page                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 110 | Remove Page                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 111 | Remove Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |
| 112 | Change Password                                         | E2E- Estructurado   | Escenario Aleatorio           |
| 113 | Edit Page                                               | E2E- Estructurado   | Escenario Aleatorio           |
| 114 | Edit Post                                               | E2E- Estructurado   | Escenario Aleatorio           |
| 115 | Edit Tag                                                | E2E- Estructurado   | Escenario Aleatorio           |
| 116 | Create Post with Tag                                    | E2E- Estructurado   | Escenario Aleatorio           |
| 117 | Create Post and Un-publish                              | E2E- Estructurado   | Escenario Aleatorio           |
| 118 | Change title and description                            | E2E- Estructurado   | Escenario Aleatorio           |
| 119 | Search Post                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 120 | Search Page                                             | E2E- Estructurado   | Escenario Aleatorio           |
| 121 | Search Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |
| 121 | Change user name                                        | E2E- Estructurado   | Escenario Aleatorio           |
| 122 | Change password                                         | E2E- Estructurado   | Escenario Aleatorio           |
| 123 | Link tag with post                                      | E2E- Estructurado   | Escenario Aleatorio           |
| 124 | Add new main menu entry                                 | E2E- Estructurado   | Escenario Aleatorio           |

## Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas.

<hr>
<h1>POOL DE DATOS A PRIORI</h1>

<strong>Código de las pruebas</strong>: <code>/cypress_ghost_3.42.5/cypress/integration</code> (escenarios desarrollados en Cypress del 20 al 37)

<strong>Tecnología usada</strong>: Página <code>Mockaroo</code>

<strong>Escenarios cubiertos</strong>: 42

<strong>Descripción de la estrategia</strong>:

Se generaron sets de datos a priori a través de Mockaroo para validar valores limite en los campos para crear Post, Tag y Page. Estos datos se integraron a nuevos escenarios en Cypress donde según el tipo de dato cambia el oráculo de prueba: [Ver pruebas](https://github.com/hvaron83/pruebas-automatizadasE2E/tree/main/cypress_ghost_3.42.5) 


### Data Post
![post_data](https://user-images.githubusercontent.com/78768306/119239672-3e0f6800-bb10-11eb-937c-8fdb1e33aecb.png)

### Data Page
![page_data](https://user-images.githubusercontent.com/78768306/119240128-782e3900-bb13-11eb-907a-9229207d6978.png)

### Data Tag
![tag_data](https://user-images.githubusercontent.com/78768306/119239702-61d2ae00-bb10-11eb-81b0-8acf22265f96.png)


<hr>
<h1>POOL DE DATOS (PSEUDO) ALEATORIO DINÁMICO ONLINE</h1>
<strong>Código de las pruebas</strong>: <code>/cypress_ghost_3.42.5/cypress/integration</code> (escenarios desarrollados en Cypress 38, 39, 40, 49, 50, 64, 65, 66, 67, 68, 69, 70)

<strong>Tecnología usada</strong>: API generado mediante página <code>Mockaroo</code>

<strong>Escenarios cubiertos</strong>: 12

<strong>Descripción de la estrategia</strong>:

Se generaron sets de datos aleatorios mediante APIS a través de Mockaroo para validar las fronteras limite en los campos para cambiar el nombre del sitio, invitar, revocar staff y longitud de email para login. Estos datos se integraron a nuevos escenarios en Cypress donde según el tipo de dato cambia el oráculo de prueba: [Ver pruebas](https://github.com/hvaron83/pruebas-automatizadasE2E/tree/main/cypress_ghost_3.42.5)

### Data Schema
![Mockaroo Schema](https://github.com/hvaron83/vinilos/blob/master/mockaroo-schema.png)

### Data API
![Mockaroo API](https://github.com/hvaron83/vinilos/blob/master/mockaroo-api.png)

<hr>
<h1>ESCENARIO ALEATORIO</h1>

<strong>Grupo de escenarios de pruebas</strong>: 1

<strong>Código de las pruebas</strong>: <code>kraken_with_data_pool</code> (escenarios desarrollados en Kraken) y <code>/cypress_ghost_3.42.5/cypress/integration</code> (escenarios desarrollados en Cypress del 1 al 19)

<strong>Tecnología usada</strong>: librería <code>Faker</code> para Ruby

<strong>Escenarios cubiertos</strong>: 54 (Kraken) y 19 (Cypress)

<strong>Descripción de la estrategia Kraken</strong>:

En la ruta del código de las pruebas <code>kraken_with_data_pool/features/web/step_definitions/web_steps.rb</code> se hace uso de la función <code>random_text</code> que integra el uso de la librería <code>Faker</code> para ser consumidos en la definición de los pasos de los escenarios.

20 de los 54 escenarios fueron reutilizados de los escenarios desarrollados en la semana 6 (escenarios en <code>kraken_with_data_pool/features/</code> con nombre de la forma <code>ghostXX.feature</code>) y adaptados para integrar el uso de la función <code>random_text</code>.  Esto no representó mayor dificultad ya que la función ya era usada en los escenarios existentes y sólo se incluyó el uso de la librería <code>Faker</code>.

Los 34 escenarios restantes de los 54 fueron desarrollados en el único escenario <code>kraken_with_data_pool/features/ghost_user_profile_form.feature</code>, el cual carga un archivo .csv (<code>kraken_with_data_pool/user_profile_form_cases.csv</code>) que contiene la definición de los 34 escenarios de prueba.  Este escenario cumple con el patrón para BDT <i>Given-When-Then</i>, que se presenta a continuación:

<pre>Feature: Profile form data validation

@user1 @web @version3.42.5 @scenario21
Scenario: Profile form data validation
  Given I login into the administrator site
  When I load and execute test scenarios from file "user_profile_form_cases.csv"
  Then I should not see any failed scenario for file "user_profile_form_cases.csv"</pre>

Estos escenarios se aplican en el sitio administrador sobre el formulario de perfil del usuario conectado (click en imagen de perfil de esquina inferior izquierda, seleccionar la opción <i>Your Profile</i>)

Se presenta a continuación la descripción de los valores de cada campo del archivo .csv:

<ul>
<li><code>form_type</code>: identificador del formulario al que aplica el escenario.  <i>Valor válido</i>: "Your Profile".</li>
<li><code>field_type</code>: ID del campo de texto (en etiqueta <input> del HTML) sobre el que se realiza el escenario.  <i>Valores válidos</i>: los ID de los campos del formulario.</li>
<li><code>value_type</code>: tipo de valor a generar para ingreso al campo.  <i>Valores válidos</i>: title, sentence, description, tag, slug, email, url, facebook, twitter</li>
<li><code>length</code>: longitud del valor a generar.  <i>Valores válidos</i>: -1 (con longitud generada por la librería Faker), valores enteros positivos</li>
<li><code>special_case</code>: si existe alguna condición especial sobre el el valor a generar.  <i>Valores válidos</i>: none (valor normal), only spaces (generar sólo espacios), bad formed (valor mal formado acorde al tipo de valor)</li>
<li><code>expected</code>: indicador general del oráculo del escenario de prueba.  <i>Valores válidos</i>: pass (se espera que al guardar el formulario, no se generen errores), fail (se esperan errores al guardar el formulario)</li>
</ul>

Así, dentro del paso <i>When I load and execute test scenarios from file "user_profile_form_cases.csv"</i> se lee cada registro del archivo .csv y con los parámetros del archivo se genera el valor mediante el uso de la función <code>random_text</code> que como se indicó antes hace uso de la librería <code>Faker</code>.  Este paso además va generando archivos los archivos ocultos <code>kraken_with_data_pool/.user_profile_form_cases.csv.n_errors</code> y <code>kraken_with_data_pool/.user_profile_form_cases.csv.error_logs</code>.  El primero contiene un conteo de los escenarios de prueba que no cumplen con el indicador general del oráculo (campo <code>expected</code> del .csv) y el segundo los registros específicos que no hay cumplido con la bitácora.  El contenido de estos archivos es el usado pasa el paso <i>Then I should not see any failed scenario for file "user_profile_form_cases.csv"</i> de la definición del escenraio de pruebas.

<strong>Incidencias reportadas</strong>: 9.  Ver en la pestaña <i>Issue</i> del repositorio los incidentes reportados que contienen el prefijo <i>[Validación de datos]</i>.

<strong>Descripción de la estrategia Cypress</strong>:

Los datos para los escenarios del 1 al 19 se generaron con la librería de Faker y fueron parte de la entrega inicial de la semana 5.
