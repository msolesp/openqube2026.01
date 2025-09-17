import pandas as pd

path_no_tidy = "/Users/mariasolespain/Downloads/openqube2025.02/data/GPT/csvs_no_tidy/"
path_tidy = "/Users/mariasolespain/Downloads/openqube2025.02/data/GPT/csv_para_GPT/"

#########
df = pd.read_csv(f"{path_no_tidy}education_stacked.csv")
long = df.melt(
    id_vars=["name"],
    var_name="estado",  # Completo / En curso / Incompleto
    value_name="porcentaje",  # valores 0–1
)

long["porcentaje"] = (long["porcentaje"] * 100).round(2)

long.to_csv(f"{path_tidy}education_stacked_long.csv", index=False, encoding="utf-8-sig")
long.head()

#########
df = pd.read_csv(f"{path_no_tidy}careeres_stacked_percent.csv")

long = df.melt(
    id_vars=["name"],
    var_name="estado",  # Completo / En curso / Incompleto
    value_name="porcentaje",  # valores 0–1
)

long["porcentaje"] = (long["porcentaje"] * 100).round(2)

long.to_csv(
    f"{path_tidy}careeres_stacked_percent.csv", index=False, encoding="utf-8-sig"
)
long.head()

#########
df = pd.read_csv(f"{path_no_tidy}universities_stacked_percent.csv")

long = df.melt(
    id_vars=["name"],
    var_name="estado",  # Completo / En curso / Incompleto
    value_name="porcentaje",  # valores 0–1
)

long["porcentaje"] = (long["porcentaje"] * 100).round(2)

long.to_csv(
    f"{path_tidy}universities_stacked_percent.csv", index=False, encoding="utf-8-sig"
)
long.head()

#########
