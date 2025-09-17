# 📊 Encuesta de Sueldos IT 2025.02 – Resumen Ejecutivo

Este documento resume los principales datos globales y describe la ubicación de la información detallada en los archivos CSV.

---
## Datos Generales

- **Total de encuestados:** 3861
- **Total de casos analizados:** 3748
- **Período de relevamiento:** 1 de junio 2024 – 03 de agosto 2025
- **Fuente:** [openqube.io – Encuesta de Sueldos 2025.02](https://sueldos.openqube.io/encuesta-sueldos-2025.02/)

---
## Indicadores Salariales 

| Indicador | Valor |
|-----------|-------|
| Mediana salarial general (ARS) | 2,877,951 |
| Mediana salarial general (USD Oficial) | 2,171 |
| Mediana salarial general (USD Blue) | 2,205 |
| Mediana salarial general (USD MEP) | 2,148 |


| Mediana salarial para salarios dolarizados Junior | 1,600,000 |
| Mediana salarial para salarios dolarizados Semi-Senior | 2,700,000 |
| Mediana salarial para salarios dolarizados Senior | 4,327,700 |

| Mediana salarial para salarios no dolarizados Junior | 1,533,813 |
| Mediana salarial para salarios no dolarizados Semi-Senior | 2,281,890 |
| Mediana salarial para salarios no dolarizados Senior | 3,272,231 |

Las medianas salariales para puestos Semi-Senior y Senior pueden variar hasta un 32% según si el sueldo se encuentra (al menos en una parte) dolarizado o no. 
En cambio, para roles Junior, se observa una diferencia de 4%.

---
## Educación

- Total de personas que respondieron sección de educación: 1484
- Porcentaje respecto al total de encuestados que respondieron sección de educación: 40%

---
## Brecha Salarial por Género

| Mediana salarial para hombres cis Junior | 1,633,000 |
| Mediana salarial para hombres cis Semi-Senior | 2,504,413 |
| Mediana salarial para hombres cis Senior | 3,750,000 |

| Mediana salarial para mujeres cis Junior | 1,460,000 |
| Mediana salarial para mujeres cis Semi-Senior | 2,070,000 |
| Mediana salarial para mujeres cis Senior | 3,144,684 |

---
## Convenciones

**Seniority**  
- **Junior**: de 0 hasta 2 años (sin incluir 2).  
- **Semi-Senior**: desde 2 años (incluye 2) hasta 5 años (sin incluir 5).  
- **Senior**: desde 5 años (incluye 5) en adelante.

**Dolarización (agrupada)**  
- **Dolarizado**: incluye “Dolarizado pero cobra en ARS”, “Parcialmente dolarizado” y “100% dolarizado”.  
- **No dolarizado**: resto de los casos.

**Rangos y unidades**  
- Todos los salarios se reportan en **ARS nominales**.  
- Solo se citan valores en **USD** cuando se hace referencia a los **USD generales** del resumen.

**Redondeo y formato**  
- **ARS**: enteros sin decimales, con separador de miles.  
- **Porcentajes**: 1–2 decimales.  
- Convertir valores decimales a **%** cuando corresponda.

---
## Metodología

Aquí se muestran ciertas aclaraciones respecto del enfoque y la metodología utilizada. Si bien los resultados aquí expuestos son números, hay ciertos procedimientos manuales que ayudaron a seleccionarlos, agruparlos y haberles dado relevancia respecto de otros. 

La mediana de los salarios, para los datos de la encuesta, suele estar levemente por debajo del valor promedio.

Evolución de los salarios en pesos constantes ajustados por IPC: los salarios históricos se ajustaron a pesos constantes utilizando el Índice de Precios al Consumidor (IPC) publicado por el INDEC, lo que permite eliminar el efecto de la inflación y analizar la evolución del poder adquisitivo real. Para ello, se definió un período base y se aplicó el IPC como coeficiente de ajuste a cada salario histórico, convirtiéndolo a valores equivalentes en términos de precios actuales. El detalle sobre cómo utilizar este índice se encuentra en en este documento oficial de INDEC.

Valores atípicos: muchos salarios ingresados no se corresponden necesariamente con datos reales. Esto puede ser debido a errores de tipeo, no entendimiento de la pregunta, o simplemente intencionales. Para evitar que estos valores distorsionen los resultados, aplicamos el método del Rango Intercuartílico con un coeficiente de 3.5. Dadas las diferencias encontradas entre los salarios dolarizados y los no dolarizados, este método fue aplicado por separado para estas dos poblaciones. Es muy posible que existan salarios reales que hayan quedado fuera del análisis, por ser estos realmente outliers.
Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio salario mínimo. Tanto para la más reciente encuesta como para las anteriores.

Valores de percentiles salariales no confiables: Para evaluar la confiabilidad de los percentiles salariales de cada grupo reportado, se calculó el Intervalo de Confianza del 95% y se consideró confiable si dicho intervalo no supera el 50% del percentil en cuestión. Por ejemplo, una mediana de 1.200.000 con un intervalo de confianza del 95% entre 1.000.000 y 1.400.000 se considera confiable, ya que el ancho del intervalo (400.000) representa solo un 33% de la mediana. En cambio, si el intervalo de confianza estuviera entre 850.000 y 1.550.000, la consideraríamos no confiable, ya que el ancho del intervalo representa un 58% de la mediana.

Cotización del dólar: para el cálculo de salarios dolarizados, tomamos la cotización intradiaria promedio de Bloomberg y tomamos la mediana del valor del día de publicación con un delta de 5 días. En el caso del dólar MEP, la cotización proviene de la serie histórica publicada por Ámbito Financiero.

Experiencia: Para los gráficos en los cuales mencionamos experiencia o seniority, hemos agrupado los datos relevados en tres grandes grupos:
Junior: de 0 hasta 2 años.
Semi-Senior: de 2 años inclusive hasta 5 años.
Senior: desde 5 años inclusive.

Género: las respuestas al campo de género solían presentar varias irregularidades ya que en todas las ediciones las personas encuestadas tenían la posibilidad de escribir texto libre, y muchas solían hacerlo en tono gracioso o enojado. Todas estas respuestas eran agrupadas en la categoría "Prefiero no decir". Entonces, esa categoría no solo representaba a las personas que explícitamente decían no querer expresar su género, sino también a aquellas que completaron cosas sin sentido. Este último grupo tendía a aumentar cuando se ofrecían todas las opciones de diversidad de género (con la posibilidad de también escribir texto libre). El nuevo formato de esta pregunta (solo texto libre), produjo un marcado descenso en este tipo de respuestas, ayudándonos a tener una mejor aproximación al número de personas que prefieren no identificarse.

---
### Normalización de términos

Para evitar ambigüedades, estos sinónimos se mapean a una forma canónica:
**Roles:** Dev → Developer; Dev. → Developer; Programador → Developer; Software Engineer → Developer; Software Developer → Developer; Frontend / Front-end dev → Developer; Backend / Back-end dev → Developer; Fullstack / Full-stack → Developer / Desarrollador → Developer
QA → QA / Tester; Tester → QA / Tester; Quality Assurance → QA / Tester; Test Engineer → QA / Tester
SysAdmin → SysAdmin / DevOps / SRE; SRE → SysAdmin / DevOps / SRE; Site Reliability Engineer → SysAdmin / DevOps / SRE; Infrastructure → SysAdmin / DevOps / SRE; DevOps Engineer → SysAdmin / DevOps / SRE
BI → BI Analyst / Data Analyst; BA (cuando se refiera a Business Intelligence) → BI Analyst / Data Analyst; Data Analytics → BI Analyst / Data Analyst
Data Eng → Data Engineer; Engineer Data → Data Engineer
DS → Data Scientist; Científico de Datos → Data Scientist; Ciencia de Datos → Data Scientist
Software Architect → Architect; Solution Architect → Architect; Tech Architect → Architect
TL → Technical Leader; Tech Lead → Technical Leader; Líder Técnico → Technical Leader
Manager → Manager / Director; Director → Manager / Director; Head of → Manager / Director
C-Level → VP / C-Level; CEO/CTO/CFO/COO → VP / C-Level
Help Desk → HelpDesk; Mesa de ayuda → HelpDesk
Network → Networking; Admin de redes → Networking
BA (cuando se refiera a analista funcional) → Business Analyst; Analista de negocio → Business Analyst
Talent Acquisition → Recruiter; RRHH IT → Recruiter; Headhunter → Recruiter; Reclutador → Recruiter; Recursos Humanos → Recruiter

**Seniority:** jr/jr./junior → `Junior`; ssr/semi/semi senior/semi-senior/mid → `Semi-Senior`; sr/sr./senior → `Senior`

**Dolarización:** 
true / usd / en usd / dólar / dolarizada / parcial / parcialmente dolarizado / 100% dolarizado → Dolarizado
false / ars / pesos / en pesos / no dolarizado / sueldo en ARS → No dolarizado

**Tecnologías:** 
Java Script → Javascript; JS → Javascript; javascript → Javascript; JavaScript → Javascript.
TS → TypeScript.
Py → Python; py → Python; python → Python.
C Plus Plus → C++; C/C++ → C++.
C Sharp → C#.
.Net → .NET; .NET Core → .NET.
Node → Node.js; NodeJS → Node.js.
Golang → Go.
T-SQL → SQL; PL/SQL → SQL.
Lenguaje R → R.
Php → PHP.

**Plataformas y herramientas:**
Amazon Web Services → Amazon Web Services; AWS → Amazon Web Services.
Google Cloud → Google Cloud Platform; GCP → Google Cloud Platform.
MS Azure → Azure.
VM → VMWare.
K8s → Kubernetes.
Postgres / Postgre → PostgreSQL.
Powershell → PowerShell.

---
## Prioridad de fuentes
- **Rol específico** → usar **solo** `percentiles_salariales_roles_seniority_dolarizacion.csv`.
- **Fallback si falta la combinación** → usar `encuesta_anterior_percentiles_salariales_roles_seniority_dolarizacion_actualizados.csv` y **avisar**: “Este valor proviene de la edición anterior y fue ajustado por IPC.”
- **Nunca** usar promedios si se piden medianas (**y viceversa**).
- **Roles mejor pagos (top 10%)** → `top-10-mejores-pagos.csv`.
- **Educación** → `education_stacked_long.csv`, `careeres_stacked_percent.csv`, `universities_stacked_percent.csv`.
- **Plataformas y Tecnologías (lenguajes, herramientas)** →
  1) Prioritaria: `medianas_salariales_lenguajes_de_programacion_por_seniority.csv` (si está disponible).  
  2) Fallback: `medianas_salariales_lenguajes_de_programacion.csv` (sin seniority).  
  Si se usa (2), **avisar**: “Para esta tecnología no hay mediana por seniority en la edición actual; se muestra la **mediana general** por dolarización.” **No mezclar seniorities ni promediar.**
- **Si no hay datos en ninguna fuente** → responder exactamente: **“No se puede responder esa pregunta con la información relevada en la encuesta.”**
---
## Índice de Archivos CSV

| Archivo CSV | Contenido | Variables clave |
|-------------|-----------|-----------------|
| `careeres_stacked_percent.csv` | Porcentaje de personas por carrera según estado de completitud (Completo, En curso, Incompleto). Cada fila corresponde a una combinación carrera–estado. | `name` (Carrera), `estado` (Completo/En curso/Incompleto), `porcentaje` (%) |
| `education_stacked_long.csv` | Porcentaje de personas por nivel educativo según estado de completitud (Completo, En curso, Incompleto). Cada fila corresponde a una combinación nivel–estado. | `name` (Nivel educativo), `estado` (Completo/En curso/Incompleto), `porcentaje` (%) |
| `percentiles_salariales_roles_seniority_dolarizacion.csv` | Percentiles salariales (mínimo, 25, 50, 75 y máximo) según combinación de rol, seniority y dolarización. Incluye además el nivel de confianza en esos valores. | `Rol`, `Seniority`, `Dolarización`, `p0`, `p25`, `p50`, `p75`, `p100`, `Confianza` |
| `encuesta_anterior_percentiles_salariales_roles_seniority_dolarizacion_actualizados.csv` | Medianas salariales para combinaciones de rol, seniority y dolarización que no aparecieron en la edición actual. Los valores provienen de la edición anterior y fueron actualizados por IPC, incluyendo el nivel de confianza. | `Rol`, `Seniority`, `Dolarización`, `p50`, `Confianza` |
| `medianas_salariales_carrera_experiencia.csv` | Medianas salariales en pesos argentinos según carrera y seniority. Incluye además el nivel de confianza asociado a cada mediana. | `Carrera`, `Seniority`, `p50`, `Confianza` |
| `medianas_salariales_lenguajes_de_programacion.csv` | Medianas salariales en pesos argentinos según lenguaje de programación utilizado, seniority y tipo de dolarización del salario. Incluye además la confianza de esa mediana. | `Lenguaje de Programación`, `Seniority`, `p50`, `Confianza`, `Dolarización` |
| `medianas_salariales_plataformas.csv` | Medianas salariales en pesos argentinos según plataforma utilizada, seniority y tipo de dolarización del salario. Incluye además la confianza de esa mediana. | `Plataforma`, `Seniority`, `p50`, `Confianza`, `Dolarización` |
| `medianas_salariales_nivel_de_estudios.csv` | Mediana salarial en pesos argentinos según nivel de estudios alcanzado y tipo de dolarización del salario. Incluye además la confianza de esa mediana. | `Estudios`, `Dolarización`, `p50`, `Confianza` |
| `top-10-mejores-pagos.csv` | Información sobre los roles mejor pagos considerando el top 10% de salarios más altos. Primero se busca el 10% de los salarios más altos (salarios por encima del percentil 90). Luego, se agrupa por rol (con más de 5 casos) y se calcula la cantidad de respuestas, la mediana, el promedio y el porcentaje de salarios dolarizados. | `Rol`, `Cantidad`, `p50`, `Promedio`, `Porcentaje de dolarizados` |
| `universities_stacked_percent.csv` | Porcentaje de personas por universidad/institución según estado de completitud (Completo, En curso, Incompleto). Cada fila corresponde a una combinación universidad–estado. | `name` (Universidad/Institución), `estado` (Completo/En curso/Incompleto), `porcentaje` (%) |
---
## Tablas de Datos en este mismo archivo
Las siguientes tablas muestran los porcentajes de las respuestas a las preguntas de la encuesta. Salvo que se avise otra cosa, los valores son porcentuales sobre el total de participantes.


## Distribución por provincia
| Provincia | Porcentaje |
|---|---:|
| Ciudad Autónoma de Buenos Aires | 49.84% |
| Buenos Aires | 20.84% |
| Córdoba | 8.80% |
| Santa Fe | 7.42% |
| Mendoza | 3.31% |
| Entre Ríos | 1.63% |
| Río Negro | 1.01% |
| Misiones | 0.88% |
| Tucumán | 0.85% |
| Chaco | 0.75% |
| Salta | 0.72% |
| Neuquén | 0.61% |
| Jujuy | 0.51% |
| Corrientes | 0.48% |
| Chubut | 0.45% |
| San Luis | 0.40% |
| La Rioja | 0.32% |
| San Juan | 0.32% |
| La Pampa | 0.24% |
| Santiago del Estero | 0.24% |
| Santa Cruz | 0.16% |
| Tierra del Fuego | 0.16% |
| Formosa | 0.03% |
| Catamarca | 0.03% |


## Distribución de Roles
| Rol | Porcentaje |
|---|---:|
| Developer | 34.71% |
| SysAdmin / DevOps / SRE | 11.18% |
| Manager / Director | 9.15% |
| Technical Leader | 7.52% |
| BI Analyst / Data Analyst | 5.28% |
| QA / Tester | 5.02% |
| Data Engineer | 2.93% |
| Data Scientist | 2.32% |
| Architect | 2.27% |
| UX Designer | 2.24% |
| Infosec | 2.19% |
| Business Analyst | 1.87% |
| Recruiter | 1.68% |
| Consultant | 1.65% |
| HelpDesk | 1.55% |
| Networking | 1.25% |
| Designer | 0.96% |
| Functional Analyst | 0.91% |
| VP / C-Level | 0.72% |
| Sales / Pre-Sales | 0.67% |
| Scrum Master | 0.61% |
| DBA (Database Administrator) | 0.51% |
| UX Researcher | 0.37% |
| Technical Support | 0.29% |
| Docente | 0.27% |
| Finance | 0.27% |
| UX Writer | 0.24% |
| Marketing | 0.16% |
| Middleware | 0.16% |
| Storage / Backup | 0.16% |
| Otros | 0.88% |


## Experiencia en años
| Experiencia en años | Porcentaje |
|---|---:|
| 0-1 | 5.39% |
| 2 | 6.94% |
| 3 | 12.30% |
| 4-5 | 19.93% |
| 6-8 | 14.17% |
| 9-13 | 13.69% |
| 14-21 | 18.36% |
| 22-46 | 9.23% |


## Experiencia en compañía (en años)
| Experiencia en la compañía en años | Porcentaje |
|---|---:|
| 0-1 | 30.82% |
| 2 | 14.97% |
| 3 | 17.10% |
| 4-5 | 16.36% |
| 6-8 | 7.90% |
| 9-13 | 6.94% |
| 14-21 | 4.64% |
| 22-42 | 1.28% |


## Experiencia en la posición actual (en años)
| Experiencia en la posición actual en años | Porcentaje |
|---|---:|
| 0-1 | 31.78% |
| 2 | 18.83% |
| 3 | 18.18% |
| 4-5 | 16.58% |
| 6-8 | 7.40% |
| 9-13 | 4.33% |
| 14-21 | 2.48% |
| 22-35 | 0.43% |


## Carreras estudiadas por los encuestados
| Carreras | Porcentaje |
|---|---:|
| Ingeniería en Sistemas | 18.33% |
| Analista de Sistemas | 9.77% |
| Ingeniería en Informática | 9.50% |
| Tecnicatura Superior en Programación | 6.87% |
| Licenciatura en Sistemas | 6.40% |
| Licenciatura en Informática | 4.92% |
| Licenciatura en Ciencias de la Computación | 4.58% |
| Ingeniería Electrónica | 3.84% |
| Diseño Gráfico | 3.37% |
| Licenciatura en Ciencia de Datos | 3.03% |
| Licenciatura en Administración de Empresas | 2.22% |
| Analista Programador Universitario | 1.48% |
| Ingeniería Industrial | 1.28% |
| Ingeniería en Computación | 1.21% |
| Tecnicatura Superior en Sistemas Informáticos | 1.08% |
| Ingeniería en Software | 1.01% |
| Telecomunicaciones | 0.88% |
| Ingeniería en Telecomunicaciones | 0.88% |
| Licenciatura en Ciencias Físicas | 0.81% |
| Tecnicatura en Informática | 0.81% |
| Tecnicatura en Sistemas | 0.81% |
| Analista de Computación | 0.67% |
| Licenciatura en Seguridad | 0.67% |
| Diseño Multimedial | 0.61% |
| Licenciatura en Comunicación | 0.61% |
| Licenciatura en Psicología | 0.54% |
| Desarrollo Web | 0.54% |
| Licenciatura en Gestión de Tecnología | 0.54% |
| Desarrollo de Software | 0.47% |
| Sistemas de Información | 0.40% |
| Recursos Humanos | 0.40% |
| Tecnicatura en Computación | 0.40% |
| Profesorado General | 0.34% |
| Diseño Industrial | 0.34% |
| Certificaciones y Bootcamp | 0.34% |
| Ingeniería Mecatrónica | 0.34% |
| Contador/a Público/a | 0.34% |
| Medicina | 0.34% |
| Licenciatura en Sociología | 0.34% |
| Técnique Secundario en Programación | 0.27% |
| Otros | 8.42% |


## Universidades donde estudian o estudiaron los encuestados
| Universidades | Porcentaje |
|---|---:|
| UTN - Universidad Tecnológica Nacional | 29.94% |
| UBA - Universidad de Buenos Aires | 16.13% |
| UADE - Universidad Argentina De la Empresa | 4.71% |
| UNLaM - Universidad Nacional de La Matanza | 3.89% |
| UNLP - Universidad Nacional de La Plata | 3.64% |
| UAI - Universidad Abierta Interamericana | 3.47% |
| UP - Universidad de Palermo | 2.98% |
| Universidad Siglo 21 | 2.98% |
| UNR - Universidad Nacional de Rosario | 2.56% |
| ORT | 2.23% |
| UNC - Universidad Nacional de Córdoba | 2.15% |
| UNSAM - Universidad de San Martín | 1.90% |
| UCAECE - Centro de Altos Estudios en Ciencias Exactas | 1.82% |
| UNCUYO - Universidad Nacional de Cuyo | 1.74% |
| UNICEN - Universidad Nacional del Centro de la Provincia de Buenos Aires | 1.65% |
| ESBA - Escuela Superior Buenos Aires | 1.24% |
| Escuela Da Vinci | 1.16% |
| ISTEA - Instituto Superior Tecnológico Empresarial Argentino | 1.16% |
| UNGS - Universidad Nacional de General Sarmiento | 1.08% |
| UNS - Universidad Nacional del Sur | 1.08% |
| ITBA Instituto Tecnológico de Buenos Aires | 0.83% |
| USAL - Universidad del Salvador | 0.83% |
| UNL - Universidad Nacional del Litoral | 0.83% |
| UNQ - Universidad Nacional de Quilmes | 0.74% |
| UNLA - Universidad Nacional de Lanús | 0.74% |
| UNNNE - Universidad Nacional del Nordeste | 0.74% |
| UBP - Universidad Blas Pascal | 0.74% |
| UNNOBA - Universidad Nacional del Noroeste de la Provincia de Buenos Aires | 0.58% |
| UADER - Universidad Autónoma de Entre Ríos | 0.58% |
| UNTREF - Universidad Tres de Febrero | 0.58% |
| UNCOMA - Universidad Nacional del Comahu | 0.50% |
| UNJu - Universidad Nacional de Jujuy | 0.50% |
| UCA - Universidad Católica Argentina | 0.50% |
| UNSL - Universidad Nacional de San Luis | 0.41% |
| UM - Universidad de Morón | 0.41% |
| UCES - Universidad de Ciencias Empresariales y Sociales | 0.41% |
| UNRC - Universidad Nacional de Río Cuarto | 0.41% |
| UK - Universidad Kennedy | 0.33% |
| UNAB - Universidad de Almirante Brown | 0.33% |
| IUA - Instituto Universitario Aeronáutico | 0.33% |
| Otros | 1.16% |


## Género de la población encuestada (porcentaje)
| Género | Porcentaje |
|---|---:|
| Hombre Cis | 78.31% |
| Mujer Cis | 19.98% |
| Prefiero no decir | 0.93% |
| No binarie | 0.35% |
| Queer | 0.19% |
| Trans | 0.16% |
| Agénero | 0.05% |
| Fluido | 0.03% |


## Género de la población encuestada (cantidad)
| Género | Cantidad |
|---|---:|
| Hombre Cis | 2935 |
| Mujer Cis | 749 |
| Prefiero no decir | 35 |
| No binarie | 13 |
| Queer | 7 |
| Trans | 6 |
| Agénero | 2 |
| Fluido | 1 |


## Porcentaje de uso de plataformas. Las plataformas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.
| Plataformas | Porcentaje |
|---|---:|
| Linux | 0.38847385272145146 |
| Docker | 0.38046958377801493 |
| Amazon Web Services | 0.3084311632870864 |
| Azure | 0.21051227321237995 |
| Windows Server | 0.20891141942369262 |
| Google Cloud Platform | 0.1744930629669157 |
| Kubernetes | 0.17209178228388475 |
| VMWare | 0.12059765208110992 |
| Serverless | 0.06643543223052295 |
| Firebase | 0.06510138740661686 |
| SAP | 0.048826040554962646 |
| OpenShift | 0.045090715048025615 |
| Microcontroladores | 0.020010672358591247 |
| Mainframe | 0.01574172892209178 |
| Arduino o similar | 0.015474919957310566 |
| *BSD | 0.009871931696905017 |
| OpenStack | 0.0096051227321238 |
| IBM Cloud / Watson | 0.0080042689434365 |
| AIX | 0.007737459978655283 |
| Solaris | 0.0061366061899679825 |
| HP-UX | 0.005336179295624333 |
| Jira | 0.004535752401280683 |
| Proxmox | 0.003735325506937033 |
| Salesforce | 0.003735325506937033 |
| Figma | 0.002934898612593383 |
| Fortinet | 0.0026680896478121665 |
| Databricks | 0.0021344717182497333 |
| Cisco | 0.0016008537886872999 |
| Postman | 0.0013340448239060833 |
| jira | 0.0010672358591248667 |


## Porcentaje de uso de lenguajes de programación. Los lenguajes de programación no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.
| Lenguajes de Programación | Porcentaje |
|---|---:|
| SQL | 0.4413020277481323 |
| Javascript | 0.37646744930629666 |
| Python | 0.33751334044823905 |
| HTML | 0.27614727854855925 |
| TypeScript | 0.2195837780149413 |
| CSS | 0.1830309498399146 |
| Bash/Shell | 0.18009605122732122 |
| Java | 0.1747598719316969 |
| PHP | 0.12086446104589114 |
| .NET | 0.11739594450373532 |
| C# | 0.09551760939167556 |
| Go | 0.05976520811099253 |
| Kotlin | 0.03014941302027748 |
| C++ | 0.024279615795090716 |
| VBA | 0.022145144076840984 |
| C | 0.021344717182497332 |
| Groovy | 0.0144076840981857 |
| Swift | 0.013607257203842048 |
| Ruby | 0.013073639274279616 |
| R | 0.012806830309498399 |
| Arduino | 0.009871931696905017 |
| Dart | 0.009071504802561366 |
| COBOL | 0.008804695837780149 |
| ABAP | 0.008271077908217716 |
| Perl | 0.006670224119530417 |
| Assembler | 0.005869797225186766 |
| Scala | 0.005869797225186766 |
| Rust | 0.005069370330843116 |
| Delphi | 0.004535752401280683 |
| PowerShell | 0.004535752401280683 |
| Solidity | 0.003735325506937033 |
| Objective-C | 0.00240128068303095 |
| Erlang | 0.0018676627534685165 |
| Apex | 0.0016008537886872999 |
| Matlab | 0.0016008537886872999 |


## Porcentaje de uso de Frameworks, Herramientas y Librerías. Los Frameworks, Herramientas y Librerías no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.
| Frameworks, Herramientas y Librerías | Porcentaje |
|---|---:|
| Node.js | 0.20784418356456777 |
| React.js | 0.18223052294557096 |
| Bootstrap | 0.12273212379935966 |
| .NET Core | 0.1056563500533618 |
| Angular | 0.09845250800426894 |
| Spring | 0.096051227321238 |
| Next.js | 0.09178228388473852 |
| jQuery | 0.08964781216648879 |
| WordPress | 0.05016008537886873 |
| Vue.js | 0.048826040554962646 |
| Flask | 0.04375667022411953 |
| Django | 0.04348986125933831 |
| Laravel | 0.0416221985058698 |
| Hibernate | 0.040288153681963715 |
| SAP | 0.024813233724653147 |
| Spark | 0.023745997865528282 |
| TensorFlow | 0.023212379935965848 |
| SAP Hana | 0.01680896478121665 |
| Flutter | 0.016542155816435433 |
| Torch | 0.012806830309498399 |
| Symfony | 0.012806830309498399 |
| FastAPI | 0.010939167556029883 |
| CodeIgniter | 0.0096051227321238 |
| Hadoop | 0.008804695837780149 |
| Rails | 0.008537886872998933 |
| Drupal | 0.008271077908217716 |
| HTMX | 0.0080042689434365 |
| Bun | 0.005602988260405549 |
| Cordova | 0.005602988260405549 |
| SwiftUI | 0.005336179295624333 |
| Akka | 0.0021344717182497333 |
| Nest.js | 0.0021344717182497333 |
| Playwright | 0.0016008537886872999 |
| NestJS | 0.0016008537886872999 |
| pandas | 0.0013340448239060833 |


## Porcentaje de uso de Bases de Datos. Las Bases de Datos no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.
| Bases de Datos | Porcentaje |
|---|---:|
| MySQL | 0.29375667022411955 |
| Microsoft SQL Server | 0.2649413020277481 |
| PostgreSQL | 0.26334044823906083 |
| MongoDB | 0.14941302027748132 |
| MariaDB | 0.11259338313767342 |
| Redis | 0.10672358591248667 |
| Oracle | 0.10485592315901815 |
| Amazon DynamoDB | 0.0768409818569904 |
| Microsoft Azure | 0.0768409818569904 |
| SQLite | 0.07657417289220918 |
| Amazon RDS/Aurora | 0.07177161152614728 |
| ElasticSearch | 0.07043756670224119 |
| Google Cloud Storage | 0.06376734258271077 |
| Amazon Redshift | 0.021344717182497332 |
| IBM Db2 | 0.01814300960512273 |
| HANA | 0.015474919957310566 |
| Sybase | 0.011205976520811099 |
| Teradata | 0.009338313767342583 |
| Cassandra | 0.008271077908217716 |
| Apache Hive | 0.007737459978655283 |
| Informix | 0.00720384204909285 |
| Neo4j | 0.005869797225186766 |
| ProxySQL | 0.003735325506937033 |
| Snowflake | 0.002934898612593383 |
| Amazon HBase | 0.002934898612593383 |
| BigQuery | 0.0026680896478121665 |
| Percona Server | 0.00240128068303095 |
| Percona XtraBackup | 0.0013340448239060833 |
| Percona XtraDB Cluster | 0.0013340448239060833 |
| Firebird | 0.0010672358591248667 |


## Porcentaje de uso de QA / Testing. Las QA / Testing no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.
| QA / Testing | Porcentaje |
|---|---:|
| Postman | 0.23665955176093917 |
| JUnit | 0.09471718249733191 |
| Jest | 0.09204909284951975 |
| Cypress | 0.05256136606189968 |
| Selenium | 0.05256136606189968 |
| SoapUI | 0.03655282817502668 |
| Visual Studio Coded UI | 0.03175026680896478 |
| PHPUnit | 0.0288153681963714 |
| Cucumber | 0.02534685165421558 |
| Xunit | 0.021344717182497332 |
| Mocha | 0.017075773745997867 |
| Appium | 0.015474919957310566 |
| NUnit | 0.014674493062966915 |
| Puppeteer | 0.010672358591248666 |
| Karma | 0.010672358591248666 |
| Playwright | 0.009338313767342583 |
| TFS | 0.005602988260405549 |
| RSpec | 0.005336179295624333 |
| OpenQA | 0.00400213447171825 |
| Katalon | 0.0034685165421558164 |
| Vitest | 0.0032017075773745998 |
| pytest | 0.0026680896478121665 |
| Test Complete | 0.0026680896478121665 |
| Pytest | 0.0018676627534685165 |
| playwright | 0.0018676627534685165 |
| Lippia | 0.0016008537886872999 |
| HP UFT | 0.0013340448239060833 |
| Jmeter | 0.0013340448239060833 |
| Playwright  | 0.0013340448239060833 |
| TestNG | 0.0010672358591248667 |


## Uso de Copilot, Chat GPT u otra herramienta de IA.
| ¿Qué tanto estás usando Copilot, ChatGPT u otras herramientas de IA para tu trabajo? | Porcentaje |
|---|---:|
| 0 | 0.03975453575240128 |
| 1 | 0.06590181430096051 |
| 2 | 0.10885805763073639 |
| 3 | 0.2097118463180363 |
| 4 | 0.23479188900747064 |
| 5 | 0.3409818569903949 |


## Tipos de Contratos
| Tipos de Contrato | Porcentaje |
|---|---:|
| Staff (planta permanente) | 0.732657417289221 |
| Contractor | 0.1542155816435432 |
| Tercerizado (trabajo a través de consultora o agencia) | 0.0768409818569904 |
| Freelance | 0.030683030949839915 |
| Participación societaria en una cooperativa | 0.005602988260405549 |


## ¿Qué porcentaje tiene su sueldo dolarizado?
| Sueldo dolarizado | Porcentaje |
|---|---:|
| nan | 0.6611526147278548 |
| Cobro todo el salario en dólares | 0.14087513340448238 |
| Cobro parte del salario en dólares | 0.13180362860192102 |
| Mi sueldo está dolarizado (pero cobro en moneda local) | 0.06616862326574173 |


## Porcentajes de personas según recepción de bono
| Recepción de bono | Porcentaje |
|---|---:|
| No | 0.5824439701173959 |
| Un sueldo | 0.1411419423692636 |
| Menos de un sueldo | 0.12620064034151549 |
| De uno a tres sueldos | 0.12593383137673425 |
| 3+ sueldos | 0.024279615795090716 |


## Porcentajes de benficios recibidos. Los beneficios no son excluyentes, por lo que los valores indican qué porcentajes de participantes cuentan con los mismos. 
| Beneficio | Porcentaje |
|---|---:|
| Abono de servicios esenciales | 0.4743863393810032 |
| Horarios flexibles | 0.47011739594450375 |
| Capacitaciones | 0.4279615795090715 |
| Actividades de bienestar físico y mental | 0.3425827107790822 |
| Vacaciones extendidas | 0.3348452508004269 |
| Clases de idiomas | 0.3030949839914621 |
| Descuentos varios | 0.17529348986125934 |
| Licencias extendidas | 0.14967982924226253 |
| Naranja X | 0.10298826040554962 |
| Crédito en billeteras virtuales (Mercado Pago | 0.10298826040554962 |
| Ualá) | 0.10298826040554962 |
| Guardería para hijes | 0.09284951974386339 |
| Estacionamiento | 0.08351120597652081 |
| Lactario | 0.05549626467449306 |
| Stock options / RSUs | 0.053628601921024546 |


## Porcentaje de aumento salarial. 
| Porcentaje de aumento salarial | Porcentaje |
|---|---:|
| 0 | 0.2681430096051227 |
| 1-5 | 0.12886872998932764 |
| 6-10 | 0.2435965848452508 |
| 11-20 | 0.27321237993596587 |
| 21-100 | 0.08511205976520811 |


## Cantidad de personas que trabajan en la organización. Porcentajes refieren al porcentaje de personas que dicen trabajar en una organización con esa cantidad de personas. 
| Cantidad de personas en tu organización | Porcentaje |
|---|---:|
| De 11  a 50  personas | 0.16702241195304163 |
| De 201 a 500 personas | 0.13927427961579508 |
| De 51 a 100 personas | 0.13127001067235858 |
| De 101 a 200 personas | 0.11979722518676628 |
| Más de 10000 personas | 0.11099252934898612 |
| De 501 a 1000 personas | 0.08377801494130203 |
| De 1001 a 2000 personas | 0.07870864461045891 |
| De 2001a 5000 personas | 0.06216648879402348 |
| De 2 a 10 personas | 0.052027748132337244 |
| De 5001 a 10000 personas | 0.04295624332977588 |
| 1 (solamente yo) | 0.01200640341515475 |


## Modalidad de trabajo. 
| Modalidad de Trabajo | Porcentaje |
|---|---:|
| 100% remoto | 0.4949306296691569 |
| Híbrido (presencial y remoto) | 0.42876200640341516 |
| 100% presencial | 0.07630736392742796 |


## ¿Cuántas personas están buscando un cambio laboral? 
| Búsqueda de trabajo | Porcentaje |
|---|---:|
| No, pero escucho ofertas. | 0.6582177161152615 |
| Sí, estoy buscando activamente. | 0.2033084311632871 |
| No, estoy muy conforme. | 0.13847385272145143 |


## Evolución histórica de la mediana salarial
| Fecha publicación encuesta| Pesos ARS | ARS constantes (IPC) | USD oficial | USD blue | USD MEP |
|---|---:|---:|---:|---:|---:|
| 2016-08-01 | 20241 | 1919368 | 1359 | 1349 | 0 |
| 2017-02-01 | 24096 | 2099880 | 1525 | 1506 | 0 |
| 2017-09-01 | 32048 | 2454165 | 1857 | 1780 | 0 |
| 2018-03-01 | 35000 | 2401634 | 1732 | 1750 | 0 |
| 2018-09-04 | 42169 | 2461346 | 1142 | 1140 | 0 |
| 2019-02-15 | 50000 | 2364216 | 1296 | 1316 | 0 |
| 2019-08-15 | 61000 | 2357359 | 1113 | 1109 | 0 |
| 2020-02-02 | 73000 | 2244737 | 1205 | 986 | 0 |
| 2020-08-15 | 95300 | 2579167 | 1303 | 750 | 761 |
| 2021-02-15 | 110000 | 2484050 | 1238 | 759 | 745 |
| 2021-08-23 | 160000 | 2799277 | 1642 | 907 | 944 |
| 2022-02-21 | 188400 | 2713739 | 1759 | 910 | 943 |
| 2023-01-07 | 345000 | 2649835 | 1925 | 986 | 1046 |
| 2023-07-11 | 500000 | 2700328 | 1901 | 1014 | 1023 |
| 2024-06-24 | 1700000 | 2439429 | 1871 | 1295 | 1306 |
| 2025-02-04 | 2289156 | 2592781 | 2176 | 1916 | 1927 |
| 2025-08-08 | 2877951 | 2877951 | 2171 | 2205 | 2148 |
