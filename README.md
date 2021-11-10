# Aplicación de clima Mobile, basada en React Native
Lenguaje de programación y Toolkit: **React Native**  
Fuentes de datos: **API Weather**  
Persistencia de datos: **SQLite (Android) o Core Data (iOS)**  
Versionamiento de código: **Git y GitHub**  


# Para correr este proyecto en tu PC necesitarás:

* Tener Node JS [versión 16.13.0](https://[Link text Here](https://nodejs.org/). NOTA: realizar la instalación con `nvm` suele tener los mejores resultados.

* Instalar yarn
  ```
  $ npm install --global yarn
  ```

* Instalar expo-cli
  ```
  $ yarn global add expo-cli
  ```

* Una vez que tengas instaladas las dependencias anteriores, deberás clonar el repo:
  ```
  $ git clone git@github.com:yamil-90/weather-app-react-native.git
  ```

* Asegurate de estar en la rama `main`:
  ```
  $ git branch
  ```

  - Si no estuvieras en ella, deberás correr
  ```
  $ git checkout main
  ```

* Finalmente deberás instalar todas las librerías:
  ```
  $ yarn install
  ```

Adicionalmente deberás tener una API key de OpenWeatherMaps para guardar en la variable de entorno. Para agregarla a tu proyecto, deberás crear un archivo `.env` en el directorio root del proyecto, y llenarlo así:
```
WEATHER_API = "<tu API key de openweather>"
```
