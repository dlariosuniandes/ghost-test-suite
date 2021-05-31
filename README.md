# Presentación estrategia de pruebas

https://youtu.be/S8V9Tpkh_G0

# Test de Suite de Pruebas para Ghost en su version 3.42.5

Este repositorio contiene un suite de pruebas y herramientas para probar la aplicación web de Ghost. Dentro de Cada carpeta se encuentra el archivo readme que le indicara cómo ejecutar correctamente cada suite.

## Integrantes equipo

- Clayderman Josue Rojas Jimenez - cjrojas1@uniandes.edu.co
- Daniel Alberto Larios Torres - dlarios@uniandes.edu.co
- Hector Fabio Varón Bonilla - h.varon@uniandes.edu.co
- Rafael David Matiz Cortes - r.matiz@uniandes.edu.co

## Escenarios probados

| Id  | Escenario                                               | Tipo de Prueba      | Método de generación de datos | Herramienta | Ubicación |
| --- | ------------------------------------------------------- | ------------------- | ----------------------------- | ----------- | --------- |
|1| Crear Post                                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/1-login-create-post.spec.ts|
|2| Create Tag                                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/2-login-create-tag.spec.ts|
|3| Delete Post                                             | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/3-login-delete-post.spec.ts|
|4| Create Page                                             | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/4-login-create-page.spec.ts|
|5| Delete Page                                             | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/5-login-delete-page.spec.ts|
|6| Delete Tag                                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/6-login-tag-delete.spec.ts|
|7| Change Password                                         | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/7-login-change-password.spec.ts|
|8| Modify Page                                             | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/8-login-modify-page.spec.ts|
|9| Modify Post                                             | E2E-API             | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/9-login-modify-post.spec.ts|
|10| Modify Tag                                              | E2E-API             | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/10-login-modify-tag.spec.ts|
|11| Create Post with Tag                                    | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/11-login-create-post-tag.spec.ts|
|12| Un-publish Post                                         | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/12-unpublish-post.spec.ts|
|13| Change Page Name                                        | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/13-change-page-name.spec.ts|
|14| Search                                                  | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/14-login-search.spec.ts|
|15| Search Page                                             | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/15-login-search-page.spec.ts|
|16| Search Tag                                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/16-login-search-tag.spec.ts|
|17| Code Injection                                          | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/17-code-injection.spec.ts|
|18| Change Password Same Password                           | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/18-same-password.spec.ts|
|19| Associate Tag                                           | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/19-login-tag-post-associate.spec.ts|
|20| Create Post 255 Title                                   | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/20-login-create-post-255.spec.ts|
|21| Create Post Naughty                                     | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/21-login-create-post-naughty.spec.ts|
|22| Create Post 256                                         | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/22-login-create-post-256.spec.ts|
|23| Create Post 254                                         | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/23-login-create-post-254.spec.ts|
|24| Create Post 1999                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/24-login-create-post-1999.spec.ts|
|25| Create Post 2000                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/25-login-create-post-2000.spec.ts|
|26| Create Post 2001                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/26-login-create-post-2001.spec.ts|
|27| Create Tag 190                                          | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/27-login-create-tag-190.spec.ts|
|28| Create Tag 191                                          | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/28-login-create-tag-191.spec.ts|
|29| Create Tag 192                                          | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/29-login-create-tag-192.spec.ts|
|30| Create Tag Naughty                                      | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/30-login-create-tag-naughty.spec.ts|
|31| Create Page 254                                         | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/31-login-create-page_254.spec.ts|
|32| Create Page 255                                         | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/32-login-create-page_255.spec.ts|
|33| Create Page 256                                         | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/33-login-create-page_256.spec.ts|
|34| Create Page Naughty                                     | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/34-login-create-page_naughty.spec.ts|
|35| Create Page 1999                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/35-login-create-page_1999.spec.ts|
|36| Create Page 2000                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/36-login-create-page_2000.spec.ts|
|37| Create Page 2001                                        | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/37-login-create-page_2001.spec.ts|
|38| Change Page Name 150                                    | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/38-change-page-name-150.spec.ts|
|39| Change Page Name 151                                    | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/39-change-page-name-151.spec.ts|
|40| Change Page Name 152                                    | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/40-change-page-name-152.spec.ts|
|41| Use bad email password recover                          | E2E -API            | A priori                      | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/41-use-bad-email-password-recover.spec.ts|
|42| Use 64@190 email                                        | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/42-use-64@190-non-existing-user.spec.ts|
|43| Use 65@190 email                                        | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/43-use-65@190-non-existing-user.spec.ts|
|44| Use 64@191 email                                        | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/44-use-64@191-non-existing-user.spec.ts|
|45| Use non valid change email                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/45-use-non-valid-change-email.spec.ts|
|46| Use 64@190 change email                                 | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/46-use-64@190-change-email.spec.ts|
|47| Use 65@ 190 change email                                | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/47-use-65@190-change-email.spec.ts|
|48| Use 64@191 change email                                 | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/48-use-64@191-change-email.spec.ts|
|49| Use short standard email                                | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/49-short-standard-email.spec.ts|
|50| Use short standard email relogin                        | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/50-short-standard-email-reloggin.spec.ts|
|51| Change password long                                    | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/51-change-password-long-password.spec.ts|
|52| Change password short                                   | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/52-change-password-short.spec.ts|
|53| Change password space                                   | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/53-change-password-use-space.spec.ts|
|54| Change password relogin long                            | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/54-change-password-relogin-long-password.spec.ts|
|55| Write minimum reject password                           | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/55-write-minimum-reject-password.spec.ts|
|56| Write minimum approve password                          | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/56-write-minimum-approve-password.spec.ts|
|57| Relogin long password                                   | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/57-relogging-with-long-password.spec.ts|
|58| Relogin minimum approve password                        | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/58-relogging-with-minimum-approve-password.spec.ts|
|59| Invite Staff Invalid email                              | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/59-invite-staff-invalid-email.spec.ts|
|60| Invite Staff 64@190                                     | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/60-invite-staff-64@190-email.spec.ts|
|61| Invite Staff 65@190                                     | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/61-invite-staff-65@190-email.spec.ts|
|62| Invite Staff 64@191                                     | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/62-invite-staff-64@191-email.spec.ts|
|63| Invite Staff duplicate email                            | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/63-invite-staff-duplicate-email.spec.ts|
|64| Invite Staff valid email                                | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/64-invite-staff-valid-email.spec.ts|
|65| Revoke Invite                                           | E2E -API            | Aleatorio                     | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/65-revoke-invite.spec.ts|
|66| Change page name naughty                                | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/66-change-page-name-naugthy.spec.ts|
|67| Login search post title 39                              | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/67-login-search-post-title39.spec.ts|
|68| Login search post title 40                              | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/68-login-search-post-title40.spec.ts|
|69| Login search post title 41                              | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/69-login-search-post-title41.spec.ts|
|70| Login search post title naughty                         | E2E -API            | Pool dinámico                 | Cypress     |ghost-test-suite/pruebas-end-to-end/pruebas-api-cypress/cypress_ghost_3.42.5/cypress/integration/70-login-search-post-title-naugthy.ts|
|72|Cambiar slug de usuario            | E2E- Estructurado   | Data Pool Escenario Aleatorio |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|73|Cambiar el slug de un usuario usando 190 caracteres| E2E- Estructurado   | Data Pool Escenario Aleatorio |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|74|Cambiar el slug de un usuario usando 191 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|75|Cambiar el slug de un usuario usando 192 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|76|Cambiar el slug con sólo espacios de longitud variable| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|77|Cambiar correo electrónico de usuario| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|78|Cambiar el correo electrónico de un usuario usando 190 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|79|Cambiar el correo electrónico de un usuario usando 191 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|80|Cambiar el correo electrónico de un usuario usando 192 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|81|Cambiar el correo electrónico con sólo espacios de longitud variable| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|82|Cambiar el correo electrónico con valor mal formado| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|83|Cambiar ubicación de usuario| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|84|Cambiar sitio Web de usuario| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|86|Cambiar el sitio Web de un usuario usando 1999 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|87|Cambiar el sitio Web de un usuario usando 2000 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|88|Cambiar el sitio Web de un usuario usando 2001 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|89|Cambiar el sitio Web con sólo espacios de longitud variable| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|90|Cambiar el sitio Web con valor mal formado| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|91|Cambiar el Facebook de un usuario usando 2000 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|92|Cambiar el Facebook de un usuario usando 2001 caracteres | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|93|Cambiar el Facebook con sólo espacios de longitud variable| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|94|Cambiar el Facebook con valor mal formado| Escenario Aleatorio ||Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|95|Cambiar Twitter de usuario| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|96|Cambiar el Twitter de un usuario usando 1999 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|97|Cambiar el Twitter de un usuario usando 2000 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|98|Cambiar el Twitter de un usuario usando 2001 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|99|Cambiar el Twitter con sólo espacios de longitud variable| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|100|Cambiar el Twitter con valor mal formado| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|101| Perfil usuario twitter sin password          | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|102|Cambiar bio de un usuario usando 199 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|103|Cambiar bio de un usuario usando 200 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|104|Cambiar bio de un usuario usando 201 caracteres| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|105|Bio de un usuario sin password| E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost_user_profile_form.feature|
|106| Create Post                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost01.feature|
|107| Create Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost02.feature|
|108| Remove Post                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost03.feature|
|109| Create Page                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost04.feature|
|110| Remove Page                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost05.feature|
|111| Remove Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost06.feature|
|112| Change Password                                         | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost07.feature|
|113| Edit Page                                               | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost08.feature|
|114| Edit Post                                               | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost09.feature|
|115| Edit Tag                                                | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost10.feature|
|116| Create Post with Tag                                    | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost11.feature|
|117| Create Post and Un-publish                              | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost12.feature|
|118| Change title and description                            | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost13.feature|
|119| Search Post                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost14.feature|
|120| Search Page                                             | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost15.feature|
|121| Search Tag                                              | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost16.feature|
|121| Change user name                                        | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost17.feature|
|122| Change password                                         | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost18.feature|
|123| Link tag with post                                      | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost19.feature|
|124| Add new main menu entry                                 | E2E- Estructurado   | Escenario Aleatorio           |Kraken|ghost-test-suite/pruebas-end-to-end/pruebas-lenguaje-estructurado-kraken/kraken_ghost_3.42.5_sshot/features/ghost20.feature|
- La explicación de los escenarios ejecutados con Kraken se realiza de manera detallada en el apartado de Estrategia

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

20 de los 54 escenarios fueron reutilizados de los escenarios desarrollados en la semana 6 (escenarios en <code>kraken_with_data_pool/features/</code> con nombre de la forma <code>ghostXX.feature</code>) y adaptados para integrar el uso de la función <code>random_text</code>. Esto no representó mayor dificultad ya que la función ya era usada en los escenarios existentes y sólo se incluyó el uso de la librería <code>Faker</code>.

Los 34 escenarios restantes de los 54 fueron desarrollados en el único escenario <code>kraken_with_data_pool/features/ghost_user_profile_form.feature</code>, el cual carga un archivo .csv (<code>kraken_with_data_pool/user_profile_form_cases.csv</code>) que contiene la definición de los 34 escenarios de prueba. Este escenario cumple con el patrón para BDT <i>Given-When-Then</i>, que se presenta a continuación:

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

Así, dentro del paso <i>When I load and execute test scenarios from file "user_profile_form_cases.csv"</i> se lee cada registro del archivo .csv y con los parámetros del archivo se genera el valor mediante el uso de la función <code>random_text</code> que como se indicó antes hace uso de la librería <code>Faker</code>. Este paso además va generando archivos los archivos ocultos <code>kraken_with_data_pool/.user_profile_form_cases.csv.n_errors</code> y <code>kraken_with_data_pool/.user_profile_form_cases.csv.error_logs</code>. El primero contiene un conteo de los escenarios de prueba que no cumplen con el indicador general del oráculo (campo <code>expected</code> del .csv) y el segundo los registros específicos que no hay cumplido con la bitácora. El contenido de estos archivos es el usado pasa el paso <i>Then I should not see any failed scenario for file "user_profile_form_cases.csv"</i> de la definición del escenraio de pruebas.

<strong>Incidencias reportadas</strong>: 9. Ver en la pestaña <i>Issue</i> del repositorio los incidentes reportados que contienen el prefijo <i>[Validación de datos]</i>.

<strong>Descripción de la estrategia Cypress</strong>:

Los datos para los escenarios del 1 al 19 se generaron con la librería de Faker y fueron parte de la entrega inicial de la semana 5.
