import sys
from flask import abort
import pymysql as mysql
from config import OPENAPI_AUTOGEN_DIR, DB_HOST, DB_USER, DB_PASSWD, DB_NAME

sys.path.append(OPENAPI_AUTOGEN_DIR)
from openapi_server import models


def get_covids_per_day():
    db = mysql.connect(host=DB_HOST,
                   user=DB_USER,
                   passwd=DB_PASSWD,
                   db=DB_NAME)

    cs = db.cursor()
    cs.execute("SELECT province, date, new_case, total_case, new_death, total_death FROM covid_per_day")
    result = [models.CovidAllPerDay(province, date, new_case, total_case, new_death, total_death) for province, date, new_case,total_case,new_death,total_death in cs.fetchall()]
    cs.close()
    return result

def get_covids_all():
    db = mysql.connect(host=DB_HOST,
                   user=DB_USER,
                   passwd=DB_PASSWD,
                   db=DB_NAME)

    cs = db.cursor()
    cs.execute("SELECT date, new_case, total_case, new_death, total_death, new_recovered, total_recovered FROM covid_all")
    result = [models.CovidAll(date, new_case, total_case, new_death, total_death, new_recovered, total_recovered) for  date, new_case,total_case,new_death,total_death, new_recovered, total_recovered in cs.fetchall()]
    cs.close()
    return result

def get_covids_vaccine_province():
    db = mysql.connect(host=DB_HOST,
                   user=DB_USER,
                   passwd=DB_PASSWD,
                   db=DB_NAME)

    cs = db.cursor()
    cs.execute("SELECT province, vaccine_count FROM covid_vaccinated_province")
    result = [models.CovidVaccineProvinceCount(province, vaccine_count) for  province, vaccine_count in cs.fetchall()]
    cs.close()
    return result

def get_covids_vaccine_name():
    db = mysql.connect(host=DB_HOST,
                   user=DB_USER,
                   passwd=DB_PASSWD,
                   db=DB_NAME)
    cs = db.cursor()
    cs.execute("SELECT vaccine_name, vaccine_count FROM covid_vaccine_count")
    result = [models.CovidVaccineNameCount(vaccine_name, vaccine_count) for  vaccine_name, vaccine_count in cs.fetchall()]
    cs.close()
    return result
    
def get_covids_danger():
    db = mysql.connect(host=DB_HOST,
                   user=DB_USER,
                   passwd=DB_PASSWD,
                   db=DB_NAME)

    cs = db.cursor()
    cs.execute("SELECT province, danger FROM covid_dangerous_province")
    result = [models.CovidDanger(province, danger) for  province, danger in cs.fetchall()]
    cs.close()
    return result
