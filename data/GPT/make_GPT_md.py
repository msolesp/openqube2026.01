import pickle

with open(
    "/Users/mariasolespain/Downloads/openqube2025.02/data/GPT/charts.pkl", "rb"
) as f:
    charts = pickle.load(f)

with open(
    "/Users/mariasolespain/Downloads/openqube2025.02/data/GPT/historic_charts.pkl", "rb"
) as f:
    historic_charts = pickle.load(f)

salarios_no_dolarizados = next(
    d for d in charts["sueldo_dolarizado_salary_median"]["data"] if d["name"] == "False"
)
salarios_dolarizados = next(
    d for d in charts["sueldo_dolarizado_salary_median"]["data"] if d["name"] == "True"
)

salarios_hombre_cis = next(
    d for d in charts["gender_gap"]["data"] if d["name"] == "Hombre Cis"
)

salarios_mujer_cis = next(
    d for d in charts["gender_gap"]["data"] if d["name"] == "Mujer Cis"
)

# Plantilla de texto en formato Markdown con f-strings
md_template = f"""# 📊 Encuesta de Sueldos IT 2025.02 – Resumen Ejecutivo

Este documento resume los principales datos globales y describe la ubicación de la información detallada en los archivos CSV.

---
## Datos Generales

- **Total de encuestados:** {charts['total_surveyed']}
- **Total de casos analizados:** {charts['total_analyzed_surveyed']}
- **Período de relevamiento:** 1 de junio 2024 – 03 de agosto 2025
- **Fuente:** [openqube.io – Encuesta de Sueldos 2025.02](https://sueldos.openqube.io/encuesta-sueldos-2025.02/)

---
## Indicadores Salariales 

| Indicador | Valor |
|-----------|-------|
| Mediana salarial general (ARS) | {int(round(historic_charts['historic_salary_medians']["data"][-1]['Pesos Argentinos'])):,} |
| Mediana salarial general (USD Oficial) | {int(round(historic_charts['historic_salary_medians']["data"][-1]['Dólares Estadounidenses'])):,} |
| Mediana salarial general (USD Blue) | {int(round(historic_charts['historic_salary_medians']["data"][-1]['Dólares Estadounidenses Blue'])):,} |
| Mediana salarial general (USD MEP) | {int(round(historic_charts['historic_salary_medians']["data"][-1]['Dólares Estadounidenses MEP'])):,} |


| Mediana salarial para salarios dolarizados Junior | {int(round(salarios_dolarizados['Junior'])):,} |
| Mediana salarial para salarios dolarizados Semi-Senior | {int(round(salarios_dolarizados['Semi-Senior'])):,} |
| Mediana salarial para salarios dolarizados Senior | {int(round(salarios_dolarizados['Senior'])):,} |

| Mediana salarial para salarios no dolarizados Junior | {int(round(salarios_no_dolarizados['Junior'])):,} |
| Mediana salarial para salarios no dolarizados Semi-Senior | {int(round(salarios_no_dolarizados['Semi-Senior'])):,} |
| Mediana salarial para salarios no dolarizados Senior | {int(round(salarios_no_dolarizados['Senior'])):,} |

Las medianas salariales para puestos Semi-Senior y Senior pueden variar hasta un {charts["dif_dolarizado_max"]}% según si el sueldo se encuentra (al menos en una parte) dolarizado o no. 
En cambio, para roles Junior, se observa una diferencia de {charts["dif_dolarizado_min"]}%.

---
## Educación

- Total de personas que respondieron sección de educación: {charts['ans_educ']}
- Porcentaje respecto al total de encuestados que respondieron sección de educación: {charts['ans_educ_percent']}%

---
## Brecha Salarial por Género

| Mediana salarial para hombres cis Junior | {int(round(salarios_hombre_cis['Junior'])):,} |
| Mediana salarial para hombres cis Semi-Senior | {int(round(salarios_hombre_cis['Semi-Senior'])):,} |
| Mediana salarial para hombres cis Senior | {int(round(salarios_hombre_cis['Senior'])):,} |

| Mediana salarial para mujeres cis Junior | {int(round(salarios_mujer_cis['Junior'])):,} |
| Mediana salarial para mujeres cis Semi-Senior | {int(round(salarios_mujer_cis['Semi-Senior'])):,} |
| Mediana salarial para mujeres cis Senior | {int(round(salarios_mujer_cis['Senior'])):,} |

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
"""

# Guardar el archivo .md
with open("resumen_encuesta.md", "w", encoding="utf-8") as f:
    f.write(md_template)

# Escribimos sobre ese archivo otras tablas simples

## PERFIL PARTICIPANTES

regions = charts["regions_percent"]["data"]
rows = [
    "| Provincia | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in regions],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Distribución por provincia\n")
    f.write("\n".join(rows) + "\n")


rols = charts["roles_percent"]["data"]
rows = [
    "| Rol | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in rols],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Distribución de Roles\n")
    f.write("\n".join(rows) + "\n")


yoe = charts["experience_years_percent"]["data"]
rows = [
    "| Experiencia en años | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in yoe],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Experiencia en años\n")
    f.write("\n".join(rows) + "\n")


yic = charts["experience_years_in_company"]["data"]
rows = [
    "| Experiencia en la compañía en años | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in yic],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Experiencia en compañía (en años)\n")
    f.write("\n".join(rows) + "\n")


yip = charts["experience_years_in_position"]["data"]
rows = [
    "| Experiencia en la posición actual en años | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in yip],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Experiencia en la posición actual (en años)\n")
    f.write("\n".join(rows) + "\n")


careeres = charts["careeres_percent"]["data"]
rows = [
    "| Carreras | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in careeres],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Carreras estudiadas por los encuestados\n")
    f.write("\n".join(rows) + "\n")

universities = charts["universities_percent"]["data"]
rows = [
    "| Universidades | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in universities],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Universidades donde estudian o estudiaron los encuestados\n")
    f.write("\n".join(rows) + "\n")

genders = charts["demographics_gender_percent_all"]["data"]
rows = [
    "| Género | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']*100:.2f}% |" for r in genders],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Género de la población encuestada (porcentaje)\n")
    f.write("\n".join(rows) + "\n")


genders = charts["demographics_gender_absolute_all"]["data"]
rows = [
    "| Género | Cantidad |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in genders],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Género de la población encuestada (cantidad)\n")
    f.write("\n".join(rows) + "\n")


platforms = charts["plataformas"]["data"]
rows = [
    "| Plataformas | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in platforms],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentaje de uso de plataformas. Las plataformas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.\n"
    )
    f.write("\n".join(rows) + "\n")

languages = charts["lenguajes_de_programacion"]["data"]
rows = [
    "| Lenguajes de Programación | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in languages],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentaje de uso de lenguajes de programación. Los lenguajes de programación no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.\n"
    )
    f.write("\n".join(rows) + "\n")

frameworks = charts["frameworksherramientas_y_librerias"]["data"]
rows = [
    "| Frameworks, Herramientas y Librerías | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in frameworks],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentaje de uso de Frameworks, Herramientas y Librerías. Los Frameworks, Herramientas y Librerías no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.\n"
    )
    f.write("\n".join(rows) + "\n")


data_bases = charts["bases_de_datos"]["data"]
rows = [
    "| Bases de Datos | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in data_bases],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentaje de uso de Bases de Datos. Las Bases de Datos no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.\n"
    )
    f.write("\n".join(rows) + "\n")

qa_testing = charts["qa_testing"]["data"]
rows = [
    "| QA / Testing | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in qa_testing],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentaje de uso de QA / Testing. Las QA / Testing no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.\n"
    )
    f.write("\n".join(rows) + "\n")

ia_use = charts["herramientas_ia"]["data"]
rows = [
    "| ¿Qué tanto estás usando Copilot, ChatGPT u otras herramientas de IA para tu trabajo? | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in ia_use],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Uso de Copilot, Chat GPT u otra herramienta de IA.\n")
    f.write("\n".join(rows) + "\n")

contratos = charts["tipo_de_contrato_percent"]["data"]
rows = [
    "| Tipos de Contrato | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in contratos],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Tipos de Contratos\n")
    f.write("\n".join(rows) + "\n")

dolar = charts["sueldo_dolarizado_percent"]["data"]
rows = [
    "| Sueldo dolarizado | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in dolar],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## ¿Qué porcentaje tiene su sueldo dolarizado?\n")
    f.write("\n".join(rows) + "\n")

bono = charts["recibis_algun_tipo_de_bono"]["data"]
rows = [
    "| Recepción de bono | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in bono],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Porcentajes de personas según recepción de bono\n")
    f.write("\n".join(rows) + "\n")


beneficios = charts["beneficios_extra"]["data"]
rows = [
    "| Beneficio | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in beneficios],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Porcentajes de benficios recibidos. Los beneficios no son excluyentes, por lo que los valores indican qué porcentajes de participantes cuentan con los mismos. \n"
    )
    f.write("\n".join(rows) + "\n")


ajuste = charts["de_que_fue_el_ajuste"]["data"]
rows = [
    "| Porcentaje de aumento salarial | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in ajuste],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Porcentaje de aumento salarial. \n")
    f.write("\n".join(rows) + "\n")


cantidad_personas_organizacion = charts["cantidad_de_personas_en_tu_organizacion"][
    "data"
]
rows = [
    "| Cantidad de personas en tu organización | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in cantidad_personas_organizacion],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write(
        "\n\n## Cantidad de personas que trabajan en la organización. Porcentajes refieren al porcentaje de personas que dicen trabajar en una organización con esa cantidad de personas. \n"
    )
    f.write("\n".join(rows) + "\n")


modalidades_trabajo = charts["modalidad_trabajo"]["data"]
rows = [
    "| Modalidad de Trabajo | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in modalidades_trabajo],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Modalidad de trabajo. \n")
    f.write("\n".join(rows) + "\n")


buscan_trabajo = charts["busqueda_trabajo"]["data"]
rows = [
    "| Búsqueda de trabajo | Porcentaje |",
    "|---|---:|",
    *[f"| {r['name']} | {r['value']} |" for r in buscan_trabajo],
]
with open("resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## ¿Cuántas personas están buscando un cambio laboral? \n")
    f.write("\n".join(rows) + "\n")


hist_salaries = historic_charts["historic_salary_medians"]["data"]

rows = [
    "| Fecha publicación encuesta| Pesos ARS | ARS constantes (IPC) | USD oficial | USD blue | USD MEP |",
    "|---|---:|---:|---:|---:|---:|",
    *[
        f"| {r['publish_date']} | "
        f"{r['Pesos Argentinos']:.0f} | "
        f"{r['Pesos Argentinos Constantes Ajustados Por Inflación']:.0f} | "
        f"{r['Dólares Estadounidenses']:.0f} | "
        f"{r['Dólares Estadounidenses Blue']:.0f} | "
        f"{r['Dólares Estadounidenses MEP']:.0f} |"
        for r in hist_salaries
    ],
]

with open("data/GPT/resumen_encuesta.md", "a", encoding="utf-8") as f:
    f.write("\n\n## Evolución histórica de la mediana salarial\n")
    f.write("\n".join(rows) + "\n")
