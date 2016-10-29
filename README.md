# JS-RETO

### Propósito
El propósito de este ejercicio es que usted demuestre su capacidad de crear una aplicación React eficiente que logre implementar la maqueta de la imagen de abajo tanto en características visuales como en funcionalidad. Utilizamos este desafío para entender mejor sus capacidades de codificación y determinar si usted sería un buen candidato para una entrevista.

### Qué cosas vamos a evaluar
- Dominio en el aprovechamiento las tecnologías existentes para crear una aplicación responsive.
- Capacidad para utilizar CSS, HTML y Javascript que coincida con una maqueta diseñada.
- La lógica de la arquitectura del código y la elección de frameworks (en el contexto de React).


### Desafío
Crear una aplicación React que toma la entrada del usuario con un formulario y a continuación muestra los resultados en una tabla. Se debe cumplir con los siguientes requisitos.
- Al hacer clic en el botón + Add debería abrir una ventana modal.
- El formulario debe ser llenado y enviado desde la ventana modal.
- Después de hacer Submit, la tabla debe actualizarse a sí misma sin necesidad de recargar la página.
- El formulario y la tabla tener los siguientes campos:
   - `Product name`
   - `Category`
   - `Brand`
   - `Height`
   - `Width`
   - `Notes`
- Debe usarse estas tecnologías: Webpack, React, MobX y React-Router

##### Maqueta de la aplicación
![Application Mock](/assets/ProductKeeper-01.png)


##### Maqueta de la ventana modal
![Modal Mock](/assets/ProductKeeper-02.png)


### Puntos extra
Estos no son necesarios, pero serían grandes adiciones si el tiempo lo permite.
- Implementar un método para persistir los datos creados.
- Cobertura completa con Tests
- Filtrar los resultados de la búsqueda
- Agregar columnas ordenables a la tabla

### Otros
Para empezar con este desafío, por favor clone este repositorio y haga un Pull Request al repo cuando haya terminado. Tiene solo 2 días para completar el desafío, así que priorice en consecuencia. Por favor agregue los detalles de cómo correr su aplicación a la sección de abajo titulada `Como correr Mi App`.

### FAQ's
No todas las imágenes e íconos están incluidos, qué hago?
- Puede improvisar cualquier asset que no encuentre.

Los requerimientos del desafío parecen imprecisos, eso está bien?
- Esto está diseñado para que tenga un final abierto, así que sientase libre de tener creatividad en las áreas a las que les falta directrices detalladas.

# Como correr Mi App (README.md)

Luego de descargar la Aplicación debe instalar las dependencias:

    npm install
	
Para iniciar la aplicación ejecute el comando:

	npm start
	
Esperar a que el servidor arranque completamente, verá el mensaje en consola "...webpack: bundle is now VALID.
"

Para acceder a la aplicación ingrese a la siguiente ruta en el browser:

	http://localhost:8080
	
El servidor reconocerá automáticamente todo cambio al código fuente y se actualizará la
página en el Browser

## Caracteristicas de Aplicación

- Aplicación javascrit basada en React.js + MobX
- Uso de Webpack, ES6, Babel
- Uso de React-Router para lo cual se incluyó Menú Colapsable lateral y opciones adicionales (plus)
- Uso de libreria Material-UI (React.js UI Components)
- El uso de la libreria Material-UI fuerza a utilizar algunos estilos inline.
Caso ideal sería mantener todos los estilos en archivo aparte
- Persistencia de productos en localStorage (HTML5)
- Uso de Responsive Design en página principal de productos.
- Dos modalidades de storage
  - ProductStorage: MobX
  - CustomerStorage: Clase ES6 'standard' (plus)
- Uso de libreria Axios para carga de datos desde servicio REST en CustomerStorage (Plus)
- Filtrado de Productos y Clientes por nombre. Se optó por filtrado 'Case sensitive'
- Se decidió hacer filtrado de productos 'onChange' sin necesidad de click en Botón
- Opción para ordenar cada una de las columnas de la tabla de productos de forma 
ascendente (primer click) / descendente (segundo click), mediante click en título 
- Aplicación hecha con Pasión y Cafe...

## Opciones Faltantes (Es cuestión de más tiempo y Cafe...)

- No se incluyó opción responsive en Dialogo de Nuevos Productos 
- Tests
- Los íconos (arrow drop down / arrow drop up) en títulos, asociados a la opción 
de ordenar columnas
- Más estilo en menú colapsable Lateral
- Incluir todos los Commits Originales en Github (creo no se estaba evaluando esto)

  ## Disfrute su Aplicación... !!!

