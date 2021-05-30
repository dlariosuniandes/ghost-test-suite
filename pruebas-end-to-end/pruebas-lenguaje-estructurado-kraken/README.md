## Instrucciones para ejecutar los escenarios de prueba con Kraken

<strong>1. Crear un directorio vacío e ingresar a él. Para ello ejecute los siguientes comandos en un terminal:</strong>

<code>mkdir semana5</code><br>
<code>cd semana5</code>

<strong>2. Configurar bundle. Para ello ejecute:</strong>

<code>bundle init</code>

<strong>3. Editar manualmente el archivo Gemfile para asegurar que quede con el siguiente contenido:</strong>

<pre>
# frozen_string_literal: true

source "https://rubygems.org"

gem 'rubyzip', '1.2.1'
gem 'kraken-mobile', path: '[ruta_instalables_kraken]'

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
</pre>

Reemplazar <code>[ruta_instalables_kraken]</code> por la ruta dónde se encuentra instalado el directorio de kraken

<strong>4. Instalar las dependencias</strong>

<code>bundle install --path vendor/bundle</code><br>
<code>bundle install</code><br>
<code>bundle exec kraken-mobile gen</code><br>
<code>sudo gem install faker</code>

<strong>5. Generar el Proyecto base en Kraken</strong>

<code>bundle exec kraken-mobile gen</code><br>
Presionar -Enter-<br>
<code>bundle exec kraken-mobile setup</code><br>
Presionar 2 luego -Enter- -Enter-

<strong>6. Reemplazar la definición de pasos</strong>

Para ello, tome el archivo <code>kraken/features/web/step_definitions/web_steps.rb</code> de la entrega y reemplácelo en la ruta respectiva dentro de la carpeta (es decir, en la ruta <code>semana5/features/web/step_definitions/</code> del ejemplo)

Modifique el archivo <code>web_steps.rb</code> (previamente colocado en <code>semana5/features/web/step_definitions/</code>) y edite las primeras líneas del archivo reemplazando los valores respectivos para la instalación de Ghost dónde se ejecutará la prueba:

<code>USER_NAME</code>: correo electrónico del usuario administrador<br>
<code>PASSWORD</code>: contraseña del usuario administrador<br>
<code>NEW_PASSWORD</code>: Nueva contraseña para el usuario administrador (para escenario de pruebas 07)<br>
<code>NEW_PASSWORD2</code>: Contraseña diferente a la nueva para confirmación (para escenario de pruebas 18)<br>
<code>BASE_URL</code>: URL base de la instalación de Ghost

<strong>7. Instalar cada escenario de pruebas y ejecutarlo</strong>

Para ello, tome cada archivo <code>kraken/features/ghost[#N].feature</code> (dónde [#N] es el número del escenario de prueba) de la entrega y colóquelo en la ruta respectiva dentro de la carpeta (es decir, en la ruta <code>semana5/features/</code> del ejemplo).

Desde el directorio base del proyecto (directorio semana5 del ejemplo) ejecute el caso de prueba:

<code>bundle exec kraken-mobile run</code><br>

Observe y evalúe la ejecución del escenario de prueba.

<i>Nota 1</i>: se recomienda dejar sólo un escenario de pruebas para ejecución en el directorio feature para cada uno de los escenarios de prueba a ejecutar.<br><br>
<i>Nota 2</i>: luego de ejecutar escenario de pruebas 07, asegúrese que en el archivo <code>web_steps.rb</code> el valor de la variable <code>PASSWORD</code> contenta la nueva contraseña (Valor que se asignaría en la variable <code>NEW_PASSWORD</code>)<br><br>
<i>Nota 3</i>: asegure que en el archivo <code>web_steps.rb</code> los valores de las variables <code>NEW_PASSWORD</code> y <code>NEW_PASSWORD2</code> tengan valores diferentes con cadenas de mínimo 10 caracteres.