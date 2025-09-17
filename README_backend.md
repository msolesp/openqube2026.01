 # Análisis de la encuesta Sysarmy
Última Actualización: 2025.02
### Consideraciones para reproducir el análisis realizado con Colab 
En caso que el lector requiera replicar los resultados, o crear un nuevo análisis para las futuras encuestas, se plantean consideraciones útiles para caso set de datos.

## Primera Parte - Colab No Histórico
1. Cargar el csv RAW de la encuesta en el repositorio de la edición actual en: data/*edición_encuesta*_raw.csv.

2. En la primera celda del Colab No Histórico:
    * Actualizar el csv_url al csv RAW de esta edición (tiene que ser el enlace del View Raw).
    * Actualizar el dataset_metadata de esta edición:
        - year
        - part
        - skiprows se mantiene en 0
        - publish date (un estimativo)
        - salario mínimo en argentina (en general en [Wikipedia](https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina) bien actualizado, chequear con fuentes oficiales, suelen estar desactualizadas)

3. Comenzar con la sanitización del dataset y corregir / actualizar las que se marcan de acá en adelante.

4. 1.4.1. Carreras
    * Actualizar instrucciones de normalización de nombres de carreras según las que vayan quedando sueltas y refieran a carreras que ya aparecen.

5. 1.4.4. Roles
    * Actualizar instrucciones de normalización de nombres de roles según los que vayan quedando sueltos y refieran a roles que ya aparecen. Tener en cuenta criterios elegidos hasta ahora.

6. 1.4.6. Género
    * Actualizar instrucciones de normalización de género.
    * Actualizar valores de top_genders
    * Actualizar valores de all_genders

7. 1.4.8. En esa sección se descarga el dataset sanitizado para usar en el Colab Histórico. Lleva el nombre de *edición_encuesta*.csv. Este dataset aún contiene outliers salariales.

8. 1.6. En esta sección se descarga el dataset sanitizado y con eliminación de outliers. Lleva el nombre de *edición_encuesta*CLEAN.csv Es el que se va a usar en todo el análisis del Colab No Histórico. 

9. Comenzar con el análisis del dataset y corregir / actualizar las que se marcan de acá en adelante.

10. 2.2.3. Experiencia // Antiguedad en la Empresa Actual // Años en el Puesto Actual
    * Calcular máximo de la variable en cuestión.
    * Modificar a partir de ese cálculo el límite superior de los grupos.

11. 2.4.1. Identidad de Género
    * En la primera celda mandar a to_rechart todas aquellas identidades de género de las cuales haya alguna respuesta.

12. 2.4.7. // 2.4.8. // 2.4.9. Experiencia
    * Corregir anos_de_experiencia según el máximo encontrado.

13. 2.6.7. Porcentajes de Ajuste Acumulados
    * Corregir máximo de ajuste acumulado y en función de eso los grupos utilizados.

14. Publicación
    * 3.1. Descargamos el diccionario charts como charts.pkl para armar documento resumen para GPT.
    * 3.2  Descargamos un zip con todos los charts por separado. De ese zip, guardamos:
        - careeres_stacked_percent.csv
        - education_stacked.csv
        - universities_stacked_percent.csv
    en data/GPT/csvs_no_tidy.
    * 3.2. Generamos el diccionario para copiar dentro del archivo charts.js del frontend. Copiamos el diccionario para actualizar charts.js.
    * 3.3. Chequeamos que el diccionario que generamos tenga las mismas claves que esperamos tener en charts.js. Las keys de este diccionario se encuentran en el repositorio data/keys_graficos_no_historicos_*edición_encuesta*.csv

De este Colab se descarga:
* dataframe sanitizado para Colab Histórico: *edición_encuesta*.csv  - Guardar en el en repositorio data/csv/argentina/
* dataframe CLEAN sanitizado y sin outliers para todo el análisis y para compartir: *edición_encuesta*CLEAN.csv - Guardar en el repositorio data/
* diccionario de charts: charts.pkl - Guardar en el repositorio data/GPT/

## Segunda Parte - Colab Histórico
1. Actualizar cotizaciones de dólar en repositorio:
    * US$ Oficial: actualizar con datos de Bloomberg. En el achivo del repositorio data/currency-*edición_encuesta*.json copiar las últimas cotizaciones.
    * US$ Blue: descargar archivo evolución de bluelytics. Reemplazar el archivo data/evolution.csv por el actual.
    * Salario en USS MEP: actualizar con datos de Ámbito. En el achivo del repositorio data/evolucion_mep.csv copiar las últimas cotizaciones.

2. Actualizar IPC acumulado en repositorio:
    * En el achivo del repositorio data/ipc_acumulado_*edición_encuesta*.csv agregar la línea correspondiente a la edición actual, tomando valor de IPC acumulado del mes anterior al que inició la encuesta.

3. En primera celda del Colab: agregar a datasets_metadata la metadata de la edición actual y en la misma celda cambiar el final_publish_date.

4. Publicación
    * 3.1. Exportamos el diccionario chart como charts.pkl para armar documento resumen para GPT.
    * 3.2 Generamos el diccionario para copiar dentro del archivo historic-charts.js del frontend. Copiamos el diccionario para actualizar historic-charts.js.
    * 3.3. Chequeamos que el diccionario que generamos tenga las mismas claves que esperamos tener en historic_charts.js. Las keys de este diccionar io se encuentran en el repositorio data/keys_graficos_historicos_*edición_encuesta*.csv

De este Colab se descarga:
* diccionario de historic-charts: historic-charts.pkl - Guardar en el repositorio data/GPT/

## Tercera Parte - Colab GPT
1. Agregar a datasets_metadata la metadata de la edición actual.

2. Modificar link a la data de ipc acumulado, con nombre actualizado al de esta edición.

3. Modificar link al dataset CLEAN de esta edición.

De este Colab se descarga:
* diccionario de historic-charts: historic-charts.pkl - Guardar en el repositorio data/GPT/
* percentiles_salariales_roles_seniority_dolarizacion.csv - Guardar en el repositorio data/GPT/data_for_GPT
* encuesta_anterior_percentiles_salariales_roles_seniority_dolarizacion_actualizados.csv - Guardar en el repositorio data/GPT/data_for_GPT
* medianas_salariales_nivel_de_estudios.csv - Guardar en el repositorio data/GPT/data_for_GPT
* medianas_salariales_carrera_experiencia.csv - Guardar en el repositorio data/GPT/data_for_GPT
* medianas_salariales_plataformas.csv - Guardar en el repositorio data/GPT/data_for_GPT
* medianas_salariales_lenguajes_de_programacion.csv - Guardar en el repositorio data/GPT/data_for_GPT
* top-10-mejores-pagos.csv - Guardar en el repositorio data/GPT/data_for_GPT

## Cuarta Parte - GPT
1. Correr data/GPT/csvs_no_tidy/tidy_for_csv.py que va a guardar en data/GPT/data_for_GPT:
    - education_stacked_long.csv
    - careeres_stacked_percent.csv
    - universities_stacked_percent.csv

2. Correr data/GPT/make_GPT_md.py que va a guardar en data/GPT/data_for_GPT el archivo resumen_encuesta.md.

3. Subir al GPT el resumen (resumen_encuesta.md) y las tablas  actualizadas (10):
    1. education_stacked_long.csv
    2. careeres_stacked_percent.csv
    3. universities_stacked_percent.csv
    4. percentiles_salariales_roles_seniority_dolarizacion.csv
    5. encuesta_anterior_percentiles_salariales_roles_seniority_dolarizacion_actualizados.csv
    6. medianas_salariales_nivel_de_estudios.csv
    7. medianas_salariales_carrera_experiencia.csv
    8. medianas_salariales_plataformas.csv
    9. medianas_salariales_lenguajes_de_programacion.csv
    10. top-10-mejores-pagos.csv