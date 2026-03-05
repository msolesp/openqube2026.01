"""
make_GPT_csvs_and_instructions.py

Genera automaticamente para cada edicion de la encuesta:
  1. CSVs individuales por cada tabla (con porcentajes redondeados a entero)
  2. instrucciones.txt con los numeros actualizados de la edicion

!! Ajustar PICKLE_DIR, OUTPUT_CSV_DIR, OUTPUT_INSTRUCTIONS y EDITION_* antes de correr.
"""

import pickle
import csv
import os

# =====================================================================
# Ajustar por edicion
# =====================================================================
EDITION_ID = "2026.01"
EDITION_URL = f"https://sueldos.openqube.io/encuesta-sueldos-{EDITION_ID}/"
EDITION_PERIODO = "11 de diciembre 2024 al 28 de febrero 2026"

PICKLE_DIR = "/Users/mariasolespain/Downloads/openqube2026.01/data/GPT"
OUTPUT_CSV_DIR = os.path.join(PICKLE_DIR, "data_for_GPT")
OUTPUT_INSTRUCTIONS = os.path.join(PICKLE_DIR, f"instrucciones_{EDITION_ID}.txt")
# =====================================================================
# LOAD DATA
# =====================================================================
os.makedirs(OUTPUT_CSV_DIR, exist_ok=True)

with open(os.path.join(PICKLE_DIR, "charts.pkl"), "rb") as f:
    charts = pickle.load(f)

with open(os.path.join(PICKLE_DIR, "historic_charts.pkl"), "rb") as f:
    historic_charts = pickle.load(f)

# =====================================================================
# HELPERS
# =====================================================================


def write_simple_csv(filename, header_name, header_value, data, pct_multiply=False):
    path = os.path.join(OUTPUT_CSV_DIR, filename)
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([header_name, header_value])
        for r in data:
            val = r["value"]
            if pct_multiply and isinstance(val, (int, float)):
                val = round(val * 100)
            writer.writerow([r["name"], val])
    print(f"  -> {filename} ({len(data)} filas)")


def write_custom_csv(filename, headers, rows):
    path = os.path.join(OUTPUT_CSV_DIR, filename)
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for row in rows:
            writer.writerow(row)
    print(f"  -> {filename} ({len(rows)} filas)")


# =====================================================================
# 1. GENERAR CSVs (porcentajes redondeados a entero)
# =====================================================================
print("Generando CSVs...")

# --- Perfil de participantes ---
write_simple_csv(
    "provincias.csv",
    "Provincia",
    "Porcentaje",
    charts["regions_percent"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "roles.csv", "Rol", "Porcentaje", charts["roles_percent"]["data"], pct_multiply=True
)
write_simple_csv(
    "experiencia_anios.csv",
    "Experiencia en anios",
    "Porcentaje",
    charts["experience_years_percent"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "experiencia_en_empresa.csv",
    "Experiencia en empresa (anios)",
    "Porcentaje",
    charts["experience_years_in_company"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "experiencia_en_posicion.csv",
    "Experiencia en posicion (anios)",
    "Porcentaje",
    charts["experience_years_in_position"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "carreras_percent.csv",
    "Carrera",
    "Porcentaje",
    charts["careeres_percent"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "universidades_percent.csv",
    "Universidad",
    "Porcentaje",
    charts["universities_percent"]["data"],
    pct_multiply=True,
)

# --- Genero ---
write_simple_csv(
    "genero_porcentaje.csv",
    "Genero",
    "Porcentaje",
    charts["demographics_gender_percent_all"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "genero_cantidad.csv",
    "Genero",
    "Cantidad",
    charts["demographics_gender_absolute_all"]["data"],
)


# --- Educacion desglosada por estado (reemplaza tidy_for_csv.py) ---
def write_stacked_csv(filename, chart_key):
    """Genera CSV long (name, estado, porcentaje) desde datos stacked del pickle."""
    data = charts[chart_key]["data"]
    path = os.path.join(OUTPUT_CSV_DIR, filename)
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["name", "estado", "porcentaje"])
        for r in data:
            for estado in ["Completo", "En curso", "Incompleto"]:
                val = r.get(estado, 0)
                writer.writerow([r["name"], estado, round(val * 100)])
    print(f"  -> {filename} ({len(data) * 3} filas)")


write_stacked_csv("education_stacked_long.csv", "education_stacked")
write_stacked_csv("careeres_stacked_percent.csv", "careeres_stacked_percent")
write_stacked_csv("universities_stacked_percent.csv", "universities_stacked_percent")

# --- Tecnologias (porcentaje de uso, no salarios) ---
write_simple_csv(
    "uso_plataformas.csv",
    "Plataforma",
    "Porcentaje",
    charts["plataformas"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "uso_lenguajes.csv",
    "Lenguaje de Programacion",
    "Porcentaje",
    charts["lenguajes_de_programacion"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "uso_frameworks.csv",
    "Framework / Herramienta / Libreria",
    "Porcentaje",
    charts["frameworksherramientas_y_librerias"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "uso_bases_de_datos.csv",
    "Base de Datos",
    "Porcentaje",
    charts["bases_de_datos"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "uso_qa_testing.csv",
    "Herramienta QA / Testing",
    "Porcentaje",
    charts["qa_testing"]["data"],
    pct_multiply=True,
)

# --- Trabajo y compensacion ---
write_simple_csv(
    "uso_ia.csv",
    "Nivel de uso IA (0-5)",
    "Porcentaje",
    charts["herramientas_ia"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "tipos_contrato.csv",
    "Tipo de Contrato",
    "Porcentaje",
    charts["tipo_de_contrato_percent"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "sueldo_dolarizado_percent.csv",
    "Tipo de dolarizacion",
    "Porcentaje",
    charts["sueldo_dolarizado_percent"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "recepcion_bono.csv",
    "Recepcion de bono",
    "Porcentaje",
    charts["recibis_algun_tipo_de_bono"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "beneficios.csv",
    "Beneficio",
    "Porcentaje",
    charts["beneficios_extra"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "aumento_salarial.csv",
    "Rango de aumento (%)",
    "Porcentaje",
    charts["de_que_fue_el_ajuste"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "tamanio_organizacion.csv",
    "Tamanio de organizacion",
    "Porcentaje",
    charts["cantidad_de_personas_en_tu_organizacion"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "modalidad_trabajo.csv",
    "Modalidad",
    "Porcentaje",
    charts["modalidad_trabajo"]["data"],
    pct_multiply=True,
)
write_simple_csv(
    "busqueda_trabajo.csv",
    "Situacion",
    "Porcentaje",
    charts["busqueda_trabajo"]["data"],
    pct_multiply=True,
)

# --- Evolucion historica ---
hist_salaries = historic_charts["historic_salary_medians"]["data"]
write_custom_csv(
    "evolucion_historica_salarios.csv",
    [
        "Fecha publicacion",
        "Pesos ARS",
        "ARS constantes (IPC)",
        "USD oficial",
        "USD blue",
        "USD MEP",
    ],
    [
        [
            r["publish_date"],
            round(r["Pesos Argentinos"]),
            round(r["Pesos Argentinos Constantes Ajustados Por Inflación"]),
            round(r["Dólares Estadounidenses"]),
            round(r["Dólares Estadounidenses Blue"]),
            round(r["Dólares Estadounidenses MEP"]),
        ]
        for r in hist_salaries
    ],
)

# --- Indicadores salariales ---
sal_nd = next(
    d for d in charts["sueldo_dolarizado_salary_median"]["data"] if d["name"] == "False"
)
sal_d = next(
    d for d in charts["sueldo_dolarizado_salary_median"]["data"] if d["name"] == "True"
)
sal_hc = next(d for d in charts["gender_gap"]["data"] if d["name"] == "Hombre Cis")
sal_mc = next(d for d in charts["gender_gap"]["data"] if d["name"] == "Mujer Cis")
ultimo = hist_salaries[-1]

write_custom_csv(
    "indicadores_generales.csv",
    ["Indicador", "Valor"],
    [
        ["Mediana salarial general (ARS)", int(round(ultimo["Pesos Argentinos"]))],
        [
            "Mediana salarial general (USD Oficial)",
            int(round(ultimo["Dólares Estadounidenses"])),
        ],
        [
            "Mediana salarial general (USD Blue)",
            int(round(ultimo["Dólares Estadounidenses Blue"])),
        ],
        [
            "Mediana salarial general (USD MEP)",
            int(round(ultimo["Dólares Estadounidenses MEP"])),
        ],
        ["Mediana dolarizado Junior", int(round(sal_d["Junior"]))],
        ["Mediana dolarizado Semi-Senior", int(round(sal_d["Semi-Senior"]))],
        ["Mediana dolarizado Senior", int(round(sal_d["Senior"]))],
        ["Mediana no dolarizado Junior", int(round(sal_nd["Junior"]))],
        ["Mediana no dolarizado Semi-Senior", int(round(sal_nd["Semi-Senior"]))],
        ["Mediana no dolarizado Senior", int(round(sal_nd["Senior"]))],
    ],
)

write_custom_csv(
    "brecha_genero.csv",
    ["Genero", "Junior", "Semi-Senior", "Senior"],
    [
        [
            "Hombre Cis",
            int(round(sal_hc["Junior"])),
            int(round(sal_hc["Semi-Senior"])),
            int(round(sal_hc["Senior"])),
        ],
        [
            "Mujer Cis",
            int(round(sal_mc["Junior"])),
            int(round(sal_mc["Semi-Senior"])),
            int(round(sal_mc["Senior"])),
        ],
    ],
)

# =====================================================================
# 2. GENERAR INSTRUCCIONES
# =====================================================================
print("\nGenerando instrucciones...")

total_encuestados = charts["total_surveyed"]
total_analizados = charts["total_analyzed_surveyed"]
dif_max = charts["dif_dolarizado_max"]
dif_min = charts["dif_dolarizado_min"]
ans_educ = charts["ans_educ"]
ans_educ_pct = charts["ans_educ_percent"]

instrucciones = f"""# Instrucciones - Asistente Encuesta de Sueldos IT {EDITION_ID}

## 1. Saludo (solo primera respuesta)

Responde exactamente:
"Hola! Soy el asistente de la Encuesta de Sueldos IT {EDITION_ID} de Sysarmy. Respondo consultas sobre salarios por rol, seniority y dolarizacion, y sobre la educacion y tecnologias reportadas. Podes encontrar el informe completo en: {EDITION_URL}"
No saludar de nuevo en la misma conversacion.

## 2. Principios generales

- NUNCA respondas con un numero de memoria. Ante CUALQUIER pregunta que requiera un dato numerico (salario, porcentaje, cantidad, distribucion), SIEMPRE llama a la Action correspondiente ANTES de responder. Si no sabes cual usar, consulta getSeccionesDisponibles.
- EXCEPCION: los siguientes datos ya estan en estas instrucciones y NO requieren llamar a la API. Responde directamente:
  * Total de encuestados: {total_encuestados}
  * Total de casos analizados (despues de filtrar outliers): {total_analizados}
  * Periodo de relevamiento: {EDITION_PERIODO}
  * La diferencia salarial entre sueldos dolarizados y no dolarizados puede llegar al {dif_max}% para puestos Semi-Senior y Senior, y al {dif_min}% para Junior
  * Total de personas que respondieron la seccion de educacion: {ans_educ} ({ans_educ_pct}% del total de encuestados)
- Para TODA consulta sobre datos de la encuesta (salarios, porcentajes, distribuciones, beneficios, etc.) SIEMPRE usa la Action/API correspondiente. NUNCA respondas con datos de memoria.
- Si la API devuelve error o sin_datos, responde exactamente: "No se puede responder esa pregunta con la informacion relevada en la encuesta."
- No supongas, no estimes, NUNCA busques datos externos.
- Nunca menciones "API", nombres de archivos, rutas, columnas ni terminos tecnicos. Referi los datos como "segun la edicion {EDITION_ID} de la encuesta".
- Si preguntan la fuente -> "Es informacion de la Encuesta de Sueldos IT {EDITION_ID} de Sysarmy."
- Mediana vs promedio: la encuesta reporta MEDIANAS (p50), no promedios. Si preguntan por "media", "promedio" o "cuanto se gana", aclara que se trabaja con medianas y reporta la mediana. Nunca inventar un promedio. Excepcion: el top 10% tiene mediana y promedio; ahi reporta ambos.

## 3. Formato

- NUNCA tablas (ni markdown, ni ASCII). Todo en prosa, sin titulos ni encabezados.
- ARS sin decimales con separador de miles. Porcentajes sin decimales.
- Primera persona ("te cuento", "encuentro"), voz activa, frases cortas.
- Si el usuario pide un grafico, visualizacion o chart, podes generarlo usando los datos obtenidos de la API. Siempre llama primero a la Action para obtener los datos exactos y luego genera el grafico con esos datos.

## 4. Que Action usar para cada consulta

Salarios por rol -> getSalarioRol (parametros: rol, seniority, dolarizacion)
Salarios por lenguaje/tecnologia -> getSalarioTecnologia (parametros: tecnologia, seniority, dolarizacion)
Salarios por plataforma -> getSalarioPlataforma (parametros: plataforma, seniority, dolarizacion)
Salarios por nivel de estudios -> getSalarioNivelEstudios (parametros: estudios, dolarizacion)
Salarios por carrera -> getSalarioCarrera (parametros: carrera, seniority)
Top 10% mejor pagos -> getTop10
Educacion (niveles, carreras, universidades) -> getEducacion (parametro: tipo)
Indicadores generales (mediana global ARS/USD, "cuanto se gana", "promedio general", "media salarial") -> getIndicadores
Brecha de genero -> getBrechaGenero
Evolucion historica -> getEvolucionHistorica
Cualquier otra distribucion (provincias, modalidad, beneficios, genero, experiencia, uso de tecnologias, contratos, bonos, etc.) -> getEncuestaSeccion (parametro: seccion). Si no sabes el nombre exacto, llama a getSeccionesDisponibles.
Listas de opciones validas -> getRolesDisponibles, getTecnologiasDisponibles, getPlataformasDisponibles

Java, Javascript, Python, TypeScript, C++, etc. son SIEMPRE tecnologias -> usar getSalarioTecnologia, nunca getSalarioRol.

Si la API devuelve "fallback_edicion_anterior" con datos, avisale al usuario: "Este valor proviene de la edicion anterior de la encuesta y fue ajustado por IPC."
Si devuelve "sin_datos": true -> "No se puede responder esa pregunta con la informacion relevada en la encuesta."

## 5. Convenciones

Datos generales de la encuesta: {total_encuestados} encuestados, {total_analizados} casos analizados, periodo de relevamiento del {EDITION_PERIODO}. Las medianas para Semi-Senior y Senior pueden variar hasta un {dif_max}% segun dolarizacion. Para Junior la diferencia es del {dif_min}%.

Junior = 0 a 2 anios (sin incluir 2). Semi-Senior = 2 (inclusive) a 5 (sin incluir 5). Senior = 5+ (inclusive).
Dolarizado incluye "Dolarizado pero cobra en ARS" + "Parcialmente dolarizado" + "100% dolarizado". No dolarizado = resto.
Salarios en ARS nominales. Solo citar USD si lo piden y para los USD generales.

## 6. Salarios por ROL

- Usa solo p50. La primera vez, explica en una oracion que es la mediana.
- Solo rol (sin seniority) -> llama a getSalarioRol sin seniority. Organiza la respuesta en 3 parrafos (Junior, Semi-Senior, Senior), cada uno con Dolarizado vs No dolarizado.
- Rol + seniority -> llama con seniority. Separa Dolarizado vs No dolarizado.
- Si Confianza = Baja -> "La mediana tiene baja confianza (intervalo amplio vs. mediana) y debe tomarse con cautela."
- Tras p50, ofrece: "Si queres, puedo hacerte un grafico de la distribucion salarial (tipo boxplot) para cada seniority, mostrando dolarizado y no dolarizado." Si acepta, llama a getSalarioRol para obtener todos los percentiles (p0, p25, p50, p75, p100) y genera un grafico boxplot con esos datos, explicando brevemente que significa cada parte del grafico (minimo, p25, mediana, p75, maximo).
- No combinar, no promediar, no convertir a USD salvo pedido explicito.
- Comparaciones: cada rol/seniority/dolarizacion por separado.

## 7. Salarios por TECNOLOGIA o PLATAFORMA

Mismas reglas que roles: p50, 3 parrafos si no indican seniority, aviso de confianza baja, no promediar, no USD.
Comparaciones X vs Y: ambas en mismo formato. Si una no tiene datos, informa y reporta la otra.

## 8. Educacion

Aclara siempre: no todos respondieron esta seccion ({ans_educ} personas, {ans_educ_pct}% del total). Porcentajes calculados sobre el total de la encuesta.

## 9. Metodologia

Si preguntan, responde con esta informacion: la mediana suele estar por debajo del promedio. Se ajustaron salarios historicos por IPC (INDEC). Outliers filtrados con Rango Intercuartilico (coef. 3.5) por separado para dolarizados y no dolarizados, excluyendo salarios menores a medio salario minimo. La confiabilidad se evalua verificando que el intervalo de confianza del 95% no supere el 50% de la mediana. Cotizacion USD: mediana intradiaria Bloomberg +-5 dias; MEP de Ambito Financiero.
"""

with open(OUTPUT_INSTRUCTIONS, "w", encoding="utf-8") as f:
    f.write(instrucciones)

print(f"  -> instrucciones.txt ({len(instrucciones)} chars)")
print(f"\nListo! {len(os.listdir(OUTPUT_CSV_DIR))} CSVs en {OUTPUT_CSV_DIR}")
print(f"Instrucciones en {OUTPUT_INSTRUCTIONS}")
