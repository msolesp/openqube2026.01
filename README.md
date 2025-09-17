
## Edición 2025.02 (2025 - 2ndo semestre)

<img src='https://sysarmy.com/blog/assets/carpincho.jpg' width="300px">

<br>

### Acerca del análisis

El objetivo es poder analizar los salarios del mundo IT de Argentina, así como su evolución a lo largo del tiempo, cruzado por distintas variables como las de género, demográficas, entre otras.

Para ello se analizó la información utilizando Python en Google Colab, por lo cual los informes son 100% reproducibles en el navegador. La información se muestra en el [sitio web](https://sueldos.openqube.io/encuesta-sueldos-2025.02) de openqube.

### Acerca de los datos

Los datos se dividen en _no históricos_ e _históricos_. 

- Los datos _no históricos_ son los usados para medir el último período de análisis.

- Los _históricos_ contienen algunas de las variables que se miden a lo largo del tiempo.

---

### 💻 Google colabs utilizados:

- No histórico: Este colab limpia el dataset y calcula los datos correspondientes al último período de análisis para luego enviarlos por json a la página web en react. 

- Histórico: Este colab combina todos los  para luego enviarlos por json a la página web en react.

Si querés analizar la encuesta y no sabes Python, te invitamos a hacer el: [Curso Python básico y gratuito](https://escueladedatosvivos.ai/p/curso-gratuito-introductorio-a-python). 
_Disclaimer: Pertence a personas que realizaron el análisis en ediciones anteriores._
<br>

####	Valor del dólar oficial, ahorro y blue 💸 ☁️

-	**Dólar oficial**: www.bloomberg.com ([link query](https://www.bloomberg.com/markets/api/bulk-time-series/price/USDARS%3ACUR?timeFrame=5_YEAR))

-	**Dólar ahorro**: Se hace un cálculo directamente en front-end en base al dólar oficial. Verificar ese apartado para más detalles.

-	**Dólar Blue**: Obtuvimos la cotización desde www.bluelytics.com.ar ([link api](https://api.bluelytics.com.ar/v2/evolution.csv))

-   **Dólar MEP**: https://www.ambito.com/contenidos/dolar-mep-historico.html


Ver más detalles sobre el dólar en [README_backend](README_backend.md)

### Errores

<img src="https://c.tenor.com/PRN-EHOCuHwAAAAd/the-it-crowd-moss-the-it-crowd.gif" width="300px">

Si detectas un error, omisión u otro problema, y reiniciar la computadora no funcionó, por favor carga un issue en el repo.

---

## Reproducibilidad

Esta sección contiene los links a la documentación con las consideraciones necesarias para que pueda mantenerse consistentemente el proyecto en el tiempo. Se incluye el procedimiento de:

- Backend en `Python`, procesar archivos nuevos, consideraciones con datos históricos, etc: [README_backend](README_backend.md)

- Frontend en `React`, despliegue del sitio y visualización de gráficos): [README_frontend](README_frontend.md)

---

<br>

## About

El presente informe fue realizado para Openqube por [Sol Espain](https://www.linkedin.com/in/mar%C3%ADa-sol-espain-641ba013b/) y [Rodrigo Díaz](https://linktr.ee/rodrigofdiaz/).

Basado en el trabajo previo de [Nadia Kazlauskas](https://www.linkedin.com/in/nadiakazlauskas/), [Pablo Fernandez](https://www.linkedin.com/in/fernandezpablo85/), [Luciana Castro](https://twitter.com/luscastro), [Gerardo Bort](https://twitter.com/gerardobort), [Leonardo Genzano](https://ar.linkedin.com/in/leonardo-genzano-1b275193/), [Nico Quiroz](https://twitter.com/cocodibuja), [Pablo Casas](https://twitter.com/pabloc_ds), [Lara López Calvo](https://twitter.com/larilopezcalvo) y [Juan Manuel Benítez](https://www.linkedin.com/in/benitezjuanm/).