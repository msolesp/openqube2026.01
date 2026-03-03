 # Análisis de la encuesta Sysarmy
Última Actualización: 2026.01

## Despliegue en Local (o modo desarrollo)
Una vez descargado o clonado el proyecto, y dentro de la carpeta correr:

```jsx
npm install
npm start
```

se abrirá un browser nuevo y se actualizará con cada cambio en la carpeta del proyecto.

## Fuente de datos
chats.js y historic-charts.js son los archivos donde deberán colocar el código (JSON) generado desde Colab.

## Modificaciones en cada nueva edición

1. [Footer](src/components/Footer/index.js) cambiar el año de todos los derechos reservados

2. [Title](src/components/MainTitle/index.js) cambiar la edición de la encuesta.

3. [index.html](public/index.html) cambiar la edición de la encuesta.

# Modificaciones en página principal [data.js](src/components/Landing/data.js)
1. Introducción
    * Sumar edición anterior a informes pasados.
    * Actualizar fecha de la edición actual.

2. Perfil de Participantes / Experiencia / Años de experiencia
    * Actualizar link a encuesta anterior

3. Educación / Nivel de estudios alcanzado y estado actual
    * Actualizar porcentaje de personas que no ha finalizado estudios universitarios.

4. Salarios / Progresión Histórica / Mediana salarial en Argentina
    * **Salarios en AR$'** Actulizar fechas entre ediciones, el índice de inflación entre esas fechas y el aumento en la mediana salarial.
    * **Salarios en AR$ constantes ajustados por IPC**  Actualizar mes de los pesos constantes.

5. Género
    * Chequear y modificar porcentajes de identidades de género menores al 1%.
    * **Histórico de salarios por género** chequear cuánto gana una mujer cis por cada peso que gana un hombre cis.

6. Ajuste por inflación
    * Modificar la inflación entre períodos.

7. ¿Qué porcentaje tiene su sueldo dolarizado?
    * Modificar diferencia respecto a encuesta anterior
    * Modificar link de encuesta anterior