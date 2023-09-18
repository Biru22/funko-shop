# Funkoshop Equipo 6
Web Funkoshop creada mediante proyecto Codo a Codo 2023 - Proyecto integrador equipo 6

## Documentación y uso para trabajos compartidos
### Pasos a seguir:
1. Clonar el repositorio:
- ```jsx
   git clone https://github.com/Biru22/Funkoshop-Equipo-6.git
   ```
2. Abrir carpeta de repositorio clonado en Visual Studio Code
3. Observar nombres de ramas disponibles en terminal mediante:
- ```jsx
   git branch
   ```
4. Cambiar rama a la requerida:
- ```jsx
   git checkout nombre-de-la-rama
   ```
5. Editar página HTML:
- Buscar el HTML correspondiente ubicado en:
     1. ./pages/shop/ .html 
     2. ./pages/admin/ .html
6. Editar página CSS:
- Buscar el CSS correspondiente ubicado en:
     1. ./css/pages/shop/ .css 
     2. ./css/pages/admin/ .css
### Fusión de cambios
Al completar la página, fusionar los cambios a master:
1. Cambiar a rama master (Destino de la fusión):
- ```jsx
   git checkout master
   ```
2. Realizar fusión mediante merge:
- ```jsx
   git merge nombre-de-la-rama-a-unir (ej: git merge shop)
   ```
3. Avisar sobre cambios realizados para que el equipo realice un pull
### Mantener actualizado repositorio local:
Al completar cualquier fusión del equipo a la rama master, es necesario actualizar rama master para evitar conflictos o notificación de errores en Git.
1. Realizar un commit para evitar perdida de información (Ubicado en rama correspondiente de trabajo):
- ```jsx
   git add .
   ```
- ```jsx
   git commit -m "Nombre del commit"
   ```
- ```jsx
   git push
   ```
2. Cambiar a rama master:
- ```jsx
   git checkout master
   ```
3. Descargar cambios a repositorio local:
- ```jsx
   git pull origin master
   ```
4. Regresar a la rama de trabajo:
- ```jsx
   git checkout nombre-de-la-rama
   ```
  