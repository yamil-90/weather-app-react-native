Para empezar a contribuir a este repositorio:


# Iniciar el repositorio en la PC local
1. Crear una carpeta contenedora
2. Navegar hacia ella en la consola, y correr
   ```
   git init
   ```
3. Correr la instrucción `git pull <site>`, para "traer" el repositorio a la PC local.
4. Renombrar la rama (branch) local, de `master` a `main`. Este paso es opcional, pero me ha evitado algunas molestias.  
   Para ver el nombre de la rama actual:
   ```
   git branch
   ```
   Para cambiar el nombre:
   ```
   git branch -m master main
   ```

# Agregar remote
1. Para ver los remotes:
   ```
   git remote -v
   ```
2. Agregar remote:
   ```
   git remote add origin <remote link>
   ```
3. Para ver los remotes:
   ```
   git remote -v
 
   ```

# Crear una branch
1. Veamos primero el nombre de la `branch` actual:
   ```
   git branch
   ```

2. Para crear una nueva branch:
   ```
   git branch <nombre>
   ```

3. Para "ir" a la nueva branch:
   ```
   git checkout <nombre>
   ```

   Los pasos 2. y 3. pueden hacerse en uno solo: crear una branch, e "ir" hacia ella
   ```
   git checkout -b <nombre>

4. Para subir cambios a la nueva branch:
   ```
   git add .
   git commit -m "<Comentario significativo>"
   git push origin <nombreDeBranch>
   ```