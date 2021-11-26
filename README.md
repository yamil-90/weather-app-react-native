# Aplicación de clima Mobile, basada en React Native
Lenguaje de programación y Toolkit: **React Native**  
Fuentes de datos: **API Weather**  
Persistencia de datos: **SQLite**  
Versionamiento de código: **Git y GitHub**  

# User Persona

<p align="center">
    <a href="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/User_Persona_Paula.pdf"><img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/Paula.png" height="350"/><br> Click aquí para ver el documento completo </a>
</p>

# Prototipo de la app
<p align="center">
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/01_home.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/02_cities_A.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/02_cities_B.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/02_cities_C.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/02_cities_D.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/03_about_A.png" height="350"/> &nbsp;&nbsp;
    <img src="https://github.com/yamil-90/weather-app-react-native/blob/main/resources/png/03_about_B.png" height="350"/>
</p>

# Link para el apk (en caso de que quieras bajarlo directo a un dispositivo android)
  [link para descargar la apk](https://expo.dev/artifacts/7888fdbe-91df-4f36-9f5c-b6430f68acff)

  * abrir el link desde el dispositivo con tu explorador de eleccion y esperar que se complete la descarga

  * abrir la apk (puede que tengas que habilitar el uso de app externas)

  * si salta un mensaje de advertencia elegir "instalar de todos modos"

  * abrir la app en tu dispositivo movil

# Dependencias que deberás instalar


* Instalar Expo CLI
  ```
  $ npm install --global expo-cli/
* Tener Node JS [versión 16.13.0] [nodejs](https://nodejs.org/) 
 NOTA: realizar la instalación con `nvm` suele tener los mejores resultados.

* Instalar yarn
  ```
  $ npm install --global yarn
  ```
* Instalar la librería `Location`
  ```
  $ expo install expo-location
  ```
* Tener una API key de OpenWeatherMaps (en el repo esta la nuestra ya guardada,)
* Instalar la librería `react-native-env`
  ```
  npm install react-native-dotenv
  ```
NOTA: es posible instalar todos los paquetes con
```
yarn install
```

* Instalar `Expo Go` en tu celular, o `Android Studio` en tu PC. Recordá que Android Studio tiende a ser bastante pesado para la PC.

# Correr el proyecto en tu PC:
1. Tener instaladas todas las dependencias del apartado anterior.
2. Correr el comando
   ```
   yarn start o expo start
   ```
3. Abrir el software Android Studio o Expo Go en el celular
4. ???
5. Profit.

NOTA: las funciones de ubicación y mapa pueden no correr adecuadamente en el emulador Android Studio. Probablemente se deba a un tema de configuración de ese software.
